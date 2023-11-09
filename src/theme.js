import { createTheme } from "@mui/material";

export const theme = createTheme({
    typography: {
        fontSize: 14,
        htmlFontSize: 14,
        body1: {
          letterSpacing: "unset",
        },
        body2: {
          letterSpacing: "unset",
        },
      },
      palette: {
        primary: {
          main: "#ef4410eb",
          dark: "#ff3b00",
          light: "#ef4410eb",
        },
        background: {
          default: "#f6f6f6",
          defaultGhosted: "#f6f6f666",
          hover: "#ef4410eb",
          header: "#f6f6f6",
          sideMenu: "#0a2240",
          sideMenuSelectedBorder: "#ef4410eb",
          input: "#ffffff",
          loginForm: "rgb(248 242 242)",
          buttonBoxShadow: "#0a2240",
          progressBanner: "#ccd0d4",
        },
        error: {
          main: "#ff0000",
          underline: "#ff0000",
        },
        text: {
          secondary: "#104358",
          activeMenu: "#ef4410eb",
          dimmed: "rgba(0, 0, 0, 0.7)",
          ligature: "#1043586e",
          columnHeader: "#104358",
          highlight: "#104358",
          urgent: "#f44336",
          info: "#CECECE",
          button: "#104358"
        },
        links: {
          main: "#186483",
        },
        table: {
          headerDivider: "rgba(224, 224, 224, 1)",
          contentDivider: "#ebebeb",
          contentVerticalDivider: "#0000000a",
          detailsHeader: "#ebebeb",
          costs: "#F4EA96",
          prices: "#DEEEC9",
          lineItems: "rgb(232, 232, 232)",
        },
        form: {
          sectionText: "#186483",
          sectionDivider: "#c8c8c8",
          fieldOutline: "#EBEBEB",
          fieldBackground: "none",
          fieldFocusUnderline: "#a0a0a0",
        },
        upload: {
          uploaderInput: "#CECECE",
          uploaderInputHighlight: "#186483",
        }
    },
})


