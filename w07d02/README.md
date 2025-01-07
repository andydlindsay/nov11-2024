# W07D02 - What is React State?

### To Do
- [x] Review of components and props
- [x] What is state?
- [x] Closure review
- [x] Reading and setting state

### Data
* props => data from outside the component
* state => data from the component (created by the component)

### Rerender
* caused by an update to props or state
* if oldState !== newState || oldProps !== newProps

### Hooks
* Feb 2019
* are functions that allow us to tap into the React lifecycle
* every hook starts with `use`
* useState => manage our state (closure)
* useEffect => document.ready
* useReducer => useState on steroids
* cannot be called conditionally (inside an if/switch)
* have to called top-level (not inside a helper function)

### Lifting State Up
* choosing which component should hold the state
* data only travels from parent-to-child

src
  App - state: count
    Button - props: count
    Display - props: count











