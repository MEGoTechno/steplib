import './home.css'
import { Box, Typography, useTheme } from '@mui/material'

import Section from '../../style/mui/styled/Section'
import { FlexColumn, FlexRow } from '../../style/mui/styled/Flexbox'

// import Image from '../ui/Image'
import { ScallyBtn } from '../../style/buttonsStyles'

import { Link } from 'react-router-dom'

import TextToggler from '../animations/textToggler/TextToggler'
import { lang } from '../../settings/constants/arlang'
import React from 'react'
// import TextToggler from '../animations/textToggler/TextToggler'

function Hero() {
    const theme = useTheme()

    return (
        <Section sx={{ position: " relative", minHeight: '86vh', display: 'flex', justifyContent: 'center' }}>

            <FlexRow justifyContent={'space-around'} width={'100%'} sx={{ flexDirection: 'row-reverse' }} >
                {/* content */}
                <FlexColumn
                    maxWidth={"500px"}
                    gap={'.7rem'}
                    sx={{
                        animation: 'getIntoRt 1s ease',
                        flex: 1,
                        alignItems: 'center', justifyContent: 'space-evenly'
                    }} >
                    <FlexColumn sx={{
                        position: 'relative', gap: '28px', alignItems: 'flex-end', width: '100%'
                    }}>
                        <Typography
                            variant='banner' component={'h1'}
                            sx={{ fontSize: '6rem', lineHeight: '60px', textAlign: 'left', zIndex: 1, position: 'relative', textWrap: 'nowrap' }}>

                            <span style={{ color: theme.palette.primary.main, }}> Step  </span> <span style={{ color: 'orange' }}>Library</span>
                        </Typography>

                        <Typography variant='subBanner' sx={{direction: 'rtl'}}> We are always the first step in your tep for <br /> <span style={{ color: 'orange' }}>Your Success</span></Typography>
                        <Box sx={{ marginLeft: 'auto', direction: 'rtl' }} >
                            <TextToggler words={['Medical Questions', 'Prints', 'Summaries']} />
                        </Box>
                    </FlexColumn>
                    <Box>
                        <ScallyBtn
                            // endIcon={<img style={{ width: '30px' }} alt='fernsehturm-berlin' src='./assets/beriln.svg' />}
                            component={Link} to={'/grades'}
                            sx={{
                                position: 'relative', maxWidth: '300px', width: '100%', minWidth: 'auto', my: '22px',
                                // backgroundColor: 'transparent', color: "neutral.0",
                                borderRadius: 0,
                                fontSize: '1.6rem',
                                '&:before, &:after': {
                                    content: "''",
                                    position: 'absolute',
                                    bottom: '-8px',
                                    border: '3px solid',
                                    borderTop: 'none',
                                    width: 'calc(100% + 16px)',
                                    height: '50%',
                                    borderColor: 'primary.main',
                                    transition: '.3s all ease'
                                },
                                '&:after': {
                                    top: '-8px',
                                    border: '3px solid',
                                    borderColor: 'primary.main',
                                    borderBottom: 'none',
                                },
                                '&:hover': {
                                    backgroundColor: "orange"
                                },
                                '&:hover::after': {
                                    top: 0,
                                    borderColor: 'transparent', width: '100%'
                                    // height: 'calc(100% + 16px)',
                                    // backgroundColor: "ButtonShadow"
                                },
                                '&:hover::before': {
                                    bottom: 0,
                                    borderColor: 'orange', width: '100%'
                                }

                            }}> Grades</ScallyBtn>

                        <Box display={'flex'} justifyContent={'space-around'} flexDirection={'row'} sx={{ minWidth: '250px', color: 'neutral.0' }}>
                            {lang.Socials.map((social, i) => {
                                if (social.icon) return <React.Fragment key={i}>
                                    {social.icon}
                                </React.Fragment>
                            })}
                        </Box>
                    </Box>

                </FlexColumn>

                {/* banner */}
                <FlexColumn>
                    <Box
                        component="img"
                        src="/assets/logo-white-upscaled.png"
                        alt="logo" 
                        sx={{
                            width: "100%",
                            maxWidth: {
                                sm: 450,   // tablets
                                lg: 600,   // small laptops
                            },
                            display: "block",
                            margin: "0 auto", // center image
                        }}
                    />
                </FlexColumn>
            </FlexRow>
        </Section >
    )
}

export default Hero
