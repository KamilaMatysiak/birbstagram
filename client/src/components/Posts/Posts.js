import React from 'react'
import Post from './Post/Post'
import { useSelector } from 'react-redux';
import { CircularProgress, Grid } from '@material-ui/core';

import useStyles from './styles'

const Posts = ({setCurrentId}) => {
  const style = useStyles()
  const posts = useSelector((state) => state.posts);
  console.log(posts)
  return (
    
    !posts.length ? <div className={style.mainDiv}><CircularProgress className={style.spinner}/></div> : (
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