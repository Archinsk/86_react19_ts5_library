import React from "react";
import "./NavLink.css";
import { Link } from "react-router-dom";

interface NavLinkProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  routerLink?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({
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

export default NavLink;
