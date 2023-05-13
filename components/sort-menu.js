import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
const iOS = typeof window !== "undefined" && /iPad|iPhone|iPod/.test(navigator.userAgent);
import { useStylesBurgerMenu, useStylesDialogShopXP } from "../public/static/jss/styles";
import { Fragment } from "react";
import { SortSVG } from "./shared/svgIcons";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";

const SortMenu = ({ deviceType }) => {
  const theme = useTheme();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const classes = useStylesBurgerMenu();
  const classesDialog = useStylesDialogShopXP();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const toggleDrawer = (open) => (event) => {
    if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setIsMenuOpen(open);
  };

  useEffect(() => {
    console.log("router sorting", router);
  }, [router]);

  const { ordering } = router.query;

  useEffect(() => {
    !ordering && setSelectedIndex(0);
    switch (ordering) {
      case "-publish_datetime":
        setSelectedIndex(0);
        break;
      case "expire_datetime":
        setSelectedIndex(1);
        break;
      case "-percent":
        setSelectedIndex(2);
        break;
      case "-value":
        setSelectedIndex(3);
        break;
      case "-num_of_comments":
        setSelectedIndex(4);
        break;
      case "-num_of_likes":
        setSelectedIndex(5);
        break;

      default:
        setSelectedIndex(0);
        break;
    }
    return () => {
      setSelectedIndex(0);
    };
  }, [router]);

  const options = [
    "جدیدترین تخفیف ها",
    "نزدیک به انقضا",
    "بیشترین درصد تخفیف",
    "بیشترین مبلغ تخفیف",
    "پربحث ترین ها",
    "محبوبترین ها",
  ];

  const handleMenuItemClick = async (event, index) => {
    switch (index) {
      case 0:
        router.query.ordering = "-publish_datetime";
        await router.push(router);
        break;
      case 1:
        console.log("router", router);
        router.query.ordering = "expire_datetime";
        await router.push(router);
        break;
      case 2:
        router.query.ordering = "-percent";
        await router.push(router);
        break;
      case 3:
        router.query.ordering = "-value";
        await router.push(router);
        break;
      case 4:
        router.query.ordering = "-num_of_comments";
        await router.push(router);
        break;
      case 5:
        router.query.ordering = "-num_of_likes";
        await router.push(router);
        break;

      default:
        break;
    }
    setSelectedIndex(index);
    setIsMenuOpen(close);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const list = () => (
    <div role="presentation">
      <div className="cs-p-md cs-pt-sm cs-mr-lg">
        {options.map((option, index) => {
          return (
            <div
              style={{
                fontWeight: "bold",
              }}
              key={index}
              className={
                selectedIndex === index ? "cs-link cs-pt-sm cs-text-primary" : "cs-link cs-pt-sm"
              }
              onClick={(event) => {
                handleMenuItemClick(event, index);
                setOpenDialog(false);
              }}
            >
              {option}
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <Fragment>
      <div className="cs-mt-sm cs-px-sm">
        <span className="cs-mb-0">
          <span className="cs-icon">
            <i className="fi-rr-settings-sliders"></i>
          </span>
          <span>ترتیب نمایش: </span>
          <span
            className="cs-link cs-text-primary"
            onClick={() => {
              deviceType === "mobile" ? setIsMenuOpen(true) : setOpenDialog(true);
            }}
          >
            {options[selectedIndex]}
          </span>
        </span>
      </div>

      {/* آیکون گوشه سمت راست */}
      {deviceType === "mobile" && (
        <div
          className="cs-btn-sticky-buttom cs-center cs-transition-y"
          onClick={toggleDrawer(true)}
        >
          <SortSVG width={20} height={20} fill="#fff" />
        </div>
      )}
      <SwipeableDrawer
        classes={{
          paper: classes.paper, // class name, e.g. `disabled-x`
        }}
        anchor="bottom"
        open={isMenuOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
      >
        <div className="cs-mt-sm cs-px-md">
          <h2 className="cs-mb-0">
            <span className="cs-icon">
              <i className="fi-rr-settings-sliders"></i>
            </span>
            ترتیب نمایش بر اساس
          </h2>
        </div>
        <div>{list()}</div>
      </SwipeableDrawer>

      <Dialog
        classes={{
          root: classesDialog.root,
          paper: classesDialog.paper,
        }}
        fullScreen={deviceType === "mobile" ? true : false}
        maxWidth="xl"
        open={openDialog}
        onClose={handleCloseDialog}
        TransitionComponent={Transition}
      >
        <div
          style={{
            padding: "20px",
          }}
        >
          <div
            className="cs-flex-space-between"
            style={{
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "inline-block",
                fontWeight: "bold",
              }}
            >
              <div className="cs-mt-sm cs-px-md">
                <h2 className="cs-mb-0">
                  <span className="cs-icon">
                    <i className="fi-rr-settings-sliders"></i>
                  </span>
                  ترتیب نمایش بر اساس
                </h2>
              </div>
            </div>

            <IconButton
              edge="start"
              color="inherit"
              onClick={handleCloseDialog}
              aria-label="close"
              size="large"
            >
              <CloseIcon />
            </IconButton>
          </div>
        </div>

        <div>{list()}</div>
      </Dialog>
    </Fragment>
  );
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default SortMenu;
