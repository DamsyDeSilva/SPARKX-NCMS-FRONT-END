import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    Button,
} from "@material-ui/core";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const headersData = [
    {
        label: "Hospitals",
        href: "/hospitals",
    },
    {
        label: "Doctors",
        href: "/doctors",
    },
    {
        label: "Contact Us",
        href: "/contact",
    },
    {
        label: "Log Out",
        href: "/logout",
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
        return <Toolbar className={toolbar}>
            {headerText}
            <div>{getMenuButtons()}</div>
        </Toolbar>;
    };

    const headerText = (
        <Typography variant="h6" component="h1" className={headText}>
            National COVID Management System
        </Typography>
    );

    const getMenuButtons = () => {
        return headersData.map(({ label, href }) => {
            return (
                <Button
                    {...{
                        key: label,
                        color: "inherit",
                        to: href,
                        component: RouterLink,
                        className: menuButton
                    }}
                >
                    {label}
                </Button>
            );
        });
    };


    return (
        <header>
            <AppBar className={header}>{displayHeader()}</AppBar>
        </header>
    );
}
