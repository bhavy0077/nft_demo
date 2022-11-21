import React, { useState } from "react";
import { useStyles } from "./style";
import Colors from "../../colors";
import {
  Box,
  InputAdornment,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@material-ui/core";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import ContactsIcon from "@material-ui/icons/Contacts";
import InfoIcon from "@material-ui/icons/Info";
import PollIcon from "@material-ui/icons/Poll";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const classes = useStyles();
  const [drawer, setDrawer] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawer(true);
  };

  const list = () => (
    <div
      role="presentation"
      style={{ width: 280 }}
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <List style={{ paddingLeft: "5%" }}>
        {/* {["Home", "Contact", "About", "Market"].map((text, index) => (
          <ListItem button key={text} >
             <ShoppingCartIcon/>
            <ListItemText primary={text}  />
          </ListItem>
        ))} */}
        <ListItem>
          <HomeIcon />
          <ListItemText style={{ marginLeft: "5%" }}>Home</ListItemText>
        </ListItem>
        <ListItem>
          <ContactsIcon />
          <ListItemText style={{ marginLeft: "5%" }}>Contact</ListItemText>
        </ListItem>
        <ListItem>
          <InfoIcon />
          <ListItemText style={{ marginLeft: "5%" }}>About</ListItemText>
        </ListItem>
        <ListItem>
          <PollIcon />
          <ListItemText style={{ marginLeft: "5%" }}>Market</ListItemText>
        </ListItem>
      </List>
      <Divider />
      <List style={{ paddingLeft: "10%" }}>
        <Button className={classes.drawerButton}>Connect Wallet</Button>
      </List>
    </div>
  );

  return (
    <Box className={classes.headerStyle}>
      <h1 style={{ cursor: "pointer" }} onClick={() => navigate("")}>
        LOGO
      </h1>
      <Box className={classes.rightHeader}>
        <Box className={classes.headerMenu}>
          <ul className={classes.mainUl}>
            {["Home", "Contact", "About", "Market"].map((ele) => (
              <li
                className={classes.link}
                onClick={() =>
                  navigate(ele === "Home" ? "" : ele.toLowerCase())
                }
              >
                {ele}
              </li>
            ))}
          </ul>
        </Box>
        <Box className={classes.mainSearch}>
          <TextField
            placeholder="Search NFTs"
            variant="outlined"
            size="small"
            className={classes.searchInput}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Box className={classes.socialIcons}>
            <IconButton>
              <ShoppingCartIcon />
            </IconButton>

            <IconButton>
              <PersonOutlineIcon />
            </IconButton>
            <IconButton>
              <AccountBalanceWalletIcon />
            </IconButton>
          </Box>
          <Button className={classes.connectBtn}>Connect Wallet</Button>
          <Box
            className={classes.sidebarIcon}
            onClick={() => toggleDrawer(!drawer)}
          >
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon style={{ fontSize: "30px" }} />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Drawer open={drawer} anchor="right" onClose={() => setDrawer(false)}>
        {list()}
      </Drawer>
    </Box>
  );
};

export default Header;
