# silverorange Frontend Developer Exercise

This exercise is designed to assess how you approach tasks representative of
the front-end developer role at silverorange. We are as interested in your
process as we are in the final results. **Please include descriptive Git commit
messages and comments where you think your code may be unclear.**

## 1 - Update Existing Page

With the provided static page, make the following changes to the existing
page at `index.html`. No mockups are provided, use your judgement and the base styles provided in `style.css`. This implementation should have [widely available baseline support](https://web-platform-dx.github.io/web-features/):

1. Move the main and aside content into a two-column layout at larger screen sizes. At a minimum, the aside content should be 300px wide and the main content should be 500px wide. The footer should always remain at the bottom of the viewport.
2. Move "Show more information" section into a modal. Use accent colors to style the trigger for this modal, which should have accessible name "Show more information".

**BONUS**: add light/dark mode (according to system or user agent-level preference)

## 2 - Build Out New Page

Using the provided `vite` base in the `/new-page` folder, implement
the page from the Figma file sent to you via email.

If you create a free Figma account, you’ll have access to export assets and
inspect details in the mockup.

For this exercise we are just interested in replicating the visual appearance
of the mockup—**no functionality is required**. Use appropriate React
components, HTML elements and CSS. For your implementation, divide the page
into logical React components. [Widely available baseline support](https://web-platform-dx.github.io/web-features/) is expected.

A basic responsive template is included in the project to get you started.

### Running and Testing

```sh
cd new-page/
pnpm install
pnpm dev
```

The page should hot reload as you make updates.

## Environment

For this exercise, Vite requires Node.js version 20.19+, 22.12+.
