import React from 'react';
import { FiShield, FiTrendingUp, FiSettings } from 'react-icons/fi';
import FeatureCard from './FeatureCard';

export default function Features() {
  const features = [
    {
      title: 'Advanced Security',
      description: 'Enterprise-grade security features to protect your data',
      icon: <FiShield className="w-full h-full" />
    },
    {
      title: 'Performance Optimization',
      description: 'Boost your system performance with our tools',
      icon: <FiTrendingUp className="w-full h-full" />
    },
    {
      title: 'Easy Integration',
      description: 'Seamlessly integrate with your existing systems',
      icon: <FiSettings className="w-full h-full" />
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Our Features
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover what makes XNX the leading choice for businesses
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}