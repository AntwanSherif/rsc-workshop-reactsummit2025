'use client';

export default function ClientComponent() {
  return (
    <button
      className="rounder border-2 border-blue-500 p-4"
      onClick={() => {
        alert('clicked!');
      }}
    >
      Click me
    </button>
  );
}
