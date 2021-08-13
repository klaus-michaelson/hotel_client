import { Button, Table } from "antd";
import { useState } from "react";
import Profile from "../../components/Profile";

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

import { SideBar } from "../../components/SideBar";

const columns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Username",
    dataIndex: "username",
    key: "username",
  },
  {
    title: "Position",
    dataIndex: "position",
    key: "position",
  },
  {
    title: "Department",
    dataIndex: "department",
    key: "department",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
  },
  {
    title: "BirthDate",
    dataIndex: "birthDate",
    key: "birthDate",
  },
  {
    title: "phone",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
  },
];

const userData = {
  id: 1,
  personal: {
    name: "Someone Named",
    gender: "Female",
    birthDate: "28-08-1985",
    address: "Addis Ababa / Saris",
    phone: "(+251) 9 1234 1234",
    email: "someone@gmail.com",
  },
  extra: {
    emergencyContact: {
      name: "Emergency Center",
      phone: "(+251) 9 11",
    },
    bankNo: "100005123124",
  },
  employment: {
    position: "Manager",
    department: "Finance",
    salary: 1231,
  },
};

const UserList = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [profileName, setProfileName] = useState(false);

  const dataSource = [
    {
      id: userData.id,
      username: userData.personal.name,
      position: userData.employment.position,
      department: userData.employment.department,
      gender: userData.personal.gender,
      birthDate: userData.personal.birthDate,
      phone: userData.personal.phone,
      email: userData.personal.email,
      action: [
        <Button key={0} onClick={() => dispProf("view")}>
          View
        </Button>,
        <Button key={1} onClick={() => dispProf("edit")}>
          Edit
        </Button>,
        <Button key={2}>Remove</Button>,
      ],
    },
    {
      id: userData.id,
      username: userData.personal.name,
      position: userData.employment.position,
      department: userData.employment.department,
      gender: userData.personal.gender,
      birthDate: userData.personal.birthDate,
      phone: userData.personal.phone,
      email: userData.personal.email,
      action: [
        <Button key={0} onClick={() => dispProf("view")}>
          View
        </Button>,
        <Button key={1} onClick={() => dispProf("edit")}>
          Edit
        </Button>,
        <Button key={2}>Remove</Button>,
      ],
    },
    {
      id: userData.id,
      username: userData.personal.name,
      position: userData.employment.position,
      department: userData.employment.department,
      gender: userData.personal.gender,
      birthDate: userData.personal.birthDate,
      phone: userData.personal.phone,
      email: userData.personal.email,
      action: [
        <Button key={0} onClick={() => dispProf("view")}>
          View
        </Button>,
        <Button key={1} onClick={() => dispProf("edit")}>
          Edit
        </Button>,
        <Button key={2}>Remove</Button>,
      ],
    },
    {
      id: userData.id,
      username: userData.personal.name,
      position: userData.employment.position,
      department: userData.employment.department,
      gender: userData.personal.gender,
      birthDate: userData.personal.birthDate,
      phone: userData.personal.phone,
      email: userData.personal.email,
      action: [
        <Button key={0} onClick={() => dispProf("view")}>
          View
        </Button>,
        <Button key={1} onClick={() => dispProf("edit")}>
          Edit
        </Button>,
        <Button key={2}>Remove</Button>,
      ],
    },
    {
      id: userData.id,
      username: userData.personal.name,
      position: userData.employment.position,
      department: userData.employment.department,
      gender: userData.personal.gender,
      birthDate: userData.personal.birthDate,
      phone: userData.personal.phone,
      email: userData.personal.email,
      action: [
        <Button key={0} onClick={() => dispProf("view")}>
          View
        </Button>,
        <Button key={1} onClick={() => dispProf("edit")}>
          Edit
        </Button>,
        <Button key={2}>Remove</Button>,
      ],
    },
    {
      id: userData.id,
      username: userData.personal.name,
      position: userData.employment.position,
      department: userData.employment.department,
      gender: userData.personal.gender,
      birthDate: userData.personal.birthDate,
      phone: userData.personal.phone,
      email: userData.personal.email,
      action: [
        <Button key={0} onClick={() => dispProf("view")}>
          View
        </Button>,
        <Button key={1} onClick={() => dispProf("edit")}>
          Edit
        </Button>,
        <Button key={2}>Remove</Button>,
      ],
    },
    {
      id: userData.id,
      username: userData.personal.name,
      position: userData.employment.position,
      department: userData.employment.department,
      gender: userData.personal.gender,
      birthDate: userData.personal.birthDate,
      phone: userData.personal.phone,
      email: userData.personal.email,
      action: [
        <Button key={0} onClick={() => dispProf("view")}>
          View
        </Button>,
        <Button key={1} onClick={() => dispProf("edit")}>
          Edit
        </Button>,
        <Button key={2}>Remove</Button>,
      ],
    },
    {
      id: userData.id,
      username: userData.personal.name,
      position: userData.employment.position,
      department: userData.employment.department,
      gender: userData.personal.gender,
      birthDate: userData.personal.birthDate,
      phone: userData.personal.phone,
      email: userData.personal.email,
      action: [
        <Button key={0} onClick={() => dispProf("view")}>
          View
        </Button>,
        <Button key={1} onClick={() => dispProf("edit")}>
          Edit
        </Button>,
        <Button key={2}>Remove</Button>,
      ],
    },
    {
      id: userData.id,
      username: userData.personal.name,
      position: userData.employment.position,
      department: userData.employment.department,
      gender: userData.personal.gender,
      birthDate: userData.personal.birthDate,
      phone: userData.personal.phone,
      email: userData.personal.email,
      action: [
        <Button key={0} onClick={() => dispProf("view")}>
          View
        </Button>,
        <Button key={1} onClick={() => dispProf("edit")}>
          Edit
        </Button>,
        <Button key={2}>Remove</Button>,
      ],
    },
    {
      id: userData.id,
      username: userData.personal.name,
      position: userData.employment.position,
      department: userData.employment.department,
      gender: userData.personal.gender,
      birthDate: userData.personal.birthDate,
      phone: userData.personal.phone,
      email: userData.personal.email,
      action: [
        <Button key={0} onClick={() => dispProf("view")}>
          View
        </Button>,
        <Button key={1} onClick={() => dispProf("edit")}>
          Edit
        </Button>,
        <Button key={2}>Remove</Button>,
      ],
    },
    {
      id: userData.id,
      username: userData.personal.name,
      position: userData.employment.position,
      department: userData.employment.department,
      gender: userData.personal.gender,
      birthDate: userData.personal.birthDate,
      phone: userData.personal.phone,
      email: userData.personal.email,
      action: [
        <Button key={0} onClick={() => dispProf("view")}>
          View
        </Button>,
        <Button key={1} onClick={() => dispProf("edit")}>
          Edit
        </Button>,
        <Button key={2}>Remove</Button>,
      ],
    },
    {
      id: userData.id,
      username: userData.personal.name,
      position: userData.employment.position,
      department: userData.employment.department,
      gender: userData.personal.gender,
      birthDate: userData.personal.birthDate,
      phone: userData.personal.phone,
      email: userData.personal.email,
      action: [
        <Button key={0} onClick={() => dispProf("view")}>
          View
        </Button>,
        <Button key={1} onClick={() => dispProf("edit")}>
          Edit
        </Button>,
        <Button key={2}>Remove</Button>,
      ],
    },
    {
      id: userData.id,
      username: userData.personal.name,
      position: userData.employment.position,
      department: userData.employment.department,
      gender: userData.personal.gender,
      birthDate: userData.personal.birthDate,
      phone: userData.personal.phone,
      email: userData.personal.email,
      action: [
        <Button key={0} onClick={() => dispProf("view")}>
          View
        </Button>,
        <Button key={1} onClick={() => dispProf("edit")}>
          Edit
        </Button>,
        <Button key={2}>Remove</Button>,
      ],
    },
    {
      id: userData.id,
      username: userData.personal.name,
      position: userData.employment.position,
      department: userData.employment.department,
      gender: userData.personal.gender,
      birthDate: userData.personal.birthDate,
      phone: userData.personal.phone,
      email: userData.personal.email,
      action: [
        <Button key={0} onClick={() => dispProf("view")}>
          View
        </Button>,
        <Button key={1} onClick={() => dispProf("edit")}>
          Edit
        </Button>,
        <Button key={2}>Remove</Button>,
      ],
    },
    {
      id: userData.id,
      username: userData.personal.name,
      position: userData.employment.position,
      department: userData.employment.department,
      gender: userData.personal.gender,
      birthDate: userData.personal.birthDate,
      phone: userData.personal.phone,
      email: userData.personal.email,
      action: [
        <Button key={0} onClick={() => dispProf("view")}>
          View
        </Button>,
        <Button key={1} onClick={() => dispProf("edit")}>
          Edit
        </Button>,
        <Button key={2}>Remove</Button>,
      ],
    },
    {
      id: userData.id,
      username: userData.personal.name,
      position: userData.employment.position,
      department: userData.employment.department,
      gender: userData.personal.gender,
      birthDate: userData.personal.birthDate,
      phone: userData.personal.phone,
      email: userData.personal.email,
      action: [
        <Button key={0} onClick={() => dispProf("view")}>
          View
        </Button>,
        <Button key={1} onClick={() => dispProf("edit")}>
          Edit
        </Button>,
        <Button key={2}>Remove</Button>,
      ],
    },
    {
      id: userData.id,
      username: userData.personal.name,
      position: userData.employment.position,
      department: userData.employment.department,
      gender: userData.personal.gender,
      birthDate: userData.personal.birthDate,
      phone: userData.personal.phone,
      email: userData.personal.email,
      action: [
        <Button key={0} onClick={() => dispProf("view")}>
          View
        </Button>,
        <Button key={1} onClick={() => dispProf("edit")}>
          Edit
        </Button>,
        <Button key={2}>Remove</Button>,
      ],
    },
    {
      id: userData.id,
      username: userData.personal.name,
      position: userData.employment.position,
      department: userData.employment.department,
      gender: userData.personal.gender,
      birthDate: userData.personal.birthDate,
      phone: userData.personal.phone,
      email: userData.personal.email,
      action: [
        <Button key={0} onClick={() => dispProf("view")}>
          View
        </Button>,
        <Button key={1} onClick={() => dispProf("edit")}>
          Edit
        </Button>,
        <Button key={2}>Remove</Button>,
      ],
    },
    {
      id: userData.id,
      username: userData.personal.name,
      position: userData.employment.position,
      department: userData.employment.department,
      gender: userData.personal.gender,
      birthDate: userData.personal.birthDate,
      phone: userData.personal.phone,
      email: userData.personal.email,
      action: [
        <Button key={0} onClick={() => dispProf("view")}>
          View
        </Button>,
        <Button key={1} onClick={() => dispProf("edit")}>
          Edit
        </Button>,
        <Button key={2}>Remove</Button>,
      ],
    },
    {
      id: userData.id,
      username: userData.personal.name,
      position: userData.employment.position,
      department: userData.employment.department,
      gender: userData.personal.gender,
      birthDate: userData.personal.birthDate,
      phone: userData.personal.phone,
      email: userData.personal.email,
      action: [
        <Button key={0} onClick={() => dispProf("view")}>
          View
        </Button>,
        <Button key={1} onClick={() => dispProf("edit")}>
          Edit
        </Button>,
        <Button key={2}>Remove</Button>,
      ],
    },
    {
      id: userData.id,
      username: userData.personal.name,
      position: userData.employment.position,
      department: userData.employment.department,
      gender: userData.personal.gender,
      birthDate: userData.personal.birthDate,
      phone: userData.personal.phone,
      email: userData.personal.email,
      action: [
        <Button key={0} onClick={() => dispProf("view")}>
          View
        </Button>,
        <Button key={1} onClick={() => dispProf("edit")}>
          Edit
        </Button>,
        <Button key={2}>Remove</Button>,
      ],
    },
    {
      id: userData.id,
      username: userData.personal.name,
      position: userData.employment.position,
      department: userData.employment.department,
      gender: userData.personal.gender,
      birthDate: userData.personal.birthDate,
      phone: userData.personal.phone,
      email: userData.personal.email,
      action: [
        <Button key={0} onClick={() => dispProf("view")}>
          View
        </Button>,
        <Button key={1} onClick={() => dispProf("edit")}>
          Edit
        </Button>,
        <Button key={2}>Remove</Button>,
      ],
    },
    {
      id: userData.id,
      username: userData.personal.name,
      position: userData.employment.position,
      department: userData.employment.department,
      gender: userData.personal.gender,
      birthDate: userData.personal.birthDate,
      phone: userData.personal.phone,
      email: userData.personal.email,
      action: [
        <Button key={0} onClick={() => dispProf("view")}>
          View
        </Button>,
        <Button key={1} onClick={() => dispProf("edit")}>
          Edit
        </Button>,
        <Button key={2}>Remove</Button>,
      ],
    },
    {
      id: userData.id,
      username: userData.personal.name,
      position: userData.employment.position,
      department: userData.employment.department,
      gender: userData.personal.gender,
      birthDate: userData.personal.birthDate,
      phone: userData.personal.phone,
      email: userData.personal.email,
      action: [
        <Button key={0} onClick={() => dispProf("view")}>
          View
        </Button>,
        <Button key={1} onClick={() => dispProf("edit")}>
          Edit
        </Button>,
        <Button key={2}>Remove</Button>,
      ],
    },
    {
      id: userData.id,
      username: userData.personal.name,
      position: userData.employment.position,
      department: userData.employment.department,
      gender: userData.personal.gender,
      birthDate: userData.personal.birthDate,
      phone: userData.personal.phone,
      email: userData.personal.email,
      action: [
        <Button key={0} onClick={() => dispProf("view")}>
          View
        </Button>,
        <Button key={1} onClick={() => dispProf("edit")}>
          Edit
        </Button>,
        <Button key={2}>Remove</Button>,
      ],
    },
    {
      id: userData.id,
      username: userData.personal.name,
      position: userData.employment.position,
      department: userData.employment.department,
      gender: userData.personal.gender,
      birthDate: userData.personal.birthDate,
      phone: userData.personal.phone,
      email: userData.personal.email,
      action: [
        <Button key={0} onClick={() => dispProf("view")}>
          View
        </Button>,
        <Button key={1} onClick={() => dispProf("edit")}>
          Edit
        </Button>,
        <Button key={2}>Remove</Button>,
      ],
    },
    {
      id: userData.id,
      username: userData.personal.name,
      position: userData.employment.position,
      department: userData.employment.department,
      gender: userData.personal.gender,
      birthDate: userData.personal.birthDate,
      phone: userData.personal.phone,
      email: userData.personal.email,
      action: [
        <Button key={0} onClick={() => dispProf("view")}>
          View
        </Button>,
        <Button key={1} onClick={() => dispProf("edit")}>
          Edit
        </Button>,
        <Button key={2}>Remove</Button>,
      ],
    },
    {
      id: userData.id,
      username: userData.personal.name,
      position: userData.employment.position,
      department: userData.employment.department,
      gender: userData.personal.gender,
      birthDate: userData.personal.birthDate,
      phone: userData.personal.phone,
      email: userData.personal.email,
      action: [
        <Button key={0} onClick={() => dispProf("view")}>
          View
        </Button>,
        <Button key={1} onClick={() => dispProf("edit")}>
          Edit
        </Button>,
        <Button key={2}>Remove</Button>,
      ],
    },
    {
      id: userData.id,
      username: userData.personal.name,
      position: userData.employment.position,
      department: userData.employment.department,
      gender: userData.personal.gender,
      birthDate: userData.personal.birthDate,
      phone: userData.personal.phone,
      email: userData.personal.email,
      action: [
        <Button key={0} onClick={() => dispProf("view")}>
          View
        </Button>,
        <Button key={1} onClick={() => dispProf("edit")}>
          Edit
        </Button>,
        <Button key={2}>Remove</Button>,
      ],
    },
    {
      id: userData.id,
      username: userData.personal.name,
      position: userData.employment.position,
      department: userData.employment.department,
      gender: userData.personal.gender,
      birthDate: userData.personal.birthDate,
      phone: userData.personal.phone,
      email: userData.personal.email,
      action: [
        <Button key={0} onClick={() => dispProf("view")}>
          View
        </Button>,
        <Button key={1} onClick={() => dispProf("edit")}>
          Edit
        </Button>,
        <Button key={2}>Remove</Button>,
      ],
    },
    {
      id: userData.id,
      username: userData.personal.name,
      position: userData.employment.position,
      department: userData.employment.department,
      gender: userData.personal.gender,
      birthDate: userData.personal.birthDate,
      phone: userData.personal.phone,
      email: userData.personal.email,
      action: [
        <Button key={0} onClick={() => dispProf("view")}>
          View
        </Button>,
        <Button key={1} onClick={() => dispProf("edit")}>
          Edit
        </Button>,
        <Button key={2}>Remove</Button>,
      ],
    },
    {
      id: userData.id,
      username: userData.personal.name,
      position: userData.employment.position,
      department: userData.employment.department,
      gender: userData.personal.gender,
      birthDate: userData.personal.birthDate,
      phone: userData.personal.phone,
      email: userData.personal.email,
      action: [
        <Button key={0} onClick={() => dispProf("view")}>
          View
        </Button>,
        <Button key={1} onClick={() => dispProf("edit")}>
          Edit
        </Button>,
        <Button key={2}>Remove</Button>,
      ],
    },
    {
      id: userData.id,
      username: userData.personal.name,
      position: userData.employment.position,
      department: userData.employment.department,
      gender: userData.personal.gender,
      birthDate: userData.personal.birthDate,
      phone: userData.personal.phone,
      email: userData.personal.email,
      action: [
        <Button key={0} onClick={() => dispProf("view")}>
          View
        </Button>,
        <Button key={1} onClick={() => dispProf("edit")}>
          Edit
        </Button>,
        <Button key={2}>Remove</Button>,
      ],
    },
    {
      id: userData.id,
      username: userData.personal.name,
      position: userData.employment.position,
      department: userData.employment.department,
      gender: userData.personal.gender,
      birthDate: userData.personal.birthDate,
      phone: userData.personal.phone,
      email: userData.personal.email,
      action: [
        <Button key={0} onClick={() => dispProf("view")}>
          View
        </Button>,
        <Button key={1} onClick={() => dispProf("edit")}>
          Edit
        </Button>,
        <Button key={2}>Remove</Button>,
      ],
    },
    {
      id: userData.id,
      username: userData.personal.name,
      position: userData.employment.position,
      department: userData.employment.department,
      gender: userData.personal.gender,
      birthDate: userData.personal.birthDate,
      phone: userData.personal.phone,
      email: userData.personal.email,
      action: [
        <Button key={0} onClick={() => dispProf("view")}>
          View
        </Button>,
        <Button key={1} onClick={() => dispProf("edit")}>
          Edit
        </Button>,
        <Button key={2}>Remove</Button>,
      ],
    },
    {
      id: userData.id,
      username: userData.personal.name,
      position: userData.employment.position,
      department: userData.employment.department,
      gender: userData.personal.gender,
      birthDate: userData.personal.birthDate,
      phone: userData.personal.phone,
      email: userData.personal.email,
      action: [
        <Button key={0} onClick={() => dispProf("view")}>
          View
        </Button>,
        <Button key={1} onClick={() => dispProf("edit")}>
          Edit
        </Button>,
        <Button key={2}>Remove</Button>,
      ],
    },
    {
      id: userData.id,
      username: userData.personal.name,
      position: userData.employment.position,
      department: userData.employment.department,
      gender: userData.personal.gender,
      birthDate: userData.personal.birthDate,
      phone: userData.personal.phone,
      email: userData.personal.email,
      action: [
        <Button key={0} onClick={() => dispProf("view")}>
          View
        </Button>,
        <Button key={1} onClick={() => dispProf("edit")}>
          Edit
        </Button>,
        <Button key={2}>Remove</Button>,
      ],
    },
    {
      id: userData.id,
      username: userData.personal.name,
      position: userData.employment.position,
      department: userData.employment.department,
      gender: userData.personal.gender,
      birthDate: userData.personal.birthDate,
      phone: userData.personal.phone,
      email: userData.personal.email,
      action: [
        <Button key={0} onClick={() => dispProf("view")}>
          View
        </Button>,
        <Button key={1} onClick={() => dispProf("edit")}>
          Edit
        </Button>,
        <Button key={2}>Remove</Button>,
      ],
    },
    {
      id: userData.id,
      username: userData.personal.name,
      position: userData.employment.position,
      department: userData.employment.department,
      gender: userData.personal.gender,
      birthDate: userData.personal.birthDate,
      phone: userData.personal.phone,
      email: userData.personal.email,
      action: [
        <Button key={0} onClick={() => dispProf("view")}>
          View
        </Button>,
        <Button key={1} onClick={() => dispProf("edit")}>
          Edit
        </Button>,
        <Button key={2}>Remove</Button>,
      ],
    },
    {
      id: userData.id,
      username: userData.personal.name,
      position: userData.employment.position,
      department: userData.employment.department,
      gender: userData.personal.gender,
      birthDate: userData.personal.birthDate,
      phone: userData.personal.phone,
      email: userData.personal.email,
      action: [
        <Button key={0} onClick={() => dispProf("view")}>
          View
        </Button>,
        <Button key={1} onClick={() => dispProf("edit")}>
          Edit
        </Button>,
        <Button key={2}>Remove</Button>,
      ],
    },
    {
      id: userData.id,
      username: userData.personal.name,
      position: userData.employment.position,
      department: userData.employment.department,
      gender: userData.personal.gender,
      birthDate: userData.personal.birthDate,
      phone: userData.personal.phone,
      email: userData.personal.email,
      action: [
        <Button key={0} onClick={() => dispProf("view")}>
          View
        </Button>,
        <Button key={1} onClick={() => dispProf("edit")}>
          Edit
        </Button>,
        <Button key={2}>Remove</Button>,
      ],
    },
    {
      id: userData.id,
      username: userData.personal.name,
      position: userData.employment.position,
      department: userData.employment.department,
      gender: userData.personal.gender,
      birthDate: userData.personal.birthDate,
      phone: userData.personal.phone,
      email: userData.personal.email,
      action: [
        <Button key={0} onClick={() => dispProf("view")}>
          View
        </Button>,
        <Button key={1} onClick={() => dispProf("edit")}>
          Edit
        </Button>,
        <Button key={2}>Remove</Button>,
      ],
    },
  ];

  const addUser = () => {};
  const dispProf = (val) => {
    setProfileName(val);
    setShowProfile(true);
  };
  const modalProps = {
    visible: showProfile,
    onOk: addUser,
    onCancel: () => {
      setShowProfile(false);
    },
  };
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
      isSelected: true,
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
  ];
  return (
    <div
      className={`d-flex justify-content-center flex-fill`}
      style={{ paddingTop: "100px" }}
    >
      <div className={`mt-4`}>
        <SideBar items={items} />
      </div>
      <div className={`d-flex flex-column flex-fill`}>
        <div className="pd-big">
          <div className="aln-r pd">
            <Button
              onClick={() => dispProf("add")}
              type="default"
              className={`px-3 py-2 fs-1`}
            >
              + Add User
            </Button>
          </div>
          <Table
            dataSource={dataSource}
            columns={columns}
            pagination={{ current: 1, pageSize: 5 }}
          />
          ;
          <Profile name={profileName} data={userData} modalProps={modalProps} />
        </div>
      </div>
    </div>
  );
};
export default UserList;
