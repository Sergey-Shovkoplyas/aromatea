import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('test.about')}</h1>
    </div>
  );
};

export default About;
