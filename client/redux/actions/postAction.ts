import axios from 'axios';
import {URI} from '../URI';
import {Dispatch} from 'react';

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