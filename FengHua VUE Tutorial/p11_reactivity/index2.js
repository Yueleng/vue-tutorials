const obj = {
  a: 1,
  b: 2,
};

// observers = {
//     ...,
//     [obj]: objMap
// }
// objMap = {[key]: [fns...]}

const observers = new WeakMap();
let currentObserver = null;

//
function observe(fn) {
  currentObserver = fn;
  fn();
  currentObserver = null;
}

function sum() {
  console.log(reactiveObj.a + reactiveObj.b);
}

function sub() {
  console.log(reactiveObj.a - reactiveObj.b);
}

function registerObserver(target, key) {
  if (currentObserver) {
    const targetObserver = observers.get(target);
    if (targetObserver.has(key)) {
      targetObserver.get(key).add(currentObserver);
    } else {
      targetObserver.set(key, new Set([currentObserver]));
    }
  }
}

function execute(target, key) {
  let observersForKey = observers.get(target).get(key);
  observersForKey.forEach((fn) => fn());
}

function reactive(obj) {
  observers.set(obj, new Map());
  return new Proxy(obj, {
    get(target, key, receiver) {
      registerObserver(target, key);
      return Reflect.get(target, key, receiver);
    },
    set(target, key, value, receiver) {
      const result = Reflect.set(target, key, value, receiver);
      // sum();
      execute(target, key);
      return result;
    },
  });
}

let reactiveObj = reactive(obj);
// sum();
observe(sum); // Like computed
observe(sub);

setTimeout(() => {
  reactiveObj.a = 5;
}, 1000);

setTimeout(() => {
  reactiveObj.b = 10;
}, 2000);
