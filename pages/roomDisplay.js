import React from "react";
import { Image, Menu, Button, Collapse } from "antd";
import styles from '../styles/style.module.css';
import { Reservation } from "../components/Reservation";
import { RoomSearchBox } from "../components/RoomSearchBox";
import RoomDetail from "../components/RoomDetail";
import Profile from "../components/Profile";
import Modal from "antd/lib/modal/Modal";

const { Panel } = Collapse;
const { SubMenu } = Menu;


export default class RoomDisplay extends React.Component {
  state = {
    roomDetailVisible: false,
    list: [
      {
        id: 0,
        imgs: ["/assets/images/3.png", "/assets/images/2.png"],
        type: "Delux Room",
        available: true,
        availableMsg: "Only 1 Room left",
        beds: 1,
        sleeps: 2,
        description: "Room description in detail goes here",
        price: 1231,
        discount: 12,
        accessibility: ["308 sq ft", "City view", "Free wifi", "Free self parking"],
      },
    ],
  };

  showModal = () => {
    this.setState({ roomDetailVisible: true });
  }
  handleOk = () => {
    this.setState({ roomDetailVisible: false })
  }
  handleCancel = () => {
    this.setState({ roomDetailVisible: false })
  }


  render() {
    return (
      <>
        <RoomSearchBox />
        <Reservation />
        <Profile />
        <div className="row flexcntnt-cntr flex-wrap">
          {
            this.state.list.map((room) => (
              <div className={"w-md test " + styles.roomDisp}>
                <div className={styles.imgCont}>
                  <Image.PreviewGroup >
                    {
                      room.imgs.map((src) => {
                        return <Image src={src} />
                      })
                    }
                  </Image.PreviewGroup>
                  <small className={styles.avs}>
                    {room.availableMsg}
                  </small>
                </div>
                <div className={styles.descr}>
                  <h2>{room.type}</h2>
                  <div>
                    {room.beds} beds | &nbsp;
                    {room.sleeps} sleeps
                  </div>
                  <div className={styles.detail}>
                    <Collapse
                      bordered={false}
                      defaultActiveKey={[]} ghost>
                      <Panel header="Room Details" key="1">
                        {room.description}
                      </Panel>
                    </Collapse>
                  </div>
                  <hr />
                  <div>
                    ETB {room.price} / night
                  </div>
                  <div className="row">
                    <Button onClick={this.showModal} style={{ flex: 1 }} type="primary">BOOK NOW</Button>
                    <Modal
                      visible={this.state.roomDetailVisible}
                      onOk={this.handleOk}
                      onCancel={this.handleCancel}
                      footer={[]}
                    >
                      <RoomDetail item={room} />
                    </Modal>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </>
    );
  }
}