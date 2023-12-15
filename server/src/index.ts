import  express from 'express';
import * as genezioAdapters from "@genezio/adapters";
import { HelloWorldService} from './hello.js';
import cors from 'cors';
const app = express();
const port = 8881;

app.use(cors())
app.use(express.json());
app.post('/genezio', genezioAdapters.createExpressRouter([HelloWorldService]));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

