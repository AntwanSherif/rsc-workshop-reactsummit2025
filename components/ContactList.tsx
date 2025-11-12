'use client';

import { useSearchParams } from 'next/navigation';
import React from 'react';
import ContactButton from './ContactButton';
import type { Contact } from '@prisma/client';

export default function ContactList({ contacts = [] }: { contacts: Contact[] }) {
  const searchParams = useSearchParams();
  const query = searchParams.get('') || '';

  const filteredContacts = contacts.filter(({ first, last }) => {
    const fullname = `${first} ${last}`.toLowerCase();
    return fullname.includes(query.toLowerCase());
  });

  return (
    <nav className="flex-1 overflow-auto px-8 py-4">
      {contacts.length ? (
        <ul>
          {filteredContacts.map(contact => {
            return (
              <li key={contact.id} className="mx-1">
                <ContactButton contact={contact} />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>
          <i>No contacts</i>
        </p>
      )}
    </nav>
  );
}
