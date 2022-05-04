import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { editPostInput } from "../../pages/EditPosts/EditPosts/EditPostsStyles";
import { EditPostProps } from "../../utils/interfaceTypes";
const EditPostInputs: React.FC<EditPostProps> = ({
  status,
  valueTitle,
  error,
  helperText,
  changeStatus,
  name,
  onChange,
}) => {
  const { t } = useTranslation();
  return (
    <>
      <TextField
        required
        sx={editPostInput}
        id="outlined-basic"
        label="Title"
        name={name}
        value={valueTitle}
        variant="outlined"
        onChange={onChange}
        error={error}
        helperText={helperText}
      />
      <FormControl sx={editPostInput} fullWidth>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          required
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={status}
          label="Status"
          onChange={changeStatus}
          defaultValue="Active"
        >
          <MenuItem value={"Pending"}>{t("posts.pending")}</MenuItem>
          <MenuItem value={"Active"}>{t("users.active")}</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default EditPostInputs;
