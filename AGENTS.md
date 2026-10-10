<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep logistics trial data and pure fuel calculations in a browser-safe module, with session-only state in the trial screen; this supports UI testing without implying authenticated shared storage.
- Use the shared network map for illustrative depot positioning, not GPS tracking; entered distances are the source of truth for trip calculations.
