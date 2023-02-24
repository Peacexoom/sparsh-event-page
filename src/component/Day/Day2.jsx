import React from "react";
import E_card from "../E_card";

const Day2 = () => {
    const numbers = [1, 2, 3, 4 ];
    const listItems = numbers.map((number) => (
      <div className="flex items-center justify-center">
  
      <div className="card">
        <div className="content ">
          <E_card />
        </div>
      </div>
      </div>
    ));
    
    return (
        <>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
{listItems}
      </div>
    </>
)
}

export default Day2;