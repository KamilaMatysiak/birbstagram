import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    marginTop: "20px",
    borderRadius: "15px"
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
    display: 'flex',
    flexWrap: 'wrap'
  },
  buttonSubmit: {
    marginBottom: 10,
  },


  /*my css*/

  textField: {
    margin: "5px 0"
  },

  submitButton: {
    margin: '10px 0',
    background: 'rgba(255, 94, 0, 1)',
    color: 'white',
    fontSize: '1rem',
    borderRadius: '8px'
  },

  clearButton: {
    background: 'none',
    color: '#555',
    boxShadow: 'none'
  }

}));