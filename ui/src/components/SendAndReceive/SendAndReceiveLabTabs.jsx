import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Grid from '@mui/material/Grid';
import SendTextField from './Send/SendTextField';
import SendAll from './Send/SendAll';
import SendType from './Send/SendType';
import ToMessage from './Send/ToMessage';
import Note from './Send/Note';
import SendButton from './Send/SendButton';

function LabTabsContent(props) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Send" value="1" />
            <Tab label="Receive" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Grid container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={1}
          >
            <Grid item xs><SendTextField /></Grid>
            <Grid item xs><SendAll /></Grid>
            <Grid item xs><SendType /></Grid>
            <Grid item xs><ToMessage /></Grid>
            <Grid item xs><Note /></Grid>
            <Grid item xs><SendButton update={props.update} /></Grid>
          </Grid>
        </TabPanel>
        <TabPanel value="2">
          <Grid container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={1}
          >
            <Grid item xs><SendTextField /></Grid>
            <Grid item xs><SendType /></Grid>
            <Grid item xs><SendButton update={props.update} /></Grid>
          </Grid>
        </TabPanel>
      </TabContext>
    </Box>
  );
}

export default class SendAndReceiveLabTabs extends React.Component {
  constructor() {
    super();
    this.state = {money : 100};
    this.update = this.update.bind(this);
  }

  update() {
    const modification = document.getElementById('outlined-adornment-amount').value
    this.setState({money : this.state.money - modification}, () => {alert(this.state.money);} )
  }

  render() {
    return (
      <React.Fragment>
        <LabTabsContent update={this.update}/>
      </React.Fragment>
    )
  }
}