import React from "react";

interface TableRowProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLTableRowElement>,
    HTMLTableRowElement
  > {}

const TableRow: React.FC<TableRowProps> = ({
  className,
  children,
  ...props
}) => {
  return <tr {...props}>{children}</tr>;
};

export default TableRow;
