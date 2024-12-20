// Regular IIFE
(function chai() {
    console.log(`DB CONNECTED`);
})();

// Arrow Function IIFE
(() => {
    console.log(`DB CONNECTED TWO`);
})();

// Arrow Function IIFE with a Parameter
((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("SANDEEP-GAUTAM");
