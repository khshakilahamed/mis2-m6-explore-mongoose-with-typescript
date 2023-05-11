import express, { Application } from 'express';
// const express = require('express');
const app: Application = express();
import cors from 'cors';
import { Schema, Model, model } from 'mongoose';

// Application routes
import userRoutes from './src/app/modules/user/user.route';

// using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// app.get('/api/v1/user', userRoutes);
app.use('/api/v1/user', userRoutes);

export default app;