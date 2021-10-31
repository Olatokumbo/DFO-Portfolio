import style from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={style.banner}>
      <div className={style.banner_item_1}></div>
      <div className={style.banner_item_2}></div>
      <div className={style.banner_item_3}></div>
    </div>
  );
};

export default Banner;
