import * as S from './Header.styles'
import {Link} from "react-router";
import ChangeLang from "@components/header/cangeLang/ChangeLang.tsx";

interface IMenuItem {
  label: string;
  href: string;
}

const menuItems: IMenuItem[] = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'About us',
    href: '/about'
  },
  {
    label: 'Contact',
    href: '/contact'
  },
];

const Head = () => {
  
  
  return (
    <S.Root>
      <ChangeLang />
      {menuItems.map((item) => (
        <ul>
          <li>
            <Link to={item.href}>{item.label}</Link>
          </li>
        </ul>
      ))}
    </S.Root>
  );
};

export default Head;