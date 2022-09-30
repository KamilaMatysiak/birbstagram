import React, { useState, useEffect } from "react";
import { Container, Grow, Grid, Paper, TextField, Button } from "@material-ui/core";
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';
import { useLocation, useNavigate } from "react-router-dom";
import ChipInput from 'material-ui-chip-input';
import { getPostsBySearch } from "../../actions/posts";

import useStyles from './styles'
import Posts from "../Posts/Posts";
import Form from "../Form/Form";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Home = () => {
    const style = useStyles();
    const query = useQuery();
    const searchQuery = query.get('searchQuery');

    const dispatch = useDispatch();   
    const navigate = useNavigate();   
    
    const [currentId, setCurrentId] = useState(0);
    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch])

    const searchPost = () => {
        if(search.trim().length > 0 || tags.length > 0) {
            dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
            navigate(`/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`)
        } else {
            dispatch(getPosts());
            navigate('/');
        }
    }

    const handleKeyPress = (e) => {
        if(e.keyCode === 13) {
            searchPost();
        }
    }

    const handleAdd = (tag) => setTags([...tags, tag]);
    const handleDelete = (tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete));

    return (
        <Grow in>
            <Container maxWidth="md" style={{marginTop: "80px"}}>
                <Grid container className={style.mainContainer} justifyContent="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={8}>
                        <Posts setCurrentId={setCurrentId}/>
                    </Grid>
                    <Grid item xs={12} sm={4} >
                        <Paper className={style.searchBar} position="static">
                            <TextField
                                name="search"
                                variant="outlined"
                                label="Search"
                                fullWidth
                                value={search}
                                onKeyPress={handleKeyPress}
                                onChange={(e) => {setSearch(e.target.value)}}
                            />

                            <ChipInput
                                style={{margin:'10px 0'}}
                                value={tags}
                                onAdd={handleAdd}
                                onDelete={handleDelete}
                                label="Search tags"
                                variant="outlined"
                                fullWidth
                            />
                            
                            <Button onClick={searchPost} className={style.searchButton} variant="contained" fullWidth>
                                Search 
                            </Button>
                            
                        </Paper>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                        
                        
                    </Grid>
                </Grid>
            </Container>
        </Grow>    
    )
}

export default Home;