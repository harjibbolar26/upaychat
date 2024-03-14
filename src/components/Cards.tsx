import React, { useState } from "react";
import { CardProps } from "../types/models";
import { CardTypes } from "../constants";
import CustomButton from "./CustomButton";
import CardDetails from "./CardDetails";

interface CardPropsProps {
  card: CardProps;
}

const Cards = ({ card }: CardPropsProps) => {
  const { type, banner } = card;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card group mt-10">
      <div className="card__content">
        <div className={` h-40 rounded-lg mb-4 w-full`}><img src={banner} alt="banner" className="w-full h-40 rounded-lg"/></div>
        <h2 className="card__content-title font-layarBahteraBold">{type} Card</h2>
      </div>
      <p className="flex mt-6 text-[18px] font-normal font-layarBahteralight">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor tenetur
        delectus perferendis accusamus incidunt repellendus quo deleniti illum
        qui voluptatibus, dolores nobis obcaecati commodi nulla excepturi error
        doloremque iusto. Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Quaerat, nulla suscipit obcaecati architecto consequatur explicabo
        repellendus recusandae, id, est quod repellat veniam. Dolorum laboriosam
        quibusdam aut adipisci hic sit asperiores.
      </p>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <img
              src="./upay.png"
              width={20}
              height={20}
              alt="steering_wheel"
            />
            <p className="text-[14px]">UpayChat Card</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <img
              src="./upay.png"
              width={20}
              height={20}
              alt="steering_wheel"
            />
            <p className="text-[14px]">UpayChat Card</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 md">
            <img
              src="./upay.png"
              width={20}
              height={20}
              alt="UpayChat Card_wheel"
            />
            <p className="text-[14px]">UpayChat Card</p>
          </div>
        </div>

        <div className="card__btn-container">
          <CustomButton
            title="View More"
            containerStyles="w-[250%] max-md:w-[200%] max-xs:w-[150%] mx-auto py-[16px] rounded-full bg-[#4EE567]"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="./right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <CardDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        card={card}
      />
    </div>
  );
};

export default Cards;
