export { default as KaseLogo } from './Logo';
export { default as Router } from './Router';
export { default as SwitchIcon } from './SwitchIcon';
export { default as ThemeWrapper } from './ThemeWrapper';
export { LightTheme } from './Themes';
export { DarkTheme } from './Themes';

import axios from 'axios';

const productionURL = 'http://localhost:1337/api/products';

export const customFetch = axios.create({
    baseURL: productionURL,
});


