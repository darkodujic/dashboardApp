import * as React from "react";
import { Paper } from "@mui/material";
import ButtonLoginText from "../../components/Login/ButtonLoginText/ButtonLoginText";
import { useNavigate, useParams } from "react-router";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { userChangeRequest } from "../../redux/actions/usersActions/usersActions";
import {
  editUserFormContainer,
  editUserInputContainer,
  editUserRoleForm,
  editUsersHeadingTitle,
  usersEditBtn,
  usersNameText,
  useStyles,
} from "./EditUsersStyles";
import { UserValueProps } from "../../utils/interfaceTypes";
import EditUsersInputs from "../../components/Categories/AddCategoriesInputs/AddCategoriesInputs";
import { editHandleChange } from "../../utils/constants";
import GlobalTitleText from "../../components/GlobalTitleText/GlobalTitleText";

const EditUsers: React.FC = () => {
  const { id } = useParams();
  const classes = useStyles();
  const [editUserTitle, setEditUserTitle] = React.useState("");
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [editUserStatus, setEditUserStatus] = React.useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setEditUserStatus(event.target.value as string);
  };
  const [editUsername, setEditUsername] = React.useState("");
  const [userRole, setUserRole] = React.useState("");
  const handleChangeRole = (event: SelectChangeEvent) => {
    setUserRole(event.target.value as string);
  };
  const usersValue: UserValueProps = {
    name: editUserTitle,
    role: userRole,
    status: editUserStatus,
    registeredAt: new Date().getTime(),
    username: editUsername,
  };
  const editUsersSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (editUserTitle && userRole && editUsername) {
      navigate("/users");
      dispatch(userChangeRequest(id, usersValue));
    } else {
      return null;
    }
  };
  return (
    <div className={classes.editUsers}>
      <div className={classes.editUsersCont}>
        <div className={classes.usersEditHeading}>
          <GlobalTitleText
            sxProps={editUsersHeadingTitle}
            text={t("users.editUser")}
          />
        </div>

        <Paper sx={editUserInputContainer}>
          <form className={classes.editForm} onSubmit={editUsersSubmit}>
            <EditUsersInputs
              sxProps={usersNameText}
              onChange={(e) => editHandleChange(e, setEditUsername)}
              value={editUsername}
              label={t("users.username")}
              minRows={1.5}
            />
            <EditUsersInputs
              sxProps={usersNameText}
              onChange={(e) => editHandleChange(e, setEditUserTitle)}
              value={editUserTitle}
              label={t("users.name")}
              minRows={1.5}
            />
            <Box sx={editUserFormContainer}>
              <FormControl fullWidth required>
                <InputLabel id="demo-simple-select-label">
                  {t("users.status")}
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={editUserStatus}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={"Active"}>{t("users.active")}</MenuItem>
                  <MenuItem value={"Restricted"}>
                    {t("users.restricted")}
                  </MenuItem>
                  <MenuItem value={"Trashed"}>{t("users.trashed")}</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box sx={editUserRoleForm}>
              <FormControl fullWidth required>
                <InputLabel id="demo-simple-select-label">
                  {t("users.role")}
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={userRole}
                  label="Role"
                  onChange={handleChangeRole}
                >
                  <MenuItem value={"Admin"}>{t("users.admin")}</MenuItem>
                  <MenuItem value={"Moderator"}>
                    {t("users.moderator")}
                  </MenuItem>
                  <MenuItem value={"Guest"}>{t("users.guest")}</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <ButtonLoginText
              btnText={t("categories.update")}
              sxProps={usersEditBtn}
            />
          </form>
        </Paper>
      </div>
    </div>
  );
};
export default EditUsers;
