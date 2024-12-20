import React from "react";
import "./Button.css";
import Icon from "../Icon/Icon";
import Badge from "../Badge/Badge";

/* function Button({
  children,
  className,
  type = "button",
  theme,
  size,
  block,
  square,
  icon,
  badge,
  withoutBtnClass,
  additionalClasses,
  dataBsToggle,
  dataBsTarget,
  dataBsDismiss,
  ariaExpanded,
  ariaControls,
  ariaLabel,
}) {
  let btnClass = "";
  if (!withoutBtnClass) {
    btnClass = "btn";
  }
  if (theme) {
    btnClass += ` btn-${theme}`;
  }
  if (size && ["sm", "lg"].includes(size)) {
    btnClass += ` btn-${size}`;
  }
  if (block) {
    btnClass += " btn-block";
  }
  if (square) {
    btnClass += " btn-square";
  }
  if (icon) {
    btnClass += " btn-icon";
  }
  if (badge) {
    btnClass += " btn-badge";
  }
  if (additionalClasses) {
    btnClass += ` ${additionalClasses}`;
  }
  if (className) {
    btnClass += ` ${className}`;
  }

  return (
    <button
      type={type}
      className={btnClass}
      data-bs-toggle={dataBsToggle ? dataBsToggle : null}
      data-bs-target={dataBsTarget ? dataBsTarget : null}
      data-bs-dismiss={dataBsDismiss ? dataBsDismiss : null}
      aria-expanded={ariaExpanded ? ariaExpanded : null}
      aria-controls={ariaControls ? ariaControls : null}
      aria-label={ariaLabel ? ariaLabel : null}
    >
      {icon ? (
        <Icon
          name={typeof icon === "string" ? icon : icon.name}
          format={icon.format}
          type={icon.type}
        />
      ) : null}
      {!(icon && square) ? <span>{children}</span> : null}
      {badge ? (
        <Badge theme={badge.theme} className={badge.className}>
          {badge.text}
        </Badge>
      ) : null}
    </button>
  );
} */

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
