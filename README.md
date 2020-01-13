# Notes

## React Hooks Rules

- only use in functional components or inside other custom React Hooks
- must use on the root level of the function component, cannot be nested it in another function or in an if statement

<img src="/docs/understanding-useState.JPG"/>

## useState()

- `useState` can take any state (type of data), not just object. class components only take object.
- `useSate` returns

`[{ title: string; amount: string; }, React.Dispatch<React.SetStateAction<{ title: string; amount: string; }]`

- unless need to data together, otherwise, manage states independently, split states into multiple states, prefer not to use object, so they don't have to be kept track with updates of other states.

if initialState is `null` or `undefined`, don't pass anything, `useState()`

e.g.

`const[title, setTitle] = useState('') const[amount, setAmount] = useState('')`

instead of

`const [inputState, setInputState] = useState({ title: "", amount: "" });`

## array destructing

- pull element out of an array and store them in separate variables

## useEffect()

use to manage side-effects. A http request is a side-effec. Anything that cannot be managed in the normal component rendering flow. by default, `useEffect` is executed AFTER EVERY component render cycle, acts like `componentDidUpdate()` (warning of entering into an infinite loop)

if pass a second argument to `useEffect()`, it will act like `componentDidMount()` if passed an empty array []. otherwise the array is the for the dependencies outside the `useEffect()` function, such as variables and method defined outside which means only when the dependencies has changed, useEffect() will run.

`useEffect(() => { doSomething()}, []);`
