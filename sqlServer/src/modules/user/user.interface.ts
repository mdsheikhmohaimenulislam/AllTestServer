// export const role = ["user", "admin", "agent"] as const;

// export type Role = typeof role[number]

export const role = {
  admin: "admin",
  agent: "agent",
  user: "user",
} as const;

export type Role = (typeof role)[keyof typeof role];

// export interface IUser {
//   name: string;
//   email: string;
//   password: string;
//   age: number;
//   is_active?: boolean;
//   role?: Role;
// }

// export interface IUserProfile {
//   user_id, bio, address, phone, gender,role
// }
dddddd