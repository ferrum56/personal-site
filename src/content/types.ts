export interface TextSectionContent {
    title: string;
    text: string | string[];
    links?: string[];
}

export interface InTextLink {
    text: string;
    url: string;
}

export interface SocialLink {
    name: string;
    icon: string;
    url: string;
}
