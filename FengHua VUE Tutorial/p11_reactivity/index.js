let obj = {
  a: 1,
  b: 2,
};

let objProxy = new Proxy(obj, {
  get(target, key, receiver) {
    console.log(
      `Visited ${target.constructor.name} with key ${key},  the value returned is ${target[key]}`
    );
    // return target[key];
    return Reflect.get(target, key, receiver);
  },

  set(target, key, value, receiver) {
    console.log(
      `Modified ${target.constructor.name} with key ${key},  the new value is ${value}`
    );
    return Reflect.set(target, key, value, receiver);
  },
});

console.log(objProxy.a);

objProxy.a = 5;

console.log(objProxy.a);

console.log(`Visited the original obj with key a:`, obj.a);
