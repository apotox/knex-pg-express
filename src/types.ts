// The TypeScript definitions below are automatically generated.
// Do not touch them, or risk, your modifications being lost.

import { Knex } from "knex";

export enum Table {
  Users = "users",
}

export type Tables = {
  "users": Users,
};

export type Users = {
  id: number;
  username: string;
  bio: string | null;
};

