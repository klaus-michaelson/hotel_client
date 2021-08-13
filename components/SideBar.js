import Link from "next/link";
import styles from "../styles/sideBar.module.css";
import { Row, Col } from "antd";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartBar,
  faUsersCog,
  faUtensils,
  faBed,
  faConciergeBell,
  faHotel,
  faCogs,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

export const SideBar = ({
  items = [
    {
      key: "dashboard",
      url: "/admin/dashboard",
      label: "Dashboard",
      icon: <FontAwesomeIcon icon={faChartBar} />,
      isSelected: true,
    },
    {
      key: "manageEmployees",
      url: "/admin/manage-employees",
      label: "Manage Employees",
      icon: <FontAwesomeIcon icon={faUsersCog} />,
    },
    {
      key: "manageRooms",
      url: "/admin/manage-rooms",
      label: "Manage Rooms",
      icon: <FontAwesomeIcon icon={faBed} />,
    },
    {
      key: "manageFoodAndDrinks",
      url: "/admin/manage-food-and-drinks",
      label: "Manage FoodAndDrinks",
      icon: <FontAwesomeIcon icon={faUtensils} />,
    },
    {
      key: "manageServices",
      url: "/admin/manage-services",
      label: "Manage Services",
      icon: <FontAwesomeIcon icon={faConciergeBell} />,
    },
    {
      key: "manageHall",
      url: "/admin/manage-hall",
      label: "Manage Hall",
      icon: <FontAwesomeIcon icon={faHotel} />,
    },
    {
      key: "manageRoomServices",
      url: "/admin/manage-room-services",
      label: "Manage RoomServices",
      icon: <FontAwesomeIcon icon={faCogs} />,
    },
    {
      key: "manageEmployees",
      url: "/admin/manage-employees",
      label: "Manage Employees",
      icon: <FontAwesomeIcon icon={faUsers} />,
    },
    {
      key: "viewReservedRooms",
      url: "/admin/view-reserved-rooms",
      label: "View Reserved Rooms",
      icon: <FontAwesomeIcon icon={faBed} />,
    },
    {
      key: "viewOrderedFoodAndDrinks",
      url: "/admin/view-ordered-food-and-drinks",
      label: "View Ordered Food&Drinks",
      icon: <FontAwesomeIcon icon={faUtensils} />,
    },
    {
      key: "viewOrderedRoomServices",
      url: "/admin/view-ordered-room-services",
      label: "View Ordered RoomServices",
      icon: <FontAwesomeIcon icon={faCogs} />,
    },
  ],
}) => {
  return (
    <Row className={`${styles.main}`} align="middle">
      <Col span={24}>
        <Row>
          {items.map((item) => {
            return (
              <Col span={24} key={item.key} className={`fs-1 fw-bold `}>
                <Link href={item.url}>
                  <a
                    className={`${styles.item} ${
                      item.isSelected ? styles["selected-item"] : ""
                    } button rounded`}
                  >
                    {item.icon}
                    <span className={`ml-3 ${styles.label}`}>{item.label}</span>
                  </a>
                </Link>
              </Col>
            );
          })}
        </Row>
      </Col>
    </Row>
  );
};
