import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { toQIcon } from '@/utils/icon-util';
import type { SectionTemplate } from './types';

export default [
    {
        title: 'About Me',
        items: [
            {
                type: 'text',
                content: {
                    text: [
                        'Hi, my name is Alan. I am an undergraduate student at the University of British Columbia, ' +
                            'majoring in computer science. I have strong interests spanning across multiple areas, ' +
                            'for example, writing well-designed code, understanding game design concepts, ' +
                            'and in particular, studying the cutting-edge machine learning and deep learning technologies.',
                    ],
                    button: { label: 'Learn More', to: '/about' },
                },
            },
        ],
    },
    {
        title: 'About This Site',
        items: [
            {
                type: 'text',
                content: {
                    text: [
                        'A simple, modern, and responsive website built with {link:vue}, ' +
                            'written in modern TypeScript. This is a frontend Node project that ' +
                            "uses {link:quasar} for UI because I'm horrible at CSS. :(",
                        'Feel free to read more {link:about}, my {link:skills}, or my {link:projects}, ' +
                            'or contact me {link:contact}. Also check out the {link:misc} page for some interesting stuff.',
                    ],
                    links: {
                        vue: { description: 'Vue', url: 'https://vuejs.org/' },
                        quasar: { description: 'Quasar framework', url: 'https://quasar.dev/' },
                        about: { description: 'about me', url: '/about' },
                        skills: { description: 'skill set', url: '/skills' },
                        projects: { description: 'projects', url: '/projects' },
                        contact: { description: 'here', url: '/contact' },
                        misc: { description: 'misc', url: '/misc' },
                    },
                    button: {
                        label: 'Check on GitHub',
                        href: 'https://github.com/ferrum56/personal-site/',
                        icon: toQIcon(faGithub),
                    },
                },
            },
        ],
    },
] as SectionTemplate[];
