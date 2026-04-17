import { Pool } from "pg";

const isDocker =
  process.env.DB_HOST === "db" &&
  process.env.RUNNING_IN_DOCKER === "true";

const pool = new Pool({
  host: isDocker ? "db" : "localhost",
  port: Number(process.env.DB_PORT) || 5432,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export default pool;