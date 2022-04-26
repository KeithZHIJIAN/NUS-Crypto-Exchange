import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Grid from '@mui/material/Grid';
import BuyTextField from './Buy/BuyTextField';
import BuyOrderTypeAndPrice from './Buy/BuyOrderTypeAndPrice';
import BuyType from './Buy/BuyType';
import BuyButton from './Buy/BuyButton';
import SellTextField from './Sell/SellTextField';
import SellOrderTypeAndPrice from './Sell/SellOrderTypeAndPrice';
import SellType from './Sell/SellType';
import SellButton from './Sell/SellButton';
import ConvertTextField from './Convert/ConvertTextField';
import ConvertType from './Convert/ConvertType';
import ConvertButton from './Convert/ConvertButton';

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
            <Tab label="Buy" value="1" />
            <Tab label="Sell" value="2" />
            <Tab label="Convert" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Grid container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={1}
          >
            <Grid item xs><BuyOrderTypeAndPrice /></Grid>
            <Grid item xs><BuyType /></Grid>
            <Grid item xs><BuyTextField /></Grid>
            <Grid item xs><BuyButton /></Grid>
          </Grid>
        </TabPanel>
        <TabPanel value="2">
          <Grid container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={1}
          >
            <Grid item xs><SellOrderTypeAndPrice /></Grid>
            <Grid item xs><SellType /></Grid>
            <Grid item xs><SellTextField /></Grid>
            <Grid item xs><SellButton /></Grid>
          </Grid>
        </TabPanel>
        <TabPanel value="3">
          <Grid container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={1}
          >
            <Grid item xs><ConvertTextField /></Grid>
            <Grid item xs><ConvertType id='from'/></Grid>
            <Grid item xs><ConvertType id='to'/></Grid>  
            <Grid item xs><ConvertButton /></Grid>
          </Grid>
        </TabPanel>
      </TabContext>
    </Box>
  );
}

export default class BuyAndSellLabTabs extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <React.Fragment>
        <LabTabsContent />
      </React.Fragment>
    )
  }
}