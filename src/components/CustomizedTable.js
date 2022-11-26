import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useEffect } from "react";
import "../styles/CustomizedTable.css";

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.startCity}
        </TableCell>
        <TableCell>{row.endCity}</TableCell>
        <TableCell>{row.startDate}</TableCell>
        <TableCell>{row.endDate}</TableCell>
        <TableCell>
          <button className="button-12">SEÇ</button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Detail
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Distance</TableCell>
                    <TableCell>Vehicle Type</TableCell>
                    <TableCell align="right">Trailer Type</TableCell>
                    <TableCell align="right">Tonnage</TableCell>
                    <TableCell align="right">Volume</TableCell>
                    <TableCell align="right">Cargo Type</TableCell>
                    <TableCell align="right">Payment Type</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell align="right">{row.distance}</TableCell>
                    <TableCell align="right">{row.vehicleType}</TableCell>
                    <TableCell align="right">{row.trailerType}</TableCell>
                    <TableCell align="right">{row.tonnage}</TableCell>
                    <TableCell align="right">{row.volume}</TableCell>
                    <TableCell align="right">{row.cargoType}</TableCell>
                    <TableCell align="right">{row.paymentType}</TableCell>
                  </TableRow>
                  <TableRow></TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CustomizedTable(props) {
  useEffect(() => {
    fetch("http://localhost:3000/cargo/all")
      .then((res) => {
        if (res.ok && res.status === 200) {
          return res.json();
        }
      })
      .then((data) => {
        props.setCargo(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Yükleme Noktası</TableCell>
            <TableCell>İndirme Noktası</TableCell>
            <TableCell>Yükleme Tarihi</TableCell>
            <TableCell>İndirme Tarihi</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.cargo &&
            props.cargo.map((cargo) => <Row key={cargo.cargoId} row={cargo} />)}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
