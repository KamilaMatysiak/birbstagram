import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

import birdie from './data/birdie.png';
import useStyles from './styles'

const App = () => {
    const style = useStyles();

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
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <Posts/>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Form/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>    
        </Container>
    )
}

export default App;