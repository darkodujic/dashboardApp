import MoreHoriz from "@mui/icons-material/MoreHoriz";
import { IconButton, Menu } from "@mui/material";
import React, { RefObject, useRef } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import {
  categoriesDateText,
  categoriesDescription,
  categoriesMenu,
  categoriesTitle,
  menuCategoriesContainer,
  moreHorizontalIcon,
  useStyles,
} from "../../pages/Categories/CategoriesStyles";
import { unixTimeToDate } from "../../utils/constants";
import { AllCategoriesProps } from "../../utils/interfaceTypes";
import MenuItems from "../MenuItems/MenuItems";
import CategoriesText from "./CategoriesText";

const Categories: React.FC<AllCategoriesProps> = ({
  date,
  description,
  id,
  name,
  slug,
  thumbnail,
  deleteCategory,
}) => {
  const [categoriesAnchorEl, setCategoriesAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const { t } = useTranslation();
  const open = Boolean(categoriesAnchorEl);
  const categoriesHandleClick = (event: React.MouseEvent<HTMLElement>) => {
    setCategoriesAnchorEl(event.currentTarget);
  };
  const categoriesRef = useRef() as RefObject<HTMLDivElement>;
  const categoriesDeleteItemHandler = () => {
    setCategoriesAnchorEl(null);
    deleteCategory();
  };
  const changeCategoriesActiveLinkStyle = () => {
    return categoriesRef?.current?.classList.toggle(
      classes.categoriesNewLinkActive
    );
  };
  const categoriesHandleClose = () => {
    setCategoriesAnchorEl(null);
  };
  const classes = useStyles();
  return (
    <div
      className={classes.categoriesContainerElements}
      onClick={() => changeCategoriesActiveLinkStyle()}
    >
      <div ref={categoriesRef} className={classes.categoriesNewLink}>
        <div className={classes.categoriesThumbnailCont}>
          <img
            alt="categoriesThumbnailImg"
            src={thumbnail}
            className={classes.categoriesThumbnailImg}
          ></img>
        </div>

        <div className={classes.categoriesTitle}>
          <CategoriesText sxProps={categoriesTitle} text={name} />
        </div>
        <div className={classes.categoriesDescriptionCont}>
          <CategoriesText sxProps={categoriesDescription} text={description} />
        </div>
        <div className={classes.categoriesItems}>
          <NavLink className={classes.categoriesLink} to="/404">
            {slug}
          </NavLink>
        </div>
        <div className={classes.categoriesDate}>
          <CategoriesText
            sxProps={categoriesDateText}
            text={unixTimeToDate(date)}
          />
        </div>
        <div className={classes.categoriesAction}>
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={categoriesHandleClick}
          >
            <MoreHoriz sx={moreHorizontalIcon} />
          </IconButton>
          <Menu
            sx={menuCategoriesContainer}
            id="long-menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            anchorEl={categoriesAnchorEl}
            open={open}
            onClose={categoriesHandleClose}
            PaperProps={{
              style: categoriesMenu,
            }}
          >
            <NavLink
              className={classes.editCategoriesLinkButton}
              to={`/categories/${id}`}
            >
              <MenuItems
                onClick={categoriesHandleClose}
                text={t("posts.editStatus")}
              />
            </NavLink>

            <MenuItems
              onClick={categoriesDeleteItemHandler}
              text={t("posts.deleteStatus")}
            />
          </Menu>
        </div>
      </div>
      <div className={classes.divider}></div>
    </div>
  );
};

export default Categories;
