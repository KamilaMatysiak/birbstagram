import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

import birdie from './data/birdie.png';
import useStyles from './styles'

const App = () => {
    const style = useStyles();
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(null);

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch])

    return (
        <Container>
            <AppBar className={style.appBar} position="static" color="inherit">
                <div className={style.logo}>
                    <img className={style.image} src={birdie} alt="Birb" width={100}/>
                    <Typography className={style.heading} variant="h3">Birbstagram</Typography>    
                </div>
                <div>Menu buttons</div>
            </AppBar>
            <Grow in>
                <Container style={{marginTop: "80px"}}>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={8}>
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>    
        </Container>
    )
}

export default App;