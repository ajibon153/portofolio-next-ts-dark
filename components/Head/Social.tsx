import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FiDribbble } from 'react-icons/fi';

import style from './Header.module.css';

const Social = () => {
  return (
    <div className={style.header___social}>
      <a href='/linkedin' target='_blank'>
        <BsLinkedin />
      </a>
      <a href='/github' target='_blank'>
        <FaGithub />
      </a>
      <a href='/dribble' target='_blank'>
        <FiDribbble />
      </a>
    </div>
  );
};

export default Social;
