import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

// See https://github.com/quasarframework/quasar/issues/16843#issuecomment-1920733932
export function toQIcon(iconDefinition: IconDefinition): string {
    return `${iconDefinition.icon[4]}|0 0 ${iconDefinition.icon[0]} ${iconDefinition.icon[1]}`;
}
