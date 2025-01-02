import { faDiscord, faGithub, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import { toQIcon } from '@/utils/icon-util';

export interface SocialLink {
    name: string;
    icon: string;
    url: string;
}

export default [
    { name: 'GitHub', icon: toQIcon(faGithub), url: 'https://github.com/ferrum56' },
    { name: 'LinkedIn', icon: toQIcon(faLinkedinIn), url: 'https://www.linkedin.com/in/yitong-zheng/' },
    { name: 'Discord', icon: toQIcon(faDiscord), url: 'https://discord.com/users/892879275248730113' },
    { name: 'X (Twitter)', icon: toQIcon(faXTwitter), url: 'https://x.com/Ferrum_56' },
    { name: 'Email', icon: toQIcon(faEnvelope), url: '#' },
] as SocialLink[];
