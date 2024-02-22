import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AppDispatch } from "../../redux/store";
import { useEffect, useState } from "react";
import { getModuleDetails } from "../../redux/slice/cartSlice/cartApiSlice";
interface Module {
  moduleName: string;
  modulePlan: string;
}
interface Cart {
  sector: string;
  items: Module[];
}

const Plans = ({ sector, cart }: { sector: any, cart: any }) => {
  const dispatch = useDispatch<AppDispatch>();

  // Generate validModuleNames dynamically from userData
  const validModuleNames = cart.items?.map(
    (item: Module) => item.moduleName
  );
  const checkBoughtPlan = (modulename: string) => {
    return validModuleNames?.includes(modulename) ? " #6AAABF " : "#0C81A8";
  };

  const changeText = (modulename: string) => {
    return validModuleNames?.includes(modulename) ? "Edit Plan" : "Purchase";
  };

  const onModuleClickHandler = (moduleName: string) => {
    document.cookie = `user_token=${localStorage.getItem('idToken')}; expires=${new Date(new Date().getTime() + 60 * 60 * 1000)}; domain=.${process.env.REACT_APP_DOMAIN_NAME}; path=/`;

    const hyperLink = document.createElement('a');
    hyperLink.target = '_blank';
    document.body.appendChild(hyperLink);

    switch (moduleName) {
      case 'accounting': {
        hyperLink.href = `${process.env.REACT_APP_ACCOUNTING_URL}`;
        break;
      }
      case 'csa': {
        window.location.href = ''
        break;
      }

      default:
        break;
    }

    hyperLink.click();
  }

  return (
    <svg
      width="1331"
      height="606"
      viewBox="0 0 1531 650"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="1531" height="388" />
      <g id="7" clipPath="url(#clip0_0_1)">
        <rect width="1728" height="1117" />

        <g id="Group 1410118169">
          <path
            id="Vector 14"
            d="M865.211 172.192L865.211 72.5039"
            stroke="#69EACC"
            style={{ strokeLinecap: "round", strokeDasharray: "5 5" }}
          />
          <path
            id="Vector 17"
            d="M866.676 526.962L866.676 419.944"
            stroke="#69EACC"
            style={{ strokeLinecap: "round", strokeDasharray: "5 5" }}
          />
          <path
            id="Vector 18"
            d="M517.77 526.962V453.662"
            stroke="#69EACC"
            style={{ strokeLinecap: "round", strokeDasharray: "5 5" }}
          />
          <g onClick={() => onModuleClickHandler('accounting')} id="ghg" filter="url(#filter0_d_0_1)">
            <rect
              x="865.211"
              y="528.428"
              width="236.025"
              height="61.5718"
              rx="6"
              fill="white"
            />
            <text
              id="GHG Accounting"
              fill="#0C81A8"
              fontFamily="Poppins"
              fontSize="16"
              fontWeight="500"
              letterSpacing="0em"
            >
              <tspan x="916.762" y="564.814">
                GHG Accounting
              </tspan>
            </text>
          </g>
          {/* Transition Financing */}
          <g id="tf" filter="url(#filter1_d_0_1)">
            <rect
              x="258.289"
              y="528.428"
              width="258.015"
              height="61.5718"
              rx="6"
              fill="white"
            />
            <text
              id="Transition Finance"
              fill="#0C81A8"
              // xml:space="preserve"
              // style="white-space: pre"
              fontFamily="Poppins"
              fontSize="16"
              fontWeight="500"
              letterSpacing="0em"
            >
              <tspan x="313.477" y="564.814">
                Transition Finance
              </tspan>
            </text>
          </g>
          <path
            id="Vector 19"
            d="M319.858 305.597L271.48 305.597"
            stroke="#69EACC"
            style={{ strokeLinecap: "round", strokeDasharray: "5 5" }}
          />
          {/* Marketplace */}
          <g id="marketplace" filter="url(#filter2_d_0_1)">
            <rect
              x="12"
              y="255.753"
              width="255.083"
              height="93.8237"
              rx="6"
              fill="white"
            />
            <text
              id="Marketplace (Carbon Markets)"
              fill="#0C81A8"
              // xml:space="preserve"
              // style="white-space: pre"
              fontFamily="Poppins"
              fontSize="16"
              fontWeight="500"
              letterSpacing="0em"
            >
              <tspan x="86.8867" y="296.265">
                Marketplace &#10;
              </tspan>
              <tspan x="67.0273" y="320.265">
                (Carbon Markets)
              </tspan>
            </text>
          </g>
          <g id="Group 1000005220">
            <path
              id="Vector 15"
              d="M1165.74 186.852L1092.44 186.852"
              stroke="#69EACC"
              style={{ strokeLinecap: "round", strokeDasharray: "5 5" }}
            />
          </g>
          <g id="Group 1000005221">
            <path
              id="Vector 15_2"
              d="M1165.74 427L1092.44 427"
              stroke="#69EACC"
              style={{ strokeLinecap: "round", strokeDasharray: "5 5" }}
            />
          </g>
          <path
            id="Vector 13"
            d="M517.77 153.134L517.77 79.834"
            stroke="#69EACC"
            style={{ strokeLinecap: "round", strokeDasharray: "5 5" }}
          />
          {/* Reporting */}
          <g id="reporting" filter="url(#filter3_d_0_1)">
            <rect
              x="362.371"
              y="9.46582"
              width="156.861"
              height="60.1058"
              rx="6"
              fill="white"
            />
            <text
              id="Reporting"
              fill="#0C81A8"
              // xml:space="preserve"
              // style="white-space: pre"
              fontFamily="Poppins"
              fontSize="16"
              fontWeight="500"
              letterSpacing="0em"
            >
              <tspan x="401.512" y="45.6186">
                Reporting
              </tspan>
            </text>
          </g>
          {/* decarbonisation pathway */}
          <g id="dp" filter="url(#filter4_d_0_1)">
            <rect
              x="865.211"
              y="8"
              width="359.169"
              height="60.1058"
              rx="6"
              fill="white"
            />
            <text
              id="Decarbonisation Pathways"
              fill="#0C81A8"
              // xml:space="preserve"
              // style="white-space: pre"
              fontFamily="Poppins"
              fontSize="16"
              fontWeight="500"
              letterSpacing="0em"
            >
              <tspan x="936.609" y="44.1527">
                Decarbonisation Pathways
              </tspan>
            </text>
          </g>
          <g id="list-item/basic">
            <Link
              className="manage-users"
              to={{
                pathname: "/product-platform",
              }}
              state={{ id: 0, userData: cart, title: sector }}
            >
              <rect
                x="1117"
                y="538"
                width="124"
                height="42"
                rx="4"
                fill={checkBoughtPlan("GHG Accounting")}
              />

              <g id="content">
                <g id="text/text" clipPath="url(#clip1_0_1)">
                  <text
                    id="text"
                    fill="white"
                    // xml:space="preserve"
                    // style="white-space: pre"
                    fontFamily="Poppins"
                    fontSize="12.3"
                    fontWeight="500"
                    letterSpacing="0em"
                  >
                    <tspan x="1137.5" y="565.091">
                      {changeText("GHG Accounting")}
                    </tspan>
                  </text>
                </g>
              </g>
            </Link>

            <g id="arrow-forward" clipPath="url(#clip2_0_1)">
              <path
                id="Vector"
                d="M1222 559H1212"
                stroke="white"
                style={{
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "1.2",
                }}
              />
              <path
                id="Vector_2"
                d="M1218 554L1222 559L1218 564"
                stroke="white"
                style={{
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "1.2",
                }}
              />
            </g>
          </g>
          <g id="list-item/basic_2">
            <Link
              className="manage-users"
              to={{
                pathname: "/product-platform",
              }}
              state={{ id: 3, userData: cart, title: sector }}
            >
              <rect
                x="1244"
                y="19"
                width="107"
                height="42"
                rx="4"
                fill={checkBoughtPlan("Decarbonisation Pathways")}
              />

              <g id="content_2">
                <g id="text/text_2" clipPath="url(#clip3_0_1)">
                  <text
                    id="text_2"
                    fill="white"
                    // xml:space="preserve"
                    // style="white-space: pre"
                    fontFamily="Poppins"
                    fontSize="12.3"
                    fontWeight="500"
                    letterSpacing="0em"
                  >
                    <tspan x="1257.5" y="46.0909">
                      {changeText("Decarbonisation Pathways")}
                    </tspan>
                  </text>
                </g>
              </g>
            </Link>
            <g id="arrow-forward_2" clipPath="url(#clip4_0_1)">
              <path
                id="Vector_3"
                d="M1333 40H1323"
                stroke="white"
                style={{
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "1.2",
                }}
              />
              <path
                id="Vector_4"
                d="M1329 35L1333 40L1329 45"
                stroke="white"
                style={{
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "1.2",
                }}
              />
            </g>
          </g>
          <g id="list-item/basic_3">
            <Link
              className="manage-users"
              to={{
                pathname: "/product-platform",
              }}
              state={{ id: 2, userData: cart, title: sector }}
            >
              <rect
                x="1424"
                y="197"
                width="107"
                height="42"
                rx="4"
                fill={checkBoughtPlan("Climate Scenario Analysis")}
              />
              <g id="content_3">
                <g id="text/text_3" clipPath="url(#clip5_0_1)">
                  <text
                    id="text_3"
                    fill="white"
                    // xml:space="preserve"
                    // style="white-space: pre"
                    fontFamily="Poppins"
                    fontSize="12.3"
                    fontWeight="500"
                    letterSpacing="0em"
                  >
                    <tspan x="1437.5" y="224.091">
                      {changeText("Climate Scenario Analysis")}
                    </tspan>
                  </text>
                </g>
              </g>
            </Link>

            <g id="arrow-forward_3" clipPath="url(#clip6_0_1)">
              <path
                id="Vector_5"
                d="M1513 218H1503"
                stroke="white"
                style={{
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "1.2",
                }}
              />
              <path
                id="Vector_6"
                d="M1509 213L1513 218L1509 223"
                stroke="white"
                style={{
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "1.2",
                }}
              />
            </g>
          </g>
          <g id="list-item/basic_4">
            <Link
              className="manage-users"
              to={{
                pathname: "/product-platform",
              }}
              state={{ id: 1, userData: cart, title: sector }}
            >
              <rect
                x="1424"
                y="374"
                width="107"
                height="42"
                rx="4"
                fill={checkBoughtPlan("Target Setting")}
              />
              <g id="content_4">
                <g id="text/text_4" clipPath="url(#clip7_0_1)">
                  <text
                    id="text_4"
                    fill="white"
                    // xml:space="preserve"
                    // style="white-space: pre"
                    fontFamily="Poppins"
                    fontSize="12.3"
                    fontWeight="500"
                    letterSpacing="0em"
                  >
                    <tspan x="1437.5" y="401.091">
                      {changeText("Target Setting")}
                    </tspan>
                  </text>
                </g>
              </g>
            </Link>

            <g id="arrow-forward_4" clipPath="url(#clip8_0_1)">
              <path
                id="Vector_7"
                d="M1513 395H1503"
                stroke="white"
                style={{
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "1.2",
                }}
              />
              <path
                id="Vector_8"
                d="M1509 390L1513 395L1509 400"
                stroke="white"
                style={{
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "1.2",
                }}
              />
            </g>
          </g>
          <g id="list-item/basic_5">
            <Link
              className="manage-users"
              to={{
                pathname: "/product-platform",
              }}
              state={{ id: 6, userData: cart, title: sector }}
            >
              <rect
                x="535"
                y="20"
                width="107"
                height="42"
                rx="4"
                fill={checkBoughtPlan("Reporting")}
              />
              <g id="content_5">
                <g id="text/text_5" clipPath="url(#clip9_0_1)">
                  <text
                    id="text_5"
                    fill="white"
                    // xml:space="preserve"
                    // style="white-space: pre"
                    fontFamily="Poppins"
                    fontSize="12.3"
                    fontWeight="500"
                    letterSpacing="0em"
                  >
                    <tspan x="548.5" y="47.0909">
                      {changeText("Reporting")}
                    </tspan>
                  </text>
                </g>
              </g>
            </Link>

            <g id="arrow-forward_5" clipPath="url(#clip10_0_1)">
              <path
                id="Vector_9"
                d="M624 41H614"
                stroke="white"
                style={{
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "1.2",
                }}
              />
              <path
                id="Vector_10"
                d="M620 36L624 41L620 46"
                stroke="white"
                style={{
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "1.2",
                }}
              />
            </g>
          </g>
          <g id="list-item/basic_6">
            <Link
              className="manage-users"
              to={{
                pathname: "/product-platform",
              }}
              state={{ id: 5, userData: cart, title: sector }}
            >
              <rect
                x="12"
                y="365"
                width="107"
                height="42"
                rx="4"
                fill={checkBoughtPlan("Marketplace (Carbon Market)")}
              />
              <g id="content_6">
                <g id="text/text_6" clipPath="url(#clip11_0_1)">
                  <text
                    id="text_6"
                    fill="white"
                    // xml:space="preserve"
                    // style="white-space: pre"
                    fontFamily="Poppins"
                    fontSize="12.3"
                    fontWeight="500"
                    letterSpacing="0em"
                  >
                    <tspan x="25.5" y="392.091">
                      {changeText("Marketplace (Carbon Market)")}
                    </tspan>
                  </text>
                </g>
              </g>
            </Link>

            <g id="arrow-forward_6" clipPath="url(#clip12_0_1)">
              <path
                id="Vector_11"
                d="M101 386H91"
                stroke="white"
                style={{
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "1.2",
                }}
              />
              <path
                id="Vector_12"
                d="M97 381L101 386L97 391"
                stroke="white"
                style={{
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "1.2",
                }}
              />
            </g>
          </g>
          <g id="list-item/basic_7">
            <Link
              className="manage-users"
              to={{
                pathname: "/product-platform",
              }}
              state={{ id: 4, userData: cart, title: sector }}
            >
              <rect
                x="532"
                y="538.214"
                width="107"
                height="42"
                rx="4"
                fill={checkBoughtPlan("Transition Financing")}
              />
              <g id="content_7">
                <g id="text/text_7" clipPath="url(#clip13_0_1)">
                  <text
                    id="text_7"
                    fill="white"
                    // xml:space="preserve"
                    // style="white-space: pre"
                    fontFamily="Poppins"
                    fontSize="12.3"
                    fontWeight="500"
                    letterSpacing="0em"
                  >
                    <tspan x="545.5" y="565.305">
                      {changeText("Transition Financing")}
                    </tspan>
                  </text>
                </g>
              </g>
            </Link>

            <g id="arrow-forward_7" clipPath="url(#clip14_0_1)">
              <path
                id="Vector_13"
                d="M621 559.214H611"
                stroke="white"
                style={{
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "1.2",
                }}
              />
              <path
                id="Vector_14"
                d="M617 554.214L621 559.214L617 564.214"
                stroke="white"
                style={{
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "1.2",
                }}
              />
            </g>
          </g>
          <g id="Group 1410118146">
            <path
              id="Vector_15"
              opacity="0.2"
              d="M962.199 136C885.229 136 758.804 241.05 712.92 281.585C667.017 241.05 540.611 136 463.622 136C367.042 136 288.449 214.496 288.449 311C288.449 407.504 367.042 486 463.622 486C540.592 486 667.017 380.95 712.901 340.415C758.804 380.95 885.21 486 962.18 486C1058.78 486 1137.35 407.485 1137.35 311C1137.35 214.515 1058.8 136 962.199 136ZM1093.66 311C1093.66 383.411 1034.68 442.336 962.199 442.336C909.307 442.336 804.726 362.829 745.553 311C804.726 259.152 909.307 179.664 962.199 179.664C1034.68 179.664 1093.66 238.589 1093.66 311ZM680.268 311C621.095 362.829 516.514 442.336 463.622 442.336C391.139 442.336 332.157 383.411 332.157 311C332.157 238.589 391.139 179.664 463.622 179.664C516.514 179.664 621.095 259.152 680.268 311Z"
              fill="url(#paint0_linear_0_1)"
            />
            <path
              id="Vector_16"
              d="M962.199 136C885.229 136 758.804 241.05 712.92 281.585C667.017 241.05 540.611 136 463.622 136C367.042 136 288.449 214.496 288.449 311C288.449 407.504 367.042 486 463.622 486C540.592 486 667.017 380.95 712.901 340.415C758.804 380.95 885.21 486 962.18 486C1058.78 486 1137.35 407.485 1137.35 311C1137.35 214.515 1058.8 136 962.199 136ZM1093.66 311C1093.66 383.411 1034.68 442.336 962.199 442.336C909.307 442.336 804.726 362.829 745.553 311C804.726 259.152 909.307 179.664 962.199 179.664C1034.68 179.664 1093.66 238.589 1093.66 311ZM680.268 311C654.338 333.719 619.701 361.722 584.51 386.044C539.37 417.232 493.333 442.336 463.622 442.336C391.139 442.336 332.157 383.411 332.157 311C332.157 238.589 391.139 179.664 463.622 179.664C516.514 179.664 621.095 259.152 680.268 311Z"
              stroke="url(#paint1_linear_0_1)"
              strokeWidth="0.88"
              strokeMiterlimit="10"
            />
            <path
              id="Vector_17"
              d="M962.214 145.211C884.054 145.211 748.55 261.969 712.917 293.964C677.264 261.989 541.76 145.211 463.619 145.211C372.111 145.211 297.656 219.578 297.656 311C297.656 402.423 372.092 476.79 463.6 476.79C541.76 476.79 677.264 360.031 712.897 328.037C748.55 360.012 884.054 476.79 962.195 476.79C1053.7 476.79 1128.14 402.423 1128.14 311C1128.14 219.578 1053.7 145.211 962.195 145.211H962.214ZM463.6 451.588C386.013 451.588 322.882 388.515 322.882 311C322.882 233.486 386.013 170.413 463.6 170.413C524.573 170.413 642.319 264.545 694.203 311C642.319 357.456 524.592 451.588 463.6 451.588ZM962.214 451.588C901.241 451.588 783.495 357.456 731.612 311C783.495 264.545 901.222 170.413 962.214 170.413C1039.8 170.413 1102.93 233.486 1102.93 311C1102.93 388.515 1039.8 451.588 962.214 451.588Z"
              fill="url(#paint2_linear_0_1)"
              stroke="white"
              strokeMiterlimit="10"
            />
            <path
              id="Vector_18"
              opacity="0.8"
              d="M776.605 349.489L759.223 367.798C738.733 351.074 722.3 336.564 712.898 328.068L731.474 311C743.472 321.844 759.053 335.266 776.605 349.489Z"
              fill="url(#paint3_linear_0_1)"
            />
            <path
              id="Vector_19"
              opacity="0.7"
              d="M712.901 294.074L694.237 311C679.516 297.88 659.463 280.916 636.914 263.366L655.159 245.759C680.945 266.035 701.798 284.173 712.901 294.074Z"
              fill="url(#paint4_linear_0_1)"
            />
            <g id="Vector_20" filter="url(#filter5_d_0_1)">
              <path
                d="M784.112 319.148C790.469 280.208 764.051 243.488 725.107 237.132C686.163 230.777 649.44 257.191 643.083 296.131C636.727 335.071 663.145 371.791 702.089 378.147C741.033 384.503 777.756 358.088 784.112 319.148Z"
                fill="white"
              />
            </g>
            <g id="Group">
              <path
                id="Vector_21"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M726.378 289.916C726.378 297.358 720.348 305.086 712.886 305.086C705.425 305.086 699.395 297.358 699.395 289.916C699.395 282.475 705.425 276.426 712.886 276.426C720.348 276.426 726.378 282.475 726.378 289.916Z"
                fill="url(#paint5_linear_0_1)"
              />
              <path
                id="Vector_22"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M731.949 338.86C734.43 338.86 736.433 336.856 736.433 334.375V331.265C736.433 321.648 729.487 307.395 712.885 307.395C696.282 307.395 689.336 321.095 689.336 330.845V334.375C689.336 336.856 691.34 338.86 693.82 338.86H731.968H731.949Z"
                fill="url(#paint6_linear_0_1)"
              />
              <path
                id="Vector_23"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M694.28 294.439C694.28 299.877 689.872 305.983 684.433 305.983C678.994 305.983 674.586 299.877 674.586 294.439C674.586 289.001 678.994 284.593 684.433 284.593C689.872 284.593 694.28 289.001 694.28 294.439Z"
                fill="url(#paint7_linear_0_1)"
              />
              <path
                id="Vector_24"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M695.787 311.421C692.772 308.826 688.707 307.204 684.432 307.204C675.463 307.204 668.116 314.054 667.315 322.813H667.238C667.238 326.877 670.54 330.178 674.604 330.178H687.161C687.028 322.336 690.615 315.733 695.787 311.421Z"
                fill="url(#paint8_linear_0_1)"
              />
              <path
                id="Vector_25"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M731.414 294.439C731.414 299.877 735.822 305.983 741.261 305.983C746.7 305.983 751.108 299.877 751.108 294.439C751.108 289.001 746.7 284.593 741.261 284.593C735.822 284.593 731.414 289.001 731.414 294.439Z"
                fill="url(#paint9_linear_0_1)"
              />
              <path
                id="Vector_26"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M729.906 311.421C732.921 308.826 736.986 307.204 741.261 307.204C750.23 307.204 757.577 314.054 758.378 322.813H758.455C758.455 326.877 755.153 330.178 751.089 330.178H738.532C738.665 322.336 735.078 315.733 729.906 311.421Z"
                fill="url(#paint10_linear_0_1)"
              />
            </g>
            <g id="Vector_27" filter="url(#filter6_d_0_1)">
              <path
                d="M310.259 328.518C322.552 328.518 332.518 318.552 332.518 306.259C332.518 293.966 322.552 284 310.259 284C297.966 284 288 293.966 288 306.259C288 318.552 297.966 328.518 310.259 328.518Z"
                fill="url(#paint11_linear_0_1)"
              />
            </g>
            <path
              id="Vector_28"
              d="M310.641 320.075C318.483 320.075 324.841 313.889 324.841 306.259C324.841 298.629 318.483 292.443 310.641 292.443C302.799 292.443 296.441 298.629 296.441 306.259C296.441 313.889 302.799 320.075 310.641 320.075Z"
              fill="#87C033"
            />
            <g id="Vector_29" filter="url(#filter7_d_0_1)">
              <path
                d="M503.259 477.518C515.552 477.518 525.518 467.552 525.518 455.259C525.518 442.966 515.552 433 503.259 433C490.966 433 481 442.966 481 455.259C481 467.552 490.966 477.518 503.259 477.518Z"
                fill="url(#paint12_linear_0_1)"
              />
            </g>
            <path
              id="Vector_30"
              d="M503.257 469.842C510.887 469.842 517.073 463.484 517.073 455.642C517.073 447.8 510.887 441.442 503.257 441.442C495.627 441.442 489.441 447.8 489.441 455.642C489.441 463.484 495.627 469.842 503.257 469.842Z"
              fill="#87C033"
            />
            <g id="Vector_31" filter="url(#filter8_d_0_1)">
              <path
                d="M890.901 449.681C899.59 440.993 899.59 426.906 890.901 418.217C882.211 409.528 868.123 409.528 859.433 418.217C850.744 426.906 850.744 440.993 859.433 449.681C868.123 458.37 882.211 458.37 890.901 449.681Z"
                fill="url(#paint13_linear_0_1)"
              />
            </g>
            <path
              id="Vector_32"
              d="M875.235 448.39C883.077 448.39 889.434 442.033 889.434 434.191C889.434 426.349 883.077 419.991 875.235 419.991C867.393 419.991 861.035 426.349 861.035 434.191C861.035 442.033 867.393 448.39 875.235 448.39Z"
              fill="#228C94"
            />
            <g id="Vector_33" filter="url(#filter9_d_0_1)">
              <path
                d="M1079.02 226.57C1091.31 226.57 1101.28 216.605 1101.28 204.312C1101.28 192.018 1091.31 182.053 1079.02 182.053C1066.72 182.053 1056.76 192.018 1056.76 204.312C1056.76 216.605 1066.72 226.57 1079.02 226.57Z"
                fill="url(#paint14_linear_0_1)"
              />
            </g>
            <path
              id="Vector_34"
              d="M1078.63 218.894C1086.48 218.894 1092.83 212.537 1092.83 204.695C1092.83 196.852 1086.48 190.495 1078.63 190.495C1070.79 190.495 1064.43 196.852 1064.43 204.695C1064.43 212.537 1070.79 218.894 1078.63 218.894Z"
              fill="#0B80A8"
            />
            <g id="Vector_35" filter="url(#filter10_d_0_1)">
              <path
                d="M1079.02 426.899C1091.31 426.899 1101.28 416.934 1101.28 404.641C1101.28 392.347 1091.31 382.382 1079.02 382.382C1066.72 382.382 1056.76 392.347 1056.76 404.641C1056.76 416.934 1066.72 426.899 1079.02 426.899Z"
                fill="url(#paint15_linear_0_1)"
              />
            </g>
            <path
              id="Vector_36"
              d="M1078.63 419.223C1086.48 419.223 1092.83 412.866 1092.83 405.024C1092.83 397.182 1086.48 390.824 1078.63 390.824C1070.79 390.824 1064.43 397.182 1064.43 405.024C1064.43 412.866 1070.79 419.223 1078.63 419.223Z"
              fill="#0B80A8"
            />
            <g id="Vector_37" filter="url(#filter11_d_0_1)">
              <path
                d="M890.916 202.387C899.606 193.698 899.606 179.611 890.916 170.922C882.227 162.233 868.138 162.233 859.449 170.922C850.759 179.611 850.759 193.698 859.449 202.387C868.138 211.075 882.227 211.075 890.916 202.387Z"
                fill="url(#paint16_linear_0_1)"
              />
            </g>
            <path
              id="Vector_38"
              d="M875.235 200.473C883.077 200.473 889.434 194.288 889.434 186.658C889.434 179.027 883.077 172.842 875.235 172.842C867.393 172.842 861.035 179.027 861.035 186.658C861.035 194.288 867.393 200.473 875.235 200.473Z"
              fill="#18869E"
            />
            <g id="Vector_39" filter="url(#filter12_d_0_1)">
              <path
                d="M505.684 184.635C517.023 179.899 522.376 166.868 517.64 155.53C512.903 144.192 499.871 138.839 488.532 143.575C477.192 148.311 471.84 161.342 476.576 172.68C481.312 184.019 494.345 189.371 505.684 184.635Z"
                fill="url(#paint17_linear_0_1)"
              />
            </g>
            <path
              id="Vector_40"
              d="M497.071 178.33C504.913 178.33 511.27 171.972 511.27 164.13C511.27 156.288 504.913 149.931 497.071 149.931C489.228 149.931 482.871 156.288 482.871 164.13C482.871 171.972 489.228 178.33 497.071 178.33Z"
              fill="#87C033"
            />
          </g>
          <g id="csa" filter="url(#filter13_d_0_1)">
            <rect
              x="1151"
              y="186"
              width="258.015"
              height="61.5718"
              rx="6"
              fill="white"
            />
            <text
              id="Climate Scenario Analysis"
              fill="#0C81A8"
              // xml:space="preserve"
              // style="white-space: pre"
              fontFamily="Poppins"
              fontSize="16"
              fontWeight="500"
              letterSpacing="0em"
            >
              <tspan x="1174.72" y="222.386">
                Climate Scenario Analysis
              </tspan>
            </text>
          </g>
          <g id="target_setting" filter="url(#filter14_d_0_1)">
            <rect
              x="1151"
              y="365"
              width="258.015"
              height="61.5718"
              rx="6"
              fill="white"
            />
            <text
              id="Target Setting"
              fill="#0C81A8"
              // xml:space="preserve"
              // style="white-space: pre"
              fontFamily="Poppins"
              fontSize="16"
              fontWeight="500"
              letterSpacing="0em"
            >
              <tspan x="1223.14" y="401.386">
                Target Setting
              </tspan>
            </text>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_0_1"
          x="853.211"
          y="520.428"
          width="260.023"
          height="85.5723"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="6" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_1"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_1"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_0_1"
          x="246.289"
          y="520.428"
          width="282.016"
          height="85.5723"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="6" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_1"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_1"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_d_0_1"
          x="0"
          y="247.753"
          width="279.082"
          height="117.823"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="6" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_1"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_1"
            result="shape"
          />
        </filter>
        <filter
          id="filter3_d_0_1"
          x="350.371"
          y="1.46582"
          width="180.863"
          height="84.1055"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="6" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_1"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_1"
            result="shape"
          />
        </filter>
        <filter
          id="filter4_d_0_1"
          x="853.211"
          y="0"
          width="383.168"
          height="84.1055"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="6" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_1"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_1"
            result="shape"
          />
        </filter>
        <filter
          id="filter5_d_0_1"
          x="633.261"
          y="227.308"
          width="169.554"
          height="169.542"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="4.44" dy="4.44" />
          <feGaussianBlur stdDeviation="6.66" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.45 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_1"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_1"
            result="shape"
          />
        </filter>
        <filter
          id="filter6_d_0_1"
          x="283.78"
          y="279.78"
          width="55.7556"
          height="55.7576"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1.4" dy="1.4" />
          <feGaussianBlur stdDeviation="2.81" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_1"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_1"
            result="shape"
          />
        </filter>
        <filter
          id="filter7_d_0_1"
          x="476.78"
          y="428.78"
          width="55.7556"
          height="55.7576"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1.4" dy="1.4" />
          <feGaussianBlur stdDeviation="2.81" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_1"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_1"
            result="shape"
          />
        </filter>
        <filter
          id="filter8_d_0_1"
          x="848.694"
          y="407.48"
          width="55.7439"
          height="55.738"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1.4" dy="1.4" />
          <feGaussianBlur stdDeviation="2.81" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_1"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_1"
            result="shape"
          />
        </filter>
        <filter
          id="filter9_d_0_1"
          x="1052.54"
          y="177.833"
          width="55.7556"
          height="55.7576"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1.4" dy="1.4" />
          <feGaussianBlur stdDeviation="2.81" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_1"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_1"
            result="shape"
          />
        </filter>
        <filter
          id="filter10_d_0_1"
          x="1052.54"
          y="378.162"
          width="55.7556"
          height="55.7576"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1.4" dy="1.4" />
          <feGaussianBlur stdDeviation="2.81" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_1"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_1"
            result="shape"
          />
        </filter>
        <filter
          id="filter11_d_0_1"
          x="848.71"
          y="160.185"
          width="55.7439"
          height="55.738"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1.4" dy="1.4" />
          <feGaussianBlur stdDeviation="2.81" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_1"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_1"
            result="shape"
          />
        </filter>
        <filter
          id="filter12_d_0_1"
          x="470.632"
          y="137.631"
          width="55.7517"
          height="55.7488"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1.4" dy="1.4" />
          <feGaussianBlur stdDeviation="2.81" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_1"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_1"
            result="shape"
          />
        </filter>
        <filter
          id="filter13_d_0_1"
          x="1139"
          y="178"
          width="282.016"
          height="85.5723"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="6" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_1"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_1"
            result="shape"
          />
        </filter>
        <filter
          id="filter14_d_0_1"
          x="1139"
          y="357"
          width="282.016"
          height="85.5723"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="6" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_1"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_1"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_0_1"
          x1="288.449"
          y1="311"
          x2="1137.37"
          y2="311"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#87BF35" />
          <stop offset="0.27" stopColor="#6AB04F" />
          <stop offset="0.85" stopColor="#228A92" />
          <stop offset="1" stopColor="#0F80A4" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_0_1"
          x1="287.609"
          y1="311"
          x2="1138.21"
          y2="311"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#87C033" />
          <stop offset="0.26" stopColor="#6AB14D" />
          <stop offset="0.83" stopColor="#228B92" />
          <stop offset="1" stopColor="#0B80A8" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_0_1"
          x1="297.656"
          y1="109.687"
          x2="1128.16"
          y2="109.687"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#87C033" />
          <stop offset="0.26" stopColor="#6AB14D" />
          <stop offset="0.83" stopColor="#228B92" />
          <stop offset="1" stopColor="#0B80A8" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_0_1"
          x1="724.726"
          y1="321.997"
          x2="771.311"
          y2="361.166"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#231F20" stopOpacity="0.3" />
          <stop offset="1" stopColor="#231F20" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_0_1"
          x1="704.064"
          y1="303.029"
          x2="651.932"
          y2="258.538"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#231F20" stopOpacity="0.3" />
          <stop offset="1" stopColor="#231F20" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_0_1"
          x1="46.0622"
          y1="290.756"
          x2="886.505"
          y2="290.756"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#87C033" />
          <stop offset="0.26" stopColor="#6AB14D" />
          <stop offset="0.83" stopColor="#228B92" />
          <stop offset="1" stopColor="#0B80A8" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_0_1"
          x1="46.0606"
          y1="323.117"
          x2="886.504"
          y2="323.117"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#87C033" />
          <stop offset="0.26" stopColor="#6AB14D" />
          <stop offset="0.83" stopColor="#228B92" />
          <stop offset="1" stopColor="#0B80A8" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_0_1"
          x1="46.0613"
          y1="295.297"
          x2="886.505"
          y2="295.297"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#87C033" />
          <stop offset="0.26" stopColor="#6AB14D" />
          <stop offset="0.83" stopColor="#228B92" />
          <stop offset="1" stopColor="#0B80A8" />
        </linearGradient>
        <linearGradient
          id="paint8_linear_0_1"
          x1="46.0614"
          y1="318.71"
          x2="886.504"
          y2="318.71"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#87C033" />
          <stop offset="0.26" stopColor="#6AB14D" />
          <stop offset="0.83" stopColor="#228B92" />
          <stop offset="1" stopColor="#0B80A8" />
        </linearGradient>
        <linearGradient
          id="paint9_linear_0_1"
          x1="46.0595"
          y1="295.297"
          x2="886.503"
          y2="295.297"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#87C033" />
          <stop offset="0.26" stopColor="#6AB14D" />
          <stop offset="0.83" stopColor="#228B92" />
          <stop offset="1" stopColor="#0B80A8" />
        </linearGradient>
        <linearGradient
          id="paint10_linear_0_1"
          x1="46.0595"
          y1="318.71"
          x2="886.503"
          y2="318.71"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#87C033" />
          <stop offset="0.26" stopColor="#6AB14D" />
          <stop offset="0.83" stopColor="#228B92" />
          <stop offset="1" stopColor="#0B80A8" />
        </linearGradient>
        <linearGradient
          id="paint11_linear_0_1"
          x1="288"
          y1="306.259"
          x2="332.537"
          y2="306.259"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#EDEDED" />
        </linearGradient>
        <linearGradient
          id="paint12_linear_0_1"
          x1="481"
          y1="455.259"
          x2="525.518"
          y2="455.259"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#EDEDED" />
        </linearGradient>
        <linearGradient
          id="paint13_linear_0_1"
          x1="852.921"
          y1="433.938"
          x2="897.442"
          y2="433.938"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#EDEDED" />
        </linearGradient>
        <linearGradient
          id="paint14_linear_0_1"
          x1="1056.76"
          y1="204.312"
          x2="1101.29"
          y2="204.312"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#EDEDED" />
        </linearGradient>
        <linearGradient
          id="paint15_linear_0_1"
          x1="1056.76"
          y1="404.641"
          x2="1101.29"
          y2="404.641"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#EDEDED" />
        </linearGradient>
        <linearGradient
          id="paint16_linear_0_1"
          x1="852.923"
          y1="186.654"
          x2="897.444"
          y2="186.654"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#EDEDED" />
        </linearGradient>
        <linearGradient
          id="paint17_linear_0_1"
          x1="474.864"
          y1="164.109"
          x2="519.366"
          y2="164.109"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#EDEDED" />
        </linearGradient>
        <clipPath id="clip0_0_1">
          <rect
            width="1728"
            height="1117"
            fill="white"
            transform="translate(-156 -290)"
          />
        </clipPath>
        <clipPath id="clip1_0_1">
          <rect
            width="62"
            height="35"
            fill="white"
            transform="translate(1137.5 542.5)"
          />
        </clipPath>
        <clipPath id="clip2_0_1">
          <rect
            width="12"
            height="12"
            fill="white"
            transform="translate(1211 553)"
          />
        </clipPath>
        <clipPath id="clip3_0_1">
          <rect
            width="60"
            height="35"
            fill="white"
            transform="translate(1257.5 23.5)"
          />
        </clipPath>
        <clipPath id="clip4_0_1">
          <rect
            width="12"
            height="12"
            fill="white"
            transform="translate(1322 34)"
          />
        </clipPath>
        <clipPath id="clip5_0_1">
          <rect
            width="60"
            height="35"
            fill="white"
            transform="translate(1437.5 201.5)"
          />
        </clipPath>
        <clipPath id="clip6_0_1">
          <rect
            width="12"
            height="12"
            fill="white"
            transform="translate(1502 212)"
          />
        </clipPath>
        <clipPath id="clip7_0_1">
          <rect
            width="60"
            height="35"
            fill="white"
            transform="translate(1437.5 378.5)"
          />
        </clipPath>
        <clipPath id="clip8_0_1">
          <rect
            width="12"
            height="12"
            fill="white"
            transform="translate(1502 389)"
          />
        </clipPath>
        <clipPath id="clip9_0_1">
          <rect
            width="60"
            height="35"
            fill="white"
            transform="translate(548.5 24.5)"
          />
        </clipPath>
        <clipPath id="clip10_0_1">
          <rect
            width="12"
            height="12"
            fill="white"
            transform="translate(613 35)"
          />
        </clipPath>
        <clipPath id="clip11_0_1">
          <rect
            width="60"
            height="35"
            fill="white"
            transform="translate(25.5 369.5)"
          />
        </clipPath>
        <clipPath id="clip12_0_1">
          <rect
            width="12"
            height="12"
            fill="white"
            transform="translate(90 380)"
          />
        </clipPath>
        <clipPath id="clip13_0_1">
          <rect
            width="60"
            height="35"
            fill="white"
            transform="translate(545.5 542.714)"
          />
        </clipPath>
        <clipPath id="clip14_0_1">
          <rect
            width="12"
            height="12"
            fill="white"
            transform="translate(610 553.214)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Plans;
