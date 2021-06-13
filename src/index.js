import ReactDOM from 'react-dom';

import createRoutes from './Routes';

const routes = createRoutes();

ReactDOM.render(
  routes,
  document.querySelector('#root')
)