import { WifiOutlined } from "@ant-design/icons";
import { Calendar, Button, Collapse } from "antd";
import React, { Component } from "react";

const { Panel } = Collapse;

class RoomDetail extends Component {
  handleChange() {

  }
  render() {
    const room = this.props.item;
    return (
      <div>
        {room.available ? room.availableMsg : "Not Available Now"}
        <Collapse>
          <Panel header="Check Availability" style={{ padding: 5 }}>
            <Calendar fullscreen={false} onPanelChange={this.handleChange} />
          </Panel>
        </Collapse>

        <div class='mrg-ver-big'>
          <h2 class='nomrg '>Accessibility</h2>
          <div class='pd'>
            {room.accessibility.map((item) => (
              <span class='inline pd-hor'><WifiOutlined /> {item}</span>
            ))}
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
          <div>
            <Button type="primary">Reserve</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default RoomDetail;