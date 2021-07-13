import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const headersNotLoggedIn = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Statistics",
    href: "/stats",
  },
  {
    label: "Login",
    href: "/login",
  },
];

const headersDoctorLoggedIn = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Statistics",
    href: "/stats",
  },
  {
    label: "Patient Admissions",
    href: "/patientadmission",
  },
  {
    label: "Patient Discharge",
    href: "/patientdischarge",
  },
  {
    label: "Hospitals",
    href: "/hospitals",
  },
  {
    label: "Logout",
    href: "/",
  },
];

const headersMOHLoggedIn = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Statistics",
    href: "/stats",
  },
  {
    label: "Hospitals",
    href: "/hospitals",
  },
  {
    label: "Moh Dashboard",
    href: "/mohdashboard",
  },
  {
    label: "Logout",
    href: "/",
  },
];

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#000CCC",
    paddingRight: "79px",
    paddingLeft: "118px",
  },
  headText: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left",
  },

  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default function Header() {
  const { header, headText, menuButton, toolbar } = useStyles();

  const displayHeader = () => {
    return (
      <Toolbar className={toolbar}>
        {headerText}
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const headerText = (
    <Typography variant="h6" component="h1" className={headText}>
      National COVID Management System
    </Typography>
  );

  const handleSubmit = (e, lable) => {
    // e.preventDefault();
    console.log(lable.label);
    if (lable.label === "Logout") {
      localStorage.setItem("LoggedIn", false);
      localStorage.setItem("token", "");
      localStorage.setItem("role", "");
      localStorage.setItem("username", "");
    }
  };

  const getMenuButtons = () => {
    if (
      localStorage.getItem("LoggedIn") === null || localStorage.getItem("LoggedIn") === "false") {
      console.log("logged not menu");
      return headersNotLoggedIn.map(({ label, href }) => {
        return (
          <Button
            {...{
              key: label,
              color: "inherit",
              to: href,
              component: RouterLink,
              className: menuButton,
              onClick: (e) => handleSubmit(e, { label }),
            }}
          >
            {label}
          </Button>
        );
      });
    } else if ((localStorage.getItem("role") === "MOH")) {
        console.log("logged moh menu");
      return headersMOHLoggedIn.map(({ label, href }) => {
        return (
          <Button
            {...{
              key: label,
              color: "inherit",
              to: href,
              component: RouterLink,
              className: menuButton,
              onClick: (e) => handleSubmit(e, { label }),
            }}
          >
            {label}
          </Button>
        );
      });
    }
    else if ((localStorage.getItem("role") === "DOCTOR")) {
        console.log("logged doctor menu");
        return headersDoctorLoggedIn.map(({ label, href }) => {
          return (
            <Button
              {...{
                key: label,
                color: "inherit",
                to: href,
                component: RouterLink,
                className: menuButton,
                onClick: (e) => handleSubmit(e, { label }),
              }}
            >
              {label}
            </Button>
          );
        });
      }
  };

  return (
    <header>
      <AppBar className={header}>{displayHeader()}</AppBar>
    </header>
  );
}
