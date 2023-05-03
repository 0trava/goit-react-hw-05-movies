import {routes,Route, link} from 'react-router-dom';
import Home from "path/to/pages/Home";
import Movies from "path/to/pages/Movies";


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>
  );
};
