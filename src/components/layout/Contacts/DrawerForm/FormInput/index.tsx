import React, {KeyboardEventHandler, useState} from 'react';
import {FormFeedback, FormGroup, Input, Label} from "reactstrap";

interface FormInputProps {
    label: string;
    value: string;
    name: string;
    onChange: () => void;
    validators: {
        minLength?: number,
        maxLength?: number,
        number?: boolean,
        email?: boolean
    }
}

const FormInput = ({label, value = '', name, onChange, validators}: any) => {
    const [touched, setTouched] = useState(false);

    const onChangeInput = (e: any) => {
        onChange(name, e.target.value)
    }

    return (
        <FormGroup>
            <Label for={`${name}Id`}>
                {label}
            </Label>
            <Input
                onFocus={() => setTouched(true)}
                valid={value.length > 0}
                invalid={touched && value.length === 0}
                value={value}
                id={`${name}Id`}
                name={label.toLowerCase()}
                onChange={onChangeInput}
            />
            <FormFeedback invalid>Not Allow Empty</FormFeedback>
        </FormGroup>
    )
};

export default FormInput;