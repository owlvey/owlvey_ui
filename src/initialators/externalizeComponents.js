import React from "react";
import Avatar from "shared/Avatar";
import Dropdown from "shared/Dropdown";
import IconWidget from "shared/IconWidget";
import SearchInput from "shared/SearchInput";
import NumberWidget from "shared/NumberWidget";
import AvatarCard from "shared/AvatarCard";
import UserCard from "shared/UserCard";
import AnnouncementCard from "shared/AnnouncementCard";
import TodosCard from "shared/TodosCard";
import WithBadge from "shared/WithBadge";

import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Progress,
  CardImg,
  CardImgOverlay,
} from "reactstrap";

import {
  MdInsertChart,
  MdBubbleChart,
  MdPieChart,
  MdShowChart,
  MdPersonPin,
  MdRateReview,
  MdThumbUp,
  MdShare,
} from "react-icons/md";

export default function externalizeComponents() {
  window.React = React;
  window.Avatar = Avatar;
  window.Dropdown = Dropdown;
  window.IconWidget = IconWidget;
  window.NumberWidget = NumberWidget;
  window.SearchInput = SearchInput;
  window.NumberWidget = NumberWidget;
  window.AvatarCard = AvatarCard;
  window.UserCard = UserCard;
  window.AnnouncementCard = AnnouncementCard;
  window.TodosCard = TodosCard;
  window.WithBadge = WithBadge;

  window.Card = Card;
  window.CardBody = CardBody;
  window.CardTitle = CardTitle;
  window.CardSubtitle = CardSubtitle;
  window.CardImgOverlay = CardImgOverlay;
  window.CardImg = CardImg;
  window.Progress = Progress;
  window.MdInsertChart = MdInsertChart;
  window.MdBubbleChart = MdBubbleChart;
  window.MdPieChart = MdPieChart;
  window.MdShowChart = MdShowChart;
  window.MdPersonPin = MdPersonPin;
  window.MdRateReview = MdRateReview;
  window.MdThumbUp = MdThumbUp;
  window.MdShare = MdShare;
}
