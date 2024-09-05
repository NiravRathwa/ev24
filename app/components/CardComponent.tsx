import React from "react";
import { Card } from "primereact/card";
type Props = {
  data: {
    img: string;
    title: string;
    subTitle: string;
    description: string;
  };
};

const CardComponent = ({data}: Props) => {
  const header = (
    <img
      alt="Card"
      src={data.img}
      className="object-cover object-center max-h-80 rounded-md md:rounded-none"
    />
  );

  return (
    <Card
    title={<span className=" text-black text-lg font-bold md:text-2xl">{data.title}</span>}
    subTitle={<span className="font-bold text-lg md:text-2xl text-green-400">{data.subTitle}</span>}
      header={header}
      className="md:w-80"
    >
      <p className="m-0 text-base text-black">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed
        consequuntur error repudiandae numquam deserunt quisquam repellat libero
        asperiores earum nam nobis, culpa ratione quam perferendis esse,
        cupiditate neque quas!
      </p>
    </Card>
  );
};

export default CardComponent;
