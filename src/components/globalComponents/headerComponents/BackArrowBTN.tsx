import React from 'react';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const BackArrowBTN = () => {

    return (
        <div 
            className="mt-47pix mr-200pix rounded active:bg-theme-lightBlue"
            onClick={() => console.log(`BackArrowBTN component button was pressed.`)}
        >

            <ArrowBackIcon
                className="text-lg"
            />

        </div>
    );

};

export default BackArrowBTN;