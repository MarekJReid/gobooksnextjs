import { ReactNode } from "react";

// types.ts
export interface Product {
  checkoutUrl: string;
  image: string;
  description: ReactNode;
  id: string;
  name: string;
  price: string;
  // Add more fields as needed
}

export interface CartItem {
  product: Product;
  quantity: number;
}

// types.ts (or wherever you keep your types)

export interface Address {
  addressLine1: string;
  locality: string;
  postalCode: string;
  country: string;
  firstName: string;
  lastName: string;
}

export interface CustomerInfo {
  idempotencyKey: string;
  givenName: string;
  familyName: string;
  emailAddress: string;
  address: Address;
  phoneNumber: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  customer: CustomerInfo;
  // Add more fields as needed
}

export interface AboutUsSectionProps {
  key?: number;
  id?: string;
  image: string;
  heading: string;
  description: string;
  align: "left" | "right";
}
