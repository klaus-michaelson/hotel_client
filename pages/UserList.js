import { Button, Table } from "antd"
import Modal from "antd/lib/modal/Modal";
import { useState } from "react";
import Profile from "../components/Profile";


const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: 'Position',
    dataIndex: 'position',
    key: 'position',
  },
  {
    title: 'Department',
    dataIndex: 'department',
    key: 'department',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
  },
  {
    title: 'BirthDate',
    dataIndex: 'birthDate',
    key: 'birthDate',
  },
  {
    title: 'phone',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
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
      phone: "(+251) 9 11"
    },
    bankNo: "100005123124"
  },
  employment: {
    position: "Manager",
    department: "Finance",
    salary: 1231,
  },
}

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
        <Button onClick={() => dispProf("view")}>View</Button>,
        <Button onClick={() => dispProf("edit")}>Edit</Button>,
        <Button >Remove</Button>,
      ]
    },
  ];

  const addUser = () => {

  }
  const dispProf = (val) => {
    setProfileName(val);
    setShowProfile(true);
  }
  const modalProps = {
    visible: showProfile,
    onOk: addUser,
    onCancel: () => { setShowProfile(false) }
  }
  return (
    <>
      <br /><br /><br /><br />
      <div class='pd-big'>
        <div class='aln-r pd'>
          <Button onClick={() => dispProf("add")}>+ Add User</Button>
        </div>
        <Table dataSource={dataSource} columns={columns} />;
        <Profile name={profileName} data={userData} modalProps={modalProps} />
      </div>
    </>
  )
}
export default UserList;