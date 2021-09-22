import React from 'react';

import {
    InfoSubText,
} from './subMiddleChildren/indexSubMiddle';

const SubMiddleText = () => {

    interface subTextBottom {
        subTextBottom1: string;
    };

    const instructionTextBottom: subTextBottom = {

        subTextBottom1: `What can we do better?`,

    };

    return (

        <div className="w-full flex flex-1 flex-col items-start md:items-center">

            <InfoSubText
                instructions={instructionTextBottom.subTextBottom1}
            />

        </div>

    );

};

export default SubMiddleText;