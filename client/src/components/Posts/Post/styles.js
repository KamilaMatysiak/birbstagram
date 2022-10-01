import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({

  card: {
    borderRadius: '15px',
    position: 'relative',
    border: '1px solid rgba(0,0,0,0.12)',
    margin: '20px 0'
  },

  header: {
    padding: '8px 16px 8px 16px',
    display: 'flex',
    width: '98%',
    justifyContent: 'space-between',
  },

  img: {
    width: '100%',
    height: '500px',
    padding: '0',
  },

  creatorBox: {
    display: 'flex',
    alignItems: 'center',
  },

  creator: {
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center'
  },

  time: {
    display: 'flex',
    alignItems: 'center',
    margin: "0 5px",
    color: '#666',
  },

  likeButton: {
    justifyContent: 'left',
    margin: 0,
    padding: "5px 0",
  },

  title: {
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 4,
  },

  desc: {
    color: "#666",
    marginLeft: 4,
  },

  tags: {
    color: 'rgba(255, 94, 0, 1)',
    marginLeft: 4,
  },

  cardButton: {
    width: '100%',
  }

});