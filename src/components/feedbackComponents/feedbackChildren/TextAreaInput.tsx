import React from 'react';

interface TextAreaText {
    textareaText: string;
};

const TextAreaInput = (props: TextAreaText) => {

    return (

        <div className="px-5 sm:px-32 w-full">
            <textarea
                className="bg-text-bg my-2 px-6 py-5 h-280pix w-full font-body text-gray-700 rounded-20pix"
                name={props.textareaText}
                placeholder={props.textareaText}
            />
        </div>

    );

};

export default TextAreaInput;