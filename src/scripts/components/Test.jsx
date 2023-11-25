import React from 'react';

export default function Test() {
  return (
    <>
      <h1>Test Using React and Tailwind</h1>
      <div className="shadow-md">
        <div className="grid gap-4 grid-cols-2">
          <div className="bg-gray-600">01</div>
          <div className="bg-gray-700">02</div>
          <div className="bg-gray-800">03</div>
          <div className="bg-gray-900">04</div>
        </div>
      </div>
    </>
  );
}
