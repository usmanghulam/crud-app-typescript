import React from 'react';
import * as Yup from 'yup';
import { Formik, FormikProps } from 'formik';
import { Form, FormGroup, Label, Row, Col, Input, Button } from 'reactstrap';
import { Values, ComponentProps } from '../interfaces/interface';

const UserForm = ({ submitFormHandler, formValues }: ComponentProps) => {
	return (
		<div>
			<Formik
			initialValues={{
				firstName: formValues?.firstName || "",
				lastName: formValues?.lastName || "",
				email: formValues?.email || "",
				phone: formValues?.phone || "",
			}}
			validate={(values: Values) => {
				const errors: Values | any = {};
				const schemaRules = {
					firstName: Yup.string().required("First Name is Required"),
					lastName: Yup.string().required("Last Name is Required"),
					email: Yup.string().email().required("Email is Required"),
					phone: Yup.string().required("Phone Number is Required"),
				}
				const schema = Yup.object().shape(schemaRules);
				try {
					schema.validateSync(values, { abortEarly: false });
				} catch (error: any) {
					error.inner.forEach((err: any) => { errors[err.path] = err.message });
				}
				return errors;
			}}
			onSubmit={(values, { setSubmitting, resetForm }) => {
				submitFormHandler(values, { setSubmitting, resetForm }, (formValues === undefined) ? "submit" : "edit" );
			}}
			>
				{({ values, errors, isSubmitting, touched, submitForm, handleChange, handleBlur, handleSubmit }: FormikProps<Values>) => (<>
					<Form onSubmit={handleSubmit} >
					<Row className="">
						<Col sm={10} lg={{ size: 10, offset: 2 }}>
							<FormGroup>
								<Label for="name" sm={2}>First Name</Label>
								<Col sm={10}>
									<Input 
									type="text"
									name="firstName"
									id="firstName"
									value={values.firstName}
									onChange={handleChange}
									onBlur={handleBlur}
									placeholder="Enter your First Name" />
								</Col>
								{errors?.firstName && touched?.firstName&& <div className="errors">{errors.firstName}</div>}
							</FormGroup>
							<FormGroup>
								<Label for="name" sm={2}>Last Name</Label>
								<Col sm={10}>
									<Input 
									type="text"
									name="lastName"
									id="lastName"
									value={values.lastName}
									onChange={handleChange}
									onBlur={handleBlur}
									placeholder="Enter your Last Name" />
								</Col>
								{errors?.lastName && touched?.lastName&& <div className="errors">{errors.lastName}</div>}
							</FormGroup>
							<FormGroup>
								<Label for="name" sm={2}>Email</Label>
								<Col sm={10}>
									<Input 
									type="text"
									name="email"
									id="email"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.email}
									placeholder="Enter your Email Address"/>
								</Col>
								{errors?.email && touched?.email&& <div className="errors">{errors.email}</div>}
							</FormGroup>
							<FormGroup>
								<Label for="name" sm={2}>Phone No</Label>
								<Col sm={10}>
									<Input 
									type="tel"
									name="phone"
									id="phone"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.phone}
									placeholder="Enter your Phone Number"/>
								</Col>
								{errors?.phone && touched?.phone&& <div className="errors">{errors.phone}</div>}
							</FormGroup>
							<FormGroup>
								<Col sm={10}>
									<Button type='submit'>Submit</Button>
								</Col>
							</FormGroup>
						</Col>
					</Row>
					</Form>			
				</>)}
			</Formik>
		</div>
	);
};

export default UserForm;