import React from 'react';
import * as ReactDOMClient from 'react-dom/client';

import Home from './Home';

export default function App() {
  document.addEventListener("DOMContentLoaded", function (event) {

    const container = document.getElementById('root');

    const root = ReactDOMClient.createRoot(container);

    root.render(<Home />);
  })
}

App();