import Image from "next/image";
import styles from "../styles/nav.module.css";

export const Nav = () => {
  const navItems = ["Home", "Room", "Food/Drink", "Service", "Others"];
  return (
    <div className={styles.nav}>
      <div className={styles.companyBrand}>
        <Image
          src="/logo/onlyLogo.png"
          alt="LOGO"
          width="42.6"
          height="37.3"
          className={styles.companyLogo}
        ></Image>
        <h2 className={styles.companyName}>Triangle Int Hotel</h2>
      </div>
      <div className={styles.companyServices}>@</div>
    </div>
  );
};

export default Nav;
