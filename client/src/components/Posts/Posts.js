import React from 'react'
import Post from './Post/Post'
import { useSelector } from 'react-redux';
import { CircularProgress, Grid, Typography } from '@material-ui/core';

import useStyles from './styles'

const Posts = ({setCurrentId}) => {
  const style = useStyles()
  const {posts, isLoading } = useSelector((state) => state.posts);

  if(!posts.length && !isLoading) return (
    <div className={style.mainDiv}>
      <Typography variant='h4'>Whoops!</Typography>
      <Typography variant="body2">Couldn't find anything.</Typography>
    </div>
  );

  console.log(posts.length);
  console.log(isLoading);

  return (
    
    isLoading ? <div className={style.mainDiv}><CircularProgress className={style.spinner}/></div> : (
      <div >
        {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={12}>
            <Post post={post} setCurrentId={setCurrentId}/>
        </Grid>))}
      </div>
    )
    
  )
}

export default Posts