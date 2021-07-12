import { useState, useEffect } from "react";
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
    minWidth: 400,
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
  title: {
    fontSize: "20px",
    color: "#f1356d",
    marginBottom: "20px",
    textAlign: "center"
  },
}));

const DistrictStats = () => {
  const [statDistrictData, setStatDistrictData] = useState([]);

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
    axios
      .get("http://localhost:8080/ncms/stats?type=district")
      .then((response) => {
        console.log(response.data);
        setStatDistrictData(response.data);
      })
      // console.log(hospitalData);
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2 className={classes.title}> District Level Patients</h2>
      <div>
        <TableContainer component={Paper} className={classes.tableContainer}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.tableHeaderCell}>
                  District
                </TableCell>
                <TableCell className={classes.tableHeaderCell}>
                  Patients
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {statDistrictData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow key={row.district}>
                    <TableCell>
                      <Grid container>
                        <Grid item lg={2}>
                          <Avatar
                            alt={row.district}
                            src="."
                            className={classes.avatar}
                          />
                        </Grid>
                        <Grid item lg={10}>
                          <Typography className={classes.name}>
                            {row.district}
                          </Typography>
                        </Grid>
                      </Grid>
                    </TableCell>

                    <TableCell>
                      <Typography
                        className={classes.status}
                        style={{
                          backgroundColor:
                            (row.count <= 2 && "green") ||
                            (row.count <= 6 && "blue") ||
                            (row.count <= 10 && "red"),
                        }}
                      >
                        {row.count}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
            <TableFooter>
              <TablePagination
                rowsPerPageOptions={[5, 10, 15]}
                component="div"
                count={statDistrictData.length}
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
export default DistrictStats;
