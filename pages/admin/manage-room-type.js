/* eslint-disable react/display-name */
import { useState } from "react";

import { PlusOutlined } from "@ant-design/icons";
import { Table, Tag, Button, Row, Space } from "antd";

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
import RoomModal from "../../components/RoomModal";

const AdminRoomType = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [recordKey, setRecordKey] = useState();
  const randomColor = () => {
    return [
      "orange",
      "gold",
      "lime",
      "green",
      "cyan",
      "blue",
      "geekblue",
      "purple",
      "magneta",
    ][Math.floor(Math.random() * 8)];
  };
  const showModal = (localRecordKey) => {
    if (localRecordKey == 0 || localRecordKey) {
      setRecordKey(localRecordKey);
      setIsModalVisible(true);
    } else {
      setRecordKey(undefined);
      setIsModalVisible(true);
    }
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const roomData = [
    {
      type_name: "Single",
      price: ["500", "1000"],
      amount: 10,
      services: [
        "gym",
        "breakfast",
        "spa",
        "room-service",
        "appliances",
        "gym",
        "breakfast",
        "spa",
        "room-service",
        "appliances",
      ],
      description: "fancy stuff",
    },
    {
      type_name: "Double",
      price: ["1000", "2000"],
      amount: 10,
      services: ["gym", "breakfast"],
      description: "fancy stuff",
    },
  ];
  const [data, _setData] = useState(roomData);
  const dataSource = data.map((element, index) => {
    return { ...element, key: index };
  });
  const columns = [
    {
      title: "Type Name",
      dataIndex: "type_name",
      key: "type_name",
    },
    {
      title: "weekday|weekend Price",
      dataIndex: "price",
      key: "price",
      render: (price) => (
        <div>
          {price[0]} | {price[1]}{" "}
          <div style={{ float: "right" }} className="mr-3">
            brr
          </div>
        </div>
      ),
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Services",
      dataIndex: "services",
      key: "services",
      responsive: ["lg"],
      render: (services) => (
        <>
          {services.map((tag, index) => (
            <Tag color={randomColor()} key={index}>
              {tag}
            </Tag>
          ))}
        </>
      ),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Action",
      key: "action",
      render: (_text, record) => (
        <Space>
          <Button
            onClick={() => {
              showModal(record.key);
            }}
            type="default"
          >
            View
          </Button>
          <Button
            onClick={() => {
              showModal(record.key);
            }}
            type="default"
          >
            Edit
          </Button>
          <Button
            onClick={() => {
              console.log(record.room_id);
            }}
            type="default"
            className="border-danger button-danger"
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];
  const handleTableChange = async (pagination, filters, sorter) => {
    console.log(pagination, filters, sorter);
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
      isSelected: true,
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
        <div>
          <Row justify="end">
            <Button
              className="mr-5 mb-3"
              type="default"
              style={{
                paddingLeft: 30,
                paddingRight: 30,
              }}
              onClick={() => showModal(undefined)}
            >
              <PlusOutlined /> Add New
            </Button>
          </Row>
          <Table
            dataSource={dataSource}
            columns={columns}
            onChange={handleTableChange}
          />
          <RoomModal
            title="Add Room"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            defaultValues={
              recordKey == 0 || recordKey ? roomData[recordKey] : {}
            }
          />
        </div>
      </div>
    </div>
  );
};
export default AdminRoomType;
