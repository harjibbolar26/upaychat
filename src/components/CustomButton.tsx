import React from "react";
import { CustomButtonProps } from "../types/models";

const CustomButton = ({
  btnType,
  containerStyles,
  handleClick,
  textStyles,
  title,
  rightIcon,
}: CustomButtonProps) => {
  return (
    <div>
      <button
        disabled={false}
        type={btnType || "button"}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
      >
        <span className={`flex-1 ${textStyles}`}>{title}</span>
        {rightIcon && (
          <div className="relative w-6 h-6">
            <img src={rightIcon} alt="icon" className="object-contain" />
          </div>
        )}
      </button>
    </div>
  );
};

export default CustomButton;
