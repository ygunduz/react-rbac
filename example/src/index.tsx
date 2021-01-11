import React from 'react';
import ReactDOM from 'react-dom';
import roles from './roles';
import App from './App';
import { RBACProvider } from 'muap-rbac';

ReactDOM.render(
  <React.StrictMode>
    <RBACProvider
      authorities={[]}
      roles={roles}
    >
      <App />
    </RBACProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
