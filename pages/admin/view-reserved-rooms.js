/* eslint-disable react/display-name */
import { useState } from "react";

import { PlusOutlined } from "@ant-design/icons";
import { Table, Tag, Button, Row } from "antd";

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
const AdminViewReserved = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [recordKey, setRecordKey] = useState();
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 100,
  });
  const [loading, setLoading] = useState(false);
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
      room_type: "Single",
      floor: "1",
      inside: false,
      room_id: "single 100",
      active: true,
    },
    {
      room_type: "Double",
      floor: "2",
      inside: true,
      room_id: "101",
      active: false,
    },
  ];
  const [data, setData] = useState(roomData);
  const dataSource = data.map((element, index) => {
    return { ...element, key: index };
  });

  const columns = [
    {
      title: "Room Type",
      dataIndex: "room_type",
      key: "room_type",
    },
    {
      title: "Floor",
      dataIndex: "floor",
      key: "floor",
    },
    {
      title: "Room Id",
      dataIndex: "room_id",
      key: "room_id",
    },
    {
      title: "Inside",
      dataIndex: "inside",
      key: "inside",
      render: (inside) =>
        inside ? (
          <Tag color="green">inside view</Tag>
        ) : (
          <Tag color="red">outside view</Tag>
        ),
    },
    {
      title: "Active",
      dataIndex: "active",
      key: "active",
      render: (active) =>
        active ? (
          <Tag color="green">active</Tag>
        ) : (
          <Tag color="red">not active</Tag>
        ),
    },
    {
      title: "Action",
      key: "action",
      render: (_text, record) => (
        <Button
          onClick={() => {
            showModal(record.key);
            console.log(recordKey);
          }}
          type="default"
        >
          Edit
        </Button>
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
      isSelected: true,
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
            pagination={pagination}
            loading={loading}
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
export default AdminViewReserved;
