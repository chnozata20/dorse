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
import "../styles/CustomizedTable.css";
import React, { useEffect, useState } from "react";


function Row(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);

  function sendCargoRequest(cargoId){
    fetch("http://localhost:3000/cargorequest", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        cargo_id: cargoId,
        driver_id: props.user.id,
        status: 0
      }),
    })
      .then((res) => {
        if (res.ok && res.status === 200) {
          props.setAlert(true);
          return res.json();
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }} style={{
          backgroundColor: row.cargoId === props.chosen ? 'salmon' : 'white',
        }}
        onClick={() => {
          props.setChosen(row.cargoId);
        }}>

        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{row.cargoId}</TableCell>
        <TableCell component="th" scope="row">
          {row.startCity}
        </TableCell>
        <TableCell>{row.endCity}</TableCell>
        <TableCell>{row.startDate}</TableCell>
        <TableCell>{row.endDate}</TableCell>
        <TableCell>{row.price}</TableCell>
        <TableCell>
          {row.cargoId === props.chosen && props.driver === true ?<button
            className="Example-btn11"
            onClick={() => {
              props.setChosen(row.cargoId);
              sendCargoRequest(row.cargoId)
            }}
          >
            İstek Gönder
          </button>: null }
          
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Detay
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Mesafe</TableCell>
                    <TableCell>Araç Tipi</TableCell>
                    <TableCell align="left">Dorse Tipi</TableCell>
                    <TableCell align="left">Tonaj</TableCell>
                    <TableCell align="left">En</TableCell>
                    <TableCell align="left">Boy</TableCell>
                    <TableCell align="left">Yükseklik</TableCell>
                    <TableCell align="left">Kargo Tipi</TableCell>
                    <TableCell align="left">Ödeme Tipi</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell align="left">{row.distance}</TableCell>
                    <TableCell align="left">{row.vehicleType}</TableCell>
                    <TableCell align="left">{row.trailerType}</TableCell>
                    <TableCell align="left">{row.tonnage}</TableCell>
                    <TableCell align="left">{row.width}</TableCell>
                    <TableCell align="left">{row.lenght}</TableCell>
                    <TableCell align="left">{row.height}</TableCell>
                    <TableCell align="left">{row.cargoType}</TableCell>
                    <TableCell align="left">{row.paymentType}</TableCell>
                  </TableRow>
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
  console.log("props.user")
  console.log(props.user)
  const [alert, setAlert] = useState(false);
  useEffect(() => {
    console.log("seçildi")
    console.log(props.chosen)
  }, [props.chosen]);
  return (
    <div>
  <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>NO</TableCell>
            <TableCell>Yükleme Noktası</TableCell>
            <TableCell>İndirme Noktası</TableCell>
            <TableCell>Yükleme Tarihi</TableCell>
            <TableCell>İndirme Tarihi</TableCell>
            <TableCell>Fiyat</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.cargo &&
            props.cargo.map((cargo) => <Row user={props.user} setAlert={setAlert} driver={props.driver} key={cargo.cargoId} row={cargo} chosen={props.chosen} setChosen={props.setChosen}/>)}
        </TableBody>
      </Table>
    </TableContainer>
      {alert === true ? (
        <div className="alertOk">
          <span
            className="closebtn"
            onClick={() => {
              setAlert(false);
            }}
          >
            ×
          </span>
          İSTEK BAŞARIYLA GÖNDERİLDİ.
        </div>
      ) : null}
    </div>
  
  );
}
