import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import helmet from "helmet";
import routes from "./routes";

class App {
  public app: express.Application;
  public port: any;
  constructor(port: any) {
    this.app = express();
    this.port = port;
    this.initializeMiddlewares();
    this.initializeRoutes();
  }

  private initializeMiddlewares() {
    this.app.use((_, res, next) => {
      res.set("start", `${Date.now()}`);
      next();
    });

    this.app.use(express.json({ limit: "5mb" }));
    this.app.use(express.urlencoded({ extended: true }));

    this.app.use((req: Request, _: Response, next: NextFunction) => {
      console.log("request received->", req.url);
      req.headers.origin = req.headers.origin || req.headers.host;
      next();
    });

    const corsOptions: any = {
      origin: "*",
    };
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
  }

  private initializeRoutes() {
    // this.app.use("/", routes); // Assuming you have defined your routes
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}

export default App;
