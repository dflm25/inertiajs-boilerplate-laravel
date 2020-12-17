/**
 * 
 */
import React, { Component } from "react";
import LoginForm from '../../../components/forms/Login';
import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/inertia-react';


function Login() {
  const { errors } = usePage().props
  const submitForm = async (data) => {
    Inertia.post('/login', data);
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
              <h1 className="mb-3 text-18">Sign In</h1>
              <LoginForm 
                submitForm={submitForm}
                errorsServer={errors}
              />
              <div className="mt-3 text-center">
                <a to="/session/forgot-password" className="text-muted">
                  <u>Forgot Password?</u>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Login;