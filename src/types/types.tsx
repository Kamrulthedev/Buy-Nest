export type TUser = {
  id: string,
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


export type TQueryParams = {
  name: string,
  value: boolean | React.Key
}

interface Shop {
  id: string;
  name: string;
  description: string;
  logoUrl: string;
  vendorId: string;
  createdAt: string;
  updatedAt: string;
}

export interface AddToCartPayload {
  cardId: string;
  quantity: number
  shop: Shop;
}

