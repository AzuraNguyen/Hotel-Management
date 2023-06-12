import React from 'react';
import Room from "../icons/room.svg"
import Report from "../icons/report.svg"
import Payment from "../icons/payment.svg"
import Customer from "../icons/customer.svg"
import Rule from "../icons/rules.svg"
import Renting from "../icons/renting.svg"

const h = 20;
const w = 20;

export const SidebarData = [
    {
        title: "Tạo đặt phòng",
        icon: <img src={Renting} style={{height:h, width:w}}/>,
        link: '/renting'
    },
    {
        title: "Thống kê",
        icon: <img src={Report} style={{height:h, width:w}}/>,
        link: '/report'
    },
    {
        title: "Sơ đồ phòng",
        icon: <img src={Room} style={{height:h, width:w}}/>,
        link: '/room'
    },
    {
        title: "Thanh toán",
        icon: <img src={Payment} style={{height:h, width:w}}/>,
        link: '/payment'
    },
    {
        title: "Quản lý khách",
        icon: <img src={Customer} style={{height:h, width:w}}/>,
        link: '/customer'
    },
    {
        title: "Cập nhật quy định",
        icon: <img src={Rule} style={{height:h, width:w}}/>,
        link: '/rule'
    }
]
