/**
 * An in-text link, primarily used in `SmartLink` components.
 */
export interface TextLink {
    description: string;
    url: string;
}

/**
 * Button data that contains properties for a `QBtn` component.
 * If `icon` is provided, make sure to convert it to a valid name using `toQIcon`.
 */
export interface ButtonLink {
    label?: string;
    to?: string;
    href?: string;
    icon?: string;
}

/* The following syntax is required for the type guard to work. */
const richTextPartTypes = ['text', 'link'] as const;
type RichTextPartType = (typeof richTextPartTypes)[number];

/**
 * Contains a parsed portion of a rich text string.
 */
export interface RichTextPart {
    type: RichTextPartType;
    data: string;
}

/**
 * Used by the `TextContent` component for rendering rich text content.
 *
 * A rich text expression is enclosed in curly braces, e.g. `{link:example}`,
 * where the part before the colon is type and the part after is the key in record.
 */
export interface SectionTextContent {
    text: string[];
    links?: Record<string, TextLink>;
    button?: ButtonLink;
}

/**
 * A wrapper for section content with type information.
 * This is the base interface for all possible content.
 */
interface SectionItemBase {
    type: 'text';
    content: SectionTextContent;
}

/**
 * A wrapper for text content with type information.
 */
interface SectionItemText extends SectionItemBase {
    type: 'text';
    content: SectionTextContent;
}

/**
 * The final type for all possible content matching their respective types.
 */
export type SectionItem = SectionItemText;

/**
 * A template for sections used in content files.
 */
export interface SectionTemplate {
    title: string;
    items: SectionItem[];
}

/**
 * Type guard for `RichTextPartType`.
 * @param value - An unknown value to check.
 */
export function isRichTextPartType(value: unknown): value is RichTextPartType {
    return richTextPartTypes.some((elem) => value === elem);
}
