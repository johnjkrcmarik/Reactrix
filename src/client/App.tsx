import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

import { theme } from './styles/theme';
import { ThemeProvider } from '@material-ui/core';

import './styles/styles.css';

import Navbar from './components/Navbar';
import ComponentLibrary from './containers/ComponentLibrary';
import ComponentTree from './containers/ComponentTree';
import ComponentDetails from './containers/ComponentDetails';

const App = () => (
  <div>
    <DndProvider backend={HTML5Backend}>
      <ThemeProvider theme={theme}>
        <Navbar />
        <ComponentLibrary />
        {/* <ComponentTree /> */}
        {/* <ComponentDetails /> */}
      </ThemeProvider>
    </DndProvider>
  </div>
);

export default hot(App);