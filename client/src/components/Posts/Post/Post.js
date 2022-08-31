import React, { useState } from 'react'
import { Card, CardContent, CardMedia, Button, Typography, Menu, MenuItem, ListItemText, ListItemIcon, MenuList } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './styles';
import moment from 'moment';

const Post = ({ post }) => {
  const style = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Card className={style.card}>
      <div className={style.header}>
        <div className={style.creatorBox}>
          <Typography className={style.creator} variant="body2">{post.creator}</Typography>
          <Typography className={style.time} variant="body2"> · {moment(post.createdAt).fromNow()}</Typography>
        </div>
        <div>

          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <MoreHorizIcon size='small'/>
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >  
            <MenuItem onClick={handleClose}>
              <ListItemIcon onClick={() => {}}>
                <EditIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Edit</ListItemText>
            </MenuItem>

            <MenuItem onClick={handleClose}>
              <ListItemIcon onClick={() => {}}>
                <DeleteIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Delete</ListItemText>
            </MenuItem>
          </Menu>
        </div>
        
      </div>
      
      <CardMedia className={style.img} image={post.selectedFile} title={post.title}/>

      <div className={style.likeButton}>
        <Button size="small" color="secondary" onClick={() => {}}>
          <FavoriteBorderIcon fontSize="small" style={{marginRight: '10px'}}/>
          {post.likeCount}
        </Button>
      </div>

      <CardContent>
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