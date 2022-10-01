import React, {useEffect} from 'react';
import { Paper, Typography, CircularProgress, Divider, CardMedia, TextField, Button, } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useNavigate } from 'react-router-dom';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { getPost } from '../../actions/posts';

import useStyles from './styles';

const PostDetails = () => {
  const style = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {id} = useParams();
  const {post, posts, isLoading} = useSelector((state) => state.posts);
  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

  if(!post) return null;

  if(isLoading){ 
    return(
      <div>
        <CircularProgress size="7em"/>
      </div>
  )}

  return (
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
          <div className={style.comment}>
            Cute birb!
          </div>
        </div>
        <Divider/>
        
        <div className={style.options}>
          <div className={style.likes}> <FavoriteIcon size="sm"/> {post.data.likes.length} </div>
          <div className={style.sendComment}>
            <TextField className={style.textField} name="comment" variant="outlined" fullWidth placeholder='Type your comment here...'/>
          </div>
        </div>
      </div>

    </Paper>
  )
}

export default PostDetails