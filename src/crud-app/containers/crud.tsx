import { useState } from 'react';
import { Container, Jumbotron } from 'reactstrap';
import { CreateUserButton } from '../components/create-user-btn';
import UserForm from '../components/create-user-form';
import UserTable from '../components/user-table';
import { Values, FormikFunctions, ModesProps } from '../interfaces/interface';

const Crud = () => {
  const [mode, setMode] = useState(false);
  const [formData, setFormData] = useState<Values[]>([]);
  const [formValues, setFormValues] = useState<Values>();
  const RenderModes = ({ submitFormHandler, deleteHandler, editHandler }: ModesProps) => {
    if (mode) return <UserForm {...{ submitFormHandler, formValues }} />
    else return <UserTable {...{ users: formData, deleteHandler, editHandler }} />
  }
  const submitFormHandler = (values: Values, { setSubmitting, resetForm }: FormikFunctions, stat?: string) => {
    if (stat === "edit") {
      let data: Values[] = formData.slice();
      const index: number | undefined = formValues && formValues.index;
      if (index) {
        data[index] = {...values, index};
        setFormData(data);
        setFormValues(undefined);
      }
    } else {
      setFormData([...formData, values]);
    }
    setSubmitting(false);
    setMode(false);
    resetForm();
  }
  const toggleModes = () => setMode(!mode);
  const deleteHandler = (index: number) => {
    let data: Values[] = formData.slice();
    data.splice(index, 1);
    setFormData(data);
  };
  const editHandler = (index: number) => {
    let data: Values[] = formData.slice();
    let targetVal:Values = data[index];
    const newValues = {
      ...targetVal,
      index,
    }
    setFormValues(newValues);
    setMode(true);
  }

  return <Container className="mt-3">
    <Jumbotron>
      {!mode && <CreateUserButton {...{ title: "Create Users", toggleModes }} />}
      <RenderModes {...{ submitFormHandler, deleteHandler, editHandler }} />
    </Jumbotron>
  </Container>
};

export default Crud;