import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { enableNotificationDialog } from "./bannerStick/action";
import { BellRingSVG } from "./svgIcons";

const BellNotification = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const fcmTokenLocal = localStorage.getItem("fcm_token");
  var NotificationIsSupported = !!(
    (
      window.Notification /* W3C Specification */ ||
      window.webkitNotifications /* old WebKit Browsers */ ||
      navigator.mozNotification
    ) /* Firefox for Android and Firefox OS */
  );

  return <>
    {!navigator.userAgent.match(/Nexus/i) &&
    !navigator.userAgent.match(/iPhone/i) &&
    !navigator.userAgent.match(/iPad/i) &&
    NotificationIsSupported &&
    fcmTokenLocal === "0" &&
    Notification.permission !== "granted" ? (
      <span
        onClick={() => {
          dispatch(enableNotificationDialog());
        }}
        className="bell"
      >
        <BellRingSVG fill="#01875e" width="20px" height="20px" />
      </span>
    ) : null}
  </>;
};

export default BellNotification;
