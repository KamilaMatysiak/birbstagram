import React, { useState } from 'react'
import { Card, CardContent, CardMedia, Button, Typography, Menu, MenuItem, ListItemText, ListItemIcon } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './styles';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { likePost, deletePost } from '../../../actions/posts';

const Post = ({ post, setCurrentId }) => {
  const style = useStyles();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const user = JSON.parse(localStorage.getItem('profile'));
  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const closeMenu = () => {
    setAnchorEl(null)
  }

  const Likes = () => {
    if(post.likes.length > 0) {
      return(
        post.likes.find((like) => like === (user?.user?.googleId || user?.user?._id))
          ? (
            <><FavoriteIcon fontSize="small"/> &nbsp; {post.likes.length} {post.likes.length > 1 ? 'likes' : 'like'} </>
          ) : (
            <><FavoriteBorderIcon fontSize="small"/> &nbsp; {post.likes.length} {post.likes.length === 1 ? 'like' : 'likes'} </>
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
            <MenuItem onClick={closeMenu}>
              <ListItemIcon onClick={() => {setCurrentId(post._id)}}>
                <EditIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Edit</ListItemText>
            </MenuItem>

            <MenuItem onClick={closeMenu}>
              <ListItemIcon onClick={() => dispatch(deletePost(post._id))}>
                <DeleteIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Delete</ListItemText>
            </MenuItem>
          </Menu>
        </div>
        
      </div>
      
      <CardMedia className={style.img} image={post.selectedFile} title={post.title}/>

      <CardContent>
        <Button size="small" className={style.likeButton} color="secondary" disabled={!user?.user} onClick={() => dispatch(likePost(post._id))}>
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