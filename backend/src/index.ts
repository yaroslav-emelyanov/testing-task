import Express, { Application, Request, Response } from 'express';
import Haikunator from 'haikunator'
const cors = require('cors');

const app: Application = Express();
const haikunator = new Haikunator();

app.use(cors());

app.get('/', (req: Request, res: Response) => {
    const text: string = haikunator.haikunate();
    const id: number = Date.now();
    res.json({id, text});
});

app.listen(8089, _ => {
    console.info('Application listening on http://localhost:8089');
});