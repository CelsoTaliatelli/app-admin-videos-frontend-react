import { createTheme } from "@mui/material";

export const appTheme = createTheme({
    palette: {
        mode:'dark',
        primary: {
            main: "#f5f5f1"
        },
        secondary: {
            main: "#e50914"
        },
        text:{
            primary:"#f5f5f1"
        }
    },
    typography: {
        fontFamily: [
            "Poppins",
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(","),
    },
    components: {
        MuiButton: {
            defaultProps: {
                variant: "contained",
                color: "primary",
            },
        },
    },
})