import React from 'react';

import {
    InfoText,
} from './subHeaderChildren/indexSubHeader';

const SubHeaderText = () => {

    interface subTextTop {
        subTextTop1: string;
        subTextTop2: string;
        subTextTop3: string;
        subTextTop4: string;
    };

    const instructionTextTop: subTextTop = {

        subTextTop1: `We're always looking to ways`,
        subTextTop2: `to make VIZE even better!`,
        subTextTop3: `What section of VIZE do you`,
        subTextTop4: `have a suggestion for?`,
        
    };

    return (
        
        <div className="w-full flex flex-1 flex-col items-start md:items-center">

            <InfoText
                instructions1={instructionTextTop.subTextTop1}
                instructions2={instructionTextTop.subTextTop2}
            />

            <div className="py-3pix" />

            <InfoText
                instructions1={instructionTextTop.subTextTop3}
                instructions2={instructionTextTop.subTextTop4}
            />

        </div>

    );

};

export default SubHeaderText;