import React from "react";
import "./BillingPlan.scss";
import { ReactComponent as Tick } from "../../assets/svg/frameworkSvg/tick.svg";

const data = [
  {
    Compare: "Number of Users",
    basic: "20 Pages",
    advance: "600 Pages",
    mega: "Unlimited",
  },
  {
    Compare: "User Per Page",
    basic: "5 Pages",
    advance: "50 Pages",
    mega: "Unlimited",
  },
  {
    Compare: "Includes essential features to get started",
    basic: <Tick />,
    advance: <Tick />,
    mega: <Tick />,
  },
  {
    Compare: "More advanced features for increased productivity",
    basic: <Tick />,
    advance: <Tick />,
    mega: <Tick />,
  },
  {
    Compare: "Designing & Development",
    basic: "",
    advance: <Tick />,
    mega: <Tick />,
  },
  {
    Compare: "Customizable options to meet your specific needs",
    basic: "",
    advance: <Tick />,
    mega: <Tick />,
  },
  {
    Compare: "Secure data storage",
    basic: "",
    advance: <Tick />,
    mega: <Tick />,
  },
  { Compare: "Email support", basic: "", advance: "", mega: <Tick /> },
  { Compare: "24/7 Customer Support", basic: "", advance: "", mega: <Tick /> },
  {
    Compare: "Analytic and reporting",
    basic: "",
    advance: <Tick />,
    mega: <Tick />,
  },
  {
    Compare: "Account and Managemnet",
    basic: "",
    advance: <Tick />,
    mega: <Tick />,
  },
];

function BillingPlan() {
  return (
    <div className="plan">
      <table>
        <tr>
          <th className="data1">
            <div className="data1content">Compare Plans</div>
            <span>
              Choose your workspace according to your organisaion plan
            </span>
          </th>
          <th className="data2">
            Basic Plan
            <div>
              <button className="Basic">Add to Cart</button>
            </div>
          </th>
          <th className="data3">
            Advance Plan
            <div>
              <button className="Basic">Add to Cart</button>
            </div>
          </th>
          <th className="data4">
            Mega Plan
            <div>
              <button className="Basic">Add to Cart</button>
            </div>
          </th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.Compare}</td>
              <td>{val.basic}</td>
              <td>{val.advance}</td>
              <td>{val.mega}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default BillingPlan;
