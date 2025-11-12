'use client';

export default function ClientComponent({ children }: { children?: React.ReactNode }) {
  return (
    <div className="rounder border-2 border-blue-500 p-4">
      <button
        onClick={() => {
          alert('clicked!');
        }}
      >
        Click me
      </button>
      {children}
      ClientComponent
    </div>
  );
}
