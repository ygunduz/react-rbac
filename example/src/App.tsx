import React from 'react';
import { Can, useCan } from 'muap-rbac';

function App() {
  const { can } = useCan();

  return (
    <React.Fragment>
      <Can 
        screen='personnel'
        action='create'
        yes={() => <h2>User Can Create Personnel</h2>}
      />
      <Can 
        screen='personnel'
        action='update'
        yes={() => <h2>User Can Update Personnel</h2>}
      />
      <Can 
        screen='personnel'
        action='list'
        yes={() => <h2>User Can List Personnel</h2>}
      />
    </React.Fragment>
  );
}

export default App;
