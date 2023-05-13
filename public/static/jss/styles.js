import makeStyles from "@mui/styles/makeStyles";

export const useFeedPostStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 598,
    flexGrow: 1,
  },
  header: {
    display: "flex !important",
    alignItems: "center !important",
    justifyContent: "center !important",
    height: "auto !important",
    margin: "10px !important",
    backgroundColor: "#90153F !important",
    borderRadius: "10px !important",
    boxShadow:
      "0px 0px 28px -9px rgba(231, 33, 101, 0.79) !important",
    cursor: "pointer !important",
    // box-shadow: 0px 0px 28px -9px rgba(235,68,102,0.73);
    // paddingLeft: theme.spacing(4),
  },
  title: {
    fontFamily: "Vazir-Farsi-Digit-Black !important",
    // direction: 'rtl !important',
    textAlign: "center !important",
    fontSize: "1rem !important",
    color: "#fff !important",
    margin: "0.6rem !important",
  },

  hashtags: {
    color: "#00376b",
    textDecoration: "none !important",
  },

  img: {
    display: "block !important",
    maxWidth: 1000,
    // maxHeight: 1000,
    overflow: "hidden !important",
    width: "100% !important",
    // height: '100%',
  },
  specialPostContainer: {
    display: "flex !important",
    textAlign: "center !important",
    justifyContent: "center !important",
    alignItems: "center !important",
  },
  specialPost: {
    display: "flex !important",
    justifyContent: "center !important",
    alignItems: "center !important",
    fontFamily: "Vazir-Bold !important",
    color: "#fff !important",
    backgroundColor: "#5FCB56 !important",
    border: "1px solid !important",
    borderRadius: "8px !important",
    boxShadow: "0px 5px 10px 1px #A2EC9B !important",
    width: "auto !important",
    margin: "20px !important",
    padding: "10px !important",
  },
  article: {
    border: "1px solid #e6e6e6 !important",
    background: "#ffffff !important",
    marginBottom: 60,
    overflow: "hidden !important",
    [theme.breakpoints.down("xs")]: {
      border: "1px solid #e6e6e6",
      marginBottom: 45,
    },
  },
  postHeader: {
    borderBottom: "1px solid rgba(var(--ce3,239,239,239),1)",
    display: "grid",
    gridAutoFlow: "column",
    gridTemplateColumns: "auto minmax(auto, 20px)",
    gridGap: 10,
    alignItems: "center",
    padding: 16,
  },
  moreIcon: {
    height: 24,
    width: 18,
    justifySelf: "center",
    "&:hover": {
      cursor: "pointer",
    },
  },
  image: {
    width: "100%",
  },
  imageContainer: {
    width: "100%",
  },
  priceContainer: {
    display: "flex !important",
    flexDirection: "row !important",
    justifyContent: "center !important",
    backgroundColor: "#C10D4A !important",
    border: "6px solid #C10D4A !important",
    borderRadius: "9px !important",
    boxShadow: "-1px 10px 36px -1px rgba(235,68,102,0.79) !important",
    cursor: "pointer !important",
    // boxShadow: '-9px 12px 10px 0px rgba(191,142,194,0.72) !important',
    margin: "10px 10px 50px 10px !important",
    color: "#fff !important",
  },
  mobileStepperRoot: {
    fontFamily: "Vazir-Farsi-Digit-Regular !important",
    color: "#715964 !important",
  },
  price: {
    fontFamily: "Vazir-Farsi-Digit-Regular !important",
    fontSize: "1.2rem !important",
    color: "#fff !important",
  },

  postButtons: {
    display: "grid",
    gridAutoFlow: "column",
    gridTemplateColumns: "24px 24px 24px minmax(24px, auto)",
    gridGap: 16,
    padding: "6px 0px !important",
  },
  postButtonsWrapper: {
    padding: "0px 16px 8px !important",
  },
  commentUsername: {
    fontFamily: `Vazir , sans-serif`,
    fontWeight: "600 !important",
  },
  commentText: {
    fontFamily: `Vazir , sans-serif`,
    fontSize: "0.8rem",
    fontWeight: "300 !important",
  },
  datePosted: {
    fontFamily: `Vazir , sans-serif`,
    fontSize: "15px !important",
    color: "#999",
  },
  likes: {
    "&:hover": {
      cursor: "pointer",
    },
  },
  like: {
    fontSize: "0.8rem !important",
    fontFamily: `Vazir-Farsi-Digit-Bold , sans-serif`,
    animation: "$like-button-animation 0.45s",
    animationTimingFunction: "ease-in-out",
    transform: "scale(1)",
  },
  liked: {
    animation: "$liked-button-animation 0.45s",
    animationTimingFunction: "ease-in-out",
    transform: "scale(1)",
  },
  "@keyframes like-button-animation": {
    "0%": { transform: "scale(1)" },
    "25%": { transform: "scale(1.2)" },
    "50%": { transform: "scale(0.95)" },
    "100%": { transform: "scale(1)" },
  },
  "@keyframes liked-button-animation": {
    "0%": { transform: "scale(1)" },
    "25%": { transform: "scale(1.2)" },
    "50%": { transform: "scale(0.95)" },
    "100%": { transform: "scale(1)" },
  },
  textField: {
    fontFamily: "Vazir !important",
    padding: "10px 0px !important",
  },
  resize: {
    fontSize: "1rem !important",
    fontWeight: "900 !important",
    fontFamily: "Vazir !important",
    color: "#000 !important",
  },
  root: {
    fontSize: "14px !important",
  },
  underline: {
    "&::before": {
      border: "none !important",
    },
    "&::after": {
      border: "none !important",
    },
    "&:hover&:before": {
      border: "none !important",
    },
  },
  commentContainer: {
    display: "grid !important",
    gridAutoFlow: "column",
    gridTemplateColumns: "auto minmax(auto, 56px) !important",
    padding: "0px 0px 0px 16px !important",
  },
  commentButton: {
    width: "48px !important",
    padding: "unset",
  },
  moreButton: {
    color: "#111 !important",
    border: "solid #ed855e !important",
    fontFamily: `Vazir , sans-serif !important`,
    boxShadow: "0px 2px 6px rgba(0,0,0,.25) !important",
    padding: "0px !important",
    marginLeft: "20px !important",
    "&:hover": {
      background: "transparent !important",
    },
  },
  saveIcon: {
    justifySelf: "right",
  },
  commentsLink: {
    fontFamily: `Vazir , sans-serif !important`,
    cursor: "pointer !important",
    color: "#999 !important",
    margin: "5px 0px !important",
  },
  collapsed: {
    fontFamily: `Vazir , sans-serif !important`,
    display: "flex !important",
    alignItems: "center !important",
  },
  expanded: {
    fontFamily: `Vazir , sans-serif`,
    fontSize: "1rem",
    textAlign: "justify",
    display: "block",
  },
  caption: {
    fontFamily: `Vazir-Farsi-Digit-Regular , sans-serif`,
    fontSize: "17px !important",
    // textAlign: 'justify !important',
  },
  captionWrapper: {
    display: "flex",
    alignItems: "center",
    wordBreak: "break-all",
  },
  username: {
    fontSize: "14px",
    color: "#b5385d",
    fontWeight: "900 !important",
    marginRight: "10px !important",
  },

  avatarDialog: {
    backgroundColor: "#4297EC !important",
    color: "#FFFFFF !important",
  },
  ShareIcon: {
    cursor: "pointer !important",
  },
  dialogContainer: {
    display: "flex !important",
    flexDirection: "column !important",
    padding: "30px !important",
  },
  dialogItemsContainer: {
    cursor: "pointer !important",
    display: "flex !important",
    flexDirection: "row !important",
    justifyContent: "flex-start !important",
    borderRadius: "10px !important",
    backgroundColor: "#FFFFFF !important",
    padding: "0 40px !important",
  },

  dialogItemsContainerInline: {
    cursor: "pointer !important",
    display: "flex !important",
    flexDirection: "row !important",
    padding: "10px !important",
    margin: "5px !important",
    justifyContent: "center !important",
    borderRadius: "10px !important",
    backgroundColor: "#FFFFFF !important",
    "&:hover": {
      backgroundColor: "#DFDFDF !important",
    },
  },
  dialogItems: {
    margin: "5px !important",
    fontFamily: "Balsamiq Sans !important",
  },
}));

export const useLikeButton = makeStyles((theme) => ({
  like: {
    "&:hover": {
      cursor: "pointer",
    },
    fontFamily: `Vazir-Farsi-Digit-Regular , sans-serif`,
    animation: "$like-button-animation 0.45s",
    animationTimingFunction: "ease-in-out",
    transform: "scale(1)",
  },
  liked: {
    "&:hover": {
      cursor: "pointer",
    },
    animation: "$liked-button-animation 0.45s",
    animationTimingFunction: "ease-in-out",
    transform: "scale(1)",
  },
  "@keyframes like-button-animation": {
    "0%": { transform: "scale(1)" },
    "25%": { transform: "scale(1.2)" },
    "50%": { transform: "scale(0.95)" },
    "100%": { transform: "scale(1)" },
  },
  "@keyframes liked-button-animation": {
    "0%": { transform: "scale(1)" },
    "25%": { transform: "scale(1.2)" },
    "50%": { transform: "scale(0.95)" },
    "100%": { transform: "scale(1)" },
  },
}));

export const useStylesMuiSlider = makeStyles((theme) => ({
  root: {
    width: "100% !important",
    flexGrow: 1,
    marginBottom: "8px !important",
    borderRadius: "5px !important",
    userSelect: "none !important",
  },

  imgContainer: {
    position: "relative !important",
    height: "100% !important",
    borderRadius: "5px !important",
  },

  img: {
    height: "auto !important",
    display: "block !important",
    overflow: "hidden !important",
    width: "100% !important",
    height: "100%",
    borderRadius: "5px !important",
  },
  buttonLeft: {
    fontSize: "26px !important",
    lineHeight: "26px !important",
    position: "absolute !important",
    background: "none !important",
    width: "61px !important",
    top: "0 !important",
    bottom: "0 !important",
    margin: "auto !important",
    left: "0px !important",
    border: "none !important",
    cursor: "pointer !important",
    "&:active": {
      outline: "none !important",
    },
  },

  buttonRight: {
    fontSize: "26px !important",
    lineHeight: "26px !important",
    position: "absolute !important",
    background: "none !important",
    width: "61px !important",
    top: "0 !important",
    bottom: "0 !important",
    margin: "auto !important",
    right: "0px !important",
    border: "none !important",
    cursor: "pointer !important",
    boxSizing: "border-box !important",
    "&:active": {
      outline: "none !important",
    },
  },
  svgArrowIcon: {
    width: "18px",
    height: "18px",
  },
  stepsButtons: {
    background: "#f7f7f7 !important",
    boxShadow:
      "inset -6px -6px 11px #e8e8e8, inset 6px 6px 11px #ffffff !important",
  },
  mobileStepperRoot: {
    backgroundColor: "#00cc67 !important",
  },
}));

export const useSkeletonStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    position: "relative",
    width: "100% !important",
    borderRadius: "3px",
    border: "1px solid rgba(var(--b6a,219,219,219),1)",
    backgroundColor: "rgba(var(--cdc,255,255,255),1)",
    marginLeft: "-1px",
    marginRight: "-1px",
  },
  headerSkeleton: {
    display: "flex",
    flexDirection: "row",
    height: "60px",
    padding: "16px",
    alignItems: "center",
  },
  avatarSkeleton: {
    backgroundColor: "rgba(var(--c90,239,239,239),1)",
    borderRadius: "50%",
    flexGrow: "0",
    height: "30px",
    marginRight: "12px",
    width: "30px",
  },
  headerTextSkeleton: {
    display: "flex",
    flexDirection: "column",
    flexGrow: "1",
    justifyContent: "center",
  },
  primaryTextSkeleton: {
    flexGrow: "0",
    height: "10px",
    marginBottom: "4px",
    width: "140px",
    backgroundColor: "rgba(var(--c90,239,239,239),1)",
  },
  secondaryTextSkeleton: {
    backgroundColor: "rgba(var(--c90,239,239,239),1)",
    flexGrow: "0",
    height: "10px",
    width: "100px",
  },
  mediaSkeleton: {
    backgroundColor: "rgba(var(--c90,239,239,239),1)",
    maxHeight: "295px",
    backgroundImage:
      "url(data:image/gif;base64,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)",
    backgroundSize: "cover",
    display: "block",
    "&:before": {
      display: "block",
      content: '""',
      paddingBottom: "100%",
      width: "100%",
    },
  },
});

export const useStylesModalUserLogin = makeStyles((theme) => ({
  root: {
    fontSize: "1rem !important",
    fontWeight: "bold !important",
  },
  rootPaginate: {
    "& > *": {
      marginTop: "5px",
    },
  },
}));

export const useStylesBurgerMenu = makeStyles((theme) => ({
  root: {
    // fontSize: '1rem',
  },
  paper: {
    backgroundColor: "#fff",
    color: "#666",
    minWidth: "270px",
    // padding: "0.5rem 2.5rem"
  },
}));

export const useStylesFilterChip = makeStyles((theme) => ({
  root: {
    minHeight: "32px",
    flex: 1,
    display: "flex",
    overflow: "auto",
    justifyContent: "flex-start",
    "& > *": {
      margin: "3px",
    },
  },
}));

export const useStyleSwitchMUI = makeStyles((theme) => ({
  rootLabel: {
    fontFamily: "IranSans",
    fontSize: "1rem !important",
    fontWeight: "bold !important",
    userSelect: "none !important",
  },

  switchBase: {
    color: "#00cc67 !important",
    "&$checked": {
      color: "#00cc67 !important",
    },
    "&$checked + $track": {
      backgroundColor: "#00cc67 !important",
    },
  },

  switchColorPrimary: {
    color: "#00cc67",
  },
  switchColorChecked: {
    color: "#00cc67",
  },
}));

export const useStylesRadioCheck = makeStyles((theme) => ({
  labelFormControlLabel: {
    fontFamily: "IranSans",
    color: "#165110",
  },
  radio: {
    "&$checked": {
      color: "#00cc67",
    },
  },
  checked: {},
}));

export const useStylesTextField = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: "5px",
      width: "100%",
    },
  },
  InputItem: {
    "& .MuiInputBase-input": {
      backgroundColor: "#1EA31D",
    },
  },
}));

export const useStylesSwitchCheck = makeStyles((theme) => ({
  switch_track: {
    backgroundColor: "#777F75",
  },
  switch_base: {
    color: "#fafafa",
    "&.Mui-disabled": {
      color: "#e886a9",
    },
    "&.Mui-checked": {
      color: "#00cc67",
    },
    "&.Mui-checked + .MuiSwitch-track": {
      backgroundColor: "#29FF00",
    },
  },
  switch_primary: {
    "&.Mui-checked": {
      color: "#4CAF50",
    },
    "&.Mui-checked + .MuiSwitch-track": {
      backgroundColor: "#4CAF50",
    },
  },
}));

export const useStylesAutoComplete = makeStyles((theme) => ({
  autoCompleteRoot: {
    backgroundColor: "hsl(0, 0%, 100%) !important",
    borderColor: "hsl(0, 0%, 80%) !important",
    borderRadius: "4px !important",
    borderStyle: "solid !important",
    borderWidth: "1px !important",
    cursor: "default !important",

    minHeight: "38px !important",
    outline: "0 !important",
  },
  autoCompleteClearIndicator: {
    color: "hsl(0, 0%, 45%) !important",
  },
  autoCompletePopupIndicator: {
    color: "hsl(0, 0%, 75%) !important",
  },
  autoCompleteTest: {
    fill: "hsl(0, 0%, 45%) !important",
    color: "hsl(0, 0%, 45%) !important",
  },
  autoCompletePopper: {
    backgroundColor: "#FFF !important",
    boxShadow:
      " 5px 5px 10px #dbd9d3,-5px -5px 10px #ffffff !important",
  },
  autoCompletePaper: {
    color: "#000 !important",
    backgroundColor: "#FFF !important",
  },
  autoCompletelistbox: {
    "&:hover": {
      backgroundColor:
        "linear-gradient(315deg, #e6e3dd, #ffffff) !important",
      color: "#000 !important",
      boxShadow:
        " 5px 5px 10px #dbd9d3,-5px -5px 10px #ffffff !important",
    },
  },
}));

export const useStylesDialogShopXP = makeStyles((theme) => ({
  paper: {
    borderRadius: "20px",
    minWidth: "25vw",
    // minHeight: "30vh",
  },
}));
