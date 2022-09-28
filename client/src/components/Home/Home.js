import React, { useState, useEffect } from "react";
import { Container, Grow, Grid, Paper, AppBar, TextField, Button } from "@material-ui/core";
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';
import { useLocation, useNavigate } from "react-router-dom";
import ChipInput from 'material-ui-chip-input';

import useStyles from './styles'
import Posts from "../Posts/Posts";
import Form from "../Form/Form";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Home = () => {
    const style = useStyles();
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(0);
    const navigate = useNavigate();
    const query = useQuery();
    const searchQuery = query.get('searchQuery');

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch])


    return (
        <Grow in>
            <Container maxWidth="md" style={{marginTop: "80px"}}>
                <Grid container className={style.mainContainer} justifyContent="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={6} md={9}>
                        <Posts setCurrentId={setCurrentId}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <AppBar className={style.searchBar} position="static" color="inherit">
                            <TextField
                                name="search"
                                variant="outlined"
                                label="Search"
                                fullWidth
                                value="test"
                                onChange={() => {}}
                            />
                        </AppBar>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>    
    )
}

export default Home;