import { FETCH_UNIVERSITIES_SUCCESS } from "../../Common/ActionTypes";

export const universitiesFetched = (universities) => ({
  type: FETCH_UNIVERSITIES_SUCCESS,
  universities
});