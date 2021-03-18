import React from 'react';
import Header from './Header';
import { useDataLayerValue } from '../DataLayer';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow';

import './Body.css';
const Body = ({ spotify }) => {
    const [{ discover_weekly, user }, dispatch] = useDataLayerValue();

    return (
        <div className='body'>
            <Header spotify={spotify} />

            <div className='body_info'>
                <img 
                    src={discover_weekly?.images[0].url}
                    alt=''
                />
                <div className='body_infoText'>
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                    <h4>{user?.display_name}</h4>
                </div>
            </div>

            <div className='body_songs'>
                <div className='body_icons'>
                    <PlayCircleFilledIcon className='body_icon1' />
                    <FavoriteIcon fontSize='large' className='body_icon2' />
                    <MoreHorizIcon className='body_icon3' />
                </div>

                {discover_weekly?.tracks.items.map((item) => (
                        <SongRow track={item.track} />
                ))}
            </div>
        </div>
    )
}

export default Body;
