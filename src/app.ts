import dotenv from "dotenv"
import express, {Application, Request, Response, NextFunction} from 'express'

dotenv.config()
const app:Application = express();

app.get('/', (req:Request, res:Response) => {
    console.log(process.env);
    
    res.send('hello')
});

app.listen(3050, () => console.log(`server running at http://localhost:${3050}`))