import React from 'react';

import {
    FormControlBTNS,
    FormHeader,
    SectionInput,
    SubHeaderText,
    SubMiddleText,
    TextAreaInput,
} from './feedbackChildren/indexFeedback';

import {
    NavFooter,
} from '../globalComponents/navFooterComponents/indexNavFooter';

const Feedback = () => {

    const sectionText = `Section` as string;
    const textareaText = `We're all ears!` as string;

    return (
        <div className="flex flex-1 flex-col justify-center items-center">

            <form className="flex flex-1 flex-col px-10 py-1 w-screen justify-between items-start">

                <FormHeader />

                <SubHeaderText />

                <SectionInput 
                    sectionText={sectionText}
                />

                <SubMiddleText />

                <TextAreaInput
                    textareaText={textareaText}
                />

                <FormControlBTNS />

            </form>

            <footer className="py-6 flex flex-1 w-screen justify-center items-center">

                <NavFooter />

            </footer>

        </div>
    );
};

export default Feedback;