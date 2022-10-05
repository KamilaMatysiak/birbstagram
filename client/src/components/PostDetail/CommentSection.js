import React, {useEffect, useState} from 'react';
import {Divider, TextField, Typography} from '@material-ui/core';
import { useDispatch } from 'react-redux';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { commentPost } from '../../actions/posts';

import useStyles from './styles';


const CommentSection = ({post}) => {
  const dispatch = useDispatch();
  const style = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));

  const [comments, setComments] = useState(['love Birb', 'great Birb!' , 'omg Birbie!']);
  const [comment, setComment] = useState('');
  

  const handleKeyPress = (e) => {
    if(e.keyCode === 13) {
        const finalComment = `${user.user.userName}: ${comment}`;
        dispatch(commentPost(finalComment, post.data._id))
    }
}

  return (
    <div className={style.commentSectionDiv}>
        <div className={style.commentSection}>
          { comments.map((c,i) => (
              <div key={i} className={style.comment}>
                  <Typography variant="body2">{c}</Typography>
              </div>
          ))}
            
        </div>
        
        <Divider/>
        
        <div className={style.options}>
          <div className={style.likes}> <FavoriteBorderIcon size="sm"/> {post.data.likes.length} </div>
          {user?.user?.userName && (
          <div className={style.sendComment}> 
            <TextField 
                className={style.textField} 
                name="comment" 
                variant="outlined" 
                fullWidth 
                value={comment}
                onKeyDown={handleKeyPress}
                onChange={(e) => setComment(e.target.value)}
                placeholder='Type your comment here...'/>
          </div>)}
        </div>
    </div>
  )
}

export default CommentSection