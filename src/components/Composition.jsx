import React from 'react'

const Composition = () => {
    return (
        <div>
            <Button>Click Me Composition</Button>
            <Button>Click Me abc</Button>
            <Button>Click Me xyz</Button>
        </div>
    )
}
const Button = ({ children }) => {
    return (
        <h1>
            {children}
        </h1>
    );
};
export default Composition
// const App = () => {
//   return (
//     <div>
//       <Button>Click Me</Button>
//     </div>
//   );
// };
// export default App;