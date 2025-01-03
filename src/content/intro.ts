import type { TextSectionContent } from '@/content/types';

export default {
    person: {
        title: 'About Me',
        text:
            'Hi, my name is Alan. I am an undergraduate student at the University of British Columbia, ' +
            'majoring in computer science. I have strong interests spanning across multiple areas, for example, ' +
            'writing well-designed code, understanding game design concepts, and in particular, ' +
            'studying the cutting-edge machine learning and deep learning technologies.',
    } as TextSectionContent,
    website: {
        title: 'About This Site',
        text: [
            'A simple, modern, and responsive website built with <|Vue|>, written in modern TypeScript.' +
                "This is a frontend Node project that uses <|Quasar framework|> for UI because I'm horrible at CSS. :(",
            'Feel free to read more <|about me|>, my <|skill set|>, or my <|projects|>, or contact me <|here|>. ' +
                'Also check out the <|misc|> page for some interesting stuff.',
        ],
        links: ['https://vuejs.org/', 'https://quasar.dev/', '/about', '/skills', '/projects', '/contact', '/misc'],
    } as TextSectionContent,
};
