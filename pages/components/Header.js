import style from "../../styles/Header.module.css";
import logo from "../Assets/HeaderLogo.png";
import bellTop from "../Assets/BellTop.png";
import bellBottom from "../Assets/BellBottom.png";
import Avatar from "./Avatar";
export default Headers = () => {
  return (
    <div className={style.container}>
      <div>
        <img className={style.logo} src={logo.src} />
      </div>
      <div className={style.flex}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>
            <img className={style.bell} src={bellTop.src} />
            <h4 className={style.bellNum}>2</h4>
          </div>
          <img className={style.bellBottom} src={bellBottom.src} />
        </div>
        <div className={style.avatar}>CF</div>
      </div>
    </div>
  );
};
