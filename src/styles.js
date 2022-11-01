import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({

  grid: {
    '& > *': {
    marginRight: theme.spacing(0),
    marginTop: theme.spacing(-2),
    },
  },
}));