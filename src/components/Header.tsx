import React, { useState } from 'react'
import { Box, Typography, IconButton, Drawer, Divider } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import SettingsIcon from '@mui/icons-material/Settings';
import NightlightIcon from '@mui/icons-material/Nightlight';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggleDrawer = (isOpen: boolean) => (event: any) => {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }
        setIsOpen(isOpen)
    }


    return (
        <Box
            width="100vw"
            maxWidth="100%"
            marginLeft="0"
            textAlign="center"
            bgcolor="#001e28"
        >
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                height="60%"
                padding="15px 15px 15px 18px"
                zIndex="22"
                borderBottom="1px solid #001e28"

            >
                <Box display="flex" gap="0.5rem" maxWidth="100%">
                    <IconButton
                        edge="start"
                        aria-label="open drawer"
                        onClick={toggleDrawer(true)}

                        sx={{
                            mr: 2,
                            display: {
                                xs: 'block',
                                color: '#eee',

                            },
                            borderRadius: '8px',
                            boxSizing: 'border-box',
                            backgroundColor: 'rgb(0 0 0 / 54%)'

                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    {/*The outside of the drawer */}

                    <Drawer
                        anchor="left"
                        open={isOpen}
                        onClose={toggleDrawer(false)}

                    >
                        {/* Inside of the drawer */}
                        <Box sx={{
                            p: 2,
                            height: 1,
                            backgroundColor: "#1b3f4b"
                        }}>
                            <IconButton sx={{ mb: 2 }}>
                                <CloseIcon onClick={toggleDrawer(false)} />
                            </IconButton>
                            <Divider sx={{ mb: 2 }} />
                            <Box sx={{ mb: 2 }}>
                                <IconButton>
                                    <SettingsIcon />
                                    <Typography fontSize="20px" variant="h5"> Settings </Typography>
                                </IconButton>

                            </Box>
                            <Divider sx={{ mb: 2 }} />
                            <Box sx={{ mb: 2 }}>
                                <IconButton>
                                    <NightlightIcon />
                                    <Typography fontSize="20px" variant="h5"> Dark Mode </Typography>
                                </IconButton>
                            </Box>

                        </Box>

                    </Drawer>
                </Box>

                {/* The middle part */}

                <Box display="flex" width="100%" justifyContent="center" alignItems="center">
                    <IconButton onClick={() => navigate('/')}>
                        <Typography color="#eee" fontSize="23px" variant="h5">SportsLive</Typography>
                    </IconButton>
                </Box>

                {/* The right side of the header */}

                <Box display="flex" gap="0.5rem" width="100%" justifyContent="flex-end">

                    <IconButton sx={{
                        color: '#eee',
                        backgroundColor: 'rgb(0 0 0 / 54%)', borderRadius: '8px',
                        boxSizing: 'border-box',
                    }}>
                        <SearchIcon />
                    </IconButton >
                    <IconButton sx={{
                        color: '#eee', backgroundColor: 'rgb(0 0 0 / 54%)', borderRadius: '8px',
                        boxSizing: 'border-box',
                        gap: '0.1rem',
                        
                    }} onClick={() => {
                        navigate('/login')
                    }}>
                        <LoginIcon />
                        <Typography>
                            Login
                        </Typography>
                    </IconButton>
                </Box>
            </Box>
        </Box>
    )
}

export default Header