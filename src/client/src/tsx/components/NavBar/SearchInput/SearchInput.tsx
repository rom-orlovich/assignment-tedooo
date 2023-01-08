import { Autocomplete } from "@mui/material";

import { useAppDispatch } from "../../../../redux/hooks";
import { setFilter } from "../../../../redux/slices/feedFiltersSlice";
import { postsAPI } from "../../../../redux/api/postsAPI";

import {
  handleFilterOptions,
  handleGetOptionsLabel,
  handleOptionEqualValue,
  handleRenderInput,
  handleRenderOptions,
  OnInputChangeFun,
} from "./handlers";
import { uniqueObjArr } from "../../../../helpers/functions.utilities";

function SearchInput() {
  const dispatch = useAppDispatch();
  const { data } = postsAPI.useGetPostsQuery({});
  const titlesOptions = data?.data
    ? uniqueObjArr(
        data?.data.map((post) => ({
          id: post.id,
          title: post.shopName || post.username,
        })),
        "title"
      )
    : [];

  const handleOnChangeInput: OnInputChangeFun = (e, value) => {
    dispatch(setFilter(value));
  };

  return (
    <Autocomplete
      freeSolo
      renderInput={handleRenderInput}
      renderOption={handleRenderOptions}
      filterOptions={handleFilterOptions}
      onInputChange={handleOnChangeInput}
      isOptionEqualToValue={handleOptionEqualValue}
      getOptionLabel={handleGetOptionsLabel}
      options={titlesOptions}
      className="search-input"
    />
  );
}

export default SearchInput;
