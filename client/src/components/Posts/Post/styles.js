import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },

  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    position: 'relative',
    border: '1px solid rgba(0,0,0,0.12)',
    margin: '20px 0'
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 20px 20px 20px',
  },
  title: {
    padding: '0 16px',
    color: 'red'
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },

/*my css*/

  img: {
    width: '100%',
    height: '500px',
    padding: '0',
  },

  creator: {
    fontWeight: 'bold',
    marginLeft: '15px',
    fontSize: '1rem',
  },

});