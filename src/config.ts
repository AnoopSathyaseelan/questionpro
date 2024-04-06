import * as dotenv from "dotenv";
dotenv.config({ path: "./src/.env" });

export const ENABLE_ENCRYPTION: boolean = false;
export const PATH = "/api/v1";
export const PORT = process.env.PORT || 3000;

export enum ResponseStatus {
  SUCCESS = 200,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_ERROR = 500,
}

export const SERVER_IPS = {
  LOCAL: [`http://localhost:${PORT}`, `localhost:${PORT}`],
};

export const NON_ENCRYPTION_ENDPOINTS = [];

export const SMTP_DETAILS = {
  DEV: {
    FROM_ADDRESS: "",
    SMTP_HOST: "",
    SMTP_PORT: "",
    SMTP_USER: "",
    SMTP_PASSWORD: "",
    SERVICE: "",
    CC: [],
    BCC: [""],
  },
  PROD: {
    FROM_ADDRESS: "",
    SMTP_HOST: "",
    SMTP_PORT: "",
    SMTP_USER: "",
    SMTP_PASSWORD: "",
    SERVICE: "",
    CC: [],
    BCC: [""],
  },
};

export enum StatusCode {
  SUCCESS = "10000",
  FAILURE = "10001",
  RETRY = "10002",
  INVALID_ACCESS_TOKEN = "10003",
  INVALID_ENCRYPTED_INPUT = "10004",
}
