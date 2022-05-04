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
import { AllPostsCompProps } from "../../utils/interfaceTypes";
import HeadingItemsText from "../HeadingItemsText/HeadingItemsText";
import MenuItems from "../MenuItems/MenuItems";
import {
  allPostsDateText,
  menuItemPostContainer,
  moreHorizontalIcon,
  postsAuthor,
  postsCommentsText,
  postsMenu,
  postsTitle,
  useStyles,
} from "./AllPostsStyles";

const AllPostsComponent: React.FC<AllPostsCompProps> = ({
  thumbnail,
  title,
  authorAvatar,
  author,
  categories,
  comments,
  status,
  date,
  colorProps,
  deleteItem,
  id,
}) => {
  const allPostsRef = useRef() as RefObject<HTMLDivElement>;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { t } = useTranslation();
  const allPostsDeleteItemHandler = () => {
    setAnchorEl(null);
    deleteItem();
  };
  const classes = useStyles();
  return (
    <div
      className={classes.postsContainerElements}
      onClick={() =>
        allPostsRef?.current?.classList.toggle(classes.postsNewLinkActive)
      }
    >
      <div ref={allPostsRef} className={classes.postsNewLink}>
        <div className={classes.postsThumbnailCont}>
          <img
            alt="postsImgThumbnail"
            src={thumbnail}
            className={classes.postsThumbnailImg}
          ></img>
        </div>
        <div className={classes.postsTitle}>
          <HeadingItemsText sxClass={postsTitle} text={title} />
        </div>
        <div className={classes.postsAuthorCont}>
          <img
            alt="postsImgAvatar"
            className={classes.postsAvatarImg}
            src={authorAvatar}
          />
          <HeadingItemsText sxClass={postsAuthor} text={author} />
        </div>
        <div className={classes.postsCategories}>
          <NavLink className={classes.postsCategoriesLink} to="/404">
            {categories}
          </NavLink>
        </div>
        <div className={classes.postsComments}>
          <HeadingItemsText sxClass={postsCommentsText} text={comments} />
        </div>
        <div className={colorProps}>
          <HeadingItemsText text={status} />
        </div>
        <div className={classes.postsDate}>
          <Typography sx={allPostsDateText}>{unixTimeToDate(date)}</Typography>
        </div>
        <div className={classes.postsAction}>
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
            sx={menuItemPostContainer}
            id="long-menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={() => handleCloseAnchor(setAnchorEl)}
            PaperProps={{
              style: postsMenu,
            }}
          >
            <NavLink className={classes.editPostLinkButton} to={`/posts/${id}`}>
              <MenuItems
                onClick={() => handleCloseAnchor(setAnchorEl)}
                text={t("posts.editStatus")}
              />
            </NavLink>
            <MenuItems
              onClick={allPostsDeleteItemHandler}
              text={t("posts.deleteStatus")}
            />
          </Menu>
        </div>
      </div>
      <div className={classes.divider}></div>
    </div>
  );
};

export default AllPostsComponent;
