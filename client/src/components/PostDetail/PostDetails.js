import React, {useEffect, useState} from 'react';
import { Paper, Typography, CircularProgress, Divider, CardMedia, TextField, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useNavigate } from 'react-router-dom';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { getPost, getPostsBySearch } from '../../actions/posts';

import CommentSection from './CommentSection';
import useStyles from './styles';

const PostDetails = () => {
  const style = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {id} = useParams();
  const {post, posts, isLoading} = useSelector((state) => state.posts);


  useEffect(() => {
    console.log("Dispatching: getPost");
    dispatch(getPost(id));
  }, [id]);

  useEffect(() => {
    if(post) {
      console.log("Dispatching: getPostsBySearch");
      dispatch(getPostsBySearch({search: 'none', tags: post.data?.tags.join(',')}));  
    }
  }, [post])

  if(!post) return null;

  if(isLoading){ 
    return(
      <div className={style.mainDiv}><CircularProgress size="3em" className={style.spinner}/></div>
  )}

  const recommendedPosts = posts.filter(({_id}) => _id !== post.data._id);
  const openPost = (id) => navigate(`/details/${id}`);

  return (
    <div>
    <Paper className={style.container}>
      <div className={style.image}>
        <CardMedia className={style.img} image={post.data.selectedFile} title={post.data.title}/>
      </div>
      <div className={style.info}>
        <div className={style.creatorBox}>
          <Typography className={style.creator} variant="body2">{post.data.userName}</Typography>
          <Typography className={style.time} variant="body2"> · {moment(post.data.createdAt).fromNow()}</Typography>
        </div>
        <Divider/>
        <div className={style.details}>
          <Typography className={style.title} variant="body2" gutterBottom>{post.data.title}</Typography>
          <Typography className={style.desc} variant="body2" gutterBottom>{post.data.message}</Typography>
          <div className={style.tags}>
            <Typography variant="body2">{post.data.tags.map((tag) => `#${tag} `)}</Typography>
          </div>
        </div>
        <Divider/>
        <div className={style.commentSection}>
          <CommentSection post={post}/>
        </div>
      

      
</div>

    </Paper>
    <Paper className={style.noMarginTop}>
      {recommendedPosts.length && (
        <div className={style.recommendedPosts}>
          <Typography gutterBottom variant="h5"> Recommended Posts: </Typography>
          <Divider/>
          <Grid container spacing={4}> 
            {recommendedPosts.map(({ _id, title, selectedFile, likes}) => (
              <div className={style.recommendedPost} key={_id} onClick={() => openPost(_id)}>
                <CardMedia className={style.recommendedImg} image={selectedFile} title={title}/>
                <div className={style.likesOverlay}>
                  <Typography 
                    className={style.likesLabel}>
                      <FavoriteIcon size="sm" />&nbsp;{likes.length}
                  </Typography>
                </div>
              </div>
            ))}
          </Grid>
        </div>
      )}
    </Paper>
    </div>
  )
}

export default PostDetails