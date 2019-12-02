import React from 'react';
import {createSelector} from "reselect";

 const gerUsersSuperSelector  = (state) => {
  return state.usersPage.users;
}

export const gerUser = createSelector(gerUsersSuperSelector, (users) => {
   return  users.filter(u => true);
});




export  const getPageSize  = (state) => {
  return state.usersPage.pageSize;
}
export  const getTotalUsersCount  = (state) => {
  return state.usersPage.totalUsersCount;
}
export const getCurrentPage  = (state) => {
  return state.usersPage.currentPage;
}
export const isFeatching  = (state) => {
  return state.usersPage.isFeatching;
}
export  const followingInProgress  = (state) => {
  return state.usersPage.followingInProgress;
}
