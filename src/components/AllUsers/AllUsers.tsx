import MoreHoriz from "@mui/icons-material/MoreHoriz";
import { IconButton, Menu, Typography } from "@mui/material";
import React, { RefObject, useRef } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import {
  allPostsHandleClick,
  handleCloseAnchor,
  unixTimeToDate,
} from "../../utils/constants";
import { AllUsersValues } from "../../utils/interfaceTypes";
import HeadingItemsText from "../HeadingItemsText/HeadingItemsText";
import MenuItems from "../MenuItems/MenuItems";
import {
  allUsersEmailText,
  allUsersName,
  allUsersUsername,
  menuUsersContainer,
  moreHorizontalIcon,
  userRoleText,
  usersDateText,
  usersMenu,
  useStyles,
} from "./AllUsersStyles";

const AllUsersComponent: React.FC<AllUsersValues> = ({
  id,
  name,
  email,
  username,
  status,
  role,
  registeredAt,
  deleteItem,
  thumbnail,
  colorProps,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const allUsersRef = useRef() as RefObject<HTMLDivElement>;
  const { t } = useTranslation();
  const allUsersDeleteItemHandler = () => {
    setAnchorEl(null);
    deleteItem();
  };
  const classes = useStyles();
  const changeUsersActiveLinkStyle = () => {
    return allUsersRef?.current?.classList.toggle(
      classes.allUsersNewLinkActive
    );
  };
  return (
    <div
      className={classes.allUsersContainerElements}
      onClick={() => changeUsersActiveLinkStyle()}
    >
      <div ref={allUsersRef} className={classes.allUsersNewLink}>
        <div className={classes.allUsersThumbnailCont}>
          <img
            alt="allUsersThumbnailImg"
            src={thumbnail}
            className={classes.allUsersThumbnailImg}
          ></img>
          <HeadingItemsText sxClass={allUsersUsername} text={`@${username}`} />
        </div>
        <div className={classes.allUsersAuthorCont}>
          <HeadingItemsText sxClass={allUsersName} text={name} />
        </div>
        <div className={classes.allUsersCategories}>
          <div className={classes.allUsersEmail}>
            <HeadingItemsText sxClass={allUsersEmailText} text={email} />
          </div>
          <div className={classes.allUsersRole}>
            <HeadingItemsText sxClass={userRoleText} text={role} />
          </div>
          <div className={colorProps}>
            <HeadingItemsText text={status} />
          </div>
          <div className={classes.allUsersDate}>
            <Typography sx={usersDateText}>
              {unixTimeToDate(registeredAt)}
            </Typography>
          </div>
          <div className={classes.allUsersAction}>
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={open ? "long-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={(e) => allPostsHandleClick(e, setAnchorEl)}
            >
              <MoreHoriz sx={moreHorizontalIcon} />
            </IconButton>
            <Menu
              sx={menuUsersContainer}
              id="long-menu"
              MenuListProps={{
                "aria-labelledby": "long-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={allUsersDeleteItemHandler}
              PaperProps={{
                style: usersMenu,
              }}
            >
              <NavLink
                className={classes.editAllUsersLinkButton}
                to={`/users/${id}`}
              >
                <MenuItems
                  onClick={() => handleCloseAnchor(setAnchorEl)}
                  text={t("posts.editStatus")}
                />
              </NavLink>
              <MenuItems
                onClick={allUsersDeleteItemHandler}
                text={t("posts.deleteStatus")}
              />
            </Menu>
          </div>
        </div>
      </div>
      <div className={classes.divider}></div>
    </div>
  );
};

export default AllUsersComponent;
