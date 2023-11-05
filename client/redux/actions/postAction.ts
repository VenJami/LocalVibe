import axios from 'axios';
import {URI} from '../URI';
import {Dispatch} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// create post
export const createPostAction =
  (
    title: string,
    image: string,
    user: Object,
    replies: Array<{title: string; image: string; user: any}>,
  ) =>
  async (dispatch: Dispatch<any>) => {
    try {
      dispatch({
        type: 'postCreateRequest',
      });

      const config = {headers: {'Content-Type': 'application/json'}};

      const {data} = await axios.post(
        `${URI}/create-post`,
        {title, image, user, replies},
        config,
      );
      dispatch({
        type: 'postCreateSuccess',
        payload: data.user,
      });
    } catch (error: any) {
      dispatch({
        type: 'postCreateFailed',
        payload: error.response.data.message,
      });
    }
  };

  // get all Posts
export const getAllPosts = () => async (dispatch: Dispatch<any>) => {
  try {
    dispatch({
      type: 'getAllPostsRequest',
    });

    const token = await AsyncStorage.getItem('token');

    const {data} = await axios.get(`${URI}/get-all-posts`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch({
      type: 'getAllPostsSuccess',
      payload: data.posts,
    });
  } catch (error: any) {
    dispatch({
      type: 'getAllPostsFailed',
      payload: error.response.data.message,
    });
  }
};

interface LikesParams {
  postId?: string | null;
  posts: any;
  user: any;
  replyId?: string | null;
  title?: string;
  singleReplyId?: string;
}