import i18n from '@services/i18n';
import { useLocation, useNavigate } from 'react-router';
import useDetectLocale from '@hooks/useDetectLocale.ts';

const ChangeLang = () => {
  const locale = useDetectLocale(); // Extract current locale from URL
  const navigate = useNavigate();
  const location = useLocation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);

    const newPath = location.pathname.replace(`/${locale}`, `/${lng}`);
    navigate(newPath);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('ru')}>ru</button>
      <button onClick={() => changeLanguage('en')}>en</button>
    </div>
  );
};

export default ChangeLang;
