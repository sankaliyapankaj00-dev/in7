import type { Brand } from './types';
import { brands1 } from './brands-1';
import { brands2 } from './brands-2';
import { brands3 } from './brands-3';

export const brands: Brand[] = [...brands1, ...brands2, ...brands3];

export const brandByKey: Record<string, Brand> = Object.fromEntries(
  brands.map((b) => [b.key, b]),
);

export function getBrand(key: string): Brand {
  const b = brandByKey[key];
  if (!b) throw new Error(`Unknown brand key: ${key}`);
  return b;
}

export function getBrands(keys: string[]): Brand[] {
  return keys.map(getBrand);
}

/** The brand this website is published on. Links to it are internal. */
export const HOST_BRAND_KEY = 'in7co';

/** Every partner platform other than the host site. */
export const partnerBrands: Brand[] = brands.filter((b) => b.key !== HOST_BRAND_KEY);

/**
 * Directory groupings used by /gaming-apps and the article rails.
 * A brand can legitimately appear in more than one group.
 */
export const brandGroups: { title: string; blurb: string; keys: string[] }[] = [
  {
    title: 'Card games and Teen Patti',
    blurb: 'Platforms where card play is the main event rather than an afterthought.',
    keys: ['in7co', 'in7gaming', 's1', 'mast179', 'c555'],
  },
  {
    title: 'Slots and arcade',
    blurb: 'Reel catalogues, fishing arcade modes and short-session play.',
    keys: ['xx7', 'mast79', 'mg7', 'is7'],
  },
  {
    title: 'Prediction, Wingo and lottery',
    blurb: 'Timed-round formats and scheduled draws, including one verifiable hash game.',
    keys: ['raja7', 'mmy', 'iw7', 'inr360'],
  },
  {
    title: 'Multi-category, one wallet',
    blurb: 'Broad catalogues that consolidate several categories behind a single balance.',
    keys: ['ind9', 'ind9win', 'fn7', 'x89'],
  },
  {
    title: 'Install guides and version references',
    blurb: 'Not lobbies. These cover setup failures, OTP problems and APK version drift.',
    keys: ['g112', 'is7', 'ind9win'],
  },
  {
    title: 'Casino and live tables',
    blurb: 'Live dealer formats, Andar Bahar, roulette and structured table play.',
    keys: ['c555', 'ie777', 'iw7', 's1'],
  },
];
