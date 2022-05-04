import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  allUsersHeadingText,
  AllUsersSubHeadingText,
  filterPostsStatusLabel,
  filterUsersContainer,
  filterUsersControl,
  filterUsersForm,
  filterUsersInput,
  filterUsersSelectCategory,
  filterUsersSelectStatus,
  filterUsersStatusForm,
  searchButtonIcon,
  usersClearFilter,
  usersRolesLabel,
  useStyles,
} from "./UsersStyles";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import "../FullPosts/FullPosts.css";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { fetchingAllUsers } from "../../redux/api/api";
import { useDispatch, useSelector } from "react-redux";
import AllPostsText from "../../components/DashboardCategories/DashboardCategory/DashboardCategoryText/DashboardCategoryText";
import {
  fetchUsersRequest,
  fetchFilteringUsersRequest,
  userDeleteRequest,
} from "../../redux/actions/usersActions/usersActions";
import { getUsersData } from "../../redux/selectors";
import AllUsersComponent from "../../components/AllUsers/AllUsers";
import { useTranslation } from "react-i18next";
import {
  AllUsersValues,
  DeleteItemProps,
  UsersElementsProps,
} from "../../utils/interfaceTypes";
import GlobalTitleText from "../../components/GlobalTitleText/GlobalTitleText";
import SearchInputIcon from "../../img/icon-search.svg";
import IconChevron from "../../img/icon-chevron-down.svg";
import {
  apiLimit,
  getBackAfterFilter,
  handleSelectChange,
  pageNumberLimit,
  restricted,
  trashed,
} from "../../utils/constants";
import EmptyData from "../../components/EmptyData/EmptyData";
import DataPagination from "../../components/DataPagination/DataPagination";
const Users: React.FC = () => {
  const classes = useStyles();
  const [fullUsersStatus] = React.useState(trashed);
  const [fullUsersSearchValue, setFullUsersSearchValue] = React.useState(
    ""
  ) as [string, Dispatch<SetStateAction<string>>];

  const [newUsersData, setNewUsersData] = useState<AllUsersValues[]>([]);
  const [fullUserPage, setFullUserPage] = React.useState(1) as [
    number,
    Dispatch<SetStateAction<number>>
  ];

  const { t } = useTranslation();
  const [fullUsersCategories, setFullUsersCategories] = React.useState("");
  const [fullUsersStatusValue, setFullUsersStatusValue] = React.useState("");
  const dispatch = useDispatch();
  const usersState = useSelector(getUsersData);
  const [updatedCounter, setUpdatedCounter] = useState(0);
  const [searchValue, setSearchValue] = React.useState("");

  const getAllUpdatedUsers = () => {
    dispatch(
      fetchFilteringUsersRequest(
        fullUsersSearchValue,
        fullUsersCategories,
        fullUsersStatusValue,
        fullUserPage,
        apiLimit
      )
    );
  };
  const setUsersForPagination = () => {
    fetchingAllUsers(
      setNewUsersData,
      fullUsersSearchValue,
      fullUsersCategories,
      fullUsersStatusValue
    );
  };

  useEffect(() => {
    getAllUpdatedUsers();
  }, [updatedCounter]);

  React.useEffect(() => {
    setUsersForPagination();
  }, []);

  const userValue = {
    status: fullUsersStatus,
  };

  useEffect(() => {
    getAllUpdatedUsers();
    setUsersForPagination();
  }, [fullUsersStatusValue]);

  const deleteUsersItemHandler = (id: number, userValue: DeleteItemProps) => {
    dispatch(userDeleteRequest(id, userValue));
    setUpdatedCounter(updatedCounter + 1);
  };
  const paginationChange = async () => {
    setUsersForPagination();
    getAllUpdatedUsers();
  };
  const onSubmitUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchUserByName();
  };

  const changePage = (page: number) => {
    setFullUserPage(page);
  };

  const searchValueChanging = (event: { target: { value: string } }) => {
    setSearchValue(event.target.value as string);
  };
  useEffect(() => {
    paginationChange();
  }, [fullUserPage]);

  useEffect(() => {
    getAllUpdatedUsers();
    setUsersForPagination();
  }, [fullUsersCategories]);

  useEffect(() => {
    getAllUpdatedUsers();
  }, [fullUsersStatusValue]);

  const pageNumbers = Math.ceil(newUsersData?.length / pageNumberLimit);

  const searchUserByName = () => {
    getAllUpdatedUsers();
    setUsersForPagination();
    getBackAfterFilter(setFullUserPage);
  };

  const goBackAfterFiltering = () => {
    getBackAfterFilter(setFullUserPage);
  };

  const clearFilters = () => {
    dispatch(fetchUsersRequest(apiLimit));
    setFullUsersCategories("");
    setFullUsersStatusValue("");
    setFullUserPage(1);
    setFullUsersSearchValue("");
    setSearchValue("");
  };
  const usersSearchOnChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    setFullUsersSearchValue(`name_like=${event.target.value as string}`);
  };
  return (
    <div className={classes.users}>
      <div className={classes.usersItemContainer}>
        <div className={classes.usersHeading}>
          <div className={classes.usersDetails}>
            <div className={classes.usersHeadingThumbnail}>
              <AllPostsText
                sxProps={AllUsersSubHeadingText}
                text={t("users.username")}
              />
            </div>
            <div className={classes.usersHeadingTitle}>
              <AllPostsText
                sxProps={AllUsersSubHeadingText}
                text={t("users.name")}
              />
            </div>
            <div className={classes.usersHeadingEmail}>
              <AllPostsText
                sxProps={AllUsersSubHeadingText}
                text={t("users.email")}
              />
            </div>
            <div className={classes.usersHeadingDate}>
              <AllPostsText
                sxProps={AllUsersSubHeadingText}
                text={t("users.registeredAt")}
              />
            </div>
            <div className={classes.userHeadingComments}>
              <AllPostsText
                sxProps={AllUsersSubHeadingText}
                text={t("users.role")}
              />
            </div>
            <div className={classes.usersHeadingStatus}>
              <AllPostsText
                sxProps={AllUsersSubHeadingText}
                text={t("users.status")}
              />
            </div>

            <div className={classes.usersHeadingAction}>
              <AllPostsText
                sxProps={AllUsersSubHeadingText}
                text={t("users.action")}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.usersMainHeading}>
        <GlobalTitleText
          sxProps={allUsersHeadingText}
          text={t("users.allUsers")}
        />
      </div>
      <div className={classes.usersClearFilters}>
        <Button onClick={clearFilters} sx={usersClearFilter}>
          {t("posts.clearfilters")}
        </Button>
      </div>
      <div className={classes.filterUsersContainer}>
        <div className={classes.filterElements}>
          <Paper
            component="form"
            onSubmit={onSubmitUser}
            onChange={usersSearchOnChange}
            sx={filterUsersContainer}
          >
            <InputBase
              onChange={searchValueChanging}
              value={searchValue}
              sx={filterUsersInput}
              placeholder={t("posts.search")}
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton type="submit" sx={searchButtonIcon} aria-label="search">
              <img alt="searchInputImg" src={SearchInputIcon}></img>
            </IconButton>
          </Paper>
          <Box sx={filterUsersForm}>
            <FormControl sx={filterUsersControl} fullWidth>
              <InputLabel style={usersRolesLabel} id="demo-simple-select-label">
                {t("users.allRoles")}
              </InputLabel>
              <Select
                style={filterUsersSelectCategory}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={fullUsersCategories}
                label="Role"
                onChange={(e) => handleSelectChange(e, setFullUsersCategories)}
                IconComponent={() => (
                  <img
                    alt="iconChevronImg"
                    className={classes.postsIconChevronDown}
                    src={IconChevron}
                  ></img>
                )}
              >
                <MenuItem
                  onClick={() => goBackAfterFiltering()}
                  value={"&role=Admin"}
                >
                  {t("users.admin")}
                </MenuItem>
                <MenuItem
                  onClick={() => goBackAfterFiltering()}
                  value={"&role=Guest"}
                >
                  {t("users.guest")}
                </MenuItem>
                <MenuItem
                  onClick={() => goBackAfterFiltering()}
                  value={"&role=Moderator"}
                >
                  {t("users.moderator")}
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={filterUsersStatusForm}>
            <FormControl fullWidth>
              <InputLabel
                style={filterPostsStatusLabel}
                id="demo-simple-select-label"
              >
                {t("posts.status")}
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                style={filterUsersSelectStatus}
                value={fullUsersStatusValue}
                label={t("posts.status")}
                onChange={(e) => handleSelectChange(e, setFullUsersStatusValue)}
                IconComponent={() => (
                  <img
                    alt="iconChevronImg"
                    className={classes.postsIconChevronDown}
                    src={IconChevron}
                  ></img>
                )}
              >
                <MenuItem
                  onClick={() => goBackAfterFiltering()}
                  value="status=Active"
                >
                  {t("users.active")}
                </MenuItem>
                <MenuItem
                  onClick={() => goBackAfterFiltering()}
                  value="status=Restricted"
                >
                  {t("users.restricted")}
                </MenuItem>
                <MenuItem
                  onClick={() => goBackAfterFiltering()}
                  value="status=Trashed"
                >
                  {t("users.trashed")}
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
      <div className={classes.usersItemContainer}>
        {usersState?.length < 1 ? (
          <EmptyData text={t("users.noUsers")} />
        ) : (
          false
        )}
        {usersState?.map((el: UsersElementsProps) => {
          return (
            <AllUsersComponent
              id={el.id}
              key={el.id}
              deleteItem={() => deleteUsersItemHandler(el.id, userValue)}
              thumbnail={el.thumbnail}
              username={el.username}
              name={el.name}
              status={el.status}
              registeredAt={el.registeredAt}
              email={el.email}
              role={el.role}
              colorProps={
                el.status === trashed
                  ? classes.dashboardUserStatusTrashed
                  : el.status === restricted
                  ? classes.dashboardUserStatusCont
                  : classes.dashboardUserStatusContActive
              }
            />
          );
        })}
      </div>
      <div className={classes.pagination}>
        <DataPagination
          changePage={changePage}
          page={fullUserPage}
          count={pageNumbers}
        />
      </div>
    </div>
  );
};

export default Users;
