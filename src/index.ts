import { registerPlugin } from '@capacitor/core';
import type { HCEPlugin } from './definitions';
const HCE = registerPlugin<HCEPlugin>('HCEPlugin');

export * from './definitions';
export { HCE };
