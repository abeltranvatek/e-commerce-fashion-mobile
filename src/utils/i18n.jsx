import { I18n } from 'i18n-js';
import en from '../languages/en.json';

const i18n = new I18n({ en: en });

i18n.locale = 'en';

i18n.enableFallback = true;

export default i18n;
