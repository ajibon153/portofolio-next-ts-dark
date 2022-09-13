import { useState } from 'react';

import style from './Navigation.module.css';

import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';

let dataLink = [
  { name: 'header', icon: <AiOutlineHome /> },
  { name: 'about', icon: <AiOutlineUser /> },
  { name: 'experience', icon: <BiBook /> },
  { name: 'services', icon: <RiServiceLine /> },
  { name: 'contact', icon: <BiMessageSquareDetail /> },
];

const Navigation: React.FC = () => {
  const [activeNav, setactiveNav] = useState('#header');

  function handleLink(value: string) {
    setactiveNav(value);
  }

  return (
    <nav id='navigation' className={style.navigation}>
      {dataLink.map((link, i) => (
        <HrefComp
          key={i}
          activeNav={activeNav}
          handleLink={handleLink}
          data={link}
        />
      ))}
    </nav>
  );
};

const HrefComp: React.FC<{
  activeNav: string;
  handleLink: (value: string) => void;
  data: any;
}> = (props) => {
  const { activeNav, data, handleLink } = props;

  let hrefUrl: string = '#' + data.name;

  return (
    <a
      onClick={() => handleLink(hrefUrl)}
      href={hrefUrl}
      className={activeNav === hrefUrl ? style.active : ''}
    >
      {data.icon}
    </a>
  );
};

export default Navigation;
