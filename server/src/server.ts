import 'reflect-metadata';
import express from 'express';
import morgan from 'morgan';
import { createConnection } from 'typeorm';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import authRoutes from './routes/auth';
import postsRoutes from './routes/posts';
import subRoutes from './routes/subs';
import miscRoutes from './routes/misc';

import trim from './middleware/trim';

dotenv.config();
const app = express();

app.use(
    cors({
        credentials: true,
        origin: process.env.ORIGIN!,
        optionsSuccessStatus: 200,
    }),
);
app.use(morgan('dev'));
app.use(express.json());
app.use(trim);
app.use(cookieParser());

app.get('/', (_, res) => res.send("I'm Up"));

app.use('/api/auth', authRoutes);
app.use('/api/posts', postsRoutes);
app.use('/api/subs', subRoutes);
app.use('/api/misc', miscRoutes);

app.listen(process.env.PORT, async () => {
    console.log(`Server running at  http://localhost:${process.env.PORT}`);

    try {
        await createConnection();
        console.log('Database Connected!');
    } catch (err) {
        console.log(err);
    }
});
