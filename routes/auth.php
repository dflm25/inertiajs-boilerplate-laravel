<?php

use Illuminate\Support\Facades\Route;

Route::get('login', ['as' => 'login', 'uses' => 'Auth\LoginController@showLoginForm']);
Route::get('register', ['as' => 'register', 'uses' => 'Auth\RegisterController@showRegistrationForm']);
Route::get('password/reset', ['as' => 'password.request', 'uses' => 'Auth\ForgotPasswordController@showLinkRequestForm']);
Route::get('password/reset/{token}', ['as' => 'password.reset', 'uses' => 'Auth\ResetPasswordController@showResetForm']);

Route::middleware(['web'])->group(function () {
  // Route::get('logout', ['as' => 'login', 'uses' => 'Auth\LoginController@logout']);
});

Auth::routes();