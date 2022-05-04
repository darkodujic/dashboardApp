import { Stack } from "@mui/material";
interface PaginationProps {
  page: number;
  count: number;
  onChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}
const Pagination: React.FC<PaginationProps> = ({ page, count, onChange }) => {
  return (
    <Stack spacing={2}>
      <Pagination onChange={onChange} page={page} count={count} />
    </Stack>
  );
};

export default Pagination;
