import React from 'react';

interface SectionText {
    sectionText: string,
};

const SectionInput = (props: SectionText) => {

    return (

        <div className="px-5 sm:px-32 w-full">
            <input
                className="bg-text-bg my-2 px-5 py-2 h-64pix w-full font-body text-gray-700 rounded-20pix"
                name={props.sectionText}
                placeholder={props.sectionText}
                type="text"
            />
        </div>

    );

};

export default SectionInput;