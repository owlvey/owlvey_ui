import React from "react";
import Avatar from "shared/Avatar";
import UserCard from "shared/UserCard";
import { Link } from "react-router-dom";
import { NavLink, Popover, PopoverBody } from "reactstrap";
import {
  MdInsertChart,
  MdPersonPin,
  MdMessage,
  MdSettingsApplications,
  MdHelp,
  MdExitToApp
} from "react-icons/md";

function UserOptions({
  toggleUserCardPopover,
  onSignOutClick,
  isOpenUserCardPopover,
  user
}) {
  return (
    <>
      <NavLink id="Popover2">
        <Avatar
          onClick={toggleUserCardPopover}
          className="can-click"
          src={user.avatar}
        />
      </NavLink>
      <Popover
        placement="bottom-end"
        isOpen={isOpenUserCardPopover}
        toggle={toggleUserCardPopover}
        target="Popover2"
        className="p-0 border-0"
        style={{ minWidth: 250 }}
      >
        <PopoverBody className="p-0 border-light">
          <UserCard
            title={user.name}
            subtitle={user.username}
            text="Last updated 3 mins ago"
            avatar={user.avatar}
            inverse={true}
          >
            <ul className="list-group list-group-flush">
              <Link
                className="border-light list-group-item-action list-group-item"
                to="/account"
              >
                <MdPersonPin /> Profile
              </Link>
              <Link
                className="border-light list-group-item-action list-group-item"
                to="/account/keys"
              >
                <MdPersonPin /> Keys
              </Link>
              <button className="border-light list-group-item-action list-group-item">
                <MdInsertChart /> Stats
              </button>
              <button className="border-light list-group-item-action list-group-item">
                <MdMessage /> Messages
              </button>
              <button className="border-light list-group-item-action list-group-item">
                <MdSettingsApplications /> Settings
              </button>
              <button className="border-light list-group-item-action list-group-item">
                <MdHelp /> Help
              </button>
              <button
                className="border-light list-group-item-action list-group-item can-click"
                onClick={onSignOutClick}
              >
                <MdExitToApp /> Signout
              </button>
            </ul>
          </UserCard>
        </PopoverBody>
      </Popover>
    </>
  );
}

export default UserOptions;
