import React from 'react'
import { Card, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './styles';
import moment from 'moment';

const Post = ({ post }) => {
  const style = useStyles();

  return (
    <Card className={style.card}>
      <div className={style.header}>
        <div className={style.creatorBox}>
          <Typography className={style.creator} variant="body2">{post.creator}</Typography>
          <Typography className={style.time} variant="body2"> · {moment(post.createdAt).fromNow()}</Typography>
        </div>
        <Button size="small" color="secondary" onClick={() => {}}><DeleteIcon fontSize="small"/>
        </Button>
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