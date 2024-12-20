import React from "react";
import "./Button.css";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const Button: React.FC<ButtonProps> = ({
  className,
  children,
  type = "button",
  ...props
}) => {
  return (
    <button
      className={`button${className ? " " + className : ""}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
