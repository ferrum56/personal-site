# Memo

This document provides a detailed overview of components used in this project, serving as a reference for developers.

---

### `BaseIconText`

#### Overview
The most basic component. It renders a FontAwesome icon and a label directly without wrappers and any styles. Either of the two elements can be omitted, but not both. Any fallthrough attributes are applied to the label, and ignored if there is no label.

#### Status
- [x] Done
- [x] No further work needed

#### Props
- `label: string` — Text label displayed to the right of icon
- `icon: IconDefinition` — FontAwesome icon, must use JS import

---

### `BaseLink`

#### Overview
A basic component with either an anchor or a `RouterLink` directly at the root, mostly un-styled. It renders whatever is provided from the slot as a clickable link, and fallbacks to the URL if given nothing. Fallthrough attributes are bound to both elements.

#### Status
- [x] Done
- [x] No further work needed

#### Props
- `to: string` — Destination URL or route, also used to determine the tag to render

#### Slots
- `default` — Content to be rendered inside the link, can be anything that makes sense

---

### `TextLink`

#### Overview
Derived from `BaseLink`, this is a styled label-only link used within a block of text. Further styling of this component is discouraged.

#### Status
- [x] Done
- [ ] No further work needed

#### Props
- `to: string` — Required by `BaseLink` props
- `label: string` — Required by `BaseLink` slot

---

### `ButtonLink`

#### Overview
Derived from `BaseLink` and `BaseIconText`, renders a link that looks like a button. Use caution when further styling this component.

#### Status
- [x] Done
- [ ] No further work needed

#### Props
- `to: string` — Required by `BaseLink` props
- `label: string` — Required by `BaseIconText` props
- `icon: IconDefinition` — Required by `BaseIconText` props

---

### `TextLine`

#### Overview
A component used to render chunks from a single rich text string. Further styling of this component is disallowed, as the fallthrough attributes are discarded.

#### Status
- [x] Done
- [x] No further work needed

#### Props
- `text: string` — Raw text string to be rendered in chunk

---

### `TextContent`

#### Overview
A component used within `ContentSection` to render rich text content as an article. Use caution when further styling this component.

#### Status
- [x] Done
- [x] No further work needed

#### Props
- `article: string[]` — List of paragraphs to be rendered

---

### `ContentSectionTitle`

#### Overview
A component used within `ContentSection` to render the decorated title. Use caution when further styling this component.

#### Status
- [ ] Done
- [ ] No further work needed

#### Props
- `id: number` — The id inherited from parent section
- `title: string` — Title of the section it belongs to

---

### `ContentSection`

#### Overview
A section component designed to render different types of content and an optional title. This component is mostly un-styled and relies on its children for styling themselves.

#### Status
- [x] Done
- [ ] No further work needed

#### Slots
- `title` — Title of the section, must be a `ContentSectionTitle`
- `content` — Main content of the section, must be one of the components ending with `Content`, such as `TextContent`
- `default` — Anything else to append to the end of the section
