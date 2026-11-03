export interface ProductSpec {
  label: string;
  val: string;
}

export interface Product {
  id: string;
  name: string;
  category: "Chalk Boards" | "Whiteboards" | "Bulletin Boards" | "Interactive Digital" | "Furniture (Upcoming)";
  image: string;
  shortDesc: string;
  fullDesc: string;
  specs: ProductSpec[];
  applications: string[];
}

export interface QuotationItem {
  id: string;
  name: string;
  category: string;
  image: string;
  quantity: number;
  customSpecs: string;
}

export interface CustomerDetails {
  name: string;
  organization: string;
  email: string;
  phone: string;
  city: string;
  notes: string;
}
