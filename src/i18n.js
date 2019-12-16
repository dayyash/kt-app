import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = require('./i18n.json');

i18n.use(initReactI18next).init({
    resources,
    lng: window.localStorage.defaultLanguage || process.env.DEFAULT_LANGUAGE || 'en',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;