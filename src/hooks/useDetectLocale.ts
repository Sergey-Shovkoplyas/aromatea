import { useLocation } from 'react-router';

const useDetectLocale = () => {
  const location = useLocation();
  const LOCALE_DEFAULT = 'en';
  const LOCALE_SUPPORTED = ['en', 'ru'];
  
  // Step 1: Detect locale from URL
  const urlLocale = location.pathname.split('/')[1];
  if (LOCALE_SUPPORTED.includes(urlLocale)) {
    return urlLocale;
  }
  
  // Step 2: Detect locale from localStorage
  const savedLocale = localStorage.getItem('appLocale');
  if (LOCALE_SUPPORTED.includes(savedLocale || '')) {
    return savedLocale || LOCALE_DEFAULT;
  }
  
  // Step 3: Detect locale from browser
  const browserLocale = navigator.language.split('-')[0];
  if (LOCALE_SUPPORTED.includes(browserLocale)) {
    return browserLocale;
  }
  
  // Default fallback
  return LOCALE_DEFAULT;
};

export default useDetectLocale;
