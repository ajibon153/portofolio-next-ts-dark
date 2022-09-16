import style from './Loading.module.css';

const Loading = () => {
  return (
    <div className={style.lds__ripple}>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loading;
