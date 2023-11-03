# Use Effect Hook

Use Effect Hook is used to perform some task when a component rerenders

### To Import Use State Hook

```js
import { useEffect } from "react";
```

## For Example

```js
useEffect(() => {
  console.log("Rerender");
});
```

This code will run everytime any component rerenders

## Only at page reload

Pass an empty array at the end of UseEffect

```js
useEffect(() => {
  console.log("Only At Reload");
}, []);
```

## Only when a particular component is changed

```js
useEffect(() => {
  console.log("Only When Items is Changed");
}, [items]);
```

This code will only run when items array gets altered. Note- This will also run at reload as on reload, the array is initialized

We can use this to save the items array to the local storage, everytime the items array is altered.

```js
useEffect(() => {
  console.log("Only When Items is Changed");
}, [items]);
```
# Asynchronous Nature

useEffect hook is **asynchrous** in nature i.e, It runs after all the code in the JS file runs

