import React from "react";
import TableRow from "../TableRow/TableRow";
import TableCell from "../TableCell/TableCell";

interface TableProps
  extends React.DetailedHTMLProps<
    React.TableHTMLAttributes<HTMLTableElement>,
    HTMLTableElement
  > {
  config?: any;
}

const Table: React.FC<TableProps> = ({
  className,
  children,
  config,
  ...props
}) => {
  if (config) {
    const tableRows = config.rows.map((row: any, rowIndex: number) => {
      const rowCells = row.cells.map((cell: any, cellIndex: number) => {
        return (
          <TableCell key={cellIndex} tag={cell.tag}>
            {cell.content}
          </TableCell>
        );
      });
      return <TableRow key={rowIndex}>{rowCells}</TableRow>;
    });
    return <table>{tableRows}</table>;
  } else {
    return <table>{children}</table>;
  }
};

export default Table;
