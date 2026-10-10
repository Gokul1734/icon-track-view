export type Depot = { id: string; name: string; code: string; x: number; y: number };
export type TruckRecord = { id: string; number: string; driver: string; mileage: number; fuel: number; location: string; destination?: string | undefined; startFuel?: number | undefined; tripDistance?: number | undefined; actualMileage?: number };
export type Trip = { id: string; truck: string; from: string; to: string; distance: number; used: number; mileage: number; time: string };
export const initialDepots: Depot[] = [
  { id: 'chennai', name: 'Chennai', code: 'CHN', x: 75, y: 57 },
  { id: 'bengaluru', name: 'Bengaluru', code: 'BLR', x: 32, y: 40 },
  { id: 'hosur', name: 'Hosur', code: 'HSR', x: 46, y: 55 },
  { id: 'coimbatore', name: 'Coimbatore', code: 'CBE', x: 27, y: 76 },
  { id: 'salem', name: 'Salem', code: 'SLM', x: 48, y: 75 },
];
export const pairKey = (a: string, b: string) => [a,b].sort().join(':');
export const initialDistances: Record<string, number> = {
  'bengaluru:chennai': 346, 'chennai:hosur': 306, 'chennai:coimbatore': 505, 'chennai:salem': 340,
  'bengaluru:hosur': 40, 'bengaluru:coimbatore': 365, 'bengaluru:salem': 203,
  'coimbatore:hosur': 325, 'hosur:salem': 165, 'coimbatore:salem': 165,
};
export const initialTrucks: TruckRecord[] = [
  { id: '1', number: 'TN 01 AB 1234', driver: 'R. Kumar', mileage: 5.5, fuel: 82, location: 'chennai' },
  { id: '2', number: 'TN 02 CD 5678', driver: 'S. Prakash', mileage: 6, fuel: 65, location: 'bengaluru', destination: 'chennai', startFuel: 65, tripDistance: 346 },
  { id: '3', number: 'TN 37 EF 9012', driver: 'M. Selvam', mileage: 5, fuel: 18, location: 'coimbatore' },
  { id: '4', number: 'KA 01 GH 3456', driver: 'A. Ravi', mileage: 6.2, fuel: 70, location: 'bengaluru' },
  { id: '5', number: 'TN 30 JK 7890', driver: 'V. Suresh', mileage: 5.8, fuel: 48, location: 'hosur', destination: 'salem', startFuel: 48, tripDistance: 165 },
  { id: '6', number: 'TN 01 LM 2345', driver: 'P. Mani', mileage: 5.4, fuel: 55, location: 'chennai' },
  { id: '7', number: 'TN 24 NP 6789', driver: 'K. Arun', mileage: 6, fuel: 62, location: 'hosur' },
  { id: '8', number: 'TN 54 QR 0123', driver: 'D. Raj', mileage: 5.6, fuel: 12, location: 'salem' },
];
export const rangeOf = (truck: TruckRecord) => Math.floor(truck.fuel * (truck.actualMileage ?? truck.mileage));
