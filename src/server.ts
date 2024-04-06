import App from './app';
import { PORT } from './config';


export const app = new App(PORT);

app.listen();