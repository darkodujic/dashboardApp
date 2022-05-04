import { SelectChangeEvent } from "@mui/material";
export const srHashtag: string = "SR";
export const enHashtag: string = "EN";
export const apiLimit = "9";
export const timestamp = Date().toLocaleString();
export const ITEM_HEIGHT = 48;
export const dashboardPostsLimit = "5";
export const colorPurple = "purple";
export const colorBlue = "blue";
export const colorRed = "red";
export const colorGreen = "green";
export const plus = "plus";
export const minus = "minus";
export const categories = "/categories";
export const trashed = "Trashed";
export const pending = "Pending";
export const restricted = "Restricted";
export const pageNumberLimit = 9;
export const getBackAfterFilter = (
  setPage: (value: React.SetStateAction<number>) => void
) => {
  setPage(1);
};
export const storageEmail = localStorage.getItem("email");
export const storagePassword = localStorage.getItem("password");
export const allPostsHandleClick = (
  event: React.MouseEvent<HTMLElement>,
  setAnchor: React.Dispatch<React.SetStateAction<HTMLElement | null>>
) => {
  setAnchor(event.currentTarget);
};

export const handleCloseAnchor = (
  setAnchor: React.Dispatch<React.SetStateAction<HTMLElement | null>>
) => {
  setAnchor(null);
};
export const editHandleChange = (
  event: { target: { value: string } },
  setEditChange: React.Dispatch<React.SetStateAction<string>>
) => {
  setEditChange(event.target.value as string);
};

export const handleSelectChange = (
  event: SelectChangeEvent,
  setSelectValue: React.Dispatch<React.SetStateAction<string>>
) => {
  setSelectValue(event.target.value as string);
};

export const handleLogin = (email: string, password: string) => {
  localStorage.setItem(`email`, email);
  localStorage.setItem(`password`, password);
  if (localStorage.getItem("email") && localStorage.getItem("password")) {
    window.location.pathname = "/";
  }
};
export const unixTimeToDate = (date: number) => {
  const dateVal = new Date(date);
  if (dateVal)
    return new Intl.DateTimeFormat("de-DE", {
      year: "numeric",
      day: `2-digit`,
      month: "2-digit",
    }).format(dateVal);
};
