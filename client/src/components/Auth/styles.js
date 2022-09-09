import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  paper: {
    marginTop:100,
    padding: 15,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },

  form: {
    width: '100%',
    paddingTop: 20
  },

  avatar: {
    margin: 10,
    background: 'rgba(255, 94, 0, 0.5)',
  },

  submit: {
    marginTop: 20,
    background: 'rgba(255, 94, 0, 1)',
    padding: 10,
  },

  switchButton: {
    color: '#555',
    margin: 10
  },
}));