/* eslint-disable react/display-name */
import { useState } from "react";

import { PlusOutlined } from "@ant-design/icons";
import { Table, Tag, Button, Row, Form, Popconfirm, Input, Switch } from "antd";

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

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === "switch" ? <Switch /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          valuePropName={inputType === "switch" ? "checked" : "value"}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};
const AdminRoomServices = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [recordKey, setRecordKey] = useState();
  const [form] = Form.useForm();
  const [count, setCount] = useState(2);
  const [editingKey, setEditingKey] = useState("");
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

  const isEditing = (record) => record.key === editingKey;
  const edit = (record) => {
    console.log(record);
    form.setFieldsValue({
      name: "",
      active: true,
      description: "",
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey("");
  };
  const handleAdd = () => {
    const newData = {
      key: count,
      name: "",
      active: "",
      description: "",
    };
    setEditingKey(count);
    setData([...data, newData]);
    setCount(count + 1);
  };
  const save = async (key) => {
    try {
      console.log(form.getFieldsValue());
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const roomData = [
    {
      name: "Tooth brush",
      active: true,
      description: "Standard Tooth brush",
    },
    {
      name: "Tooth paste",
      active: false,
      description: "Standard Tooth paste",
    },
  ];
  const [data, setData] = useState(roomData);
  const dataSource = data.map((element, index) => {
    return { ...element, key: index };
  });
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      editable: true,
    },
    {
      title: "Active",
      dataIndex: "active",
      key: "active",
      render: (active) =>
        active ? (
          <Tag color="green">Active</Tag>
        ) : (
          <Tag color="red">Not Active</Tag>
        ),
      editable: true,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      responsive: ["sm"],
      editable: true,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Button
              type="default"
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
              size="small"
            >
              Save
            </Button>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <Button size="small" type="default">
                cancel
              </Button>
            </Popconfirm>
          </span>
        ) : (
          <Button
            type="default"
            disabled={editingKey !== ""}
            onClick={() => edit(record)}
          >
            Edit
          </Button>
        );
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === "active" ? "switch" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
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
      isSelected: true,
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
          <Form form={form} component={false}>
            <Button
              onClick={handleAdd}
              type="default"
              style={{
                marginBottom: 16,
              }}
            >
              Add New <PlusOutlined />
            </Button>
            <Table
              components={{
                body: {
                  cell: EditableCell,
                },
              }}
              columns={mergedColumns}
              dataSource={dataSource}
              rowClassName="editable-row"
              onChange={handleTableChange}
            />
          </Form>
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
export default AdminRoomServices;
