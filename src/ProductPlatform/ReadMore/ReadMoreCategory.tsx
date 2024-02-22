import React, { useEffect, useState } from "react";
import "./ReadMoreCategory.scss"
import accountinggraph from "../../assets/svg/frameworkSvg/accountingGraph.png";
import targetsettingfraph from "../../assets/svg/frameworkSvg/TargetSettingGraph.png";
import csagraph from "../../assets/svg/frameworkSvg/csaGraph.png";
import decarbonsiationgraph from "../../assets/svg/frameworkSvg/decarbonisationGraph.png";
import transitiongraph from "../../assets/svg/frameworkSvg/transitionfinancinggraph.png";
import marketplacegraph from "../../assets/svg/frameworkSvg/marketplaceGraph.png";
import reportinggraph from "../../assets/svg/frameworkSvg/reportingGraph.png";

import AccountingF1 from "../../assets/svg/frameworkSvg/greenhouseGas.svg";
import AccountingF2 from "../../assets/svg/frameworkSvg/pcaf.svg";
import TargetSettingF1 from "../../assets/svg/frameworkSvg/target1.svg";
import ClimateF1 from "../../assets/svg/frameworkSvg/iea.svg";
import ClimateF2 from "../../assets/svg/frameworkSvg/ipcc.svg";
import ClimateF3 from "../../assets/svg/frameworkSvg/ngfs.svg";
import DecarbonisationF1 from "../../assets/svg/frameworkSvg/iea.svg";
import DecarbonisationF2 from "../../assets/svg/frameworkSvg/ipcc.svg";
import DecarbonisationF3 from "../../assets/svg/frameworkSvg/ngfs.svg";
import TransitionF1 from "../../assets/svg/frameworkSvg/Transition1.svg";
import TransitionF2 from "../../assets/svg/frameworkSvg/Transition2.svg";
import MarketPlaceF1 from "../../assets/svg/frameworkSvg/verra.svg";
import MarketPlaceF2 from "../../assets/svg/frameworkSvg/goldStandard.svg";
import MarketPlaceF3 from "../../assets/svg/frameworkSvg/ic.svg";
import Reporting1 from "../../assets/svg/frameworkSvg/Reporting1.svg";
import Reporting2 from "../../assets/svg/frameworkSvg/Reporting2.svg";
import Reporting3 from "../../assets/svg/frameworkSvg/Reporting3.svg";
import Reporting4 from "../../assets/svg/frameworkSvg/Reporting4.svg";
import Reporting5 from "../../assets/svg/frameworkSvg/Reporting5.svg";
import Reporting6 from "../../assets/svg/frameworkSvg/Reporting6.svg";
import Reporting7 from "../../assets/svg/frameworkSvg/Reporting7.svg";
import Reporting8 from "../../assets/svg/frameworkSvg/Reporting8.svg";
import Reporting9 from "../../assets/svg/frameworkSvg/Reporting9.svg";

//Importing the table
import BillingPlan from "../BillingPlan/BillingPlan";
import { useLocation } from "react-router-dom";

interface Content {
  categoryheading: string;
  categorysubheading: string;
  categorycontent: string;
  categorygraph: any;
  categoryicons1: any;
  categoryicons2: any;
  categoryicons3: any;
  categoryicons4: any;
  categoryicons5: any;
  categoryicons6: any;
  categoryicons7: any;
  categoryicons8: any;
  categoryicons9: any;
}

interface DataItem {
  title: string;
  details: Content;
}

function ReadMoreCategory() {

const [windowWidth,setWindowWidth]=useState(window.innerWidth);
useEffect(()=>{

  const handleResize=()=>{
    setWindowWidth(window.innerWidth);
  };
  window.addEventListener('resize',handleResize);
  return ()=>{
    window.removeEventListener('resize',handleResize);
  };

},[]);



  const location = useLocation();
  const clickedReadMore  = location.state;
  const selectedItem = data[clickedReadMore+1-1]
  const [selectedData, setSelectedData] = useState<Content | undefined>(selectedItem?.details);
  const [selectedTitle, setSelectedTitle] = useState<string | null>(data[clickedReadMore+1-1].title);
  const [toggleData, setToggleData] = useState<string | null>(null);
  const handleTitleClick = (title: string) => {
    const selectedItem = data.find((item) => item.title === title);
    if (selectedItem) {
      setSelectedData(selectedItem.details);
      setSelectedTitle(title);
    }
  };

  const handleToggleClick = (buttoncontent: string) => {
    setToggleData(buttoncontent);
  };




  return (
    <div className="Readmorecategory">
      {windowWidth >=1140 && (
 <div>
      
 <div className="title">
   {data.map((item, index) => (
     <h2
       key={index}
       onClick={() => handleTitleClick(item.title)}
       className={`heading-item ${
         item.title === selectedTitle ? "selected" : " "
       }`}
     >
       {item.title}
     </h2>
   ))}
 </div>
 <div>
   {selectedData && (
     <div>
       <div className="category-data">
         <div className="category-left">
           <h3 className="category-heading">
             {selectedData.categoryheading}
           </h3>
           <h4 className="category-subheading">
             {selectedData.categorysubheading}
           </h4>
           <p className="category-content">
             {selectedData.categorycontent}
           </p>
         </div>
         <div className="category-right">
           <img
             className="graph-image"
             src={selectedData.categorygraph}
             alt=""
           />
         </div>
       </div>
       <button className="product">Product Overview</button>
       <div className="category-framework">
         <div className="framework-image">
           <img src={selectedData.categoryicons1} alt="" />
           <img src={selectedData.categoryicons2} alt="" />
           <img src={selectedData.categoryicons3} alt="" />
           <img src={selectedData.categoryicons4} alt="" />
           <img src={selectedData.categoryicons5} alt="" />
           <img src={selectedData.categoryicons6} alt="" />
           <img src={selectedData.categoryicons7} alt="" />
           <img src={selectedData.categoryicons8} alt="" />
           <img src={selectedData.categoryicons9} alt="" />
         </div>
       </div>
       <div className="Plans">
         <div className="Plans-content">
           Our plan scale with <span> your Business</span>
         </div>
         <p>
           We understand that as your business grows, your needs evolve.
           That’s why our flexible plans are designed to adapt and scale
           seamlessly alongside your business
         </p>
         {/* <span>Billing Plan</span> */}
         <div className="monthly-yearly-plan">
           <p
             onClick={() => handleToggleClick("Monthly")}
             style={{
               backgroundColor:
                 toggleData === "Monthly" ? "#0c81a8" : "transparent",
               color: toggleData === "Monthly" ? "#fff" : "#000",
               cursor: "pointer",
             }}
           >
             Monthly
           </p>
           <p
             onClick={() => handleToggleClick("Yearly")}
             style={{
               backgroundColor:
                 toggleData === "Yearly" ? "#0c81a8" : "transparent",
               color: toggleData === "Yearly" ? "#fff" : "#000",
               cursor: "pointer",
             }}
           >
             Yearly
           </p>
         </div>
       </div>
     </div>
   )}
 </div>

 {/* Billing Plan Details */}

 <div className="billing-plan">
   <BillingPlan />
 </div>
</div>
      )}
       {windowWidth < 1140 && windowWidth >= 480 && (
        <div className="readmoremobileversion">
          
        
        </div>

      )}

      {windowWidth < 480 && (
       <div>
       {selectedData && (
         <div className="readmoreCategoryTop">
          <div className="categoryHeadingMobile">
           {selectedData.categoryheading}
         </div>
         <div className="categoryGraphMobile">
         <img
             className="graphImageMobile"
             src={selectedData.categorygraph}
             alt=""
           />
         </div>

         </div>
       )}
     
       <div className="titleMobile">
         {data.map((item, index) => (
           <h2
             key={index}
             onClick={() => handleTitleClick(item.title)}
             className={`headingItemMoile ${
               item.title === selectedTitle ? "selectedMobile" : ""
             }`}
           >
             {item.title}
           </h2>
         ))}
       </div>
       {selectedData && (
        <div className="categoryDown">
          <div className="category-subheading">
             {selectedData.categorysubheading}
           </div>
           <div className="category-content">
         {selectedData.categorycontent}
       </div>
       
        </div>
       )}
       
     </div>
     
      )}
     
    </div>
  );
}

const data: DataItem[] = [
  {
    title: "Carbon Accounting",
    details: {
      categoryheading: "GHG Accounting",
      categorysubheading: "“Manage your carbon emissions in one place”  ",
      categorycontent:
        " Our expertise lies in meticulous data collection through cutting-edge technology and processes, ensuring precise carbon footprint calculations. Our comprehensive solution provides a consolidated perspective on emissions data, including financed emissions within your investment portfolios and loan books along with accounting for Scope 1, 2, and 3 emissions originating from your operational activities. ",
      categorygraph: accountinggraph,
      categoryicons1: AccountingF1,
      categoryicons2: AccountingF2,
      categoryicons3: "",
      categoryicons4: "",
      categoryicons5: "",
      categoryicons6: "",
      categoryicons7: "",
      categoryicons8: "",
      categoryicons9: "",
    },
  },
  {
    title: "Target Setting",
    details: {
      categoryheading: "Target Setting",
      categorysubheading: "“Turn intent into action ”  ",
      categorycontent:
        "Foster robust science-based targets, across all levels of your investment portfolio and loan book, spanning short-term, mid-term, and long-term objectives for carbon reduction. From feasibility assessments through the implementation phases, we ensure a seamless trajectory towards your climate targets.Engage with your investees to develop Science- ",
      categorygraph: targetsettingfraph,
      categoryicons1: TargetSettingF1,
      categoryicons2: "",
      categoryicons3: "",
      categoryicons4: "",
      categoryicons5: "",
      categoryicons6: "",
      categoryicons7: "",
      categoryicons8: "",
      categoryicons9: "",
    },
  },
  {
    title: "Climate Scenario Analysis",
    details: {
      categoryheading: "Climate Scenario Analysis",
      categorysubheading: "“Climate positive future pathways ”  ",
      categorycontent:
        "Utilise our Scenario Analysis module to assess transition and physical risks with ease. Our climate risk analytics platform enables you to evaluate climate risks in your investment portfolio, loan book, and mortgage assets. Additionally, it measures your portfolio's alignment with a climate positive future, following NGFS, IEA, and IPCC (RCP) scenarios.  ",
      categorygraph: csagraph,
      categoryicons1: ClimateF1,
      categoryicons2: ClimateF2,
      categoryicons3: ClimateF3,
      categoryicons4: "",
      categoryicons5: "",
      categoryicons6: "",
      categoryicons7: "",
      categoryicons8: "",
      categoryicons9: "",
    },
  },
  {
    title: "Decarbonisation Pathways",
    details: {
      categoryheading: "Decarbonisation Pathways",
      categorysubheading: "“Climate proofing your portfolio ” ",
      categorycontent:
        "We optimise your portfolio to determine the optimal investment mix based on NGFS and IEA scenarios, enabling you to build a portfolio resilient to any climate future with our industry-leading datasets Identify and mitigate climate-related risks and exposures impacting your portfolio's value. Compare current emissions with projected GHG emissions for informed decision-making and  ",
      categorygraph: decarbonsiationgraph,
      categoryicons1: DecarbonisationF1,
      categoryicons2: DecarbonisationF2,
      categoryicons3: DecarbonisationF3,
      categoryicons4: "",
      categoryicons5: "",
      categoryicons6: "",
      categoryicons7: "",
      categoryicons8: "",
      categoryicons9: "",
    },
  },
  {
    title: "Transition Finacing",
    details: {
      categoryheading: "Transition Financing",
      categorysubheading: "“Tech driven bond optemisation ”   ",
      categorycontent:
        "We assist you in identifying high-emitting investees within specific sectors and provide support in securing transition finance. Reduce, avoid and recycle investee carbon emissions through green, social, sustainable and sustainability-linked bonds, aligning strategies with sustainable finance frameworks like ICMA and CBI. With cutting-edge technologies, including  ",
      categorygraph: transitiongraph,
      categoryicons1: TransitionF1,
      categoryicons2: TransitionF2,
      categoryicons3: "",
      categoryicons4: "",
      categoryicons5: "",
      categoryicons6: "",
      categoryicons7: "",
      categoryicons8: "",
      categoryicons9: "",
    },
  },
  {
    title: "Market Place",
    details: {
      categoryheading: "Marketplace",
      categorysubheading: "“One stop blockchain marketplace ” ",
      categorycontent:
        "We offer you a one-stop tokenised blockchain marketplace for both Carbon credits and climate bonds featuring unique features for issuers and investors using cutting-edge technology.Leveraging blockchain technology to empower investors and investees, enhance bond value and increase transparency in proceeds utilisation. Our AI/ML models facilitate Return on Investment calculations, and we provide real-time monitoring ",
      categorygraph: marketplacegraph,
      categoryicons1: MarketPlaceF1,
      categoryicons2: MarketPlaceF2,
      categoryicons3: MarketPlaceF3,
      categoryicons4: "",
      categoryicons5: "",
      categoryicons6: "",
      categoryicons7: "",
      categoryicons8: "",
      categoryicons9: "",
    },
  },
  {
    title: "Reporting",
    details: {
      categoryheading: "Reporting",
      categorysubheading: "“Automated Climate Reports ” ",
      categorycontent:
        "Generate and align climate reports with key policy-based regulations such as US SEC, Canada OSFI, UK FCA, Singapore SGX, and California SB 253. We provide standard-based reporting, covering sector-specific disclosures like TCFD, TNFD, and ISSB and customise reports to meet bespoke needs. Effortlessly integrate data for your reports through seamless co-ordination with our other modules, guaranteeing a world-class end-to-end disclosure ",
      categorygraph: reportinggraph,
      categoryicons1: Reporting1,
      categoryicons2: Reporting2,
      categoryicons3: Reporting3,
      categoryicons4: Reporting4,
      categoryicons5: Reporting5,
      categoryicons6: Reporting6,
      categoryicons7: Reporting7,
      categoryicons8: Reporting8,
      categoryicons9: Reporting9,
    },
  },
];

export default ReadMoreCategory;
