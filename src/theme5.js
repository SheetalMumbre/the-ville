import { createTheme, adaptV4Theme } from "@mui/material/styles";

const palettes = {
  dark: {
    primary: {
      main: "#ff8d63",
      dark: "#ef4410eb",
      light: "#ff8d63",
    },
    background: {
      default: "#595959",
      defaultGhosted: "#59595966",
      paper: "rgb(58 58 60)",
      header: "#595959",
      hover: "#ff8d63",
      sideMenu: "#29292B",
      sideMenuSelected: "#a93d1436",
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
      main: "#bb5d56",
      underline: "#bb5d564d",
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
      costs: "#31381f",
      prices: "#1f3c29",
      buttonText: "#3dbdf1",
      buttonBorder: "rgba(24, 100, 131, 0.5)",
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

export const getTheme5 = (palette) => {
  const baseTheme = createTheme(
    adaptV4Theme({
      typography: {
        fontSize: 14,
        htmlFontSize: 14,
        fontFamily: ["Inter"].join(","),
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
          default: "#f9f9f9",
          defaultGhosted: "#f9f9f966",
          hover: "ef4410eb",
          header: "#ffffff",
          sideMenu: "#104358",
          sideMenuSelectedBorder: "#ffffff",
          input: "#ffffff",
          loginForm: "rgb(248 242 242)",
        },
        error: {
          main: "#f44336",
          underline: "#f44336",
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
        },
        links: {
          main: "#186483",
        },
        table: {
          headerDivider: "rgba(224, 224, 224, 1)",
          contentDivider: "#ebebeb",
          contentVerticalDivider: "#0000000a",
          detailsHeader: "#ebebeb",
          costs: "#fffdf1",
          prices: "#f2fff2",
          buttonText: "#186483",
          buttonBorder: "rgba(24, 100, 131, 0.5)",
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
    })
  );

  return createTheme(
    adaptV4Theme(
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
                fontSize: "0.875rem",
                lineHeight: 1,
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
          MuiSwitch: {
            track: {
              backgroundColor: baseTheme.palette.text.info,
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
            root: {
              //border: `1px solid ${baseTheme.palette.form.fieldOutline}`,
              //borderRadius: '3px',
              //lineHeight: '1.1876em'
            },
            input: {
              padding: "4px 1px",
              height: "1.65rem",
              //lineHeight: "1.1876em !important",
              fontSize: "12px",
              "&:-webkit-autofill": {
                transitionDelay: "9999s",
              },
            },
            formControl: {
              marginTop: "20px",
              background: baseTheme.palette.form.fieldBackground,
            },
            multiline: {
              padding: "4px",
            },
            inputMultiline: {
              padding: "0",
            },
            underline: {
              "&:before": {
                borderBottom: "none !important",
              },
              "&:after": {
                borderBottomColor: baseTheme.palette.form.fieldFocusUnderline,
                borderBottomWidth: 1,
              },
              "&:hover": {},
              "&$error:after": {
                borderBottomColor: baseTheme.palette.error.underline,
              },
            },
          },
          MuiLink: {
            root: {
              color: baseTheme.palette.links.main,
              textDecoration: "none",
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
              transform: "translate(0, 0) scale(1) !important",
              "+.MuiInputBase-root": {
                marginTop: 20,
              },
            },
          },
          MuiFormHelperText: {
            root: {
              marginLeft: 0,
              "&.Mui-error": {
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
          MuiMenuItem: {
            root: {
              fontSize: "1rem",
            },
          },
          MuiDataGrid: {
            root: {
              border: "none",
              fontSize: 12,
              "& .MuiDataGrid-cell": {
                borderBottom: `1px solid ${baseTheme.palette.table.contentDivider}`,
                borderRight: `1px solid ${baseTheme.palette.table.contentVerticalDivider}`,
                padding: "0 8px",
              },
              "& button": {
                fontSize: 12,
                paddingTop: 1,
                paddingBottom: 1,
                borderColor: baseTheme.palette.table.buttonBorder,
                color: baseTheme.palette.table.buttonText,
              },
              "& .MuiDataGrid-cellCheckbox": {
                maxWidth: "35px !important",
                minWidth: "35px !important",
              },
              "& .MuiDataGrid-columnHeaderCheckbox": {
                maxWidth: "35px !important",
                minWidth: "35px !important",
              },
              "& .MuiDataGrid-columnsContainer": {
                borderBottom: `1px solid ${baseTheme.palette.table.headerDivider}`,
              },
              "& .MuiDataGrid-columnSeparator": {
                display: "none",
              },
              "& .MuiDataGrid-columnHeader": {
                borderRight: `1px solid ${baseTheme.palette.table.contentDivider}`,
                padding: "0 8px",
              },
              "& .MuiDataGrid-columnHeaderTitle": {
                color: baseTheme.palette.text.columnHeader,
                fontWeight: 500,
              },
              "& .MuiDataGrid-columnHeaderTitleContainer": {
                padding: 0,
              },
              "& .MuiDataGrid-footerContainer": {
                borderTop: `1px solid ${baseTheme.palette.table.headerDivider}`,
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
            columnHeaders: {
              borderBottom: `1px solid ${baseTheme.palette.table.headerDivider}`,
            },
            virtualScrollerRenderZone: {
              transform: "translate3d(0px, 0px, 0px)",
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
            },
          },
          MuiTableCell: {
            root: {
              borderBottom: `1px solid ${baseTheme.palette.form.fieldOutline}`,
            },
          },
          MuiTab: {
            root: {
              minWidth: 160,
            },
          },
          MuiDialogActions: {
            root: {
              padding: 24,
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
    )
  );
};
