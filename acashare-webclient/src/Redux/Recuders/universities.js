import { FETCH_UNIVERSITIES_SUCCESS } from "../../Common/ActionTypes";

export const universities = (state = [], action) => {
  switch (action.type) {
    case FETCH_UNIVERSITIES_SUCCESS:
      return [...action.universities]
    default:
      return state
  }
}