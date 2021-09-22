import React from 'react';

import {
    BackArrowBTN,
    HeaderText,
} from '../../globalComponents/headerComponents/indexFormHeader';

const FormHeader = () => {

    const headerText = `Feedback` as string;

    return (

        <div className="ml-5">

            <BackArrowBTN />

            <HeaderText
                headerOne={headerText}
            />

        </div>

    );
};

export default FormHeader;