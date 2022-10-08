let str: string = "Hellow World";
console.log(str);

let price = 10;
price.toFixed();

let isAvailable = true;

let blog = {
  title: "typescript 教程",
  viewCount: 200,
};

blog = {
  title: "typescript 教程2",
  viewCount: 300,
};

const framework = ["Vue", "React", "Angular"];
framework[0] = "Vue 3";
framework[0];

// type Product = {
//     title: string;
//     price: number;
//     inStock?: boolean;
// }

interface Category {
  name: string;
}

type Price = number | string;
type Size = "S" | "M" | "L" | "XL";

interface Product {
  title: string;
  price?: Price;
  inStock?: boolean;
  category: Category;
  size?: Size;
}

let product: Product = {
  title: "LG Monitor",
  price: 20000,
  inStock: true,
  category: {
    name: "Computer Appliance",
  },
};

let product2: Product = {
  title: "Philips Monitor",
  price: 5999,
  inStock: true,
  category: {
    name: "Computer Appliance",
  },
};

let product3: Product = {
  title: "Apple Monitor",
  price: 12000, // CAD
  category: {
    name: "Computer Appliance",
  },
};

// add types for array
let nums: Array<number> = [1, 2, 3];
let nums2: number[] = [1, 2, 3];

let products: Product[] = [product, product2, product3];

// union types
let numericValue: number | string = 15;
numericValue = "15";

let product4: string | Product = "BenQ Monitor";

// add types for function parameters
function add(a: number, b: number) {
  return a + b;
}

add(1, 2);

function cmd(args: string | string[]): string {
  if (typeof args === "string") {
    return args;
  } else {
    return args.join(" ");
  }
}

// arrow function typescript inference
[1, 2, 3].map((x) => x * x);

// function as a parameter of another function
type RequestCallback = (result: string) => void;

function request(callback: RequestCallback) {
  callback("success");
}

request((result) => console.log(result));

interface MetaProduct {
  getPrice: () => number;
}

// function Call signiture
interface RequestCb {
  (result: string): void;
  code: string;
}

function require(cb: RequestCb) {
  cb("success");
  console.log(cb.code);
}

const callback: RequestCb = (req) => console.log(req);
callback.code = "200";

// any type
// any is not recomended
let a: any = 10;
a = "10";
a = true;

// type assertion
let _str: any = "hello";

let __str = _str as string;
let __str__ = <string>_str;

console.log(__str.toUpperCase());
console.log(__str__);

// generics
function _join<T, N, M>(arr1: T[], arr2: N[], arr3: M[]): (T | N | M)[] {
  return [...arr1, ...arr2, ...arr3];
}

const res = _join<number, string, boolean>(
  [1, 2, 3],
  ["1", "2", "3"],
  [true, false]
);

console.log(res);

// add generics to object types
interface Value<T> {
  value: T;
  description: string;
}

const stringValue: Value<string> = {
  value: "Studio Display",
  description: "A sight to be bold. ",
};

const numberValue: Value<number> = {
  value: 1999,
  description: "Studio Display's Price",
};

// multiple generics
let map: Map<string, number> = new Map();
map.set("a", 2);

function printType<T, K>(t: T, k: K) {
  console.log(typeof t, typeof k);
}

printType<string, number>("abc", 123);

// interface inheritance
interface TShirt extends Product {
  kind:
    | "T-shirt"
    | "Tank Top"
    | "Turtleneck Sweater"
    | "Collar"
    | "Short-Sleeved Shirt"
    | "Long-Sleeved Shirt";
}

// generics constraints
function displayTitle<T extends Product>(t: T) {
  console.log(t.title);
}

let product5: Product = {
  title: "A yellow T-shirt as Product",
  category: {
    name: "Clothes",
  },
};

displayTitle(product5);

let product6: TShirt = {
  title: "A yellow T-shirt as TShirt",
  category: {
    name: "Clothes",
  },
  kind: "T-shirt",
};

displayTitle(product6);

// type inheritance
type Monitor = Product & {
  "diagonal-size": "24Inch" | "25Inch" | "27Inch" | "32Inch";
};
