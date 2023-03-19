# Bangumi App

基于 [Bangumi Api](https://bangumi.github.io/api/) 构建的 [Bangumi](https://bgm.tv/) 第三方 Web 客户端，使用 Next.js 13 appDir 开发，获得最佳体验请使用 chrome 浏览器。logo 图标来自 [bangumi-frontend](https://github.com/bangumi/frontend)

> **Warning**
> 该项目处于早期阶段，缺少一些核心 api 和功能，目前不适合 bangumi 新用户使用。

> **Note**
> 该应用和 api 都处于开发阶段，出现问题可以提 issue 或到我的 bangumi 小组<a aria-label="bgm logo" href="https://bgm.tv/group/bangumi_app">

    <img src="https://img.shields.io/badge/加入小组-ff69b4.svg?style=flat&logo=data:image/png;base64,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&labelColor=ffffff">

</a>讨论。

[![Powered by Vercel](https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg)](https://vercel.com/?utm_source=zebeqo&utm_campaign=oss)

## ✨ Tech Stack + Features

- ✅ Built with Next.js 13 new [App Router](https://beta.nextjs.org/docs/app-directory-roadmap)
- ✏️ Written in [TypeScript](https://github.com/microsoft/TypeScript)
- 🩺 Validations using [Zod](https://github.com/colinhacks/zod)
- 🔐 Authentication using [Auth.js](https://github.com/nextauthjs/next-auth) custom provider
  - [Bangumi oauth 2.0](https://github.com/bangumi/api/blob/master/docs-raw/How-to-Auth.md)
- 💄 Styled using [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss)
- 🥼 UI Components built using [Radix UI](https://github.com/radix-ui/primitives)
- 🌗 Light/Dark mode following [Radix UI Color](https://www.radix-ui.com/colors) color system
- 🥽 Fully Streaming and Suspense
- 📖 [Storybook](https://github.com/storybookjs/storybook) 7.0 integration
- 🔬 Interaction tests in Storybook with @storybook/[jest](https://jestjs.io/), @storybook/[testing-library](https://testing-library.com/)
- 🗃 State managed by [Jotai](https://github.com/pmndrs/jotai)
- Server side data fetching with [Server Components](https://beta.nextjs.org/docs/rendering/server-and-client-components#server-components) `fetch()` API
- Client side data fetching with [React Query](https://github.com/TanStack/query) (Auto Caching + Refetching, Load-More + Infinite Scroll, Optimistic Updates...)

## 📖 Storybook

Preview at [storybook.bangumi.app](https://storybook.bangumi.app/), dark mode support.

> **Warning**
> Press `T` to hide toolbar when scrolling panel component. Because toolbar will break intersection observer.

## ☑️ Todo

Check out my [Github Project](https://github.com/users/Zebeqo/projects/1)

## ⚙️ Running locally

本项目由 [Bangumi Api](https://bangumi.github.io/api/) 提供 API。

运行本项目

```shell
# 安装依赖
pnpm install

# 创建本地环境变量，根据 example 提示修改相关变量
cp .env.example .env

# 运行
pnpm dev

# 运行（storybook）
pnpm storybook
```

> **Warning**
> next/font 目前对于非英文字体有些问题，我已经参考 https://github.com/vercel/next.js/issues/45080 做了一些调整，如果仍然出现相关问题，请自行删除字体相关代码。

> **Note**
> 开发时请尽量运行在 storybook 或者登陆后的收藏页， 因为收藏页的分页 api 可以获得 UI 足够的信息，但是其他页面的分页 api 信息不够，需要再获取每个条目的 api，这会造成大量请求严重影响加载速度。为了解决这个问题，生产模式下可以使用 next.js 服务器组件中新的 [Automatic fetch() Request Deduping](https://beta.nextjs.org/docs/data-fetching/fundamentals#automatic-fetch-request-deduping) 来进行 ISR，但是开发模式下这个功能是禁用的。

## 🖼️ ScreenShot

![Clipboard - 2023-03-09 12 50 13](https://user-images.githubusercontent.com/68463968/223920159-40284b45-0456-4bd1-8c5a-c5a467072458.png)

![Clipboard - 2023-03-09 12 50 20](https://user-images.githubusercontent.com/68463968/223920187-536f1c4f-4820-4a3f-9f05-faf996189f95.png)

![Clipboard - 2023-03-09 12 50 27](https://user-images.githubusercontent.com/68463968/223920199-22ea15e8-e484-4732-a25b-8ed5d1dde8dc.png)

![Clipboard - 2023-03-09 12 50 35](https://user-images.githubusercontent.com/68463968/223920216-7026b4fd-f6d7-4c82-9149-a60c1e9bcbe4.png)

![Clipboard - 2023-03-09 12 50 42](https://user-images.githubusercontent.com/68463968/223920231-232f5d94-cf1c-4a91-9fcd-25ca6cf657ab.png)

![Clipboard - 2023-03-09 12 50 48](https://user-images.githubusercontent.com/68463968/223920243-0e3f02a1-17e8-4ce3-a775-da9809152c83.png)
