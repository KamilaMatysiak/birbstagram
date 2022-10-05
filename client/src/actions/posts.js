import * as api from '../api';
import { FETCH_ALL, LIKE, UPDATE, CREATE, DELETE, FETCH_BY_SEARCH, START_LOADING, END_LOADING, FETCH_POST, COMMENT } from '../constants/actionTypes';

export const getPosts = () => async (dispatch) => {
    try {
        console.log("Initiating: getPosts");
        dispatch({type: START_LOADING});

        const {data} = await api.fetchPosts();
        dispatch({type: FETCH_ALL, payload: data});

        dispatch({type: END_LOADING});
    } catch(error) {
        console.log(error);
    }
    
} 

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
    try {
        console.log("Initiating: getPostsBySearch");
        dispatch({type: START_LOADING});
        const { data: { data } } = await api.fetchPostsBySearch(searchQuery);
        dispatch({type: FETCH_BY_SEARCH, payload: data});
        dispatch({type: END_LOADING});
    } catch(error) {
        console.log(error);
    }
    
} 

export const getPost = (id) => async (dispatch) => {
    try {        
        console.log("Initiating: getPost");
        dispatch({type: START_LOADING});

        const {data} = await api.fetchPost(id);
        dispatch({type: FETCH_POST, payload: data});

        dispatch({type: END_LOADING});
    } catch(error) {
        console.log(error);
    }
    
} 

export const createPost = (post) => async (dispatch) => {
    try {
        dispatch({type: START_LOADING});
        const { data } = await api.createPost(post);
        dispatch({type: CREATE, payload: data });
        dispatch({type: END_LOADING});
    } catch(error) {
        console.log(error);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);

        dispatch({type: UPDATE, payload: data });
    } catch(error) {
        console.log(error);
    }
}

export const deletePost = (id, post) => async (dispatch) => {
    try {
        
        await api.deletePost(id, post);

        dispatch({type: DELETE, payload: id});
    } catch(error) {
        console.log(error);
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);

        dispatch({type: LIKE, payload: data });
    } catch(error) {
        console.log(error);
    }
}

export const commentPost = (value, id) => async (dispatch) => {
    try {

       const { data } = await api.commentPost(value, id);

       dispatch({type: COMMENT, payload: data});

       return data.comments;
    } catch (error) {
        console.log(error);
    }
}