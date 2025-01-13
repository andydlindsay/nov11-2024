# W08D01 - React Review

### To Do
- [x] Build a backend server
- [x] Test the server with Postman
- [x] Build the React frontend
- [x] Data fetching with `useEffect`
- [x] Managing state with a custom hook
- [x] Demonstrate the `npm run build` command

### Side Effects
- Any operation that modifies the state of the computer or interacts with something outside of your program is said to have a **side effect**
- Common _side effects_:
  - Writing to standard out (eg. `console.log`)
  - Modifying the DOM directly (instead of relying on React)
  - Establishing socket connections (eg. `ws` or `Socket.io`)
  - Retrieving data from an API (eg. `axios`, `jQuery`, or the `fetch` API)
  - Setting timers or intervals

### `useEffect`
- `useEffect` is a Hook we can use to deal with side effects in our components
- The _effect_ hook fires after the browser has _painted_ the DOM
- Multiple _effect_ hooks can be used inside of a single component to group similar operations together

```jsx
const MyComponent = (props) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    // retrieve user information from an API and update local state with the response
    axios(`/users/${props.userId}`)
      .then(response => setUser(response.data));
  });

  return (
    <div className="my-component">
      <p>You are logged in as { user.username }</p>
    </div>
  );
};
```

### Dependencies
- The second argument to `useEffect` is a dependency array that lets you specify when you want the hook to run
- The hook will run again anytime the value of a dependency changes
- **NOTE:** It is possible to get stuck in an infinite loop if the _effect_ hook updates a value in the dependency array

```jsx
// will run every time the value of user.firstName changes
useEffect(() => {
  document.title = `${user.firstName}'s Home Page`;
}, [user.firstName]);

// infinite loop because it runs every time count gets updated
useEffect(() => {
  setCount(count + 1);
}, [count]);
```

### Useful Links
- [React Docs: Hook Rules](https://reactjs.org/docs/hooks-rules.html)
- [Wikipedia: Pure Function](https://en.wikipedia.org/wiki/Pure_function)
- [Wikipedia: Side Effect](https://en.wikipedia.org/wiki/Side_effect_(computer_science))
