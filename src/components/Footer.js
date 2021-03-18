import React from 'react';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import { Grid, Slider } from '@material-ui/core';
import { useDataLayerValue } from '../DataLayer';

import './Footer.css';

const Footer = () => {
    const [{ discover_weekly }, dispatch] = useDataLayerValue();

    return (
        <div className='footer'>
            <div className='footer_left'>
                <img className='footer_logo' 
                src={discover_weekly?.images[0].url} alt='song-img'/>
                <div className='footer_songInfo'>
                    <h4>Namo Namo</h4>
                    <p>Amit Trivedi</p>
                </div>
            </div>

            <div className='footer_center'>
                <ShuffleIcon className='footer_green' />
                <SkipPreviousIcon className='footer_icon' />
                <PlayCircleOutlineIcon fontSize='large' className='footer_icon' />
                <SkipNextIcon className='footer_icon' />
                <RepeatIcon className='footer_green' />
            </div>
                
            <div className='footer_right'>
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer;
