import React from "react";
import "./Nav.css";
import NavLink from "../NavLink/NavLink";

interface NavProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  data?: {
    items: Array<any>;
  };
}

const Nav: React.FC<NavProps> = ({ className, children, data, ...props }) => {
  return (
    <ul className={`nav${className ? " " + className : ""}`} {...props}>
      {data &&
        data.items.map((item: any, index: number) => {
          return <NavLink key={index}>{item.name}</NavLink>;
        })}
      {!data && children}
    </ul>
  );
};

export default Nav;
