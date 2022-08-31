import React from 'react'
import { useSelector } from 'react-redux';
import useStyles from './styles'

const Post = () => {

  const posts = useSelector((state) => state.posts);
  const style = useStyles();

  console.log(posts);

  return (
    <div className={style.card}>
        <h1 className={style.creator}>Creator</h1>
        <img className={style.img} alt="" style={{background: 'black'}} />
        <p className={style.title}>Title</p>
        <p className={style.details}>Desrp</p>
    </div>
  )
}

export default Post