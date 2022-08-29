import React from 'react'
import useStyles from './styles'

const Form = () => {
  const style = useStyles()
  return (
    <form className={style.form}>
      <h1>Add New post</h1>
      <input className={style.input} placeholder='pic'/>
      <input className={style.input} placeholder='title'/>
      <input className={style.input} placeholder='description'/>
      <button className={style.submitButton}>Upload</button>
    </form>
  )
}

export default Form