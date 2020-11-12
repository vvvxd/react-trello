import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { Box, Grid, Paper, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../style/main';

function Trello() {
  const classes = useStyles();

  return (
    <Container maxWidth="xl">
      <Typography variant="h5" gutterBottom className={classes.tables__text1}>
        Планы на лето
      </Typography>
      <Grid className={classes.tables__grid} container spacing={3}>
        <Grid item xs={2}>
          <Paper className={classes.tables__item}>
            <Typography variant="body1" gutterBottom>
              Планы по программированию
            </Typography>
            <Button variant="contained" className={classes.item__task}>
              <span>Default</span>
            </Button>
            <Button variant="contained" className={classes.item__task}>
              <span>Default</span>
            </Button>
            <Button className={classes.item__button} startIcon={<AddIcon />}>
              <span>Добавить еще одну карточку</span>
            </Button>
            <Box className={classes.item__form}>
              <Box className={classes.body__addinput}>
                <TextField
                className={classes.item__addinput}
                  id="outlined-multiline-static"
                  label="Введите заголовок"
                  multiline
                  rows={2}
                  variant="outlined"
                />
              </Box>
              <Box className={classes.body__addbuttons}>
                <Button variant="contained" className={classes.body__add} color='primary'>
                  Сохранить
                </Button>
                <Button variant="contained" className={classes.body__exit} color='secondary'>
                  Закрыть
                </Button>
              </Box>
            </Box>
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
  );
}

export default Trello;
