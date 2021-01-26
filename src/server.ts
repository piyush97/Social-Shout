import 'reflect-metadata';
import express from 'express';
import morgan from 'morgan';
import { createConnection } from 'typeorm';
import authRoutes from './routes/auth';

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (_, res) => res.send('Hello'));
app.use('/api/auth', authRoutes);
app.listen(5500, async () => {
    console.log('Server running at Port http://localhost:5500');

    try {
        await createConnection();
        console.log('Database Connected!');
    } catch (err) {
        console.log(err);
    }
});
