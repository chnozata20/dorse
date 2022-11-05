import * as React from "react";
import PropTypes from "prop-types";
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

const rows = [
  createData(1, "ADANA", "İZMİR", "10.05.2022", "10.10.2022"),
  createData(2, "ADANA", "İZMİR", "10.05.2022", "10.10.2022"),
  createData(3, "ADANA", "İZMİR", "10.05.2022", "10.10.2022"),
  createData(4, "ADANA", "İZMİR", "10.05.2022", "10.10.2022"),
  
];

function createData(id, start_point, end_point, start_date, end_date) {
  return {
    id,
    start_point,
    end_point,
    start_date,
    end_date,
    detail: [
      {
        distance: "510 KM",
        vehicle_type: "TIR-DORSELİ",
        trailer_type: "HEPSİ",
        tonnage: "20 TON",
        volume: "20 M^3",
        cargo_type: "EŞYA",
        payment_type: "NAKİT",
      },
    ],
  };
}

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
          {row.start_point}
        </TableCell>
        <TableCell>{row.end_point}</TableCell>
        <TableCell>{row.start_date}</TableCell>
        <TableCell>{row.end_date}</TableCell>
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
                  {row.detail.map((detailRow) => (
                    <TableRow key={detailRow.distance}>
                      <TableCell align="right">{detailRow.distance}</TableCell>
                      <TableCell align="right">
                        {detailRow.vehicle_type}
                      </TableCell>
                      <TableCell align="right">
                        {detailRow.trailer_type}
                      </TableCell>
                      <TableCell align="right">{detailRow.tonnage}</TableCell>
                      <TableCell align="right">{detailRow.volume}</TableCell>
                      <TableCell align="right">
                        {detailRow.cargo_type}
                      </TableCell>
                      <TableCell align="right">
                        {detailRow.payment_type}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    start_point: PropTypes.string.isRequired,
    end_point: PropTypes.string.isRequired,
    start_date: PropTypes.string.isRequired,
    end_date: PropTypes.string.isRequired,

    detail: PropTypes.arrayOf(
      PropTypes.shape({
        distance: PropTypes.string.isRequired,
        vehicle_type: PropTypes.string.isRequired,
        trailer_type: PropTypes.string.isRequired,
        tonnage: PropTypes.string.isRequired,
        volume: PropTypes.string.isRequired,
        cargo_type: PropTypes.string.isRequired,
        payment_type: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default function CustomizedTable() {
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
          {rows.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
