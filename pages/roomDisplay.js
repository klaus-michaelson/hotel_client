import React from "react";
import { Image, Menu, Button, Collapse } from "antd";
import styles from "../styles/style.module.css";
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
        rooms: [
          {
            no: 119,
            floor: 2,
            view: "outside",
          },
          {
            no: 102,
            floor: 1,
            view: "outside",
          },
        ],
        available: true,
        beds: 1,
        sleeps: 2,
        description: "Room description in detail goes here",
        price: 1231,
        discount: 12,
        accessibility: {
          Sqft: "308 sq ft",
          "City view": true,
          Central: true,
          Wifi: true,
          Parking: true,
        },
      },
    ],
  };

  showModal = () => {
    this.setState({ roomDetailVisible: true });
  };
  handleOk = () => {
    this.setState({ roomDetailVisible: false });
  };
  handleCancel = () => {
    this.setState({ roomDetailVisible: false });
  };

  render() {
    const modalProps = {
      visible: this.state.roomDetailVisible,
      onOk: this.handleOk,
      onCancel: this.handleCancel,
    };
    return (
      <>
        <br />
        <br />
        <br />
        <br />
        <RoomSearchBox />
        {/* <Profile /> */}
        <div className="row flexcntnt-cntr flex-wrap">
          {this.state.list.map((room) => (
            <div key={room.id} className={"w-md test " + styles.roomDisp}>
              <div className={styles.imgCont}>
                <Image.PreviewGroup>
                  {room.imgs.map((src) => {
                    return <Image key={src} src={src} alt="alt" />;
                  })}
                </Image.PreviewGroup>
                <small className={styles.avs}>
                  Rooms Left : {room.rooms.length}
                </small>
              </div>
              <div className={styles.descr}>
                <h2>{room.type}</h2>
                <div>
                  {room.beds} beds | &nbsp;
                  {room.sleeps} sleeps
                </div>
                <div className={styles.detail}>
                  <Collapse bordered={false} defaultActiveKey={[]} ghost>
                    <Panel header="Room Details" key="1">
                      {room.description}
                    </Panel>
                  </Collapse>
                </div>
                <hr />
                <div>ETB {room.price} / night</div>
                <div className="row">
                  <Button
                    onClick={this.showModal}
                    style={{ flex: 1 }}
                    type="primary"
                  >
                    BOOK NOW
                  </Button>
                  <RoomDetail item={room} modalProps={modalProps} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}
