import { Col, Divider, Image, Row, Typography, Upload } from "antd";
import Modal from "antd/lib/modal/Modal";
import React, { Component } from "react";
import { EnvironmentFilled, PhoneFilled, UploadOutlined } from "@ant-design/icons";

const { Paragraph } = Typography;

export default class Profile extends Component {
  state = {
    name: "Someone Named",
    gender: "Male/Female",
    position: "Manager",
    department: "Finance",
    emergencyContact: {
      name: "",
      phone: 0912341234
    },
    salary: 1231,
    address: "Addis Ababa / Saris",
    phone: "(+251) 9 1234 1234"
  }
  update(name, val) {
    if (name == "name")
      this.setState({ name: val });
    else if (name == "address")
      this.setState({ address: val });
    else if (name == "phone")
      this.setState({ phone: val });
  }
  render() {
    return (
      <Modal
        visible={true}
        footer={[]}
      >
        <Row gutter={16}>
          <Col span={8}>
            <Row>
              <Image src="/assets/images/3.png"
                preview={false}
              />
            </Row>
            <Row>
              <Upload name='image'
                className="theme-bgy aln-cntr pntr str">
                <UploadOutlined />
              </Upload>
            </Row>
          </Col>
          <Col span={16}>
            <div className="">
              <small>
                Name
              </small>
            </div>
            <Paragraph
              editable={{ onChange: (val) => this.update("name", val) }}>
              {this.state.name}
            </Paragraph>
          </Col>
        </Row>
        <Divider orientation="left">Contact Info</Divider>
        <Col>
          <Row gutter={16}>
            <Col ><EnvironmentFilled /></Col>
            <Col >
              <Paragraph
                editable={{ onChange: (val) => this.update("address", val) }}>
                <span className="pd-hor">
                  {this.state.address}
                </span>
              </Paragraph>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col><PhoneFilled /></Col>
            <Col>
              <Paragraph
                editable={{ onChange: (val) => this.update("phone", val) }} copyable>
                <span className="pd-hor">
                  {this.state.phone}
                </span>
              </Paragraph>
            </Col>
          </Row>
        </Col>
        {/* <div className='row flexwrap'>
          <div className="flex1 rltv">
            <div className='col rltv' >
            </div>
          </div>
          <div className="flex3 valign-btm">
            <div className="valign-btm pd">
            </div>
          </div>
        </div> */}
      </Modal >
    )
  }
}