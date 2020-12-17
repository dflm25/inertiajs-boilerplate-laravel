/**
 * 
 */
import React, { Component } from "react";
import RegisterForm from '../../../components/forms/Register';
import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/inertia-react';
import { InertiaLink } from '@inertiajs/inertia-react';


function Register() {
  const { errors } = usePage().props
  const submitForm = async (data) => {
    Inertia.post('/register', data);
  }

  return (
    <div
      className="auth-layout-wrap"
      style={{
        backgroundImage: "url(./img/login-bg.jpg)"
      }}
    >
    <div className="auth-content">
      <div className="card o-hidden">
        <div className="row">
          <div className="col-md-12">
            <div className="p-4">
              <h1 className="auth-logo text-center mb-4">El Trocen</h1>
              <h1 className="mb-3 text-18">Registrate</h1>
              <RegisterForm 
                submitForm={submitForm}
                errorsServer={errors}
              />
              <div className="mt-3 text-center">
                <InertiaLink href="/login" className="text-muted">
                  <u>Ya tengo una cuenta</u>
                </InertiaLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Register;