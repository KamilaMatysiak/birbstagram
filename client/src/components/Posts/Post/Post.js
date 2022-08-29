import React from 'react'
import useStyles from './styles'

const Post = () => {
  const style = useStyles();
  return (
    <div className={style.card}>
        <h1 className={style.creator}>Creator</h1>
        <img className={style.img} style={{background: 'black'}} />
        <p className={style.title}>Title</p>
        <p className={style.details}>Desrp</p>
    </div>
  )
}

export default Post