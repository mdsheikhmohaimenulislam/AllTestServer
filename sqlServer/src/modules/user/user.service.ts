import { pool } from "../../db";
import type { IUser } from "./user.interface";
import bcrypt from "bcryptjs";

const createUserIntoDB = async (payload: IUser) => {
  const { name, email, password, age, role } = payload;
  // console.log(role);

  const roleValue = role ?? "user";

  const hashPassword = await bcrypt.hash(password, 10);

  const result = await pool.query(
    `
    INSERT INTO users(name,email,password,age,role) VALUES($1,$2,$3,$4,$5)
    RETURNING *
    `,
    [name, email, hashPassword, age, roleValue],
  );

  // single any return value delete don't show ui
  delete result.rows[0].password;
  // console.log(result.rows[0]);
  return result;
};

const getAllUsersIntoDB = async () => {
  const result = await pool.query(`
      SELECT * FROM users
      `);
  // console.log(result.rows);

  const removePassword = result.rows.map(({ password, ...rest }) => rest);
  // console.log(removePassword);

  return removePassword;
};

const getSingleUserIntoDB = async (id: string) => {
  const result = await pool.query(
    `
      SELECT * FROM users WHERE id=$1
      `,
    [id],
  );
  // console.log(result);

  // console.log(result.rows[0]);
  delete result.rows[0].password;
  return result;
};

// const updatedUserIntoDB = async (payload: IUser, id: string) => {
//   const { name, password, age, is_active } = payload;

//   const result = await pool.query(
//     `
//     UPDATE users SET name=COALESCE($1,name),password=COALESCE($2,password),age=COALESCE($3,age),is_active=COALESCE($4,is_active)
//     WHERE id=$5 RETURNING *
//     `,
//     [name, password, age, is_active, id],
//   );

//   return result;
// };

const userDeletedIntoDB = async (id: string) => {
  const result = await pool.query(
    `
      DELETE FROM users WHERE id=$1
      `,
    [id],
  );
  return result;
};

export const userService = {
  createUserIntoDB,
  getAllUsersIntoDB,
  getSingleUserIntoDB,
  updatedUserIntoDB,
  userDeletedIntoDB,
};
