import Link from "next/Link";
import Image from "next/image";
import { MenuOutlined } from "@ant-design/icons";
import styles from "../styles/nav.module.css";

export const Nav = () => {
  const navItems = [
    { label: "Home", url: "/home" },
    { label: "Room", url: "/roomDisplay" },
    { label: "Food-Drink", url: "/food-drink" },
    { label: "Service", url: "/services" },
    { label: "Login", url: "/login" },
  ];
  const navItemsElements = navItems.map((item) => {
    return (
      <div key={item.url}>
        <Link href={item.url}>
          <a>{item.label}</a>
        </Link>
      </div>
    );
  });
  return (
    <div className={styles.nav}>
      <div className={styles.companyBrand}>
        <div className={styles.companyLogo}>
          <Image
            src="/logo/onlyLogo.png"
            alt="LOGO"
            width="42.6"
            height="37.3"
          ></Image>
        </div>
        <h2 className={styles.companyName}>Triangle Int Hotel</h2>
      </div>
      <div className={styles.companyServicesAndProfilPic}>
        <div className={styles.companyServices}>
          {navItemsElements}
          <div className={styles.profilPicture}></div>
        </div>
        <button
          onClick={() => alert("'.moreButton' is clicked")}
          className={styles.moreButton}
        >
          <MenuOutlined />
        </button>
      </div>
    </div>
  );
};

export default Nav;
