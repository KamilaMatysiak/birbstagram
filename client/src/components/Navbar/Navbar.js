import React, {useState, useEffect} from 'react'
import { AppBar, Typography, Toolbar, Avatar, Button, Menu, MenuItem, ListItemText, ListItemIcon, IconButton, Tooltip, Divider } from '@material-ui/core';
import { Link, useNavigate, useLocation  } from 'react-router-dom';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';
import useStyles from './styles'
import birdie from '../../data/birdie.png';
import { useDispatch } from 'react-redux';

const Navbar = () => {
    const style = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const openMenu = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const closeMenu = () => {
        setAnchorEl(null)
      }

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location])

    const logout = () => {
        dispatch({type: 'LOGOUT'});
        navigate('/auth');
        setAnchorEl(null);
        setUser(null);
    };

    return (
        <AppBar className={style.appBar} position="static" color="inherit">
            <div className={style.logo}>
                <Link to='/'>
                    <img className={style.image} src={birdie} alt="Birb" width={100}/>
                </Link>
                <Typography className={style.heading} variant="h3">Birbstagram</Typography>    
            </div>
            <Toolbar className={style.toolbar}>
            { user ? (
                <div className={style.profile}>
                    <Tooltip title="Account settings">
                        <IconButton
                            onClick={openMenu}
                            size="small"
                            sx={{ ml: 2 }}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >         
                            <Avatar className={style.avatar} alt={user.user.userName} src={user.user.avatar}>
                                {user.user.userName? user.user.userName.charAt(0) : "U"}
                            </Avatar>
                        </IconButton>
                    </Tooltip>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={closeMenu}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >  

                        <MenuItem className={style.profileCard}>
                            <Avatar src={user.user.avatar}/>
                            <Typography variant="h6">{user.user.userName}</Typography>
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={closeMenu}>
                            <ListItemIcon onClick={() => {}}>
                                <PersonIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Profile</ListItemText>
                        </MenuItem>

                        <MenuItem onClick={() => {logout()}}>
                            <ListItemIcon>
                                <ExitToAppIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Logout</ListItemText>
                        </MenuItem>
                    </Menu>
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