var a = 5; // Var is globally scoped
var b = 6;
var c = "alok";
console.log(a + b + 8);

console.log(typeof a, typeof b, typeof c); // used to check the type of variable

const a1 = 6; // now a1 cannot will not be changed
a1 = a1 + 1;

// var:
// - Globally scoped or function scoped.
// - Hoisted to the top of their scope and initialized with undefined.
// - Can be redeclared and updated.

// let:
// - Block scoped.
// - Not hoisted to the top of their block and not initialized until their declaration is evaluated.
// - Can be updated but not redeclared within the same scope.

// const:
// - Block scoped.
// - Must be initialized during declaration.
// - Cannot be updated or redeclared. However, properties or elements of the value (if it's an object or array) can be modified.
