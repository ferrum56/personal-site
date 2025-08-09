# Memo

This document provides a detailed overview of components used in this project, serving as a reference for developers.

---

## Basic Components

Basic components are the building blocks of the UI, providing fundamental functionality without extensive styling or complex behavior. They are designed to be simple and reusable.

### `BaseIconText`

#### Overview
The most basic component. It renders a FontAwesome icon and a label directly without wrappers and any styles. Either of the two elements can be omitted, but not both. Any fallthrough attributes are applied to the label, and ignored if there is no label.

#### Status
- [x] Done
- [x] No further work needed

#### Props
- `label: string` — Text label displayed to the right of icon
- `icon: IconDefinition` — FontAwesome icon, must be imported with TypeScript code

### `BaseLink`

#### Overview
A basic component with either an anchor or a `RouterLink` directly at the root, mostly un-styled. It renders whatever is provided from the slot as a clickable link, and falls back to the URL if given nothing. Fallthrough attributes are bound to both elements.

#### Status
- [x] Done
- [x] No further work needed

#### Props
- `to: string` — Destination URL or route, also used to determine the tag to render
- `public: boolean` — If true, anchor tag will be enforced

#### Slots
- `default` — Content to be rendered inside the link, can be anything that makes sense

### `TextLink`

#### Overview
Derived from `BaseLink`, this is a styled label-only link used within a block of text. Further styling of this component is discouraged.

#### Status
- [x] Done
- [ ] No further work needed

#### Props
- `to: string` — Required by `BaseLink` props
- `label: string` — Required by `BaseLink` slot
- `public: boolean` — Required by `BaseLink` props

### `ButtonLink`

#### Overview
Derived from `BaseLink` and `BaseIconText`, renders a link that looks like a button. Use caution when further styling this component.

#### Status
- [x] Done
- [ ] No further work needed

#### Props
- `to: string` — Required by `BaseLink` props
- `public: boolean` — Required by `BaseLink` props
- `label: string` — Required by `BaseIconText` props
- `icon: IconDefinition` — Required by `BaseIconText` props

### `NavLink`

#### Overview
A component specifically used to render a router link for navigation, within a navigation menu. Further styling of this component is discouraged.

#### Status
- [x] Done
- [ ] No further work needed

#### Props
- `to: string` — The destination URL, must be an in-app route
- `label: string` — The page name

### `FlexButton`

#### Overview
Derived from `BaseIconText`, renders a simple un-styled button.

#### Status
- [ ] Done
- [ ] No further work needed

#### Props
- `label: string` — Required by `BaseIconText` props
- `icon: IconDefinition` — Required by `BaseIconText` props

### `FlexBadge`

#### Overview
Derived from `BaseIconText`, this is a mostly un-styled badge component that can be used to display an inline label icon combo, with optional link within the site. Fallthrough attributes are bound to both elements.

#### Status
- [x] Done
- [x] No further work needed

#### Props
- `label: string` — Required by `BaseIconText` props
- `icon: IconDefinition` — Required by `BaseIconText` props
- `to: RouteLocationRaw` — Optional link within the site, the badge will not be clickable if not provided

### `TextLine`

#### Overview
A component used to render chunks from a single rich text string. Further styling of this component is disallowed, as the fallthrough attributes are discarded.

#### Status
- [x] Done
- [x] No further work needed

#### Props
- `text: string` — Raw text string to be rendered in chunk

---

## Content

Content components focus on matching the content to the design, providing a way to render structured content stored in JSON files. They are designed to be used within sections or containers.

### `TextContent`

#### Overview
A component used within different types of sections to render rich text content as an article. Use caution when further styling this component.

#### Status
- [x] Done
- [x] No further work needed

#### Props
- `content: string[]` — List of paragraphs to be rendered

### `ListContent`

#### Overview
A component used within different types of sections to render the text-based content as an unordered list. Use caution when further styling this component.

#### Status
- [x] Done
- [x] No further work needed

#### Props
- `content: ListItem[]` — The list to be rendered

#### Slots
- `dynamic` — Available when item specifies `slot` property, will be appended to the end of the item

---

## Sections

Sections are components that group content together, providing a structured layout for displaying information. They are designed to be used within containers to form a coherent page structure.

### `SectionTitle`

#### Overview
A component used within different types of sections to render decorated title. Use caution when further styling this component.

#### Status
- [ ] Done
- [ ] No further work needed

#### Props
- `id: number` — The id inherited from parent section
- `title: string` — Title of the section it belongs to

### `TextSection`

#### Overview
A section component designed to render text-based sections. A text-based section is in the format of a title and a block of content. This component is mostly un-styled and relies on its children for styling themselves.

#### Status
- [x] Done
- [x] No further work needed

#### Props
- `id: number` — Required by `SectionTitle` props
- `title: string` — Required by `SectionTitle` props

#### Slots
- `default` — Any content to be rendered inside the section

### `AccordionSection`

#### Overview
A section component designed to render an item inside an accordion. An accordion section is usually in the format of a clickable title and a block of collapsible content. This component is partially styled and relies on its children for styling themselves.

#### Status
- [ ] Done
- [ ] No further work needed

#### Props
- `id: number` — Required by `SectionTitle` props
- `title: string` — Required by `SectionTitle` props
- `level: string` — The security level affecting section style
- `disabled: boolean` — Required by `AccordionItem` props

#### Slots
- `default` — Any content to be rendered inside the section

---

## Containers

Containers are components that provide a layout for grouping sections and content together. They are designed to be used as the main structure(s) of a page, allowing for flexible arrangement of content.

### `TextContainer`

#### Overview
A container component designed to render general text-based content. This component is partially styled, use caution when further styling it.

#### Status
- [ ] Done
- [ ] No further work needed

#### Props
- `title` — Title of the container

#### Slots
- `default` — Main content assembled from other components

---

## Universal Components

Universal components are components that are only used once on the entire website, serving specific purposes such as navigation, banners, or footers. They are designed to be used as-is without further styling or extension.

### `HomeBanner`

#### Overview
A banner appearing on the home page for page-entry impressions. Do not, under any circumstances, style or extend this component. It is designed to be used as-is.

#### Status
- [ ] Done
- [ ] No further work needed

### `AppHeader`

#### Overview
The universal header of this website, used for navigation purposes. Do not, under any circumstances, style or extend this component. It is designed to be used as-is.

#### Status
- [ ] Done
- [ ] No further work needed

### `AppFooter`

#### Overview
The universal footer of this website. Do not, under any circumstances, style or extend this component. It is designed to be used as-is.

#### Status
- [x] Done
- [ ] No further work needed

### `AppPanel`

#### Overview
The universal decoration panel of this website. This background decoration has a z-index of -1. Do not, under any circumstances, style or extend this component. It is designed to be used as-is.

#### Status
- [x] Done
- [x] No further work needed

---

// todo new idea MISC: page load stats

// altair, 113368, 5336, vega, 22449, 61317, 55203, 17378, 29271, pollux, 57632, 57757, 78072, arcturus

