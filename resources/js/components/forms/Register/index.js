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

function RegisterForm ({ submitForm, errorsServer }) {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => submitForm(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="name">Nombre</label>
        <input 
          className="form-control position-relative"
          type="text"
          name="name"
          ref={register}
        />
        {renderError(errors.email ? errors.email.message : errorsServer.email)}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input 
          className="form-control position-relative"
          type="email"
          name="email"
          ref={register}
        />
        {renderError(errors.email ? errors.email.message : errorsServer.email)}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          className="form-control"
          type="password"
          name="password"
          ref={register}
        />
        {renderError(errors.password ? errors.password.message : errorsServer.password)}
      </div>
      <button className="btn btn-primary btn-block mt-2" type="submit">
        Registrate
      </button>
    </form>
  );
}

export default RegisterForm;