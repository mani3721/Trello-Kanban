import React from "react";
import { groupNumber, ordersData } from "../../data";
import OrdersPieChart from "../OrdersPieChart/OrdersPieChart";

import './order.css'
const Order=()=>{
    return (
        <div className="containerorder theme-container">
            <div className="head">
                <img src="./logo.png" alt="logo" />
                <span>Orders today</span>
            </div>

            <div className="grey-container stat ">
                <span>Amount</span>
                <span>$ {groupNumber(4560)}</span>
            </div>

            <div className="orders">
                {
                    ordersData.map((order, index) => (
                        <div key={index} className="order">
                            <div>
                                <span>{order.name}</span>
                                <span>$ {order.change}</span>
                            </div>
                            <div>
                                <span>{order.type}</span>
                                <span>Items: {order.items}</span>
                            </div>
                        </div>
                    ))
                }
            </div>


            <div className="orderChart">
                <span className="split">Split by orders</span>
                <OrdersPieChart/>
            </div>
        </div>
    )
}
export default Order;