import React from "react"
import { groupNumber } from "../../data"
import './Statistics.css'
import { BsArrowUpShort } from 'react-icons/bs'
import StatisticsChart from "../StatisticsChart/StatisticsChart"
const Statistics = () => {
    return (<>
    <div className="containerstat theme-container">
            <span className="title">Overview Statistics</span>

            <div className="cards grey-container">

                <div>
                    <div className="arrowIcon">
                        <BsArrowUpShort />
                    </div>

                    <div className="card">
                        <span>Top item this month</span><span>Office comps</span>
                    </div>
                </div>

                <div className="card">
                    <span>Items</span><span>$ {groupNumber(455)}</span>
                </div>

                <div className="card">
                    <span>Profit</span><span>$ {groupNumber(370000)}</span>
                </div>

                <div className="card">
                    <span>Daily Average</span><span>$ {groupNumber(2000)}</span>
                </div>
            </div>

         <StatisticsChart/>
        </div>
    </>)
}
export default Statistics