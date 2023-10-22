import s from "./HeroSection.module.scss";
// import userImg from '../../assets/user.svg';
import userGif from "../../assets/user1.gif";
import Typewriter from "../Typewriter/Typewriter";

const HeroSection = ({ name, title, description, subtitle }) => {
  return (
    <div className={s.hero}>
      <div>
        <img className={s.hero__img} src={userGif} alt="" />
      </div>
      <div>
        <Typewriter text={name} />
        <div className={s.hero__details}>
          <h3 className={s.hero__title}>{title}</h3>
          <p className={s.hero__text}>{description}</p>
          {subtitle && <p className={s.hero__text}>{subtitle}</p>}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
