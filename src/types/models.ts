import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface CardProps {
  type: string;
  benefits: string[];
  features: string[];
  applicationLink: string;
  banner: string;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CreditScoreProps {
  options: OptionProps[];
}

export interface FooterLinkProps {
  title: string,
  url: string
}

export interface FooterProps {
  title: string,
  links: FooterLinkProps[]
}