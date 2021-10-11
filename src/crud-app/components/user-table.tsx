import * as React from 'react';
import { Table, Button } from 'reactstrap';
import { UserTableProps, Values } from '../interfaces/interface';

const UserTable = ({ users, deleteHandler, editHandler }: UserTableProps) => {
  const renderUsers = users.map(({firstName, lastName, email, phone}: Values, i: number) => (
    <tr key={i}>
      <th scope="row">{i + 1}</th>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td className="text-center"><Button onClick={() => deleteHandler(i)} outline color="danger">Delete</Button></td>
      <td className="text-center"><Button onClick={() => editHandler(i)} outline color="dark">Edit</Button></td>
    </tr>
  ));
	return (
    <Table bordered>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {renderUsers}
      </tbody>
    </Table>
  );
};

export default UserTable;