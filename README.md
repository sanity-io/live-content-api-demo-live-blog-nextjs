# Live Blog: Sanity Live Content API Example with Next.js

This is a demo of using Sanity's [Live Content API][live-content-api] to power a live blog.

![CleanShot 2024-05-16 at 16 17 40](https://github.com/sanity-io/live-content-api-demo-live-blog-nextjs/assets/1131579/262fe005-70fd-43c2-8a9c-498788829f33)

The Live Content API makes it possible to automatically re-fetch content updates from the Sanity CDN.

In this example, we use a canary of the [`next-sanity`][next-sanity] toolkit to import a client that can generate a `<LiveSubscription />` component that you can add to any component to make it automatically fetch published content live. It works with React Server Components (no `"use client"` needed).

This demo relies on Next.js’ `searchParams`, which must be passed down from the route component.

- [Try the demo locally](#try-the-demo-locally)
- [Files of note](#files-of-note)
- [Credits](#credits)


## Try the demo locally

1. Clone this repo
2. Install its dependencies (`pnpm i`)
3. Run `pnpm dlx sanity@latest init --env` to create a Sanity project and add the configuration to an `.env` file
4. Run `pnpm dlx sanity dataset import demo.tar.gz production` to import some demo data
5. Run `pnpm dev` to start the dev server
6. If you open [http://localhost:3000/studio][localhostStudio] you will be asked to add it to your project’s CORS origin settings (`pnpm dlx sanity cors add http://localhost:3000 --credentials` will also do the trick)
7. And you should be good to go!

Note that this demo uses the experimental (`vX`) version of the Live Content API, and hence you will get some warnings in your console while you're running it.

## Files of note

The following files have interesting stuff relevant to this demo:

- `./sanity/lib/fetch.ts` configures the `sanityFetch` that returns the `<LiveSubscription />` component
- The following React Server Components have Live Content implemented
  - `./components/Feed.tsx`
  - `./components/Speakers.tsx`
  - `./components/Schedule.tsx`
- The content model/schema for the Studio is found in `./sanity/schemaTypes`
## Credits

This demo uses the following things:

- The example content is borrowed from [React Conf 2024][react-conf]
- [v0][v0] for initial UI generation
- [Tailwind.css][tailwind] for styling
- [Next.js][next] App Router with React Server Components
- [Sanity][sanity] as the CMS and Live Content API
- [Sanity TypeGen][typegen] for TypeScript type generation for the content
- Some light sprinkeling of [TypeScript][typescript]

[live-content-api]: https://www.sanity.io/docs
[next-sanity]: https://github.com/sanity-io/next-sanity
[localhostStudio]: http://localhost:3000/studio
[v0]: https://v0.dev
[tailwind]: https://tailwindcss.com
[next]: https://nextjs.org
[sanity]: https://www.sanity.io
[typegen]: https://www.sanity.io/docs/sanity-typegen
[typescript]: https://www.typescriptlang.org/
[react-conf]: https://conf.react.dev/
