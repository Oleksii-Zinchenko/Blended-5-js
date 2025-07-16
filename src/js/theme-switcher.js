import { getFormLS, saveInLS } from './local-storage-api';

export const themeSwitcher = () => {
  const theme = getFormLS('theme');
  if (theme === 'theme-dark') {
    document.body.classList.remove('theme-dark');
    document.body.classList.add('theme-light');
    saveInLS('theme', 'theme-light');
  } else {
    document.body.classList.add('theme-dark');
    document.body.classList.remove('theme-light');
    saveInLS('theme', 'theme-dark');
  }
};
