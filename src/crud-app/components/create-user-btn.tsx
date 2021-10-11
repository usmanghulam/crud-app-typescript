import React from 'react';
import { Button } from 'reactstrap';

interface ButtonProps {
    title: string,
    toggleModes: () => void;
}

export const CreateUserButton = ({title, toggleModes}: ButtonProps) => {
    return <>
        <Button outline color="secondary" className="mt-5 mb-5" onClick={toggleModes} >{title}</Button> {" "}
    </>;
};