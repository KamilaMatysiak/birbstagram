import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({

  container: {
    margin: 100,
    display: 'flex',
    borderRadius: 15,
  },

  image: {
    width: '65%',
    height: '100%',

  },

  img: {
    width: '100%',
    height: '600px',
    padding: '0',
    borderRadius: "15px 0 0 15px"
  },

  info: {
    paddingTop: 15,
    paddingLeft: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'space-around',
    justifyContent: 'space-around',
  },

  commentSection: {
    flex: 1,
  },

  comment: {
    background: '#efefef',
    maxWidth: "80%",
    padding: 10,
    borderRadius: "15px 15px 15px 0",
    margin: "10px 2px",
  },

  creatorBox: {
    display: 'flex',
    alignItems: 'center',
    padding: "10px 0"
  },

  creator: {
    fontWeight: 600,
    marginRight: 5
  },

  details: {
    maxWidth: "90%",
    margin: "10px 0",
  },

  title: {
    fontWeight: 'bold',
    color: '#333',
  },

  desc: {
    color: "#777",
  },

  tags: {
    color: 'rgba(255, 94, 0, 1)',
  },

  options: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: "10px 0"
  },

  likes: {
    margin: 10,
    width: '10%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  sendComment: {
    width: '80%',
    marginRight: 10
  },

});