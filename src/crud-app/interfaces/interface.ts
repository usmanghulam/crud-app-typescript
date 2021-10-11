export interface Values  {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    index?: number
}

export interface FormikFunctions {
    setSubmitting: (val: boolean) => void;
    resetForm: () => void;
}

export interface ModesProps  {
    submitFormHandler: (values: Values, { setSubmitting, resetForm }: FormikFunctions, stat?: string) => void;
    deleteHandler: (index: number) => void;
    editHandler:(index: number) => void;
}

export interface ComponentProps  {
    submitFormHandler: (values: Values, { setSubmitting, resetForm }: FormikFunctions, stat?: string) => void;
    formValues: Values | undefined;
}

export interface UserTableProps {
    users: Values[];
    deleteHandler: (index: number) => void;
    editHandler:(index: number) => void;
}