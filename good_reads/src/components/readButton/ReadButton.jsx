import React from 'react'
import styles from './ReadButton.module.css'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const ReadButton = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div className = {styles.button}>
        <Button 
            aria-controls="simple-menu" 
            aria-haspopup="true" 
            onClick={handleClick}
            className = {styles.buttonText}
        >
          Want to Read
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Read</MenuItem>
          <MenuItem onClick={handleClose}>Currently Reading</MenuItem>
          <MenuItem onClick={handleClose}>Want to read</MenuItem>
        </Menu>
      </div>
    );
}

export {ReadButton}
