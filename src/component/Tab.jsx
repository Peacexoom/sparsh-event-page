import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Mega from './Day/Mega_Eevent';
import Day1 from './Day/Day1';
import Day2 from './Day/Day2';
import Day3 from './Day/Day3';
import Day4 from './Day/Day4';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
          <TabList onChange={handleChange} aria-label="lab API tabs example"  className='bg-white w-96 ml-10'>
            <Tab label="Mega Event" value="0"/>
            <Tab label="Day 1" value="1"/>
            <Tab label="Day 2" value="2" />
            <Tab label="Day 3" value="3" />
            <Tab label="Day 4" value="4" />
          </TabList>
        </Box>

        <TabPanel value="0"> <Mega/> </TabPanel>
        <TabPanel value="1"> <Day1/> </TabPanel>
        <TabPanel value="2"><Day2/> </TabPanel>
        <TabPanel value="3"><Day3/> </TabPanel>
        <TabPanel value="4"><Day4/> </TabPanel>
      </TabContext>
    </Box>
  );
}