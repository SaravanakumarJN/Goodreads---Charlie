import React from 'react'
import styles from './ReadButton.module.css'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {useDispatch, useSelector} from 'react-redux'
import { communityUpdatePerformer, userUpdatePerformer } from '../../redux/userData/action'

const ReadButton = ({selectedBook}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const {id} = selectedBook
    const userData = useSelector(state => state.user.userData)
    const {private_shelf, to_read, current_reading, completed_books, name, image_url} = userData
    const dispatch = useDispatch()

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

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
      const payload1 = {
        name : name,
        image_url : image_url,
        type_of_post : "read",
        book_data : selectedBook,
        rating : "",
        review : "",
        likes : 0,
        comments : []
      }
      dispatch(communityUpdatePerformer(payload1))
      setAnchorEl(null);
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
      const payload1 = {
        name : name,
        image_url : image_url,
        type_of_post : "wantToRead",
        book_data : selectedBook,
        rating : "",
        review : "",
        likes : 0,
        comments : []
      }
      dispatch(communityUpdatePerformer(payload1))
      setAnchorEl(null);
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
      const payload1 = {
        name : name,
        image_url : image_url,
        type_of_post : "reading",
        book_data : selectedBook,
        rating : "",
        review : "",
        likes : 0,
        comments : []
      }
      dispatch(communityUpdatePerformer(payload1))
      setAnchorEl(null);
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
