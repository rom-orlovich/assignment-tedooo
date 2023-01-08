import {
  AutocompleteRenderInputParams,
  AutocompleteRenderOptionState,
  FilterOptionsState,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { titleFilterMatch } from "../../Feed/Feed";

interface AutoCompleteOptions {
  id: string;
  title: string;
}

type FilterOptionsFun<T> = (options: T[], state: FilterOptionsState<T>) => T[];
type OptionEqualValueFun<T> = (option: T, value: T) => boolean;
export type OnInputChangeFun = (
  event: React.SyntheticEvent,
  value: string
) => void;
type RenderOptionsFun<T> = (
  props: React.HTMLAttributes<HTMLLIElement>,
  option: T,
  state: AutocompleteRenderOptionState
) => React.ReactNode;

type RenderInputFun = (
  params: AutocompleteRenderInputParams
) => React.ReactNode;

export const handleFilterOptions: FilterOptionsFun<AutoCompleteOptions> = (
  value,
  state
) => value.filter((post) => titleFilterMatch(post.title, state.inputValue));

export const handleOptionEqualValue: OptionEqualValueFun<
  AutoCompleteOptions
> = (option, value) => option.id === value.id;
export const handleGetOptionsLabel = (option: string | AutoCompleteOptions) =>
  typeof option === "object" ? option.title : String(option);

export const handleRenderOptions: RenderOptionsFun<AutoCompleteOptions> = (
  props,
  option
) => (
  <li {...props} key={option.id}>
    {option.title}
  </li>
);
export const handleRenderInput: RenderInputFun = (params) => (
  <div ref={params.InputProps.ref}>
    <SearchIcon />
    <input type="text" {...params.inputProps} placeholder="Search" />
  </div>
);
