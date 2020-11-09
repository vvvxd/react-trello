import React from 'react';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import classnames from 'classnames';
import Container from '@material-ui/core/Container';
import { Grid, Paper } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#026AA7',
      position: 'relative',
      minHeight: '7vh',
    },
    header__button: {
      color: '#FFFFFF',
      backgroundColor: '#4E97C2',
      margin: theme.spacing(1),
      display: 'flex',
      alignItems: 'center',
    },
    button: {
      display: 'flex',
      alignItems: 'center',
      '&:hover': {
        background: '#0079bf',
      },
    },
    button__svg: {
      width: 20,
    },
    header__logo: {
      flex: '1 1 100%',
      cursor: 'pointer',
      color: '#80B4D3',
      display: 'flex',
      paddingRight: 100,
      alignItems: 'center',
      backgroundColor: '#026AA7',
      border: 'none',
      boxShadow: 'none',
      transition: 'color 0.5s ease',
      '&:hover': {
        background: '#0079bf',
        color: '#ffff',
      },
    },
    logo__svg: {
      width: 30,
    },
    logo__text: {
      fontSize: 20,
      marginLeft: 5,
    },
    body__title: {
      marginTop: 30,
      display: 'flex',
      alignItems: 'center',
      '& span': {
        color: '#42526E',
        fontSize: 20,
      },
      '& svg': {
        width: 26,
        color: '#42526E',
        marginRight: 10,
      },
    },
    body__paper: {
      marginTop: 50,
      backgroundColor: '#026AA7',
      height: 100,
      padding: 20,
    },
    body__text: {
      color: '#ffffff',
      fontSize: 17,
    },
    tables__text: {
      fontSize: 20,
      marginTop: 10,
    },
    tables__grid: {
      marginTop: 5,
    },
    tables__item: {
      backgroundColor: '#EBECF0',
      boxShadow: 'none',
      padding: 10,
      '& p': {
        margin: 0,
        marginBottom: 12,
        fontSize: 15,
        fontWeight: 500,
      },
    },
    item__task: {
      display: 'flex',
      justifyContent: 'left',
      alignItems: 'center',
      width: '100%',
      marginBottom: 12,
      backgroundColor: '#FFFFFF',
      padding: 0,
      '& :hover': {
        backgroundColor: '#EAECF0',
        border: 'none',
      },
      '& span': {
        fontWeight: 400,
        padding: '5px 20px',
      },
    },

    item__button: {
      display: 'flex',
      alignItems: 'center',

      width: '100%',
      '& span': {
        fontSize: 14,
        fontWeight: 400,
        textTransform: 'none',
      },
    },
  }),
);

function App() {
  const classes = useStyles();

  return (
    <>
      <header className={classnames(classes.header)}>
        <Button
          variant="contained"
          size="small"
          className={classnames(classes.header__button, classes.button)}
          startIcon={
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="trello"
              className={classnames('svg-inline--fa', 'fa-trello', 'fa-w-14', classes.button__svg)}
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512">
              <path
                fill="currentColor"
                d="M392.3 32H56.1C25.1 32 0 57.1 0 88c-.1 0 0-4 0 336 0 30.9 25.1 56 56 56h336.2c30.8-.2 55.7-25.2 55.7-56V88c.1-30.8-24.8-55.8-55.6-56zM197 371.3c-.2 14.7-12.1 26.6-26.9 26.6H87.4c-14.8.1-26.9-11.8-27-26.6V117.1c0-14.8 12-26.9 26.9-26.9h82.9c14.8 0 26.9 12 26.9 26.9v254.2zm193.1-112c0 14.8-12 26.9-26.9 26.9h-81c-14.8 0-26.9-12-26.9-26.9V117.2c0-14.8 12-26.9 26.8-26.9h81.1c14.8 0 26.9 12 26.9 26.9v142.1z"></path>
            </svg>
          }>
          Доски
        </Button>
        <Button
          variant="contained"
          size="small"
          className={classnames(classes.header__logo)}
          startIcon={
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="trello"
              className={classnames('svg-inline--fa', 'fa-trello', 'fa-w-14', classes.logo__svg)}
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512">
              <path
                fill="currentColor"
                d="M392.3 32H56.1C25.1 32 0 57.1 0 88c-.1 0 0-4 0 336 0 30.9 25.1 56 56 56h336.2c30.8-.2 55.7-25.2 55.7-56V88c.1-30.8-24.8-55.8-55.6-56zM197 371.3c-.2 14.7-12.1 26.6-26.9 26.6H87.4c-14.8.1-26.9-11.8-27-26.6V117.1c0-14.8 12-26.9 26.9-26.9h82.9c14.8 0 26.9 12 26.9 26.9v254.2zm193.1-112c0 14.8-12 26.9-26.9 26.9h-81c-14.8 0-26.9-12-26.9-26.9V117.2c0-14.8 12-26.9 26.8-26.9h81.1c14.8 0 26.9 12 26.9 26.9v142.1z"></path>
            </svg>
          }>
          <span className={classes.logo__text}>Trello</span>
        </Button>
      </header>
      <Container maxWidth="xl">
        <div className={classes.tables__text}>Планы на лето</div>
        <Grid className={classes.tables__grid} container spacing={3}>
          <Grid item xs={2}>
            <Paper className={classes.tables__item}>
              <p>Планы по программированию</p>
              <Button variant="contained" className={classes.item__task}>
                <span>Default</span>
              </Button>
              <Button variant="contained" className={classes.item__task}>
                <span>Default</span>
              </Button>
              <Button className={classes.item__button} startIcon={<AddIcon />}>
                <span>Добавить еще одну карточку</span>
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.tables__item}>
              <Button className={classes.item__button} startIcon={<AddIcon />}>
                <span>Добавить еще одну карточку</span>
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      {/* <Container maxWidth="lg">
        
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
              <span className={classes.body__text}>xs=3</span>
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
              <span className={classes.body__text}>xs=3</span>
            </Paper>
          </Grid>
        </Grid>
      </Container> */}
    </>
  );
}

export default App;
