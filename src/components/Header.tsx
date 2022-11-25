import React, { useState } from 'react'
import { Box, Typography, IconButton, Icon, Drawer, Divider } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import SettingsIcon from '@mui/icons-material/Settings';
import NightlightIcon from '@mui/icons-material/Nightlight';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
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
                <Box display="flex" gap="0.5rem" width="100%">
                    <IconButton onClick={() => {
                        navigate("/")
                    }}>
                        <SportsSoccerIcon />
                    </IconButton>
                    <IconButton
                        edge="start"
                        aria-label="open drawer"
                        onClick={toggleDrawer(true)}
                        sx={{
                            mr: 2,
                            display: {
                                xs: 'block',
                            }
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
                            backgroundColor: "#523939"
                        }}>
                            <IconButton sx={{ mb: 2 }}>
                                <CloseIcon onClick={toggleDrawer(false)} />
                            </IconButton>
                            <Divider sx={{ mb: 2 }} />
                            <Box sx={{ mb: 2 }}>
                                <IconButton>
                                    <SettingsIcon />
                                </IconButton>

                            </Box>
                            <Divider sx={{ mb: 2 }} />
                            <Box sx={{ mb: 2 }}>
                                <IconButton>
                                    <NightlightIcon />
                                </IconButton>
                            </Box>

                        </Box>

                    </Drawer>
                </Box>
                <Box display="flex" width="100%" justifyContent="flex-end">

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