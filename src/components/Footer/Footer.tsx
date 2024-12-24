import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-sm font-semibold">Solutions</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/solutions/enterprise" className="text-gray-300 hover:text-white">
                  Enterprise
                </Link>
              </li>
              <li>
                <Link to="/solutions/small-business" className="text-gray-300 hover:text-white">
                  Small Business
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-sm font-semibold">Support</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/documentation" className="text-gray-300 hover:text-white">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-sm font-semibold">Company</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-white">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-sm font-semibold">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} XNX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}