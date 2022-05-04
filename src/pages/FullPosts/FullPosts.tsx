import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  allPostsHeadingText,
  allPostsSubHeadingText,
  editBtnPosts,
  filterPostsContainer,
  filterPostsControl,
  filterPostsForm,
  filterPostsInput,
  filterPostsInputLabel,
  filterPostsSelectCategory,
  filterPostsSelectStatus,
  filterPostsStatusForm,
  filterPostsStatusLabel,
  postsClearFilter,
  searchButtonIcon,
  useStyles,
} from "./FullPostsStyles";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import "./FullPosts.css";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import AllPostsComponent from "../../components/AllPosts/AllPosts";
import { deletePost, fetchingAllPosts } from "../../redux/api/api";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import AllPostsText from "../../components/DashboardCategories/DashboardCategory/DashboardCategoryText/DashboardCategoryText";
import {
  fetchPostRequest,
  fetchFilteringPostsRequest,
} from "../../redux/actions/postsActions/postsActions";
import { fetchCategoriesRequest } from "../../redux/actions/categoriesActions/categoriesActions";
import { getCategoriesData, getPostsData } from "../../redux/selectors";
import { useTranslation } from "react-i18next";
import {
  AllPostsCompProps,
  FullPostsElements,
} from "../../utils/interfaceTypes";
import TitleText from "../../components/GlobalTitleText/GlobalTitleText";
import SearchInputIcon from "../../img/icon-search.svg";
import PlusButtonIconAdd from "../../img/icon-plus.svg";
import IconChevron from "../../img/icon-chevron-down.svg";
import {
  apiLimit,
  editHandleChange,
  getBackAfterFilter,
  handleSelectChange,
  pageNumberLimit,
  pending,
  trashed,
} from "../../utils/constants";
import EmptyData from "../../components/EmptyData/EmptyData";
import DataPagination from "../../components/DataPagination/DataPagination";

const AllPosts: React.FC = () => {
  const classes = useStyles();
  const [fullPostsStatus] = React.useState(trashed);
  const [fullPostsSearchValue, setFullPostsSearchValue] = React.useState(
    ""
  ) as [string, Dispatch<SetStateAction<string>>];
  const categoriesState = useSelector(getCategoriesData);
  const [fullPostsPage, setFullPostsPage] = React.useState(1) as [
    number,
    Dispatch<SetStateAction<number>>
  ];
  const [fullPostsCategories, setFullPostsCategories] = React.useState("");
  const [searchValue, setSearchValue] = React.useState("");
  const [fullPostsStatusValue, setFullPostsStatusValue] = React.useState("");
  const [postsUpdatedCounter, setPostUpdatedCounter] = React.useState("");
  const [counter, setCounter] = React.useState(0);
  const postsState = useSelector(getPostsData);
  const [allPostsData, setAllPostsData] = useState<AllPostsCompProps[]>([]);
  const ref = useRef();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const getAllUpdatedPosts = () => {
    dispatch(
      fetchFilteringPostsRequest(
        fullPostsSearchValue,
        fullPostsCategories,
        fullPostsStatusValue,
        fullPostsPage,
        apiLimit
      )
    );
  };
  const setPostsForPagination = () => {
    fetchingAllPosts(
      setAllPostsData,
      fullPostsSearchValue,
      fullPostsCategories,
      fullPostsStatusValue
    );
  };
  useEffect(() => {
    getAllUpdatedPosts();
  }, [postsUpdatedCounter]);
  React.useEffect(() => {
    dispatch(fetchCategoriesRequest());
    setPostsForPagination();
  }, []);
  const navigate = useNavigate();
  const deleteHandlerPost = (id: number, status: string) => {
    deletePost(id, status);
    setPostUpdatedCounter(postsUpdatedCounter + 1);
  };
  useEffect(() => {
    getAllUpdatedPosts();
    setPostsForPagination();
    setCounter(counter + 1);
  }, [fullPostsStatusValue]);
  useEffect(() => {
    getAllUpdatedPosts();
    setPostsForPagination();
    setCounter(counter + 1);
  }, [fullPostsCategories]);
  const pageNumbers = Math.ceil(allPostsData.length / pageNumberLimit);
  const paginationChange = () => {
    getAllUpdatedPosts();
    setPostsForPagination();
  };
  const onSubmitPost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchPostByTitle();
    setCounter(counter + 1);
  };
  const changePage = (page: number) => {
    setFullPostsPage(page);
  };
  const clearFilters = () => {
    dispatch(fetchPostRequest(apiLimit));
    setFullPostsCategories("");
    setFullPostsStatusValue("");
    setFullPostsPage(1);
    setFullPostsSearchValue("");
    setSearchValue("");
    setCounter(1);
  };
  useEffect(() => {
    paginationChange();
  }, [fullPostsPage]);
  const searchPostByTitle = () => {
    getAllUpdatedPosts();
    setPostsForPagination();
    getBackAfterFilter(setFullPostsPage);
  };
  const goBackAfterFiltering = () => {
    getBackAfterFilter(setFullPostsPage);
  };
  const postsSearchOnChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    setFullPostsSearchValue(`title_like=${event.target.value as string}`);
  };
  return (
    <div className={classes.posts}>
      <div className={classes.postsMainHeadingBtn}>
        <Button onClick={() => navigate("/posts/add")} sx={editBtnPosts}>
          <img
            alt="btnPlusImg"
            className={classes.btnPlusIcon}
            src={PlusButtonIconAdd}
          ></img>
          {t("posts.addnew")}
        </Button>
        <Button onClick={clearFilters} sx={postsClearFilter}>
          {t("posts.clearfilters")}
        </Button>
      </div>
      <div className={classes.postsItemContainer}>
        <div className={classes.postsHeading}>
          <div className={classes.postsDetails}>
            <div className={classes.postsHeadingThumbnail}>
              <AllPostsText
                sxProps={allPostsSubHeadingText}
                text={t("posts.thumbnail")}
              />
            </div>
            <div className={classes.postsHeadingTitle}>
              <AllPostsText
                sxProps={allPostsSubHeadingText}
                text={t("posts.title")}
              />
            </div>
            <div className={classes.postsHeadingAuthor}>
              <AllPostsText
                sxProps={allPostsSubHeadingText}
                text={t("posts.author")}
              />
            </div>
            <div className={classes.postHeadingCategories}>
              <AllPostsText
                sxProps={allPostsSubHeadingText}
                text={t("posts.categories")}
              />
            </div>
            <div className={classes.postHeadingComments}>
              <AllPostsText
                sxProps={allPostsSubHeadingText}
                text={t("posts.comments")}
              />
            </div>
            <div className={classes.postsHeadingStatus}>
              <AllPostsText
                sxProps={allPostsSubHeadingText}
                text={t("posts.status")}
              />
            </div>
            <div className={classes.postsHeadingDate}>
              <AllPostsText
                sxProps={allPostsSubHeadingText}
                text={t("posts.date")}
              />
            </div>
            <div className={classes.postsHeadingAction}>
              <AllPostsText
                sxProps={allPostsSubHeadingText}
                text={t("posts.option")}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.postsMainHeading}>
        <TitleText sxProps={allPostsHeadingText} text={t("posts.allposts")} />
      </div>
      <div className={classes.filterPostsContainer}>
        <div className={classes.filterElements}>
          <Paper
            component="form"
            onSubmit={onSubmitPost}
            onChange={postsSearchOnChange}
            sx={filterPostsContainer}
          >
            <InputBase
              sx={filterPostsInput}
              onChange={(e) => editHandleChange(e, setSearchValue)}
              value={searchValue}
              placeholder={t("posts.search")}
              inputProps={{ "aria-label": "search google maps" }}
              ref={ref}
            />
            <IconButton type="submit" sx={searchButtonIcon} aria-label="search">
              <img alt="searchInputIconImg" src={SearchInputIcon}></img>
            </IconButton>
          </Paper>
          <Box sx={filterPostsForm}>
            <FormControl sx={filterPostsControl} fullWidth>
              <InputLabel
                style={filterPostsInputLabel}
                id="demo-simple-select-label"
              >
                {t("posts.allCategories")}
              </InputLabel>
              <Select
                style={filterPostsSelectCategory}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={fullPostsCategories}
                label={t("posts.categories")}
                onChange={(e) => handleSelectChange(e, setFullPostsCategories)}
                IconComponent={() => (
                  <img
                    alt="iconChevronImg"
                    className={classes.postsIconChevronDown}
                    src={IconChevron}
                  ></img>
                )}
              >
                {categoriesState?.map(
                  (el: { key: number; id: number; name: string }) => {
                    return (
                      <MenuItem
                        key={el.id}
                        value={`&categoryIds=${el.id}`}
                        onClick={() => goBackAfterFiltering()}
                      >
                        {el.name}
                      </MenuItem>
                    );
                  }
                )}
              </Select>
            </FormControl>
          </Box>
          <Box sx={filterPostsStatusForm}>
            <FormControl fullWidth>
              <InputLabel
                style={filterPostsStatusLabel}
                id="demo-simple-select-label"
              >
                {t("posts.status")}
              </InputLabel>
              <Select
                style={filterPostsSelectStatus}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={fullPostsStatusValue}
                onChange={(e) => handleSelectChange(e, setFullPostsStatusValue)}
                label={t("posts.status")}
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
                  value={"status=Active"}
                >
                  {t("posts.active")}
                </MenuItem>
                <MenuItem
                  onClick={() => goBackAfterFiltering()}
                  value={"status=Pending"}
                >
                  {t("posts.pending")}
                </MenuItem>
                <MenuItem
                  onClick={() => goBackAfterFiltering()}
                  value={`status=Trashed`}
                >
                  {t("posts.trashed")}
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
      <div className={classes.postsItemContainer}>
        {postsState?.length < 1 ? (
          <EmptyData text={t("posts.noPosts")} />
        ) : (
          false
        )}
        {postsState?.map((el: FullPostsElements) => {
          return (
            <AllPostsComponent
              id={el.id}
              key={el.id}
              deleteItem={() => deleteHandlerPost(el.id, fullPostsStatus)}
              thumbnail={el.img}
              title={el.title}
              authorAvatar={el.thumbnail}
              author={el.authorName}
              comments={el.commentIds.length}
              categories={categoriesState
                ?.filter(
                  (data: {
                    id: number;
                    img: string;
                    title: string;
                    thumbnail: string;
                    authorName: string;
                    commentIds: string[] | number[];
                    status: string;
                    date: number;
                    active: string;
                  }) => {
                    return data.id === el.categoryIds;
                  }
                )
                .map(
                  (el: {
                    status: string;
                    date: number;
                    colorProps: string;
                    name: string;
                  }) => el.name
                )}
              status={el.status}
              date={el.date}
              colorProps={
                el.status === trashed
                  ? classes.dashboardPostStatusTrashed
                  : el.status === pending
                  ? classes.dashboardPostStatusCont
                  : classes.dashboardPostStatusContActive
              }
              active={true}
            />
          );
        })}
      </div>
      <div className={classes.pagination}>
        <DataPagination
          changePage={changePage}
          page={fullPostsPage}
          count={pageNumbers}
        />
      </div>
    </div>
  );
};

export default AllPosts;
