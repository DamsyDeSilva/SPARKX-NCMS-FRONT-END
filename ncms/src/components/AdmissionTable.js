import { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Grid,
  Typography,
  TablePagination,
  TableFooter,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 1100,
  },
  tableContainer: {
    borderRadius: 15,
    margin: "10px 10px",
    maxWidth: 1500,
  },
  tableHeaderCell: {
    fontWeight: "bold",
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.getContrastText(theme.palette.primary.dark),
  },
  avatar: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.getContrastText(theme.palette.primary.light),
  },
  name: {
    fontWeight: "bold",
    color: theme.palette.secondary.dark,
  },
  status: {
    fontWeight: "bold",
    fontSize: "0.75rem",
    color: "white",
    backgroundColor: "grey",
    borderRadius: 8,
    padding: "3px 10px",
    display: "inline-block",
  },
  title: {
    fontSize: "20px",
    color: "#f1356d",
    marginBottom: "30px",
  },

  forminput: {
    width: "100px",
    height: "25px",
    paddingTop: "3px",
    marginTop: "5px",
    marginBottom: "10px",
    border: "1px",
    borderStyle: "solid",
    borderColor: "#ddd",
    boxSizing: "border-box",
    borderRadius: "8px",
    display: "block",
    color: "#818a84",
  },
  formButton: {
    background: "#f1356d",
    color: "#fff",
    border: "0",
    padding: "8px",
    borderRadius: "8px",
  },
}));

const AdmissionTable = () => {
  const [patientAdmissionData, setPatientAdmissionData] = useState([]);
  // const [doctorName, setDoctorName] = useState();
  const [severityLevel, setSeverityLevel] = useState();

  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // patient admit post
  const handleAdmit = (e, patientid) => {
    e.preventDefault();
    console.log(patientid);

    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };

    const url = `http://localhost:8080/ncms/doctor/admits?username=${localStorage.getItem("username")}&patientId=${patientid}&severityLevel=${severityLevel}`;
    console.log(url, config);

    axios.post(url).then((res) => {
      console.log(res.data);
    });
  };

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };

    axios
      .get("http://localhost:8080/ncms/doctor/admits", config)
      .then((response) => {
        // hospitalData = response.data;
        console.log(response.data);
        setPatientAdmissionData(response.data);
      })
      // console.log(hospitalData);
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeaderCell}>
                Patient Id and Name
              </TableCell>
              <TableCell className={classes.tableHeaderCell}>
                District
              </TableCell>
              <TableCell className={classes.tableHeaderCell}>
                Location
              </TableCell>
              <TableCell className={classes.tableHeaderCell}>Gender</TableCell>
              <TableCell className={classes.tableHeaderCell}>
                HospitalID
              </TableCell>
              <TableCell className={classes.tableHeaderCell}>
                Bed Number
              </TableCell>
              <TableCell className={classes.tableHeaderCell}>
                Severity level
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {patientAdmissionData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                // setPatientID(row.id),
                <TableRow key={row.id}>
                  <TableCell>
                    <Grid container>
                      <Grid item lg={2}>
                        <Avatar
                          alt={row.name}
                          src="."
                          className={classes.avatar}
                        />
                      </Grid>

                      <Grid item lg={10}>
                        <Typography className={classes.name}>
                          {row.firstName} {row.lastName}
                        </Typography>
                        <Typography color="textSecondary" variant="body2">
                          {row.id}
                        </Typography>
                      </Grid>
                    </Grid>
                  </TableCell>

                  <TableCell>
                    <Typography color="primary" variant="subtitle2">
                      {row.district}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    {row.locationX}
                    {" , "}
                    {row.locationY}
                  </TableCell>

                  <TableCell>{row.gender}</TableCell>
                  <TableCell>{row.hospitalId}</TableCell>
                  <TableCell>{row.bedNo}</TableCell>

                  <TableCell>
                      <select
                        className={classes.forminput}
                        required
                        value={severityLevel}
                        onChange={(e) => setSeverityLevel(e.target.value)}
                      >
                        <option value="Low">Low</option>
                        <option value="Moderate">Moderate</option>
                        <option value="Critical">Critical</option>
                      </select>
                      <button className={classes.formButton} onClick={(e) => handleAdmit(e, row.id)}> Admit </button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
          <TableFooter>
            <TablePagination
              rowsPerPageOptions={[5, 10, 15]}
              component="div"
              count={patientAdmissionData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
};
export default AdmissionTable;
