import React from 'react'
import { Box, Typography, IconButton, Icon } from "@mui/material"
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();



    return (
        <Box
            width="100vw"
            maxWidth="100%"
            marginLeft="0"
            textAlign="center"
            bgcolor="#705a5a"
        >
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                height="60%"
                padding="15px 15px 15px 18px"
                zIndex="22"
                borderBottom="1px solid #7e6868"
            >
                <Box>
                    <IconButton onClick={() => {
                        navigate("/")
                    }}>
                        <SportsSoccerIcon />
                    </IconButton>
                    <IconButton>
                        <MenuIcon />
                    </IconButton>
                </Box>
                <Box>

                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <IconButton onClick={() => {
                        navigate('/login')
                    }}>
                        <LoginIcon />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    )
}

export default Header