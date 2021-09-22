import React from 'react';

interface DisplayText {
    instructions1: string,
    instructions2: string,
};

const InfoText = (props: DisplayText) => {

    return (
        <div className="flex flex-1 flex-col mb-5 px-5 sm:px-16">

            <h3 className="mt-5 pb-1 font-body text-xl font-semibold">
                {props.instructions1}
            </h3>

            <h3 className="font-body text-xl font-semibold">
                {props.instructions2}
            </h3>
            
        </div>
    );

};

export default InfoText;