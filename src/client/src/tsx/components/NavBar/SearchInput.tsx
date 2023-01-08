import { Autocomplete } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useAppDispatch } from "../../../redux/hooks";
import { setFilter } from "../../../redux/slices/feedFiltersSlice";
import { postsAPI } from "../../../redux/api/postsAPI";
import { uniqueObjArr } from "../../../helpers/functions.utlities";

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
  return (
    <Autocomplete
      filterOptions={(value, state) =>
        value.filter((post) =>
          post.title.toLowerCase().startsWith(state.inputValue.toLowerCase())
        )
      }
      onInputChange={(e, value) => {
        dispatch(setFilter(value));
      }}
      id="free-solo-demo"
      isOptionEqualToValue={(option, value) => option.id === value.id}
      getOptionLabel={(option) =>
        typeof option === "object" ? option.title : String(option)
      }
      freeSolo
      options={titlesOptions}
      renderOption={(props, option) => (
        <li {...props} key={option.id}>
          {option.title}
        </li>
      )}
      className="search-input"
      renderInput={(params) => (
        <div ref={params.InputProps.ref}>
          <SearchIcon />

          <input type="text" {...params.inputProps} placeholder="Search" />
        </div>
      )}
    />
  );
}

export default SearchInput;
