import * as S from './Header.styles';
import { Link } from 'react-router';
import ChangeLang from '@components/header/cangeLang/ChangeLang.tsx';
import useDetectLocale from '../../hooks/useDetectLocale.ts';

interface IMenuItem {
  label: string;
  href: string;
}

const Head = () => {
  const locale = useDetectLocale();

  const menuItems: IMenuItem[] = [
    {
      label: 'Home',
      href: `/${locale}/`,
    },
    {
      label: 'About us',
      href: `/${locale}/about`,
    },
    {
      label: 'Contact',
      href: `/${locale}/contact`,
    },
  ];

  return (
    <S.Root>
      <ChangeLang />
      {menuItems.map((item, index) => (
        <ul key={index}>
          <li>
            <Link to={item.href}>{item.label}</Link>
          </li>
        </ul>
      ))}
    </S.Root>
  );
};

export default Head;
