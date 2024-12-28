import Table from "../components/Table/Table";
import TableCell from "../components/TableCell/TableCell";
import TableRow from "../components/TableRow/TableRow";

function TableRoute() {
  return (
    <>
      <h2>Table</h2>
      <h3>Варианты использования</h3>
      <Table>
        <TableRow>
          <TableCell tag="th">A</TableCell>
          <TableCell tag="th">B</TableCell>
          <TableCell tag="th">C</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>A3</TableCell>
          <TableCell>B3</TableCell>
          <TableCell>C3</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>A2</TableCell>
          <TableCell>B2</TableCell>
          <TableCell>C2</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>A1</TableCell>
          <TableCell>B1</TableCell>
          <TableCell>C1</TableCell>
        </TableRow>
      </Table>
      <h3>Варианты стилизации</h3>
    </>
  );
}

export default TableRoute;
