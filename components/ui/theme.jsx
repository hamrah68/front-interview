import { createTheme } from "@mui/material/styles";
import { faIR } from "@mui/material/locale";
const greenPrimary = "#01875e";

export default createTheme(
  {
    direction: "rtl",
    typography: {
      fontFamily:
        'IranSans ,Roboto, -apple-system, BlinkMacSystemFont, sans-serif, serif, Times-New-Roman, "Segoe UI", "Oxygen", "Ubuntu", Helvetica, Arial ',
      h4: {
        fontSize: "1.8rem",
        fontWeight: "bold",
        color: "#f5222d",
      },
    },

    overrides: {
      // MuiPaginationItem: {
      //   root: {
      //     backgroundColor: "#fff",
      //   },
      //   ellipsis: {
      //     backgroundColor: "#f7f7f7"
      //   }
      // },
      MuiPaper: {
        root: {
          // padding: "3em 2.5em 0",
          fontSize: "1rem",
        },
      },
      MuiAccordion: {
        root: {
          backgroundColor: "#FDFDFD",
          boxShadow: "5px 5px 10px #e8e8e8, -5px -5px 10px #fcfcfc",
          margin: "0 0 15px 0",
          border: "1px solid #00cc67",
        },
      },
      MuiAccordionDetails: {
        root: {
          color: "#364163",
          borderTop: "2px dashed #00cc67",
          margin: "5px",
          whiteSpace: "pre-line",
          textAlign: "justify",
        },
      },
      MuiPickersDatePickerRoot: {
        toolbar: {
          background: greenPrimary,
          borderRadius: "3px",
        },
      },

      MuiPickersToolbarText: {
        toolbarBtnSelected: {
          color: "#FFF",
        },
        toolbarTxt: {
          color: "#FFF",
        },
      },

      MuiPickersDay: {
        daySelected: {
          color: "#FFF",
        },
      },

      MuiDialogContentText: {
        root: {
          textAlign: "justify",
        },
      },
      MuiCheckbox: {
        root: {},
      },
      MuiInputLabel: {
        root: {
          fontSize: "0.5rem",
        },
      },
      MuiInput: {
        underline: {
          "&:before": {
            borderBottom: "1.5px solid ",
            width: "auto",
          },
        },
      },
      MuiFormHelperText: {
        root: {
          fontSize: "0.7rem",
        },
      },

      MuiExpansionPanel: {
        root: {
          width: "100%",
          backgroundColor: "#282a34",
          color: "#fff",
        },
      },

      MuiInputLabel: {
        root: {
          "&$focused": {
            color: "#999",
          },
        },
      },

      MuiPaginationItem: {
        root: {
          backgroundColor: "#FFF",
          color: "#484848",
          fontSize: "13px",
          border: "1px solid #d9d9d9",
          borderRadius: "8px",
          minWidth: "34px",
          minHeight: "34px",
        },

        outlinedPrimary: {
          "&$selected": {
            backgroundColor: "#FFF",
          },
        },

        rounded: { borderRadius: "8px" },
      },
    },

    palette: {
      common: {
        pink: greenPrimary,
        orange: greenPrimary,
      },
      primary: {
        main: greenPrimary,
      },
      secondary: {
        main: greenPrimary,
      },
    },
  },
  faIR
);
