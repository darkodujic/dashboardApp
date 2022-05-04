import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import IconHorizontalDotsIcon from "@mui/icons-material/MoreHoriz";
import {
  dashboardPostAuthorNameText,
  dashboardPostDateText,
  dashboardPostsMenu,
  dashboardPostStatusText,
  dashboardPostTitleText,
  dotsHorizontalIcon,
  useStyles,
} from "./DashboardPostsStyles";
import { NavLink } from "react-router-dom";
import { unixTimeToDate } from "../../utils/constants";
import { RefObject } from "react";
import { DashboardPostProps } from "../../utils/interfaceTypes";
import DashboardPostsText from "../Categories/CategoriesText";
import { useTranslation } from "react-i18next";
import MenuItems from "../MenuItems/MenuItems";
const DashboardPost: React.FC<DashboardPostProps> = ({
  postTitle,
  postAvatarImg,
  postAuthorName,
  postStatus,
  postDate,
  postId,
  postDeleteItem,
  postColorProps,
  postThumbnailImg,
}) => {
  const [dashboardPostBtnAnchorEl, setDashboardPostBtnAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const open = Boolean(dashboardPostBtnAnchorEl);
  const ref = React.useRef() as RefObject<HTMLDivElement>;
  const handleActionBtnClick = (event: React.MouseEvent<HTMLElement>) => {
    setDashboardPostBtnAnchorEl(event.currentTarget);
  };
  const closeMenu = () => {
    setDashboardPostBtnAnchorEl(null);
  };
  const deleteItemHandler = () => {
    setDashboardPostBtnAnchorEl(null);
    postDeleteItem();
  };
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <div className={classes.dashboardPost}>
      <div className={classes.dashboardPostContainer} ref={ref}>
        <div className={classes.dashboardPostThumbnailImgCont}>
          <img
            alt="postsThumbnailImg"
            className={classes.dashboardThumbnailPostImg}
            src={postThumbnailImg}
          />
        </div>
        <div className={classes.dashboardPostTitleCont}>
          <DashboardPostsText
            sxProps={dashboardPostTitleText}
            text={postTitle}
          />
        </div>
        <div className={classes.dashboardPostAuthorCont}>
          <div className={classes.dashboardPostAuthorImgCont}>
            <img
              alt="postsAvatarImg"
              className={classes.dashboardPostAuthorImg}
              src={postAvatarImg}
            />
          </div>
          <DashboardPostsText
            sxProps={dashboardPostAuthorNameText}
            text={postAuthorName}
          />
        </div>
        <div className={postColorProps}>
          <DashboardPostsText
            sxProps={dashboardPostStatusText}
            text={postStatus}
          />
        </div>
        <div className={classes.dashboardPostDate}>
          <DashboardPostsText
            sxProps={dashboardPostDateText}
            text={unixTimeToDate(postDate)}
          />
        </div>
        <div className={classes.dashboardPostAction}>
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleActionBtnClick}
          >
            <IconHorizontalDotsIcon sx={dotsHorizontalIcon} />
          </IconButton>
          <Menu
            id="long-menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            anchorEl={dashboardPostBtnAnchorEl}
            open={open}
            onClose={closeMenu}
            PaperProps={{
              style: dashboardPostsMenu,
            }}
          >
            <NavLink
              className={classes.dashboardEditPostLinkButton}
              to={`/posts/${postId}`}
            >
              <MenuItems onClick={closeMenu} text={t("posts.editStatus")} />
            </NavLink>
            <MenuItems
              onClick={deleteItemHandler}
              text={t("posts.deleteStatus")}
            />
          </Menu>
        </div>
      </div>
      <div className={classes.divider}></div>
    </div>
  );
};

export default DashboardPost;
