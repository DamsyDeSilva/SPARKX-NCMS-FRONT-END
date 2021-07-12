import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";

import {
    Card,
    CardContent,
    Typography
  } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    minHeight: 200,
    background: "#000CCC"
  },
  headtitle: {
    fontSize: "20px",
    color: "#f1356d",
    marginBottom: "20px",
    textAlign: "center",
  },
  cardData: {
    marginTop: "50px",
    color: "#ffffff",
    textAlign: "center",
  },
});

const DailyStat = () => {
  const [statDaily, setStatDaily] = useState();
  const classes = useStyles();

  useEffect(() => {
    axios
      .get("http://localhost:8080/ncms/stats?type=daily")
      .then((response) => {
        console.log(response.data.count);
        setStatDaily(response.data.count);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2 className={classes.headtitle}>Daily Patients</h2>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h3" className={classes.cardData}>
            {statDaily}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default DailyStat;
