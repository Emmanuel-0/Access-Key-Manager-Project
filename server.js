
// server.js
import express from 'express';
// const express = require('express');
import dotenv from 'dotenv';
// const dotenve = require('dotenv');
import 'babel-polyfill';
// const { babelPolyfill } = require('babel-polyfill');
import ReflectionWithDB from './src/usingDB/controller/Reflection.js';
// const ReflectionWithDB  = require('./src/usingDB/controller/Reflection');
import UserWithDb from './src/usingDB/controller/Users.js';
// const UserWithDb  = require('./src/usingDB/controller/Users');
import Auth from './src/usingDB/middleware/Auth.js';
// const Auth = require('./src/usingDB/middleware/Auth');

dotenv.config();
const Reflection = process.env.TYPE === 'db' ? ReflectionWithDB : null;
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  return res.status(200).send({'message': 'YAY! Congratulations! Your first endpoint is working'});
});

app.post('/api/v1/reflections', Auth.verifyToken, Reflection.create);
app.get('/api/v1/reflections', Auth.verifyToken, Reflection.getAll);
app.get('/api/v1/reflections/:id', Auth.verifyToken, Reflection.getOne);
app.put('/api/v1/reflections/:id', Auth.verifyToken, Reflection.update);
app.delete('/api/v1/reflections/:id', Auth.verifyToken, Reflection.delete);
app.post('/api/v1/users', UserWithDb.create);
app.post('/api/v1/users/login',UserWithDb.login);
app.delete('/api/v1/users/me', Auth.verifyToken, UserWithDb.delete);

app.listen(3000)
console.log('app running on port ', 3000);
