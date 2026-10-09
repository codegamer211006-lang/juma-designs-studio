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

## Frontend architecture
- Use TanStack file-based leaf routes for the studio's shareable pages and shared navigation/footer in the root layout; this preserves direct links and page-specific metadata.
- Keep commercial rules and editable portfolio/contact content in `src/data/studio.ts`; this separates content changes from presentation.
- Portfolio uses supplied images as labeled previews, not embedded screenshot-based pages; static project data and accessible Radix dialogs avoid requiring a backend.
- Inquiry submission prepares a copyable request on the client and never claims delivery; contact links remain unavailable until real details and sending are connected.
- Centralize visual roles, glass surfaces and reduced-motion animations in the global CSS design system; components consume semantic tokens.
