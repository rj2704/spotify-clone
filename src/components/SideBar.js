import React from 'react';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue }  from '../DataLayer';

import './SideBar.css';
const SideBar = () => {
    const [{ playlists }, dispatch] = useDataLayerValue();
 
    return (
        <div className='sidebar'>
            <img className='sidebar_logo' 
                src='https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/567/Spotify_Logo_RGB_Green-512.png'
                alt='spotify-logo'
            />

            <SidebarOption Icon={HomeIcon} title='Home' />
            <SidebarOption Icon={SearchIcon} title='Search' />
            <SidebarOption Icon={LibraryMusicIcon} title='Your Library' />

            <br />
            <strong className='sidebar_title'>PLAYLISTS</strong>
            <hr />

            {playlists?.items?.map(playlist => (
                <SidebarOption title={playlist.name} />
            ))}
            
        </div>
    )
}

export default SideBar;
