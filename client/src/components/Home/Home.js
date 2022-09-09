import React, { useState, useEffect } from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';

import useStyles from './styles'
import Posts from "../Posts/Posts";
import Form from "../Form/Form";

const Home = () => {
    const style = useStyles();
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(0);

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch])


    return (
        <Grow in>
            <Container style={{marginTop: "80px"}}>
                <Grid container className={style.mainContainer} justifyContent="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={8}>
                        <Posts setCurrentId={setCurrentId}/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>    
    )
}

export default Home;