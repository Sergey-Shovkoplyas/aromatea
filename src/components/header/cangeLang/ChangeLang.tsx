import i18n from "@services/i18n";

const ChangeLang = () => {
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  }
  
  const {t} = i18n;
  
  return (
    <div>
      <button onClick={() => changeLanguage('ru')}>ru</button>
      <button onClick={() => changeLanguage('en')}>en</button>
      <h1>{t('Welcome to React')}</h1>
    </div>
  );
};

export default ChangeLang;