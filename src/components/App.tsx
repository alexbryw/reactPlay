import React, {CSSProperties} from "react";

// import Navbar from "./"
import Layout from "./Layout";
import Content from "./Content";

// export interface Props
// { 
// compiler: string;
// framework: string; 
// }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
// export class Hello extends React.Component<HelloProps, {}> {
//     render() {
//         return <h1>Hello from... {this.props.compiler} and {this.props.framework}!</h1>;
//     }
// }

// export function App(props: Props){
//     return <h1>Hello from... function</h1>;
// }

export class App extends React.Component {
    render() {
        return (
            <Layout />
        )
    }
}

const style1: CSSProperties = {
    height: '4em',
    background: 'black',
    color: '#E1E1E1',
    display: 'flex',
    alignItems: 'streach',
    padding: '0 1em'
};

const style2: CSSProperties = {
    display: 'flex',
    alignItems: 'center'
};

const nyStyle = {...style1, ...style2 }