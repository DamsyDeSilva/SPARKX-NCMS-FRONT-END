import { useState, useEffect } from "react";
import "./pageStyles.css";
import Header from "../components/Header";
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
    minWidth: 650,
  },
  tableContainer: {
    borderRadius: 15,
    margin: "10px 10px",
    maxWidth: 950,
    
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
  title:{
    fontSize: "20px",
    color: "#f1356d",
    marginBottom: "30px",
  }
}));

const Hospitals = () => {
  const [hospitalData, setHospitalData] = useState([]);

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

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    };

    axios
      .get("http://localhost:8080/ncms/hospital", config)
      .then((response) => {
        // hospitalData = response.data;
        console.log(response.data);
        setHospitalData(response.data);
      })
      // console.log(hospitalData);
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="home">
      <div className="div_header">
        <Header />
      </div>
  
      <div>
        <h2 className={classes.title}> Hospitals</h2>
      </div>

      <div>
        <TableContainer component={Paper} className={classes.tableContainer}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.tableHeaderCell}>
                  Hospital Name
                </TableCell>
                <TableCell className={classes.tableHeaderCell}>
                  District
                </TableCell>
                <TableCell className={classes.tableHeaderCell}>
                  Location X
                </TableCell>
                <TableCell className={classes.tableHeaderCell}>
                  Location Y
                </TableCell>
                <TableCell className={classes.tableHeaderCell}>
                  Build Date
                </TableCell>
                <TableCell className={classes.tableHeaderCell}>
                  Available Beds
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {hospitalData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow key={row.name}>

                    <TableCell>
                      <Grid container>
                        <Grid item lg={2}>
                          <Avatar
                            alt={row.name}
                            // src={row.id}
                            className={classes.avatar}
                          >{row.id}</Avatar>
                        </Grid>
                        <Grid item lg={10}>
                          <Typography className={classes.name}>
                            {row.name}
                          </Typography>
                        </Grid>
                      </Grid>
                    </TableCell>

                    <TableCell>
                      <Typography color="primary" variant="subtitle2">
                        {row.district}
                      </Typography>

                    </TableCell>

                    <TableCell>{row.locationX}</TableCell>

                    <TableCell>{row.locationY}</TableCell>
                    <TableCell>{row.buildDate}</TableCell>
                    <TableCell>
                      <Typography
                        className={classes.status}
                        style={{
                          backgroundColor:
                            (row.availBeds <= 2 && "red") ||
                            (row.availBeds <= 6 && "blue") ||
                            (row.availBeds <= 10 && "orange"),
                        }}
                      >
                        {row.availBeds}
                      </Typography>
                    </TableCell>

                  </TableRow>
                ))}
            </TableBody>
            <TableFooter>
              <TablePagination
                rowsPerPageOptions={[5, 10, 15]}
                component="div"
                count={hospitalData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
            </TableFooter>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
export default Hospitals;
