import React from 'react';
import Container from '@material-ui/core/Container';
import { Box, Button, Grid, Paper, TextField, Typography } from '@material-ui/core';
import { useStyles } from '../style/main';

function Main() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <div className={classes.body__title}>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="user"
          className="svg-inline--fa fa-user fa-w-14"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512">
          <path
            fill="currentColor"
            d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path>
        </svg>
        <span>Персональные доски</span>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.body__paper}>
            <span className={classes.body__text}>123123</span>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.body__addpaper}>
            <Button size="large" className={classes.body__addbutton}>
              Создать доску
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.body__addpaper}>
            <Box className={classes.body__addinput}>
              <TextField id="standard-search" label="Search field" type="search" />
            </Box>
            <Box className={classes.body__addbuttons}>
              <Button variant="contained" className={classes.body__add}>Сохранить</Button>
              <Button variant="contained" className={classes.body__exit}>Закрыть</Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <div className={classes.body__title}>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="clock"
          className="svg-inline--fa fa-clock fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512">
          <path
            fill="currentColor"
            d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path>
        </svg>
        <span>Недавно просмотренное</span>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.body__paper}>
            <Typography className={classes.body__text} variant="body1" gutterBottom>
              Планы по программированию
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Main;
