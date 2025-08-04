import { Route, Routes as ReactRoutes } from 'react-router';

import About from '@pages/about/About.tsx';
import Contact from '@pages/contact/Contact.tsx';
import Home from '@pages/home/Home.tsx';

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/:locale/" element={<Home />} />
      <Route path="/:locale/about" element={<About />} />
      <Route path="/:locale/contact" element={<Contact />} />
    </ReactRoutes>
  );
};

export default Routes;
