import React from 'react';
import {connect} from 'react-redux';
import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "12f8d016-a97f-4cf1-8fa2-45fa405c14a5"
  }
});

export const usersAPI = {
  getUsers(currentPage , pageSize ) {
   return instance.get(`users?page=${currentPage}&count=${pageSize}` ) .then(response => {
          return response.data;
      })
    },
    getProfile(userId ){
      return instance.get(`profile/`+ userId).then(response => {
        return response.data;
      })
    },
    getUnFollow(userId) {
     return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    getFollow(userId) {
      return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)

    }
  }
