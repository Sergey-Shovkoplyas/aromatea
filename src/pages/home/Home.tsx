import reactLogo from '../../assets/react.svg'
import {useTranslation} from "react-i18next";

const Home = () => {
  const {t} = useTranslation();
  
  return (
    <div>
      <h1>Home page</h1>
      <h3>Translation: {t('title')}</h3>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo"/>
      </a>
    </div>
  );
};

export default Home;