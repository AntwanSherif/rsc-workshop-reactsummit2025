import React from 'react';
import ServerComponent from './_components/ServerComponent';
import ClientComponent from './_components/ClientComponent';

export default function ClientServerPage() {
  return (
    <div>
      ClientServerPage
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
}
