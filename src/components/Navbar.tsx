import React from 'react'
import { Box, Typography, IconButton } from "@mui/material"

const Navbar = () => {
    return (
        <Box
            position="relative"
            overflow="hidden"
        >
            <Box
                width="100%"
                display="block"
                padding="0 10px"
                bgcolor="#001e28"
                sx={window.innerWidth < 400 ? {
                    overflowX: 'scroll',
                    overflowY: 'hidden',
                } : {}}
            >
                <Box
                    whiteSpace="nowrap"
                    overflow="hidden"
                    display="inline"
                >
                    <IconButton
                        sx={{
                            display: 'inline-block',
                            fontSize: '14px',
                            padding: '6px 10px',
                            borderRadius: '17.5px',
                            border: '1px solid #181818',
                            color: '#aaa',
                            fontWeight: '700',
                            background: 'rgb(0 0 0 / 54%)',
                            margin: '10px 5px',
                            whiteSpace: 'nowrap'

                        }}
                    >
                        <Typography>ფეხბურთი</Typography>
                    </IconButton>
                    <IconButton sx={{
                        display: 'inline-block',
                        fontSize: '14px',
                        padding: '6px 10px',
                        borderRadius: '17.5px',
                        border: '1px solid #181818',
                        color: '#aaa',
                        fontWeight: '700',
                        background: 'rgb(0 0 0 / 54%)',
                        margin: '10px 5px',
                        whiteSpace: 'nowrap'

                    }}>
                        <Typography>ჰოკეი</Typography>
                    </IconButton>
                    <IconButton sx={{
                        display: 'inline-block',
                        fontSize: '14px',
                        padding: '6px 10px',
                        borderRadius: '17.5px',
                        border: '1px solid #181818',
                        color: '#aaa',
                        fontWeight: '700',
                        background: 'rgb(0 0 0 / 54%)',
                        margin: '10px 5px',
                        whiteSpace: 'nowrap'

                    }}>
                        <Typography>კალათბრუთი</Typography>
                    </IconButton>
                    <IconButton sx={{
                        display: 'inline-block',
                        fontSize: '14px',
                        padding: '6px 10px',
                        borderRadius: '17.5px',
                        border: '1px solid #181818',
                        color: '#aaa',
                        fontWeight: '700',
                        background: 'rgb(0 0 0 / 54%)',
                        margin: '10px 5px',
                        whiteSpace: 'nowrap'

                    }}>
                        <Typography>ტენისი</Typography>
                    </IconButton>
                    <IconButton sx={{
                        display: 'inline-block',
                        fontSize: '14px',
                        padding: '6px 10px',
                        borderRadius: '17.5px',
                        border: '1px solid #181818',
                        color: '#aaa',
                        fontWeight: '700',
                        background: 'rgb(0 0 0 / 54%)',
                        margin: '10px 5px',
                        whiteSpace: 'nowrap'

                    }}>
                        <Typography>კრიკეტი</Typography>
                    </IconButton>
                </Box>
            </Box>
        </Box>
    )
}

export default Navbar