import React, { Component } from "react";
import { CalendarOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { DatePicker, InputNumber, Dropdown, Button } from "antd";
import styles from '../styles/style.module.css';


const { RangePicker } = DatePicker;


export class Reservation extends Component {
    state = {
        startDate: null,
        endDate: null,
        guests: {
            adults: 0,
            childs: 0
        }
    }
    render() {
        const dropdown = (
            <div className={styles.gBookDropdownBox}>
                <div className='row'>
                    <span className='pd'>
                        <CalendarOutlined />
                    </span>
                    <RangePicker placeholder={["Check-in Date", "Check-out Date"]} />
                </div>
                <br />
                <div className="row">
                    <span className='pd'>
                        <UsergroupAddOutlined />
                    </span>
                    <div>
                        <h3 >Guests</h3>
                        <div className='row'>
                            <span className='pd'>
                                Adults: <InputNumber min={1} max={10} defaultValue={0} bordered={false} />
                            </span>
                            <span className='pd'>
                                Children: <InputNumber min={1} max={10} defaultValue={0} bordered={false} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
        return (
            <div className={'mrg-ver ' + styles.gBookInfo}>
                <div>
                    <Dropdown overlay={dropdown} trigger={["click"]}>
                        <div>
                            <Button size={'large'} onClick={ev => ev.preventDefault()}>
                                <CalendarOutlined className='' />
                                Add Booking Info
                            </Button>
                        </div>
                    </Dropdown>
                </div>
            </div>
        )
    }
}
