import { createTheme } from "@material-ui/core/styles";

const palettes = {
  dark: {
    primary: {
      main: "#ff8d63",
      dark: "#e0f0f0",
      light: "#ff8d63",
    },
    background: {
      default: "#595959",
      defaultGhosted: "#59595966",
      paper: "rgb(58 58 60)",
      header: "#595959",
      hover: "#ff8d63",
      sideMenu: "#252526",
      sideMenuSelectedBorder: "#ff8d63",
      input: "#3e3b3b91",
      loginForm: "#595959",
    },
    text: {
      primary: "rgb(255, 255, 255)",
      activeMenu: "#ff8d63",
      disabled: "rgba(255, 255, 255, 0.3)",
      secondary: "rgba(255, 255, 255, 0.4)",
      dimmed: "rgba(255, 255, 255, 0.5)",
      ligature: "#186483",
      columnHeader: "rgba(255, 255, 255, 0.3)",
      highlight: "rgba(255, 255, 255, 0.8)",
      info: "#CECECE",
    },
    error: {
      main: "#d32f2f",
      underline: "#d32f2f",
    },
    action: {
      active: "rgba(255, 255, 255, 0.3)",
    },
    links: {
      main: "#3dbdf1",
    },
    table: {
      headerDivider: "rgba(255, 255, 255, 0.05)",
      contentDivider: "rgba(255, 255, 255, 0.05)",
      contentVerticalDivider: "rgba(255, 255, 255, 0.05)",
      detailsHeader: "#29292B",
      costs: "#5c5a08",
      prices: "#105215",
      lineItems: "rgb(48 48 50 / 40%)",
    },
    form: {
      sectionText: "rgba(255, 255, 255, 0.8)",
      sectionDivider: "rgba(255, 255, 255, 0.15)",
      fieldOutline: "rgba(0, 0, 0, 0.2)",
      fieldBackground: "transparent",
      fieldFocusUnderline: "rgba(255, 255, 255, 0.1)",
    },
    upload: {
      uploaderInput: "rgba(255, 255, 255, 0.3)",
      uploaderInputHighlight: "#186483",
    },
  },
};

export const getTheme = (palette) => {
  const baseTheme = createTheme({
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
        main: "#3cacac",
        dark: "#e0f0f0",
        light: "#e0f0f0",
      },
      background: {
        default: "#f6f6f6",
        defaultGhosted: "#f6f6f666",
        hover: "#e0f0f0",
        header: "#f6f6f6",
        sideMenu: "#3cacac",
        sideMenuSelectedBorder: "#e0f0f0",
        input: "#ffffff",
        loginForm: "rgb(248 242 242)",
      },
      error: {
        main: "#f44336",
        underline: "#f44336",
      },
      text: {
        secondary: "#104358",
        activeMenu: "#e0f0f0",
        dimmed: "rgba(0, 0, 0, 0.7)",
        ligature: "#1043586e",
        columnHeader: "#104358",
        highlight: "#104358",
        urgent: "#f44336",
        info: "#CECECE",
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
      },
      ...(palette ? palettes[palette] : {}),
    },
  });

  return createTheme(
    {
      overrides: {
        MuiTooltip: {
          popper: {
            zIndex: 10000,
          },
        },
        MuiCssBaseline: {
          "@global": {
            body: {
              lineHeight: "unset",
            },
          },
        },
        MuiFormControlLabel: {
          root: {
            marginLeft: -3,
          },
        },
        MuiButton: {
          root: {
            padding: "10px 15px",
            textTransform: "none",
            fontWeight: "400",
            letterSpacing: "unset",
          },
          outlined: {
            borderColor: baseTheme.palette.primary.main,
            color: baseTheme.palette.links.main,
          },
          contained: {
            boxShadow: "none",
          },
        },
        MuiCheckbox: {
          root: {
            padding: "3px 3px",
            marginRight: 5,
          },
        },
        MuiPopover: {
          paper: {
            background: baseTheme.palette.background.popover,
          },
        },
        MuiLinearProgress: {
          colorPrimary: {
            backgroundColor: "unset",
          },
        },
        MuiRadio: {
          root: {
            padding: "3px 3px",
            marginRight: 5,
          },
        },
        MuiFormGroup: {
          root: {
            marginTop: 5,
          },
        },
        MuiInput: {
          //   root: {
          //     border: `1px solid ${baseTheme.palette.form.fieldOutline}`,
          //     borderRadius: "3px",
          //   },
          input: {
            //padding: "4px",
            fontSize: "12px",
            "&:-webkit-autofill": {
              transitionDelay: "9999s",
            },
          },
          formControl: {
            //marginTop: "20px !important",
            background: baseTheme.palette.form.fieldBackground,
          },
          multiline: {
            padding: "4px",
          },
          inputMultiline: {
            padding: "0",
          },
          // underline: {
          //     "&:before": {
          //         borderBottom: "none !important"
          //     },
          //     "&:after": {
          //         borderBottomColor: baseTheme.palette.form.fieldFocusUnderline,
          //         borderBottomWidth: 1
          //     },
          //     "&:hover": {},
          //     "&$error:after": {
          //         borderBottomColor: baseTheme.palette.error.underline,
          //     }
          // }
        },
        MuiLink: {
          root: {
            color: baseTheme.palette.links.main,
          },
        },
        MuiFormLabel: {
          root: {
            whiteSpace: "nowrap",
            overflow: "hidden",
            width: "100%",
            textOverflow: "ellipsis",
            fontSize: "12px",
            lineHeight: "unset",

            "&$focused": {
              color: "inherit",
            },
          },
        },
        MuiPickersCalendarHeader: {
          dayLabel: {
            color: baseTheme.palette.text.dimmed,
          },
        },
        MuiInputLabel: {
          shrink: {
            transform: "translate(0, 0) scale(1)",
          },
        },
        MuiFormHelperText: {
          root: {
            "&$error": {
              position: "absolute",
              bottom: -20,
              left: 8,
              overflow: "hidden",
              right: 8,
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              fontSize: "12px",
            },
          },
        },
        // MuiMenuItem: {
        //   root: {
        //     fontSize: "1rem",
        //   },
        // },
        MuiDataGrid: {
          root: {
            fontSize: "12px",
            border: "none",
            "& .MuiDataGrid-cell": {
              borderBottom: `1px solid ${baseTheme.palette.table.contentDivider}`,
              borderRight: `1px solid ${baseTheme.palette.table.contentVerticalDivider}`,
              padding: "0 6px",
            },
            "& button": {
              fontSize: 12,
              paddingTop: 1,
              paddingBottom: 1,
            },
            "& .MuiDataGrid-cellCheckbox": {
              maxWidth: "40px !important",
              minWidth: "40px !important",
            },
            "& .MuiDataGrid-columnHeaderCheckbox": {
              maxWidth: "40px !important",
              minWidth: "40px !important",
            },
            "& .MuiDataGrid-columnsContainer": {
              borderBottom: `1px solid ${baseTheme.palette.table.headerDivider}`,
            },
            "& .MuiDataGrid-columnSeparator": {
              display: "none",
            },
            "& .MuiDataGrid-columnHeader": {
              borderRight: `1px solid ${baseTheme.palette.table.contentDivider}`,
              padding: "0 6px",
            },
            "& .MuiDataGrid-columnHeaderTitle": {
              color: baseTheme.palette.text.columnHeader,
              fontWeight: 500,
            },
            "& .MuiDataGrid-columnHeaderTitleContainer": {
              padding: 0,
            },
            "& .MuiDataGrid-footerContainer": {
              minHeight: 36,
            },
            "& .MuiDataGrid-row": {
              "&.Mui-selected": {
                backgroundColor: "#1d80970d",

                "&:hover": {
                  backgroundColor: "#1d80971c",
                },
              },
            },
          },
        },
        MuiTablePagination: {
          toolbar: {
            minHeight: 26,
          },
        },
        MuiAlert: {
          standardSuccess: {
            backgroundColor: "#DEEEC9",
          },
          standardError: {
            backgroundColor: "#ED9791",
          },
        },
        MuiDialog: {
          paper: {
            width: "100%",
          },
        },
        MuiDialogContent: {
          root: {
            "&:first-child": {
              paddingTop: undefined,
            },
            paddingBottom: 12,
          },
        },
        MuiTableCell: {
          root: {
            borderBottom: `1px solid ${baseTheme.palette.form.fieldOutline}`,
          },
        },
        MuiDialogActions: {
          root: {
            padding: 24,
          },
        },
        MuiListItemIcon: {
          root: {
            minWidth: 25,
          },
        },
        MuiListItemText: {
          primary: {
            fontSize: "1rem",
          },
          secondary: {
            fontSize: "1rem",
          },
        },
        MuiAutocomplete: {
          paper: {
            fontSize: "1rem",
          },
          inputRoot: {
            '&[class*="MuiInput-root"]': {
              "& .MuiAutocomplete-input": {
                "&:first-child": {
                  padding: 4,
                },
              },
            },
          },
          hasPopupIcon: {
            "& .MuiAutocomplete-inputRoot": {
              paddingRight: "24px !important",
            },
          },
        },
      },
    },
    baseTheme
  );
};
