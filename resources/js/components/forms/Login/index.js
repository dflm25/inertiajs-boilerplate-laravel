/**
 * 
 */
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

// Helpers
import { renderError } from '../../../helpers';

// Validation
import schema from './validation';

function LoginForm ({ submitForm, errorsServer }) {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => submitForm(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input 
          className="form-control form-control-rounded position-relative"
          type="email"
          name="email"
          ref={register}
        />
        {renderError(errors.email ? errors.email.message : errorsServer.email)}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          className="form-control form-control-rounded"
          type="password"
          name="password"
          ref={register}
        />
        {renderError(errors.password ? errors.password.message : errorsServer.password)}
      </div>
      <button className="btn btn-rounded btn-primary btn-block mt-2" type="submit">
        Sign In
      </button>
    </form>
  );
}

export default LoginForm;