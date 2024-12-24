import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/" className="flex items-center">
      <span className="text-2xl font-bold text-blue-600">XNX</span>
    </Link>
  );
}