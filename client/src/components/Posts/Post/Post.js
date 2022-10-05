import React, { useState } from 'react'
import { Card, CardContent, CardMedia, Button, Typography, Menu, MenuItem, ListItemText, ListItemIcon, ButtonBase } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './styles';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { likePost, deletePost } from '../../../actions/posts';
import { useNavigate } from 'react-router-dom';

const Post = ({ post, setCurrentId }) => {
  const style = useStyles();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const [likes, setLikes] = useState(post?.likes);
  const open = Boolean(anchorEl);
  const user = JSON.parse(localStorage.getItem('profile'));
  const navigate = useNavigate();
  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const closeMenu = () => {
    setAnchorEl(null)
  }

  const userId = user?.user?.googleId || user?.user?._id
  const hasLikedPost = post.likes.find((like) => like === (userId))
  const handleLike = async () => {
    dispatch(likePost(post._id))
    if(hasLikedPost) {
      setLikes(post.likes.filter((id) => id !== userId))
    } else {
      setLikes([...post.likes, userId]);
    }
  }

  const openPost = () => navigate(`/details/${post._id}`);

  const Likes = () => {
    if(post?.likes?.length > 0) {
      return(
        likes.find((like) => like === (userId))
          ? (
            <><FavoriteIcon fontSize="small"/> &nbsp; {likes.length} {likes.length > 1 ? 'likes' : 'like'} </>
          ) : (
            <><FavoriteBorderIcon fontSize="small"/> &nbsp; {likes.length} {likes.length === 1 ? 'like' : 'likes'} </>
          )
        ) 
    }

    return(
      <><FavoriteBorderIcon fontSize="small" style={{marginRight: '10px'}}/>{post.likeCount}</>
    )
  }

  return (
    <Card className={style.card}>
        <div className={style.header}>
          <div className={style.creatorBox}>
            <Typography className={style.creator} variant="body2">{post.userName}</Typography>
            <Typography className={style.time} variant="body2"> · {moment(post.createdAt).fromNow()}</Typography>
          </div>
          {(user?.user?.googleId === post?.creator || user?.user?._id === post?.creator) && (
          <div>
              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={openMenu}
              >
                <MoreHorizIcon size='small'/>
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={closeMenu}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >  
                <MenuItem onClick={() => {setCurrentId(post._id)}}>
                  <ListItemIcon>
                    <EditIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Edit</ListItemText>
                </MenuItem>

                <MenuItem onClick={() => dispatch(deletePost(post._id))}>
                  <ListItemIcon>
                    <DeleteIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Delete</ListItemText>
                </MenuItem>
              </Menu>
          </div>
          )}
        </div>
        <ButtonBase className={style.cardButton} onClick={openPost}>
          <CardMedia className={style.img} image={post.selectedFile} title={post.title}/>
        </ButtonBase>
        <CardContent>
          <Button size="small" className={style.likeButton} color="secondary" disabled={!user?.user} onClick={handleLike}>
            <Likes/>
          </Button>
          <Typography className={style.title} variant="body2" gutterBottom>{post.title}</Typography>
          <Typography className={style.desc} variant="body2" gutterBottom>{post.message}</Typography>
          <div className={style.tags}>
            <Typography variant="body2">{post.tags.map((tag) => `#${tag} `)}</Typography>
          </div>
        </CardContent>

    </Card>
  )
}

export default Post