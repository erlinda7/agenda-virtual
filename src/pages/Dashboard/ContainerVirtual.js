import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Contacts from './Contacts/Contacts';
import Profile from './Profile/Profile';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 200,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    alignItems: "left",
    justifyContent: "left"
  },
}));

export default function ContanierVirtual(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const bannerStyle = {
    marginBottom: 20,
    marginLeft: 30,
    width: 100,
    height: 100,
    //objectFit: 'contain',
  };
  const font = {
    fontSize: 14,
    textAlign:'center'
  }

  return (
    <div>

      <div className={classes.root}>
        <div className="justify-content-left  align-items-left">
          <br />
          <Tabs>
            <div>
              <img style={bannerStyle} src={props.photoUsers} alt="photo" className="rounded-circle" />
              <p style={font}>{props.nameUsers}</p>
            </div>
          </Tabs>
          <br />
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
          >
            <Tab label="Acounts" {...a11yProps(0)} />
            <Tab label="Contacts" {...a11yProps(1)} />
            <Tab label="blocked" {...a11yProps(2)} />
            <Tab label="User List" {...a11yProps(3)} />
          </Tabs>
        </div>
        <div>

          <div>
            <TabPanel value={value} index={0}>
              <Profile />
            </TabPanel>
            <TabPanel value={value} index={1}>

              <Contacts />
            </TabPanel>
            <TabPanel value={value} index={2}>
              blocked contacts
                </TabPanel>
            <TabPanel value={value} index={3}>
              List of users who have you added
                </TabPanel>
          </div>
        </div>
      </div>
    </div >
  );
}