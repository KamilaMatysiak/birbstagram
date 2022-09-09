import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    appBar: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        boxShadow: 'none',
        borderBottom: '1px solid rgba(0,0,0,0.12)',
        padding: '0',
    },

    logo: {
        display: 'flex',
        alignItems: 'center',
    },

    heading: {
        color: 'rgba(10, 10, 10, 1)',
        fontSize: '1rem',
        fontWeight: 'bold',
        paddingTop: "15px"
    },

    login: {
        color: 'rgba(255, 94, 0, 1)',
        borderColor: 'rgba(255, 94, 0, 1)',
    }
}))