import React from 'react';

import {
    FormBTN,
} from './formControlChildren/indexFormControl';

const FormControlBTNS = () => {

    interface FormControlLabels {
        backLabel: string,
        submitLabel: string,
    };

    const label: FormControlLabels = {

        backLabel: `Back`,
        submitLabel: `Submit`,

    };

    return (

        <div className="flex flex-1 flex-row px-5 sm:px-32 py-12 w-full justify-evenly items-center">

            <FormBTN 
                classNameBTN={"flex justify-center items-center bg-primary-bg border-theme-blue border-2 rounded-full h-54pix w-265pix active:bg-theme-lightBlue"}
                classNameText={"font-semibold text-2xl text-theme-blue font-body"}
                onClickFunction={() => console.log(`Back button component was pressed.`)}
                label={label.backLabel}
            />

            <div className="px-1" />

            <FormBTN 
                classNameBTN={"flex justify-center items-center bg-theme-blue border-theme-blue border-2 rounded-full h-54pix w-265pix active:bg-theme-lightBlue"}
                classNameText={"font-semibold text-2xl text-primary-bg font-body"}
                onClickFunction={() => console.log(`Submit button component was pressed.`)}
                label={label.submitLabel}
            />

        </div>

    );

};

export default FormControlBTNS;