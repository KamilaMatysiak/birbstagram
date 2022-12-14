import React, { useState, useEffect } from 'react'
import useStyles from './styles'
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';
import { useSelector } from 'react-redux';



const Form = ({currentId, setCurrentId}) => {
  const style = useStyles()
  const [postData, setPostData] = useState({
    title: '',
    message: '',
    tags: '',
    selectedFile: ''
  })
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));

  const post = useSelector((state) => (currentId ? state.posts.posts.find((p) => p._id === currentId) : null));

  useEffect(() => { 
    if(post) setPostData(post)
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(currentId !== 0) {
      dispatch(updatePost(currentId, {...postData, userName: user?.user?.userName}));
    } else {
      dispatch(createPost({...postData, userName: user?.user?.userName}));
    }
    clear();
  }
  const clear = () => {
    
    setPostData({
      title: '',
      message: '',
      tags: '',
      selectedFile: ''
    })
    setCurrentId(0);
  }

  if(!user){
    return(
      <Paper className={style.paper}>
        <Typography variant="h6" align="center">
          Sign In to create a post!
        </Typography>
      </Paper>
    )
  }

  return (
    <Paper className={style.paper}>
    <form className={style.form} autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? 'Updating' : 'Create'} post:</Typography>  
        <TextField className={style.textField} name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e)=> setPostData({...postData, title: e.target.value})}/>       
        <TextField className={style.textField} name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e)=> setPostData({...postData, message: e.target.value})}/>       
        <TextField className={style.textField} placeholder='ex. birb,birbstagram' name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e)=> setPostData({...postData, tags: e.target.value.split(',')})}/>
        <div className={style.fileInput}>
          <FileBase type="file" multiple={false} onDone={({base64}) => setPostData({...postData, selectedFile: base64})}/>
        </div>
        <Button type="submit" className={style.submitButton} variant="contained" size="large" fullWidth>Submit</Button>
        <Button onClick={clear} className={style.clearButton} variant="contained" size="small" fullWidth>{currentId ? 'Cancel' : 'Clear'}</Button>
    </form>
    </Paper>
  )
}

export default Form