/* eslint-disable react/display-name */
import { Row, Typography } from "antd";

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

import { MainLayout } from "../../components/MainLayout";
import { SideBar } from "../../components/SideBar";
import { ServiceManager } from "../../components/Service/ServiceManager";

const { Title } = Typography;

export const ManageServices = ({}) => {
  return (
    <div className={`d-flex flex-column flex-fill`}>
      <Row
        justify="center"
        align="middle"
        gutter={[0, 0]}
        className={`m-3 p-3 mt-4 rounded border border-light bg-dark`}
        style={{ minHeight: "300px" }}
      >
        <Title className={`text-background`}>The graph will be here</Title>
      </Row>
      <ServiceManager />
    </div>
  );
};

ManageServices.getLayout = function getLayout(page) {
  const items = [
    {
      key: "dashboard",
      url: "/admin/dashboard",
      label: "Dashboard",
      icon: <FontAwesomeIcon icon={faChartBar} />,
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
      isSelected: true,
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
  ];

  return (
    <MainLayout>
      <SideBar items={items} />
      <div className={`d-flex flex-fill`}>{page}</div>
    </MainLayout>
  );
};

export default ManageServices;
