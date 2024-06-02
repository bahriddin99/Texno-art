import React from "react";
import { Pagination, Stack } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

interface PropsGlobalPagination {
//   totleCuont: number;
  page: number;
  setParams: (value: number) => void;
}
const GlobalPagination = ({
//   totleCuont,
  page,
  setParams,
}: PropsGlobalPagination) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    console.log(event);
    setParams(value);
    const searchPaams = new URLSearchParams(location.search);
    searchPaams.set("page", `${value}`);
    navigate(`?${searchPaams}`);
  };
  return (
    <div>
      <Stack spacing={2}>
        <Pagination /*count={totleCuont}*/ page={page} onChange={handleChange} />
      </Stack>
    </div>
  );
};

export default GlobalPagination;
