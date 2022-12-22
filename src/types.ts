// The TypeScript definitions below are automatically generated.
// Do not touch them, or risk, your modifications being lost.

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

