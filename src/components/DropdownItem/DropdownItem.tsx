import React from "react";
import "./DropdownItem.css";
import { Link } from "react-router-dom";

interface DropdownItemProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  routerLink: boolean;
}

const DropdownItem: React.FC<DropdownItemProps> = ({
  className,
  children,
  href = "#",
  routerLink,
  ...props
}) => {
  if (routerLink) {
    return (
      <Link
        to={href}
        className={`nav-link${className ? " " + className : ""}`}
        {...props}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <a
        href={href}
        className={`nav-link${className ? " " + className : ""}`}
        {...props}
      >
        {children}
      </a>
    );
  }
};

export default DropdownItem;
