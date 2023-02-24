import React from "react";
// import "./css/card.css";
// import E_card from "./E_card";
import LabTabs from "./Tab";
const Card = () => {
  // const events = [
  //     {
  //         id: 1,
  //         img_url : "",
  //         description : ""
  //     },
  //     {
  //         id: 1,
  //         img_url : "",
  //         description : ""
  //     },
  //     {
  //         id: 1,
  //         img_url : "",
  //         description : ""
  //     },
  //     {
  //         id: 1,
  //         img_url : "",
  //         description : ""
  //     },
  //     {
  //         id: 1,
  //         img_url : "",
  //         description : ""
  //     },
  //     {
  //         id: 1,
  //         img_url : "",
  //         description : ""
  //     },
  //     {
  //         id: 1,
  //         img_url : "",
  //         description : ""
  //     },
  //     {
  //         id: 1,
  //         img_url : "",
  //         description : ""
  //     },
  //     {
  //         id: 1,
  //         img_url : "",
  //         description : ""
  //     },{
  //         id: 1,
  //         img_url : "",
  //         description : ""
  //     },{
  //         id: 1,
  //         img_url : "",
  //         description : ""
  //     },{
  //         id: 1,
  //         img_url : "",
  //         description : ""
  //     },{
  //         id: 1,
  //         img_url : "",
  //         description : ""
  //     },{
  //         id: 1,
  //         img_url : "",
  //         description : ""
  //     },{
  //         id: 1,
  //         img_url : "",
  //         description : ""
  //     },

  // ]

  // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  // const listItems = numbers.map((number) => (
  //   <div className="flex items-center justify-center">

  //   <div className="card">
  //     <div className="content ">
  //       <E_card />
  //     </div>
  //   </div>
  //   </div>
  // ));

  return (
    <>
    <div className="header pt-14">
        <div className="heading text-center text-[#56c04a] py-8  text-5xl tracking-[0.75rem]">
            EVENTS
        </div>
    </div>
    <div className="tab">
      <LabTabs/>
    </div>
      {/* <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
{listItems}
      </div> */}
    </>
  );
};

export default Card;
