import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#026AA7',
      position: 'relative',
      minHeight: '7vh',
      justifyContent: 'center',
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
    'MuiPaper-root': {
      backgroundColor: '#026AA7',
    },
    body__addpaper: {
      marginTop: 50,
      backgroundColor: '#F0F2F5',
      height: 140,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    body__add: {
      width: 120,
      marginRight: 20,
    },
    body__exit: {
      width: 120,
    },
    body__addbuttons: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    body__addinput: {
      marginBottom: 10,
    },
    body__addbutton: {
      width: '100%',
      height: '100%',
    },
    body__paper: {
      marginTop: 50,
      backgroundColor: '#026AA7',
      height: 100,
      padding: 20,
    },
    body__text: {
      fontSize: 17,
      color: theme.palette.common.white,
    },
    tables__text1: {
      fontSize: 20,
      marginTop: 30,
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
    item__addinput: {
      width: '100%',
      backgroundColor: '#FFFFFF',
    },
    item__form: {
      marginTop: 12,
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
