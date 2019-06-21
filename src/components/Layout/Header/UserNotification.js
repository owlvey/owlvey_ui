import React from "react";
import { NavLink, Popover, PopoverBody } from "reactstrap";
import { MdNotificationsActive, MdNotificationsNone } from "react-icons/md";
import WithBadge from "shared/WithBadge";
import Notifications from "components/Layout/Header/Notifications";

function UserNotification({
  isNotificationConfirmed,
  toggleNotificationPopover,
  isOpenNotificationPopover,
  notificationsData,
}) {
  const MdNotificationsActiveWithBadge = WithBadge({
    size: "md",
    color: "primary",
    style: {
      top: -10,
      right: -10,
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
    },
    children: <small>10</small>,
  })(MdNotificationsActive);

  return (
    <>
      <NavLink id="Popover1" className="position-relative">
        {isNotificationConfirmed ? (
          <MdNotificationsNone
            size={25}
            className="text-dark can-click"
            onClick={toggleNotificationPopover}
          />
        ) : (
          <MdNotificationsActiveWithBadge
            size={25}
            className="text-dark can-click animated swing infinite"
            onClick={toggleNotificationPopover}
          />
        )}
      </NavLink>
      <Popover
        placement="bottom"
        isOpen={isOpenNotificationPopover}
        toggle={toggleNotificationPopover}
        target="Popover1"
      >
        <PopoverBody>
          <Notifications notificationsData={notificationsData} />
        </PopoverBody>
      </Popover>
    </>
  );
}

export default UserNotification;
