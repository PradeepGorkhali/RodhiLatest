import React from "react";
import { useHistory } from "react-router-dom";
import "./Navbar.css";
import Input from "@material-ui/core/Input";
import RockingBloggerLogo from "../../assets/RockingBloggerlogo.png";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import NotificationsActiveOutlinedIcon from "@material-ui/icons/NotificationsActiveOutlined";
import WhatshotOutlinedIcon from "@material-ui/icons/WhatshotOutlined";
import Avatar from "@material-ui/core/Avatar";
import Tooltip from "@material-ui/core/Tooltip";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import Zoom from "@material-ui/core/Zoom";
import ClearOutlinedIcon from "@material-ui/icons/ClearOutlined";
import GroupAddOutlinedIcon from "@material-ui/icons/GroupAddOutlined";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import VpnKeyOutlinedIcon from "@material-ui/icons/VpnKeyOutlined";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import Noti from "../notification/Noti";
import { useSelector } from "react-redux";

const MobileSearchModal = ({ closeModal, value, setValue, searchResult }) => {
  return (
    <div className="searchmodal mobile_pf">
      <div className="input-wrapper">
        <Input
          type="text"
          style={{ width: "100%" }}
          placeholder="Search 🔍️"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.keyCode === 13 && searchResult()}
          autoFocus={true}
          onBlur={() => setTimeout(() => closeModal(), 500)} //To make search_button work,so delay closeModal event for 500ms
        />
        <div className="search_icon_mobile" onClick={searchResult}>
          <SearchOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

const MobileMenu = ({ data, history, closeModal }) => {
  return (
    <div className="mobilemenu mobile_pf" onClick={closeModal}>
      <div className="menu_item" onClick={() => history.push("/")}>
        Services
      </div>
      <div
        className="menu_item"
        onClick={() => history.push("/follow-tag-or-people")}
      >
        About Us
      </div>
      <div className="menu_item" onClick={() => history.push("/trending")}>
        Contact Us
      </div>
      <div className="menu_item" onClick={() => history.push("/blog")}>
        Our blogs
      </div>

      {/* {!data && (
        <div className="menu_item" onClick={() => history.push("/signin")}>
          <VpnKeyOutlinedIcon />
          &nbsp;&nbsp;Log in
        </div>
      )}
      {data && (
        <div className="menu_item" onClick={() => history.push("/me")}>
          <PermIdentityOutlinedIcon />
          &nbsp;&nbsp;Profile
        </div>
      )} */}
    </div>
  );
};

const Navbar = () => {
  const { data } = useSelector((state) => state.user);

  const history = useHistory();
  const [value, setVal] = React.useState("");
  const [openMenu, isMenuOpen] = React.useState(false);
  const [search, isSearchOpen] = React.useState(false);
  const [noti, isNoticeOpen] = React.useState(false);

  // useEffect(()=>{
  //     localStorage.setItem("user",true);
  // },[])

  const setValue = (value) => {
    setVal(value);
  };

  const searchResult = () => {
    closeModal();
    history.push("/search/" + value);
    setVal("");
  };

  const closeModal = () => {
    isSearchOpen(false);
    isMenuOpen(false);
    isNoticeOpen(false);
  };
  return (
    <div className="header">
      {openMenu && (
        <MobileMenu data={data} history={history} closeModal={closeModal} />
      )}
      {search && (
        <MobileSearchModal
          closeModal={closeModal}
          searchResult={searchResult}
          value={value}
          setValue={setValue}
        />
      )}
      {noti && <Noti />}
      <div className="mainheader_wrapper">
        <div className="header_left">
          <a href="/">
            <div className="logo">
              <img
                src="https://res.cloudinary.com/tuddrom-nepal/image/upload/v1661142725/New%20Logo/RODHI_sourcing_to_marketing_nb7zzy.png"
                alt=""
                id="logo"
              />
            </div>
          </a>
          {/* <div className="search">
            <Input
              type="text"
              placeholder="Search 🔍️"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(e) => e.keyCode === 13 && searchResult()}
            />
          </div> */}
        </div>
        <div className="mobile_header">
          {/* <div
            className="search_mobile"
            onClick={() => {
              closeModal();
              isSearchOpen(!search);
            }}
          >
            <SearchOutlinedIcon />
          </div> */}
          {/* {data && (
            <div
              className="search_mobile"
              id="notibell"
              onClick={() => {
                closeModal();
                isNoticeOpen(!noti);
              }}
            >
              <NotificationsActiveOutlinedIcon />
            </div>
          )} */}

          <div>
            <div className="profile">
              {data ? (
                <h5
                  className="menu__items"
                  onClick={() => history.push("/newstory")}
                >
                  <p>
                    {" "}
                    <AddCircleOutlineOutlinedIcon />
                  </p>
                </h5>
              ) : (
                <span onClick={() => history.push("/signin")}></span>
              )}
            </div>
          </div>
          <div
            className="menu"
            onClick={() => {
              closeModal();
              isMenuOpen(!openMenu);
            }}
          >
            {openMenu ? <ClearOutlinedIcon /> : <MenuOutlinedIcon />}
          </div>
        </div>
        <div className="header_right">
          <div>
            <h5 className="menu__items">Services</h5>
          </div>
          {/* {data && (
            <Tooltip title="Notifications 🔔️" TransitionComponent={Zoom} arrow>
              <div
                className="notification_icon icon"
                id="notibell2"
                onClick={() => {
                  closeModal();
                  isNoticeOpen(!noti);
                }}
              >
                <NotificationsActiveOutlinedIcon />
              </div>
            </Tooltip>
          )} */}
          <div>
            <h5 className="menu__items">About us </h5>
          </div>
          <div>
            <h5 className="menu__items">Contact Us</h5>
          </div>{" "}
          <div>
            <h5 className="menu__items" onClick={() => history.push("/blog")}>
              Our Blogs
            </h5>
          </div>
          <div className="profile">
            {data ? (
              <h5
                className="menu__items"
                onClick={() => history.push("/newstory")}
              >
                <AddCircleOutlineOutlinedIcon />
              </h5>
            ) : (
              <span onClick={() => history.push("/signin")}></span>
            )}
          </div>
          <div className="profile">
            {data ? (
              <Tooltip title="Your profile" TransitionComponent={Zoom} arrow>
                <Avatar
                  alt=""
                  onClick={() => history.push("/" + data.username)}
                />
              </Tooltip>
            ) : (
              <span onClick={() => history.push("/signin")}></span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
