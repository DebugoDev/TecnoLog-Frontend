export type Role = "ADMIN" | "MANAGER" | "USER" | "DATA"

export type RoleWithoutData = Exclude<Role, "DATA">