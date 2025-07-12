# Personal Website

![CI workflow](https://github.com/ferrum56/personal-site/actions/workflows/ci.yml/badge.svg)
![GitHub License](https://img.shields.io/github/license/ferrum56/personal-site)
![Website deployment](https://img.shields.io/badge/website-online-brightgreen)
![Project version](https://img.shields.io/github/package-json/v/ferrum56/personal-site)
![Project status](https://img.shields.io/badge/status-wip-yellow)

The repository for my personal website. A simple and modern TypeScript Vue-based website.

## 🚀 Features

TODO

## 🛠️ Setup

1. Node.js

    Use *Node 20* or above. (Node 18 should work but no guarantee)
2. Package Manager

    Use *Yarn 4* with `corepack`. If not using `corepack`, delete the `packageManager` field in `package.json`.
    ```bash
    corepack enable
    yarn set version stable
    ```
3. Install dependencies

    ```bash
    yarn install
    ```
4. Run the development server

    ```bash
    yarn dev
    ```
5. Testing

    Use *Vitest 3* (current beta) to support Vite 6.
    ```bash
    yarn test
    yarn coverage # With istanbul
    ```

## 🔤 About Fonts and Icons

The website uses multiple fonts. *Novecento Sans Wide* is a geometric, all-cap font used as titles and headings. *Titillium Web* is a widely used sans-serif font for body text. *Bender* is an industrial-style font used for numbers.

The icon set used is the free version of *Font Awesome 6* with solid, regular, and brand icons. SVG icons are chosen to enable tree-shaking and reduce bundle size.

## ⚠️ Disclaimer on License

The MIT license **only applies to the code** in this repository. All non-code content of the website, including images, texts, and other assets, including but not limited to everything in the `public`, `src/assets`, and `src/content` directories, are **not covered by the MIT license**, and should not be used, reproduced, or distributed without permission. This means they are implicitly copyrighted unless otherwise stated, either in the repository, on the website, or by the respective owners.
