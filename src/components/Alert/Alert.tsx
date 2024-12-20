import React from "react";
import "./Alert.css";

interface AlertProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

const Alert: React.FC<AlertProps> = ({ className, children, ...props }) => {
  return (
    <span className={`alert${className ? " " + className : ""}`} {...props}>
      {children}
    </span>
  );
};

export default Alert;
