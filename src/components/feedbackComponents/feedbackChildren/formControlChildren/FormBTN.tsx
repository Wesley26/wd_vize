import React from 'react';

interface FormBTNStruct {
    classNameBTN: string,
    classNameText: string,
    onClickFunction: () => void,
    label: string,
};

const FormBTN = (props: FormBTNStruct) => {

    return (
        <div
            className={props.classNameBTN}
            onClick={props.onClickFunction}
        >

            <p className={props.classNameText}>
                {props.label}
            </p>

        </div>
    );
};

export default FormBTN;