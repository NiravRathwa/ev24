import React from "react";
import { Avatar } from 'primereact/avatar';
type Props = {
  data:{
    text: string;
    avtarUrl: string;
    name1: string;
    name2: string;
  }
};

const FeedBack = ({data}: Props) => {
  return (
    <div className="flex justify-center items-center flex-col  ">
      <p className="w-1/2 text-xl text-center text-gray-700 italic leading-relaxed">
        {data.text}
      </p>
      <div className="flex justify-center items-center mt-10">
        <Avatar
          label="N"
          className="mr-4"
          size="large"
          shape="circle"
          style={{ backgroundColor: "#f0f0f0", color: "#555" }}
        />
        <div className="text-center">
          <h5 className="text-lg font-semibold text-gray-800">{data.name1}</h5>
          <h5 className="text-sm text-gray-500">{data.name2}</h5>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
