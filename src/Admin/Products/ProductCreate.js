import React from 'react';
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin';

export const ProductCreate = (props) => {
  return (
    <Create title="Create a Product" {...props}>
      <SimpleForm>
        <TextInput source="title" />
        <TextInput multiline source="body" />
        <DateInput label="Published" source="publishedAt" />
      </SimpleForm>
    </Create>
  );
};
