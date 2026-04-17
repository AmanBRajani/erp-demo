import { DataSource } from "typeorm";
import dotenv from "dotenv";

dotenv.config();

const isDocker = process.env.RUNNING_IN_DOCKER === "true";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: isDocker ? "db" : "localhost",
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: false,
  entities: [__dirname + "/../modules/**/entity/*.{ts,js}"],
  migrations: [__dirname + "/../migrations/*.{ts,js}"],
});