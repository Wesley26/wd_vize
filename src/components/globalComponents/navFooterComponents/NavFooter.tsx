import React from 'react';

import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';

const NavFooter = () => {

    return (

        <div className="flex flex-1 flex-row w-screen justify-center items-center">

            <div
                className="flex mt-47pix rounded active:bg-theme-lightBlue justify-center items-center"
                onClick={() => console.log(`HomeIcon within NavFooter component button was pressed.`)}
            >

                <HomeIcon
                    className="text-lg"
                />

            </div>

            <div className="px-10"/>

            <div
                className="mt-47pix rounded active:bg-theme-lightBlue"
                onClick={() => console.log(`SearchIcon within NavFooter component button was pressed.`)}
            >

                <SearchIcon
                    className="text-lg"
                />

            </div>

            <div className="px-10"/>

            <div
                className="mt-47pix rounded active:bg-theme-lightBlue"
                onClick={() => console.log(`PersonIcon within NavFooter component button was pressed.`)}
            >

                <PersonIcon
                    className="text-lg"
                />

            </div>

        </div>

    );

};

export default NavFooter;