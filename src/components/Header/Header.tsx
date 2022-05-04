import React, { RefObject, useRef } from "react";
import {
  headerContainer,
  headerEmptyContainer,
  headerIconNavContainer,
  headerLogoTitle,
  headerMenuButton,
  headerSecondMenu,
  headerSettingsIcon,
  headerSettingsMenuContainer,
  headerToolbarContainer,
  headingContainer,
  headingSpanBtn,
  useStyles,
} from "./HeaderStyles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import HeadingAvatarIcon from "../../img/Avatar2.svg";
import Button from "@mui/material/Button";
import ChevronIcon from "../../img/icon-chevron-down.svg";
import { useTranslation } from "react-i18next";
import { Toolbar } from "@mui/material";
import { enHashtag, srHashtag } from "../../utils/constants";
import { useNavigate } from "react-router";

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const classes = useStyles();
  const ref = useRef() as RefObject<HTMLButtonElement>;
  const pages: string[] = [
    `${t("navbar.english")}`,
    `${t("navbar.serbian")}`,
    `${t("navbar.logout")}`,
  ];
  const navigate = useNavigate();
  const settings: string[] = [`${t("navbar.logout")}`];
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const loagoutDeleteData = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    navigate("/login");
  };
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleInitialMenuClose = () => {
    setAnchorEl(null);
  };
  const handleClose = (event: React.MouseEvent<HTMLElement>, lang: string) => {
    const eventTarget = event.target as HTMLElement;
    setAnchorEl(null);
    i18n.changeLanguage(lang);
    if (ref && ref.current) {
      eventTarget.innerText === enHashtag
        ? (ref.current.textContent = enHashtag)
        : (ref.current.textContent = srHashtag);
    }
  };
  return (
    <AppBar
      sx={headerContainer}
      className={classes.headingAppBarContainer}
      position="static"
    >
      <Container sx={headingContainer} maxWidth="xl">
        <Toolbar sx={headerToolbarContainer}>
          <div className={classes.headingMainButton}>
            <Button
              id="demo-positioned-button"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              ref={ref}
              onClick={handleClick}
              sx={headingSpanBtn}
            >
              {enHashtag}
            </Button>

            <img
              alt="headerChevronIcon"
              className={classes.chevronIcon}
              src={ChevronIcon}
            />
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleInitialMenuClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <MenuItem
                onClick={(e: React.MouseEvent<HTMLElement>) =>
                  handleClose(e, "en")
                }
              >
                {" "}
                {enHashtag}
              </MenuItem>
              <MenuItem
                onClick={(e: React.MouseEvent<HTMLElement>) =>
                  handleClose(e, "sr")
                }
              >
                {srHashtag}
              </MenuItem>
            </Menu>
          </div>

          <Box sx={headerIconNavContainer}>
            <IconButton
              sx={headerMenuButton}
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography variant="h6" noWrap component="div" sx={headerLogoTitle}>
            LOGO
          </Typography>
          <Box sx={headerEmptyContainer}></Box>

          <Box sx={headerSettingsMenuContainer}>
            <Tooltip title="Open settings">
              <IconButton
                className={classes.headingSettingsAvatarImg}
                onClick={handleOpenUserMenu}
                sx={headerSettingsIcon}
              >
                <Avatar alt="Remy Sharp" src={HeadingAvatarIcon} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={headerSecondMenu}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography
                    textAlign="center"
                    onClick={() => loagoutDeleteData()}
                  >
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
