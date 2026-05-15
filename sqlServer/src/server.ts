import express, {
  type Application,
  type Request,
  type Response,
} from "express";
const app: Application = express();
const port = 3000;
import { Pool } from "pg";
import sendRespond from "./utility/sendResponse";

app.use(express.json());
// app.use(express.text())
// app.use(express.urlencoded({ extended: true }));

const pool = new Pool({
  connectionString: `postgresql://neondb_owner:npg_IUrePc9b3nXK@ep-raspy-feather-ap55ccsk-pooler.c-7.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require`,
});

const initDB = async () => {
  try {
    await pool.query(`
            CREATE TABLE IF NOT EXISTS users(
            id SERIAL PRIMARY KEY,
            name VARCHAR(20),
            email VARCHAR(20) UNIQUE NOT NULL,
            password VARCHAR(20) NOT NULL,
            is_active BOOLEAN DEFAULT true,
            age INT,
            created_at TIMESTAMP DEFAULT NOW(),
            updated_at TIMESTAMP DEFAULT NOW()
            )
            `);
  } catch (error) {
    console.log(error);
  }
};
initDB();
app.get("/", (req: Request, res: Response) => {
  // res.status(200).json({ message: "Express Server.." });
  sendRespond(res, 200, true, "User Created Successfully.");
});

app.post("/api/users", async (req: Request, res: Response) => {
  //   console.log(req.body);
  const { name, email, password, age } = req.body;

  try {
    const result = await pool.query(
      `
    INSERT INTO users(name,email,password,age) VALUES($1,$2,$3,$4)
    RETURNING *
    `,
      [name, email, password, age],
    );
    // console.log(result.rows[0]);

    sendRespond(res, 201, true, "User Created Successfully.", result.rows[0]);
  } catch (error: any) {
    sendRespond(res, 500, false, error.message, error);
  }
});

app.get("/api/users", async (req: Request, res: Response) => {
  try {
    const result = await pool.query(`
      SELECT * FROM users
      `);

    sendRespond(res, 200, true, "Users retrived Successfully..", result.rows);
  } catch (error: any) {
    sendRespond(res, 500, false, error.message, error);
  }
});

app.get("/api/users/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      `
      SELECT * FROM users WHERE id=$1
      `,
      [id],
    );
    // console.log(result.rows);

    if (result.rows.length === 0) {
      return sendRespond(res, 404, false, "User Not Found!..", {});
    }
    sendRespond(res, 200, true, "User retrived Successfully..", result.rows);
  } catch (error: any) {
    sendRespond(res, 500, false, error.message, error);
  }
});

app.put("/api/users/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, password, age, is_active } = req.body;
  // console.log({name,password,age,is_active})

  try {
    const result = await pool.query(
      `
    UPDATE users SET name=COALESCE($1,name),password=COALESCE($2,password),age=COALESCE($3,age),is_active=COALESCE($4,is_active)
    WHERE id=$5 RETURNING *
    `,
      [name, password, age, is_active, id],
    );

    if (result.rows.length === 0) {
      return sendRespond(res, 404, false, "User Not Found!..", {});
    }

    sendRespond(res, 200, true, "User updated Successfully..", result.rows[0]);
  } catch (error: any) {
    sendRespond(res, 500, false, error.message, error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
