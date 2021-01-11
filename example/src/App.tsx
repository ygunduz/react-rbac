import React from 'react';
import { Can, useCan } from 'muap-rbac';

function App() {
  // hook context'e erişemediğinden RBACProvider'ın tanımlandığı component içerisinden kullanılamaz
  const { can } = useCan();
  const canUserCreatePersonnel = can('personnel' , 'create');
  const canUserUpdatePersonnel = can('personnel' , 'update');
  const canUserListPersonnel = can('personnel' , 'list');

  return (
    <React.Fragment>
      <Can 
        screen='personnel'
        action='create'
        yes={() => <h2>Component: User Can Create Personnel</h2>}
      />
      {canUserCreatePersonnel && <h2>Hook: User Can Create Personnel</h2>}
      <Can 
        screen='personnel'
        action='update'
        yes={() => <h2>Component: User Can Update Personnel</h2>}
      />
      {canUserUpdatePersonnel && <h2>Hook: User Can Update Personnel</h2>}
      <Can 
        screen='personnel'
        action='list'
        yes={() => <h2>Component: User Can List Personnel</h2>}
      />
      {canUserListPersonnel && <h2>Hook: User Can List Personnel</h2>}
    </React.Fragment>
  );
}

export default App;
