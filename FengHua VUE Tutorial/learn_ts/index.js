var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var str = "Hellow World";
console.log(str);
var price = 10;
price.toFixed();
var isAvailable = true;
var blog = {
    title: "typescript 教程",
    viewCount: 200
};
blog = {
    title: "typescript 教程2",
    viewCount: 300
};
var framework = ["Vue", "React", "Angular"];
framework[0] = "Vue 3";
framework[0];
var product = {
    title: "LG Monitor",
    price: 20000,
    inStock: true,
    category: {
        name: "Computer Appliance"
    }
};
var product2 = {
    title: "Philips Monitor",
    price: 5999,
    inStock: true,
    category: {
        name: "Computer Appliance"
    }
};
var product3 = {
    title: "Apple Monitor",
    price: 12000,
    category: {
        name: "Computer Appliance"
    }
};
// add types for array
var nums = [1, 2, 3];
var nums2 = [1, 2, 3];
var products = [product, product2, product3];
// union types
var numericValue = 15;
numericValue = "15";
var product4 = "BenQ Monitor";
// add types for function parameters
function add(a, b) {
    return a + b;
}
add(1, 2);
function cmd(args) {
    if (typeof args === "string") {
        return args;
    }
    else {
        return args.join(" ");
    }
}
// arrow function typescript inference
[1, 2, 3].map(function (x) { return x * x; });
function request(callback) {
    callback("success");
}
request(function (result) { return console.log(result); });
function require(cb) {
    cb("success");
    console.log(cb.code);
}
var callback = function (req) { return console.log(req); };
callback.code = "200";
// any type
// any is not recomended
var a = 10;
a = "10";
a = true;
// type assertion
var _str = "hello";
var __str = _str;
var __str__ = _str;
console.log(__str.toUpperCase());
console.log(__str__);
// generics
function _join(arr1, arr2, arr3) {
    return __spreadArray(__spreadArray(__spreadArray([], arr1, true), arr2, true), arr3, true);
}
var res = _join([1, 2, 3], ["1", "2", "3"], [true, false]);
console.log(res);
var stringValue = {
    value: "Studio Display",
    description: "A sight to be bold. "
};
var numberValue = {
    value: 1999,
    description: "Studio Display's Price"
};
// multiple generics
var map = new Map();
map.set("a", 2);
function printType(t, k) {
    console.log(typeof t, typeof k);
}
printType("abc", 123);
// generics constraints
function displayTitle(t) {
    console.log(t.title);
}
var product5 = {
    title: "A yellow T-shirt as Product",
    category: {
        name: "Clothes"
    }
};
displayTitle(product5);
var product6 = {
    title: "A yellow T-shirt as TShirt",
    category: {
        name: "Clothes"
    },
    kind: "T-shirt"
};
displayTitle(product6);
