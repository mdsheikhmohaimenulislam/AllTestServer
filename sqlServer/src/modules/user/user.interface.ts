export const role = ["user", "admin", "agent"] as const;

type Role = typeof role[number]


export interface IUser {
  name: string;
  email: string;
  password: string;
  age: number;
  is_active?: boolean;
  role?:Role
}

// export interface IUserProfile {
//   user_id, bio, address, phone, gender,role
// }
