import React from "react";
import "./NavItem.css";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const NavItem: React.FC<ButtonProps> = ({
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

export default NavItem;
