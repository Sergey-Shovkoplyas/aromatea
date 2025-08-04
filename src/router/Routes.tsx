import { Navigate, Route, Routes as ReactRoutes } from 'react-router';

import About from '@pages/about/About.tsx';
import Contact from '@pages/contact/Contact.tsx';
import Home from '@pages/home/Home.tsx';
import useDetectLocale from '@hooks/useDetectLocale.ts';

const Routes = () => {
  const locale = useDetectLocale();

  return (
    <ReactRoutes>
      <Route path="/:locale/" element={<Home />} />
      <Route path="/:locale/about" element={<About />} />
      <Route path="/:locale/contact" element={<Contact />} />

      {/*Redirect if no route matches*/}
      <Route path="*" element={<Navigate to={`/${locale}/`} replace />} />
    </ReactRoutes>
  );
};

export default Routes;
