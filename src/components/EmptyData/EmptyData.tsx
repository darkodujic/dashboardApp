import { useStyles } from "../../pages/FullPosts/FullPostsStyles";
import { EmptyDataProps } from "../../utils/interfaceTypes";
const EmptyData: React.FC<EmptyDataProps> = ({ text }) => {
  const classes = useStyles();
  return <p className={classes.emptyData}>{text}</p>;
};

export default EmptyData;
