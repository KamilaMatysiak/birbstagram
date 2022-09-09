import React from 'react'
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
//import PersonIcon from '@material-ui/icons/Person';
import useStyles from './styles'
import birdie from '../../data/birdie.png';
const Navbar = () => {
    const style = useStyles();
    const user = null;

    return (
        <AppBar className={style.appBar} position="static" color="inherit">
            <div className={style.logo}>
                <img className={style.image} src={birdie} alt="Birb" width={100}/>
                <Typography className={style.heading} variant="h3">Birbstagram</Typography>    
            </div>
            <Toolbar className={style.toolbar}>
            { user ? (
                <div className={style.profile}>
                    <Avatar className={style.avatar} alt={user.result.name} src={user.result.imageUrl}>
                        {user.result.name.charAt(0)}
                    </Avatar>
                    <Typography className={style.userName} variant="h6">
                        {user.result.name}
                    </Typography>
                    <Button className={style.logout} variant="contained">
                        <ExitToAppIcon/>
                    </Button>
                </div>
            ):(
                <div>
                    <Button component={Link} to='/auth' className={style.login} variant="outlined">
                        Sign In
                    </Button>
                </div>
            )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar