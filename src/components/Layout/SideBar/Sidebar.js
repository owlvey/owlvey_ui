import React from "react";
import { FaGithub } from "react-icons/fa";
import {
  MdAccountCircle,
  MdArrowDropDownCircle,
  MdBorderAll,
  MdBrush,
  MdChromeReaderMode,
  MdDashboard,
  MdExtension,
  MdGroupWork,
  MdInsertChart,
  MdKeyboardArrowDown,
  MdNotificationsActive,
  MdPages,
  MdRadioButtonChecked,
  MdSend,
  MdStar,
  MdTextFields,
  MdViewCarousel,
  MdViewDay,
  MdViewList,
  MdWeb,
  MdWidgets
} from "react-icons/md";
import { NavLink } from "react-router-dom";
import {
  // UncontrolledTooltip,
  Collapse,
  Nav,
  Navbar,
  NavItem,
  NavLink as BSNavLink
} from "reactstrap";
import bn from "utils/bemnames";

// const sidebarBackground = {
//   backgroundImage: `url("${sidebarBgImage}")`,
//   backgroundSize: 'cover',
//   backgroundRepeat: 'no-repeat',
// };

const navComponents = [
  { to: "/buttons", name: "Buttons", exact: false, Icon: MdRadioButtonChecked },
  {
    to: "/button-groups",
    name: "Button groups",
    exact: false,
    Icon: MdGroupWork
  },
  { to: "/forms", name: "Forms", exact: false, Icon: MdChromeReaderMode },
  { to: "/input-groups", name: "Input Groups", exact: false, Icon: MdViewList },
  {
    to: "/dropdowns",
    name: "Dropdowns",
    exact: false,
    Icon: MdArrowDropDownCircle
  },
  { to: "/badges", name: "Badges", exact: false, Icon: MdStar },
  { to: "/alerts", name: "Alerts", exact: false, Icon: MdNotificationsActive },
  { to: "/progress", name: "Progress", exact: false, Icon: MdBrush },
  { to: "/modals", name: "Modals", exact: false, Icon: MdViewDay }
];

const navContents = [
  { to: "/typography", name: "Typography", exact: false, Icon: MdTextFields },
  { to: "/tables", name: "Tables", exact: false, Icon: MdBorderAll }
];

const pageContents = [
  { to: "/login", name: "Login / Signup", exact: false, Icon: MdAccountCircle },
  {
    to: "/login-modal",
    name: "Login modal",
    exact: false,
    Icon: MdViewCarousel
  }
];

const pageControls = [
  {
    to: "/styleguide/avatar",
    name: "Avatar",
    exact: false,
    Icon: MdAccountCircle
  },
  {
    to: "/styleguide/dropdown",
    name: "Dropdown",
    exact: false,
    Icon: MdAccountCircle
  },
  {
    to: "/styleguide/iconwidget",
    name: "IconWidget",
    exact: false,
    Icon: MdAccountCircle
  },
  {
    to: "/styleguide/numberwidget",
    name: "NumberWidget",
    exact: false,
    Icon: MdAccountCircle
  },
  {
    to: "/styleguide/searchinput",
    name: "SearchInput",
    exact: false,
    Icon: MdAccountCircle
  },
  {
    to: "/styleguide/avatarcard",
    name: "AvatarCard",
    exact: false,
    Icon: MdAccountCircle
  },
  {
    to: "/styleguide/usercard",
    name: "UserCard",
    exact: false,
    Icon: MdAccountCircle
  },
  {
    to: "/styleguide/announcementcard",
    name: "AnnouncementCard",
    exact: false,
    Icon: MdAccountCircle
  },
  {
    to: "/styleguide/todoscard",
    name: "TodosCard",
    exact: false,
    Icon: MdAccountCircle
  }
];

const navItems = [
  { to: "/", name: "Dashboard", exact: true, Icon: MdDashboard },
  { to: "/cards", name: "Cards", exact: false, Icon: MdWeb },
  { to: "/charts", name: "Charts", exact: false, Icon: MdInsertChart },
  { to: "/widgets", name: "Widgets", exact: false, Icon: MdWidgets }
];

const bem = bn.create("sidebar");

class Sidebar extends React.Component {
  state = {
    isOpenComponents: true,
    isOpenContents: true,
    isOpenPages: true,
    isOpenControls: true
  };

  handleClick = name => () => {
    this.setState(prevState => {
      const isOpen = prevState[`isOpen${name}`];

      return {
        [`isOpen${name}`]: !isOpen
      };
    });
  };

  renderDevMenu = () => {
    if (process.env.IS_PROD) {
      return null;
    }
    return (
      <React.Fragment>
        <NavItem
          className={bem.e("nav-item")}
          onClick={this.handleClick("Styleguide")}
        >
          <BSNavLink className={bem.e("nav-item-collapse")}>
            <div className="d-flex">
              <MdPages className={bem.e("nav-item-icon")} />
              <span className="">StyleGuide</span>
            </div>
            <MdKeyboardArrowDown
              className={bem.e("nav-item-icon")}
              style={{
                padding: 0,
                transform: this.state.isOpenStyleguide
                  ? "rotate(0deg)"
                  : "rotate(-90deg)",
                transitionDuration: "0.3s",
                transitionProperty: "transform"
              }}
            />
          </BSNavLink>
        </NavItem>
        <Collapse isOpen={this.state.isOpenStyleguide}>
          {navItems.map(({ to, name, exact, Icon }, index) => (
            <NavItem key={index} className={bem.e("nav-item")}>
              <BSNavLink
                id={`navItem-${name}-${index}`}
                // className="text-uppercase"
                tag={NavLink}
                to={to}
                activeClassName="active"
                exact={exact}
              >
                <Icon className={bem.e("nav-item-icon")} />
                <span className="">{name}</span>
              </BSNavLink>
            </NavItem>
          ))}
          <NavItem
            className={bem.e("nav-item")}
            onClick={this.handleClick("Components")}
          >
            <BSNavLink className={bem.e("nav-item-collapse")}>
              <div className="d-flex">
                <MdExtension className={bem.e("nav-item-icon")} />
                <span className=" align-self-start">Components</span>
              </div>
              <MdKeyboardArrowDown
                className={bem.e("nav-item-icon")}
                style={{
                  padding: 0,
                  transform: this.state.isOpenComponents
                    ? "rotate(0deg)"
                    : "rotate(-90deg)",
                  transitionDuration: "0.3s",
                  transitionProperty: "transform"
                }}
              />
            </BSNavLink>
          </NavItem>
          <Collapse isOpen={this.state.isOpenComponents}>
            {navComponents.map(({ to, name, exact, Icon }, index) => (
              <NavItem key={index} className={bem.e("nav-item")}>
                <BSNavLink
                  id={`navItem-${name}-${index}`}
                  // className="text-uppercase"
                  tag={NavLink}
                  to={to}
                  activeClassName="active"
                  exact={exact}
                >
                  <Icon className={bem.e("nav-item-icon")} />
                  <span className="">{name}</span>
                </BSNavLink>
              </NavItem>
            ))}
          </Collapse>

          <NavItem
            className={bem.e("nav-item")}
            onClick={this.handleClick("Contents")}
          >
            <BSNavLink className={bem.e("nav-item-collapse")}>
              <div className="d-flex">
                <MdSend className={bem.e("nav-item-icon")} />
                <span className="">Contents</span>
              </div>
              <MdKeyboardArrowDown
                className={bem.e("nav-item-icon")}
                style={{
                  padding: 0,
                  transform: this.state.isOpenContents
                    ? "rotate(0deg)"
                    : "rotate(-90deg)",
                  transitionDuration: "0.3s",
                  transitionProperty: "transform"
                }}
              />
            </BSNavLink>
          </NavItem>
          <Collapse isOpen={this.state.isOpenContents}>
            {navContents.map(({ to, name, exact, Icon }, index) => (
              <NavItem key={index} className={bem.e("nav-item")}>
                <BSNavLink
                  id={`navItem-${name}-${index}`}
                  // className="text-uppercase"
                  tag={NavLink}
                  to={to}
                  activeClassName="active"
                  exact={exact}
                >
                  <Icon className={bem.e("nav-item-icon")} />
                  <span className="">{name}</span>
                </BSNavLink>
              </NavItem>
            ))}
          </Collapse>

          <NavItem
            className={bem.e("nav-item")}
            onClick={this.handleClick("Pages")}
          >
            <BSNavLink className={bem.e("nav-item-collapse")}>
              <div className="d-flex">
                <MdPages className={bem.e("nav-item-icon")} />
                <span className="">Pages</span>
              </div>
              <MdKeyboardArrowDown
                className={bem.e("nav-item-icon")}
                style={{
                  padding: 0,
                  transform: this.state.isOpenPages
                    ? "rotate(0deg)"
                    : "rotate(-90deg)",
                  transitionDuration: "0.3s",
                  transitionProperty: "transform"
                }}
              />
            </BSNavLink>
          </NavItem>
          <Collapse isOpen={this.state.isOpenPages}>
            {pageContents.map(({ to, name, exact, Icon }, index) => (
              <NavItem key={index} className={bem.e("nav-item")}>
                <BSNavLink
                  id={`navItem-${name}-${index}`}
                  // className="text-uppercase"
                  tag={NavLink}
                  to={to}
                  activeClassName="active"
                  exact={exact}
                >
                  <Icon className={bem.e("nav-item-icon")} />
                  <span className="">{name}</span>
                </BSNavLink>
              </NavItem>
            ))}
          </Collapse>

          <NavItem
            className={bem.e("nav-item")}
            onClick={this.handleClick("Controls")}
          >
            <BSNavLink className={bem.e("nav-item-collapse")}>
              <div className="d-flex">
                <MdPages className={bem.e("nav-item-icon")} />
                <span className="">Controls</span>
              </div>
              <MdKeyboardArrowDown
                className={bem.e("nav-item-icon")}
                style={{
                  padding: 0,
                  transform: this.state.isOpenControls
                    ? "rotate(0deg)"
                    : "rotate(-90deg)",
                  transitionDuration: "0.3s",
                  transitionProperty: "transform"
                }}
              />
            </BSNavLink>
          </NavItem>
          <Collapse isOpen={this.state.isOpenControls}>
            {pageControls.map(({ to, name, exact, Icon }, index) => (
              <NavItem key={index} className={bem.e("nav-item")}>
                <BSNavLink
                  id={`navItem-${name}-${index}`}
                  // className="text-uppercase"
                  tag={NavLink}
                  to={to}
                  activeClassName="active"
                  exact={exact}
                >
                  <Icon className={bem.e("nav-item-icon")} />
                  <span className="">{name}</span>
                </BSNavLink>
              </NavItem>
            ))}
          </Collapse>
        </Collapse>
      </React.Fragment>
    );
  };

  render() {
    return (
      // <aside className={bem.b()} data-image={sidebarBgImage}>
      <aside className={bem.b("bg-dark")}>
        {/* <div className={bem.e('background')} style={sidebarBackground} /> */}
        <div className={bem.e("background")} />
        <div className={bem.e("content")}>
          <Navbar>
            <span className="text-white navbar-brand">
              OWLVEY <FaGithub />
            </span>
          </Navbar>
          <Nav vertical>
            <NavItem className={bem.e("nav-item")}>
              <BSNavLink
                id={`navItem-Home-1`}
                // className="text-uppercase"
                tag={NavLink}
                to={"/"}
                activeClassName="active"
                exact={true}
              >
                <MdDashboard className={bem.e("nav-item-icon")} />
                <span className="">{"Home"}</span>
              </BSNavLink>
            </NavItem>
            <NavItem className={bem.e("nav-item")}>
              <BSNavLink
                id={`navItem-Home-2`}
                // className="text-uppercase"
                tag={NavLink}
                to={"/customers"}
                activeClassName="active"
                exact={true}
              >
                <MdDashboard className={bem.e("nav-item-icon")} />
                <span className="">{"Customer"}</span>
              </BSNavLink>
            </NavItem>
            <NavItem className={bem.e("nav-item")}>
              <BSNavLink
                id={`navItem-Home-3`}
                // className="text-uppercase"
                tag={NavLink}
                to={"/products"}
                activeClassName="active"
                exact={true}
              >
                <MdDashboard className={bem.e("nav-item-icon")} />
                <span className="">{"Products"}</span>
              </BSNavLink>
            </NavItem>
            <NavItem className={bem.e("nav-item")}>
              <BSNavLink
                id={`navItem-Home-0`}
                tag={NavLink}
                to={"/process"}
                activeClassName="active"
                exact={true}
              >
                <MdDashboard className={bem.e("nav-item-icon")} />
                <span className="">{"Versions"}</span>
              </BSNavLink>
            </NavItem>
            <NavItem className={bem.e("nav-item")}>
              <BSNavLink
                id={`navItem-Home-4`}
                // className="text-uppercase"
                tag={NavLink}
                to={"/benchmark"}
                activeClassName="active"
                exact={true}
              >
                <MdDashboard className={bem.e("nav-item-icon")} />
                <span className="">{"Benchmark"}</span>
              </BSNavLink>
            </NavItem>
            <NavItem className={bem.e("nav-item")}>
              <BSNavLink
                id={`navItem-Home-5`}
                // className="text-uppercase"
                tag={NavLink}
                to={"/membership"}
                exact={true}
              >
                <MdDashboard className={bem.e("nav-item-icon")} />
                <span className="">{"Membership"}</span>
              </BSNavLink>
            </NavItem>

            {this.renderDevMenu()}
          </Nav>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
