import React from "react";

interface TableCellProps
  extends React.DetailedHTMLProps<
    React.ThHTMLAttributes<HTMLTableCellElement>,
    HTMLTableCellElement
  > {
  tag?: "th" | "td";
}

const TableCell: React.FC<TableCellProps> = ({
  className,
  children,
  tag,
  ...props
}) => {
  if (tag === "th") {
    return <th {...props}>{children}</th>;
  } else {
    return <td {...props}>{children}</td>;
  }
};

export default TableCell;
