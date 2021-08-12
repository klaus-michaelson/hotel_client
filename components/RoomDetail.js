import { WifiOutlined, ExpandAltOutlined, PartitionOutlined, PictureOutlined, AimOutlined } from "@ant-design/icons";
import { Calendar, Button, Collapse, Select } from "antd";
import Modal from "antd/lib/modal/Modal";
import React, { Component, useEffect, useState } from "react";
import { Reservation } from "./Reservation";

const { Panel } = Collapse;

const icons = {
  "Sqft": <ExpandAltOutlined />,
  "Wifi": <WifiOutlined />,
  "Central": <AimOutlined />,
  "Parking": <PartitionOutlined />,
  "City view": <PictureOutlined />
}

const DetailView = ({ changePage, room }) => {
  const handleChange = () => {

  }

  return (
    <div>
      {room.rooms.length > 0 ? room.rooms.length + " Rooms Left" : "None Available Now"}
      <Collapse>
        <Panel header="View Availability Calendar" style={{ padding: 5 }}>
          <Calendar fullscreen={false} onPanelChange={handleChange} />
        </Panel>
      </Collapse>

      <div class='mrg-ver-big'>
        <h2 class='nomrg '>Accessibility</h2>
        <div class='pd row flex-wrap flex-space-ev'>
          {
            Object.entries(room.accessibility).map((item) => {
              let value = "";
              if (item[1] === true) {
                value = [icons[item[0]], " " + item[0]]
              } else if (item[1] === false) return false;
              else {
                value = [icons[item[0]], " " + item[1]];
              }

              return (
                <span class='inline pd-hor'>
                  {value}
                </span>
              )
            })
          }
        </div>
      </div>

      <div class='mrg-ver-big'>
        <h2>Room Description</h2>
        <p>
          {room.description}
        </p>
      </div>

      <div class='mrg-ver-big'>
        <div class='aln-r'>
          <div>
            <small class='theme-bgy rad inline pd-hor bold'>
              {room.discount}% off
            </small>
          </div>
          <h2 class='inline'>
            ETB <b class=''>{room.price}</b>
          </h2>
          <small> / night</small>
        </div>
      </div>
      <div>
        <Button type="primary"
          onClick={() => changePage("reservation")}>Reserve</Button>
      </div>
    </div>

  )
}

const PageDisp = (props) => {
  let component = null;

  props.children.map((page) => {
    console.log(props.url + " ." + page.props.path)
    if (props.url == page.props.path) {
      component = page.props.component;
      return true;
    }
  })

  return component;
}

const RoomDetail = (props) => {
  const room = props.item;

  const [url, setUrl] = useState("detailView");

  const changePage = (url) => {
    setUrl(url);
  }

  const [floors, setFloors] = useState([]);
  const [views, setViews] = useState(["inside", "outside"]);

  room.rooms.map((room) => {
    if (!floors.includes(room.floor))
      setFloors(() => [...floors, room.floor]);
  })


  const updateViews = (floorValue) => {
    let temp = [];
    room.rooms.map((room) => {
      if (!temp.includes(room.view)) {
        if (room.floor == floorValue)
          temp.push(room.view);
      }
    })
    setViews(temp);
  }

  const reserveProps = {
    updateViews: updateViews,
    data: {
      views: views,
      floors: floors,
    }
  }

  const detailView = <DetailView room={room} changePage={changePage} />;
  const reservation = <Reservation {...reserveProps} changePage={changePage} footer={
    <Button onClick={() => changePage("detailView")}>Back  <small className="pd-sml">to room detail</small></Button>
  } />;
  return (
    <Modal {...props.modalProps} footer="">
      <PageDisp url={url} >
        <div path="detailView" component={detailView} />
        <div path="reservation" component={reservation} />
      </PageDisp>
    </Modal>
  )
}

export default RoomDetail;