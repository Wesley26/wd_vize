import React from 'react';

interface DisplaySubText {
    instructions: string,
};

const InfoSubText = (props: DisplaySubText) => {

    return (
        <div className="flex flex-1 flex-col mb-5 px-5 sm:px-16">

            <h3 className="mt-5 pb-1 font-body text-xl font-semibold">
                {props.instructions}
            </h3>
            
        </div>
    );

};

export default InfoSubText;