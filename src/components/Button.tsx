import React from "react";

interface IButtonProps {
  type: "button" | "submit" | "reset";
}

const Button = (props: IButtonProps) => {
  return <button type={props.type}>Clique-me</button>;
};

export default Button;
