import React from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { useNavigation } from '../../hooks/useNavigation';
import Logo from '../Logo/Logo';

export default function Navbar() {
  const { isOpen, toggleMenu } = useNavigation();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Logo />
            <div className="hidden md:flex space-x-8 ml-10">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/products">Products</NavLink>
              <NavLink to="/solutions">Solutions</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>
          </div>
          
          <div className="flex items-center">
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900"
            >
              <FiMenu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink to="/">Home</MobileNavLink>
            <MobileNavLink to="/products">Products</MobileNavLink>
            <MobileNavLink to="/solutions">Solutions</MobileNavLink>
            <MobileNavLink to="/contact">Contact</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
  >
    {children}
  </Link>
);