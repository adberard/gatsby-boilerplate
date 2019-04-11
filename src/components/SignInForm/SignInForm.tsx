import React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

interface RenderTextFieldProps extends Field {}

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}: any) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);

const SimpleForm = (props: InjectedFormProps) => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <Field
            name="email"
            component={renderTextField}
            type="email"
            placeholder="Email"
          />
        </div>
        <Field
          name="password"
          component={renderTextField}
          type="password"
          placeholder="Password"
        />
      </div>
      <Button color="secondary" type="submit" disabled={pristine || submitting}>
        Submit
      </Button>
    </form>
  );
};

export default reduxForm({
  form: `simple`, // a unique identifier for this form
})(SimpleForm);
