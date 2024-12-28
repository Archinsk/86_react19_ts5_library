import React from "react";
import "./DropdownMenu.css";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

const DropdownMenu: React.FC<ButtonProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={`dropdown-menu${className ? " " + className : ""}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default DropdownMenu;
