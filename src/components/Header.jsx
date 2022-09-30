import React from 'react'
import { HeaderStyle } from "../styles/"
import PersonIcon from '@mui/icons-material/Person';
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from '@mui/icons-material/Forum';

const Header = () => {
  return (
    <div className="header">
        <IconButton>
            <PersonIcon className="header__icon" fontSize="large" />
        </IconButton>

        <img className="header__logo" src="/images/tinder.png" alt="" />
        <IconButton>
            <ForumIcon className="header__icon" fontSize="large" />
        </IconButton>
    </div>
  )
}

export default Header