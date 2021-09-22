import React from 'react';

interface DisplayTextHead {
    headerOne: string;
};

const HeaderText = (props: DisplayTextHead) => {

    return (
        <div className="mr-82pix flex flex-1 items-start">

            <h1 className="mt-10pix font-semibold text-4xl">
                {props.headerOne}
            </h1>
            
        </div>
    );

};

export default HeaderText;