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

const AdminRoom = () => {
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
      reservation: [
        { from: "01/02/2020", to: "04/02/2020", user: "user102" },
        { from: "01/02/2020", to: "04/02/2020", user: "user103" },
        { from: "01/02/2020", to: "04/02/2020", user: "user104" },
      ],
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
      responsive: ["sm"],
      key: "room_type",
    },
    {
      title: "Floor",
      dataIndex: "floor",
      responsive: ["sm"],
      key: "floor",
    },
    {
      title: "Room Id",
      dataIndex: "room_id",
      key: "room_id",
    },
    {
      title: "Reservation",
      dataIndex: "reservation",
      key: "reservation",
      sorter: true,
      responsive: ["sm"],
      filters: [
        { text: "Reserved", value: "reserved" },
        { text: "Not Reserved", value: "notReserved" },
      ],
      render: (reservation) => {
        const reserveDisplay = reservation ? (
          <Tag color="green">Reserved</Tag>
        ) : (
          <Tag color="red">Not Reserved Yet</Tag>
        );
        return <div>{reserveDisplay}</div>;
      },
    },
    {
      title: "Inside",
      dataIndex: "inside",
      key: "inside",
      responsive: ["md"],
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
      responsive: ["md"],
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
        <Space>
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
  const expandedRowRender = (row) => {
    const columns = [
      { title: "Reservers", dataIndex: "user", key: "user" },
      {
        title: "From",
        dataIndex: "from",
        key: "from",
        responsive: ["sm"],
      },
      { title: "To", dataIndex: "to", key: "to", responsive: ["sm"] },
      {
        title: "Action",
        dataIndex: "action",
        key: "action",
        render: (_text, record) => (
          <Button
            onClick={() => {
              console.log(record.room_id);
            }}
            type="default"
          >
            Edit
          </Button>
        ),
      },
    ];

    const { reservation } = row;
    const data = reservation
      ? reservation.map((element, index) => ({ ...element, key: index }))
      : [];
    return <Table columns={columns} dataSource={data} pagination={false} />;
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
      isSelected: true,
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
            expandable={{ expandedRowRender }}
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
export default AdminRoom;
