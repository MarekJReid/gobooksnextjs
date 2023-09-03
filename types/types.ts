import { ReactNode } from "react";

// types.ts
export interface Product {
  slug(arg0: any, slug: any): any;
  channels?: any; // The type is 'any' because it's set as 'undefined' and the exact type isn't specified.
  checkoutUrl: string;
  content?: ContentSection[];
  description: string;
  ecomImageUris: string[];
  ecomUri: string;
  id: string;
  image: string;
  isTaxable?: any; // Same reason as 'channels', the type is set as 'any'.
  name: string;
  price: string;
  taxIds?: any; // Same reason as 'channels', the type is set as 'any'.
}

interface ContentSection {
  heading: string;
  subtopics: string[];
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
  index?: number;
  id?: string;
  image: string;
  heading: string;
  description: string;
  align: "left" | "right";
}
