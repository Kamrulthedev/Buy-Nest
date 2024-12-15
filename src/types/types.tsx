export type TUser = {
  name: string;
  email: string;
  contactNumber: string;
  needPasswordChange: boolean;
  profilePhoto: string;
  role: "ADMIN" | "VENDOR" | "CUSTOMER";
  status: "ACTIVE" | "BLOCKED" | "DELETED";
  address: string,
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
};
