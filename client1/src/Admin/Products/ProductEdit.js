import React from 'react';
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin';

export const ProductEdit = (props) => {
  return (
    <Edit title="Edit product" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="title" />
        <TextInput multiline source="body" />
        <DateInput label="Published" source="publishedAt" />
      </SimpleForm>
    </Edit>
  );
};
