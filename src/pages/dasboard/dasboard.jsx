import React from "react";
import Order from "../../conponents/order/order";
import Statistics from "../../conponents/staticist/staticties";
import { cardsData, groupNumber } from "../../data";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <>
      <div className="containerDash">

{/* left side */}
<div className="dashboardCard">
  
  <div className="dashboardHead">
    <div className="head">
      <span>Dashboard</span>

      <div className="durationButton">
        <select>
          <option value="">1 week</option>
          <option value="">1 month</option>
          <option value="">1 year</option>
        </select>
      </div>
    </div>
      <div className="cards">
        {
          cardsData.map((card, index)=> (
            <div className="card">
              <div className="cardHead">
                <span className="tcolor">{card.title}</span>
                <span>+{card.change}</span>
              </div>

              <div className="cardAmount">
                <span>$</span>
                <span className="amount">{groupNumber(card.amount)}</span>
              </div>
            </div>
          ))
        }
      </div>
  </div>




<Statistics/>
</div>


<Order/>

</div>
    </>
  );
};
export default Dashboard;
