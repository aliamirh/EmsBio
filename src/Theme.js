import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import { blue, red } from '@material-ui/core/colors';

const Theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: green
  },
  status: {
    danger: 'orange'
  }
});

export default Theme;
