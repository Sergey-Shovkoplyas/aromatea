import { useLocation } from 'react-router';

const useDetectLocale = () => {
  const location = useLocation();
  const DEFAUL_LOCALE = 'en';
  const supportedLocales = ['en', 'ru'];
  
  // Step 1: Detect locale from URL
  const urlLocale = location.pathname.split('/')[1];
  if (supportedLocales.includes(urlLocale)) {
    return urlLocale;
  }
  
  // Step 2: Detect locale from localStorage
  const savedLocale = localStorage.getItem('appLocale');
  if (supportedLocales.includes(savedLocale || '')) {
    return savedLocale || DEFAUL_LOCALE;
  }
  
  // Step 3: Detect locale from browser
  const browserLocale = navigator.language.split('-')[0];
  if (supportedLocales.includes(browserLocale)) {
    return browserLocale;
  }
  
  // Default fallback
  return DEFAUL_LOCALE;
};

export default useDetectLocale;
