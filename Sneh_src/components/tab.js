// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Tab from '@mui/material/Tab';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import { Tabs } from '@mui/material';


// export default function LabTabs(props) {
  
//  const [activeIndex,setActiveIndex]=React.useState(1);

//  const handleTabChange= (value)=> {
//     setActiveIndex(value);
// }

// const tabStyle={
//     active_tab:{
//         'color':'green'
//     },
//     default_tab:{
//         'color':'grey'
//     }
// }

// const getStyle =(isActive)=> {
//     return isActive ? tabStyle.active_tab : tabStyle.default_tab
// }

//   return (
//     <Box position={'fixed'} zIndex='10' sx={{ width: '100%', typography: 'body1' }}>
//       <TabContext value={activeIndex}>
//         <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
//           <Tabs style={{'backgroundColor':'white'}} value={value} onChange={()=>handleTabChange(value)} aria-label="lab API tabs example"  className='bg-white w-96 ml-10'>
//             {/* <Tab onClick={()=>props.onScroll('MegaEvent')} label="Mega Event" value="0"/> */}
//             <Tab color='green' style={getStyle(activeIndex === 1)} onClick={()=>props.onScroll('d1')} label="Day 1" value="1"/>
//             <Tab color='green'  style={getStyle(activeIndex === 2)} onClick={()=>props.onScroll('d2')} label="Day 2" value="2" />
//             <Tab color='green' style={getStyle(activeIndex === 3)} onClick={()=>props.onScroll('d3')} label="Day 3" value="3" />
//             {/* <Tab onClick={()=>props.onScroll('d4')} label="Day 4" value="4" /> */}
//           </Tabs>
//         </Box>
//       </TabContext>
//     </Box>
//   );
// }


import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function LabTabs(props) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box style={{backgroundColor:'transparent'}} sx={{ backgroundColor:'transparent', width: 400 }}>
      <AppBar position="static" style={{backgroundColor: 'transparent'}}>
        <Tabs
          
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        style={{ color: 'teal'}}
        TabIndicatorProps={{style: {background:'white'}}}
        >
          <Tab label="Day 1" {...a11yProps(0)} onClick={()=>props.onScroll('d1')}/>
          <Tab label="Day 2" {...a11yProps(1)} onClick={()=>props.onScroll('d2')}/>
          <Tab label="Day 3" {...a11yProps(2)} onClick={()=>props.onScroll('d3')}/>
        </Tabs>
      </AppBar>
      
    </Box>
  );
}