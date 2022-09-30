import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({


  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: "column-reverse",
    },
  },

  searchBar: {
    padding: 20,
    borderRadius: 15,
    marginTop: 20,
    background: 'white',
  },

  searchButton: {
    background: 'rgba(255, 94, 0, 1)',
    color: 'white',
    fontSize: '1rem',
    borderRadius: '8px'
  }
}));