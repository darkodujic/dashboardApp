import * as React from "react";
import { useTranslation } from "react-i18next";
import { deletePost, fetchingPosts } from "../../../redux/api/api";
import {
  dashboardPostsLimit,
  trashed,
  pending,
} from "../../../utils/constants";
import { DashboardPostData } from "../../../utils/interfaceTypes";
import DashboardPosts from "../DashboardPosts";
import DashboardPostsHeadingText from "./DashboardPostsContent/DashboardPostsContent";
import { useStyles } from "./DashboardPostsContStyles";

const DashboardPostsCont: React.FC = () => {
  const classes = useStyles();
  const [dashboardPostStatus] = React.useState(trashed);
  const [dashboardPostsData, setDashboardPostsData] =
    React.useState<DashboardPostData[]>();
  const { t } = useTranslation();
  const [updatedCounter, setUpdatedCounter] = React.useState(0);
  React.useEffect(() => {
    fetchingPosts(setDashboardPostsData, dashboardPostsLimit);
  }, []);
  React.useEffect(() => {
    fetchingPosts(setDashboardPostsData, dashboardPostsLimit);
  }, [updatedCounter]);
  const deleteItemHandler = (id: number, status: string) => {
    deletePost(id, status);
    setUpdatedCounter(updatedCounter + 1);
  };
  return (
    <div>
      <div className={classes.dashboardPostsContainer}>
        <div className={classes.dashboardPostHeading}>
          <div className={classes.dashboardPostDetails}>
            <div className={classes.dashboardPostHeadingThumbnail}>
              <DashboardPostsHeadingText text={t("posts.thumbnail")} />
            </div>
            <div className={classes.dashboardPostHeadingTitle}>
              <DashboardPostsHeadingText text={t("posts.title")} />
            </div>
            <div className={classes.dashboardPostHeadingAuthor}>
              <DashboardPostsHeadingText text={t("posts.author")} />
            </div>
            <div className={classes.dashboardPostHeadingStatus}>
              <DashboardPostsHeadingText text={t("posts.status")} />
            </div>
            <div className={classes.dashboardPostHeadingDate}>
              <DashboardPostsHeadingText text={t("posts.date")} />
            </div>
            <div className={classes.dashboardPostHeadingAction}>
              <DashboardPostsHeadingText text={t("posts.option")} />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.dashboardPostsWrapper}>
        {dashboardPostsData?.map(
          (el: {
            id: number;
            title: string;
            thumbnail: string;
            authorName: string;
            status: string;
            date: number;
            img: string;
          }) => {
            return (
              <DashboardPosts
                key={el.id}
                postDeleteItem={() =>
                  deleteItemHandler(el.id, dashboardPostStatus)
                }
                postId={el.id}
                postTitle={el.title}
                postAvatarImg={el.thumbnail}
                postAuthorName={el.authorName}
                postStatus={el.status}
                postDate={el.date}
                postThumbnailImg={el.img}
                postColorProps={
                  el.status === trashed
                    ? classes.dashboardPostStatusTrashed
                    : el.status === pending
                    ? classes.dashboardPostStatusCont
                    : classes.dashboardPostStatusContActive
                }
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default DashboardPostsCont;
