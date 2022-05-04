import { Pagination, PaginationItem, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { paginationSettings } from "../AllUsers/AllUsersStyles";
import { DataPaginationProps } from "../../utils/interfaceTypes";

const DataPagination: React.FC<DataPaginationProps> = ({
  changePage,
  page,
  count,
}) => {
  return (
    <Stack spacing={2}>
      <Pagination
        onChange={(event: React.ChangeEvent<unknown>, page: number) =>
          changePage(Number(page))
        }
        sx={paginationSettings}
        page={page}
        count={count}
        renderItem={(item) => (
          <PaginationItem
            components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
      />
    </Stack>
  );
};

export default DataPagination;
