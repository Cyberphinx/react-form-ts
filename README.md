# React form without external libraries

This project was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

- `npm start`
- `npm test`
- `npm run build`

## Form States

There are a number of ways to set state in the form:

1. `useState` causes the component to re-render each time the state has changed,
   this is not necessarily a bad thing. In a small single module component, it
   is absolutely fine to use `useState`

2. `useRef` If for some reason you don't want the component to re-render
   whenever the state changes, you can use `useRef` hook instead.

3. `FormData` Alternatively you can pass the event.currenttarget into a new
   FormData() to store the state of the form, without re=rendering the
   component:

   ```
   const data = new FormData(event.currentTarget);
   console.log(Object.fromEntries(data));
   ```
