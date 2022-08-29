import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },


  /*my css*/
  submitButton: {
    width: '250px',
    padding: '15px 10px',
    border: 'none',
    margin: '10px',
    background: 'rgba(199, 70, 0, 1)',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1rem',
    borderRadius: '8px'
  },

  input: {
    width: '249px',
    padding: '15px 10px',
    border: '1px solid rgba(0, 0, 0, 0.2)',
    margin: '10px',
    background: 'rgba(0, 0, 0, 0.02)',
    fontSize: '1rem',
    borderRadius: '8px'
  },

}));