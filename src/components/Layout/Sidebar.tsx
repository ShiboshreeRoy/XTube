import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome, AiFillLike, AiOutlineHistory, AiFillClockCircle } from 'react-icons/ai';
import { MdSubscriptions, MdVideoLibrary } from 'react-icons/md';

export default function Sidebar() {
  const menuItems = [
    { icon: <AiFillHome className="w-6 h-6" />, label: 'Home', path: '/' },
    { icon: <MdSubscriptions className="w-6 h-6" />, label: 'Subscriptions', path: '/subscriptions' },
    { icon: <MdVideoLibrary className="w-6 h-6" />, label: 'Library', path: '/library' },
    { icon: <AiOutlineHistory className="w-6 h-6" />, label: 'History', path: '/history' },
    { icon: <AiFillLike className="w-6 h-6" />, label: 'Liked Videos', path: '/liked' },
    { icon: <AiFillClockCircle className="w-6 h-6" />, label: 'Watch Later', path: '/watch-later' },
  ];

  return (
    <aside className="w-64 bg-white h-full fixed left-0 top-16 overflow-y-auto">
      <nav className="p-4">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="flex items-center p-3 hover:bg-gray-100 rounded-lg mb-1"
          >
            {item.icon}
            <span className="ml-3">{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}