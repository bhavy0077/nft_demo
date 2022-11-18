import React, { useState } from "react";
import { useStyles } from "./style";
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

const Header = () => {
  const classes = useStyles();
  const [drawer, setDrawer] = useState(false);

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
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box className={classes.headerStyle}>
      <h1>LOGO</h1>
      <Box className={classes.rightHeader}>
        <Box className={classes.headerMenu}>
          <ul className={classes.mainUl}>
            <li className={classes.link}>Home</li>
            <li className={classes.link}>Contact</li>
            <li className={classes.link}>About</li>
            <li className={classes.link}>Market</li>
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
      <Drawer open={drawer} onClose={() => setDrawer(false)}>
        {list()}
      </Drawer>
    </Box>
  );
};

export default Header;
