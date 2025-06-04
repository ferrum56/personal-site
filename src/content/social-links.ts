import { faDiscord, faGithub, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import { toQIcon } from '@/utils/icon-util';
import type { ButtonLink } from './types';

export default [
    { name: 'GitHub', href: 'https://github.com/ferrum56', icon: toQIcon(faGithub) },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/yitong-zheng/', icon: toQIcon(faLinkedinIn) },
    { name: 'Discord', href: 'https://discord.com/users/892879275248730113', icon: toQIcon(faDiscord) },
    { name: 'X (Twitter)', href: 'https://x.com/Ferrum_56', icon: toQIcon(faXTwitter) },
    { name: 'Email', href: '#', icon: toQIcon(faEnvelope) },
] as ButtonLink[];
