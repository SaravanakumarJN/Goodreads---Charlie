import React from 'react'
import styles from './ReadButton.module.css'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {useDispatch, useSelector} from 'react-redux'
import { userUpdatePerformer } from '../../redux/userData/action'
import { getUserRequestPerformer } from '../../redux/userData/action'

const ReadButton = ({selectedBook}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const {id} = selectedBook
    const userData = useSelector(state => state.user.userData)
    const {private_shelf, to_read, current_reading, completed_books} = userData
    const dispatch = useDispatch()
    const [renderer, setRenderer] = React.useState(1)

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    React.useState(() => {
      dispatch(getUserRequestPerformer(1))
    }, [renderer])

    const handleRead = () => {
      const private_shelf_update = private_shelf?.find((item) => item.id === id) ? private_shelf : [...private_shelf, selectedBook]
      const completed_books_update = completed_books?.find((item) => item.id === id ) ? completed_books : [...completed_books, {id : id}]
      const payload = {
        id : 1,
        private_shelf : private_shelf_update,
        to_read : to_read,
        current_reading : current_reading,
        completed_books : completed_books_update
      }
      dispatch(userUpdatePerformer(payload)) 
      setAnchorEl(null);
      setRenderer(prev => prev+1)
    }

    const handleWantToRead = () => {
      const private_shelf_update = private_shelf?.find((item) => item.id === id) ? private_shelf : [...private_shelf, selectedBook]
      const to_read_update = to_read?.find((item) => item.id === id) ? to_read : [...to_read, {id : id}]
      const payload = {
        id : 1,
        private_shelf : private_shelf_update,
        to_read : to_read_update,
        current_reading : current_reading,
        completed_books : completed_books,
      }
      dispatch(userUpdatePerformer(payload)) 
      setAnchorEl(null);
      setRenderer(prev => prev+1)
    }

    const handleCurrentlyReading = () => {
      const private_shelf_update = private_shelf?.find((item) => item.id === id) ? private_shelf : [...private_shelf, selectedBook]
      const current_reading_update = current_reading?.find((item) => item.id === id) ? current_reading :  [...current_reading, {id : id}]
      const payload = {
        id : 1,
        private_shelf : private_shelf_update,
        to_read : to_read,
        current_reading : current_reading_update,
        completed_books : completed_books
      }
      dispatch(userUpdatePerformer(payload)) 
      setAnchorEl(null);
      setRenderer(prev => prev+1)
    }
  
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
          {
            completed_books?.find((item) => item.id === id) 
            ? "Read"
            : current_reading?.find((item) => item.id === id)
            ? "Currently Reading"
            : "Want to read"
          }
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem 
            onClick={handleRead}
          >Read</MenuItem>
          <MenuItem 
            onClick={handleCurrentlyReading}
          >Currently Reading</MenuItem>
          <MenuItem 
            onClick={handleWantToRead}
          >Want to read</MenuItem>
        </Menu>
      </div>
    );
}

export {ReadButton}
