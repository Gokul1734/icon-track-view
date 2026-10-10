import { MapPin, Plus, Minus, Maximize2 } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import type { Depot, TruckRecord } from '@/lib/logistics';
export function NetworkMap({ depots, trucks, selected, onSelect }: { depots: Depot[]; trucks: TruckRecord[]; selected: string; onSelect: (id: string) => void }) {
  const [zoom, setZoom] = useState(1);
  return <div className="network-map">
    <div className="map-terrain"><svg viewBox="0 0 800 410" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <path className="map-land" d="M0 0H665L650 45 675 75 645 110 665 160 625 200 610 250 580 300 550 360 530 410H0Z"/>
      <g className="map-road"><path d="M0 65Q190 150 320 65T650 110M70 0Q190 160 190 410M360 0Q300 180 430 410M0 290Q230 230 420 310T570 410M0 180Q280 155 640 210M490 0Q470 180 560 340"/><path d="M0 110Q240 200 640 160M100 0Q370 250 270 410M0 350Q340 360 630 250"/></g>
      <g className="map-boundary"><path d="M0 155Q220 110 330 165T650 150M150 0Q250 110 320 210T340 410"/></g>
      <text x="65" y="85">KARNATAKA</text><text x="370" y="235">TAMIL NADU</text><text x="80" y="355">KERALA</text><text x="683" y="200" className="sea-label">BAY OF</text><text x="683" y="216" className="sea-label">BENGAL</text>
    </svg></div>
    <div className="map-network" style={{ transform: `scale(${zoom})` }}>
      <svg className="route-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">{trucks.filter(t=>t.destination).map(t=>{ const a=depots.find(d=>d.id===t.location); const b=depots.find(d=>d.id===t.destination); return a&&b ? <path key={t.id} className="active-route" d={`M ${a.x} ${a.y} Q ${(a.x+b.x)/2} ${(a.y+b.y)/2-12} ${b.x} ${b.y}`}/> : null; })}</svg>
      {depots.map(d=><Button key={d.id} variant="ghost" className={`map-pin ${selected===d.id?'selected':''}`} style={{left:`${d.x}%`,top:`${d.y}%`}} onClick={()=>onSelect(d.id)} aria-label={`Select ${d.name}`}><span className="pin-dot"><MapPin size={16}/></span><span className="pin-label">{d.name}<small>{trucks.filter(t=>t.location===d.id&&!t.destination).length} trucks</small></span></Button>)}
    </div>
    <div className="map-key"><span className="legend-dot"/> Location <span className="legend-line"/> In transit</div>
    <div className="map-controls"><Button variant="outline" size="icon" title="Zoom in" onClick={()=>setZoom(z=>Math.min(1.4,z+.1))}><Plus/></Button><Button variant="outline" size="icon" title="Zoom out" onClick={()=>setZoom(z=>Math.max(.8,z-.1))}><Minus/></Button><Button variant="outline" size="icon" title="Reset map" onClick={()=>setZoom(1)}><Maximize2/></Button></div>
    <span className="map-caption">Network view · illustrative map</span>
  </div>;
}
