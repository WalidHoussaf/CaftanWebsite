"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  UserIcon, 
  ShoppingBagIcon, 
  HeartIcon, 
  CreditCardIcon,
  MapPinIcon,
  ArrowRightOnRectangleIcon,
  BellIcon,
  CogIcon
} from '@heroicons/react/24/outline';

// Mock user data for development
const mockUser = {
  firstName: 'Amina',
  lastName: 'Benali',
  email: 'amina.benali@example.com',
  avatar: null, // Will use initials if no avatar
};

// Mock order data
const mockOrders = [
  {
    id: 'ORD-12345',
    date: '2025-03-28',
    status: 'Delivered',
    total: 299.99,
    items: [
      {
        id: 'caftan-01',
        name: 'Caftan Marocain Royal Bleu',
        image: '/images/caftans/caftan1.jpg',
        price: 299.99,
        quantity: 1,
      }
    ]
  },
  {
    id: 'ORD-12346',
    date: '2025-04-02',
    status: 'Processing',
    total: 389.99,
    items: [
      {
        id: 'caftan-02',
        name: 'Caftan Émeraude de Luxe',
        image: '/images/caftans/caftan2.jpg',
        price: 389.99,
        quantity: 1,
      }
    ]
  }
];

// Account page tabs
const tabs = [
  { id: 'dashboard', label: 'Dashboard', icon: UserIcon },
  { id: 'orders', label: 'Orders', icon: ShoppingBagIcon },
  { id: 'wishlist', label: 'Wishlist', icon: HeartIcon },
  { id: 'addresses', label: 'Addresses', icon: MapPinIcon },
  { id: 'payment', label: 'Payment Methods', icon: CreditCardIcon },
  { id: 'notifications', label: 'Notifications', icon: BellIcon },
  { id: 'settings', label: 'Account Settings', icon: CogIcon },
];

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isLoggedIn, setIsLoggedIn] = useState(true); // For development, assume logged in

  // If not logged in, redirect to login page
  if (!isLoggedIn) {
    return (
      <div className="bg-cream min-h-screen pt-24 pb-16">
        <div className="container-custom">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm p-8 text-center">
            <h1 className="text-2xl font-serif text-navy mb-6">Account Access</h1>
            <p className="text-navy/70 mb-8">Please log in or create an account to view this page.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/account/login" 
                className="px-6 py-3 bg-navy text-cream rounded-md hover:bg-navy/90 transition-colors"
              >
                Login
              </Link>
              <Link 
                href="/account/register" 
                className="px-6 py-3 border border-navy text-navy rounded-md hover:bg-navy/5 transition-colors"
              >
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Get user initials for avatar placeholder
  const userInitials = `${mockUser.firstName.charAt(0)}${mockUser.lastName.charAt(0)}`;

  return (
    <div className="bg-cream min-h-screen pt-24 pb-16">
      <div className="container-custom">
        <h1 className="text-3xl font-serif text-navy mb-8">My Account</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex items-center mb-6">
                {mockUser.avatar ? (
                  <Image 
                    src={mockUser.avatar} 
                    alt={`${mockUser.firstName} ${mockUser.lastName}`}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                ) : (
                  <div className="w-14 h-14 rounded-full bg-navy/10 flex items-center justify-center text-navy font-medium text-xl">
                    {userInitials}
                  </div>
                )}
                <div className="ml-4">
                  <h2 className="font-medium text-navy">{`${mockUser.firstName} ${mockUser.lastName}`}</h2>
                  <p className="text-sm text-navy/60">{mockUser.email}</p>
                </div>
              </div>
              
              <nav className="space-y-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center px-3 py-2 text-sm rounded-md transition-colors ${
                      activeTab === tab.id
                        ? 'bg-navy text-cream'
                        : 'text-navy/70 hover:bg-navy/5 hover:text-navy'
                    }`}
                  >
                    <tab.icon className="h-5 w-5 mr-3" />
                    {tab.label}
                  </button>
                ))}
                
                <button
                  className="w-full flex items-center px-3 py-2 text-sm rounded-md text-navy/70 hover:bg-red-50 hover:text-red-600 transition-colors mt-4"
                >
                  <ArrowRightOnRectangleIcon className="h-5 w-5 mr-3" />
                  Logout
                </button>
              </nav>
            </div>
          </div>
          
          {/* Main content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-6">
              {/* Dashboard tab */}
              {activeTab === 'dashboard' && (
                <div>
                  <h2 className="text-xl font-medium text-navy mb-6">Dashboard</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-navy/5 rounded-lg p-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center mr-3">
                          <ShoppingBagIcon className="h-5 w-5 text-navy" />
                        </div>
                        <div>
                          <p className="text-sm text-navy/70">Orders</p>
                          <p className="text-xl font-medium text-navy">{mockOrders.length}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-navy/5 rounded-lg p-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center mr-3">
                          <HeartIcon className="h-5 w-5 text-navy" />
                        </div>
                        <div>
                          <p className="text-sm text-navy/70">Wishlist</p>
                          <p className="text-xl font-medium text-navy">3</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-navy/5 rounded-lg p-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center mr-3">
                          <BellIcon className="h-5 w-5 text-navy" />
                        </div>
                        <div>
                          <p className="text-sm text-navy/70">Notifications</p>
                          <p className="text-xl font-medium text-navy">2</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="font-medium text-navy mb-4">Recent Orders</h3>
                  {mockOrders.length > 0 ? (
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                      {mockOrders.slice(0, 2).map((order) => (
                        <div key={order.id} className="p-4 border-b border-gray-200 last:border-b-0">
                          <div className="flex flex-wrap justify-between items-start mb-2">
                            <div>
                              <p className="font-medium text-navy">{order.id}</p>
                              <p className="text-sm text-navy/60">
                                {new Date(order.date).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric'
                                })}
                              </p>
                            </div>
                            <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                              order.status === 'Delivered' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-blue-100 text-blue-800'
                            }`}>
                              {order.status}
                            </div>
                          </div>
                          
                          <div className="flex items-center">
                            <div className="relative w-16 h-16 bg-sand/20 rounded-md overflow-hidden mr-3">
                              {order.items[0].image && (
                                <Image
                                  src={order.items[0].image}
                                  alt={order.items[0].name}
                                  fill
                                  className="object-cover"
                                  sizes="64px"
                                />
                              )}
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-medium text-navy">{order.items[0].name}</p>
                              {order.items.length > 1 && (
                                <p className="text-xs text-navy/60">+{order.items.length - 1} more items</p>
                              )}
                            </div>
                            <div className="text-right">
                              <p className="font-medium text-navy">{order.total.toFixed(2)} €</p>
                              <Link 
                                href={`/account/orders/${order.id}`}
                                className="text-xs text-emerald hover:underline"
                              >
                                View Details
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 bg-navy/5 rounded-lg">
                      <ShoppingBagIcon className="h-12 w-12 text-navy/30 mx-auto mb-3" />
                      <p className="text-navy/70">You haven't placed any orders yet</p>
                    </div>
                  )}
                  
                  {mockOrders.length > 0 && (
                    <div className="mt-4 text-right">
                      <button
                        onClick={() => setActiveTab('orders')}
                        className="text-sm text-emerald hover:underline"
                      >
                        View all orders
                      </button>
                    </div>
                  )}
                </div>
              )}
              
              {/* Orders tab */}
              {activeTab === 'orders' && (
                <div>
                  <h2 className="text-xl font-medium text-navy mb-6">My Orders</h2>
                  
                  {mockOrders.length > 0 ? (
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                      {mockOrders.map((order) => (
                        <div key={order.id} className="p-4 border-b border-gray-200 last:border-b-0">
                          <div className="flex flex-wrap justify-between items-start mb-4">
                            <div>
                              <p className="font-medium text-navy">{order.id}</p>
                              <p className="text-sm text-navy/60">
                                {new Date(order.date).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric'
                                })}
                              </p>
                            </div>
                            <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                              order.status === 'Delivered' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-blue-100 text-blue-800'
                            }`}>
                              {order.status}
                            </div>
                          </div>
                          
                          <div className="space-y-3">
                            {order.items.map((item) => (
                              <div key={item.id} className="flex items-center">
                                <div className="relative w-16 h-16 bg-sand/20 rounded-md overflow-hidden mr-3">
                                  {item.image && (
                                    <Image
                                      src={item.image}
                                      alt={item.name}
                                      fill
                                      className="object-cover"
                                      sizes="64px"
                                    />
                                  )}
                                </div>
                                <div className="flex-1">
                                  <p className="text-sm font-medium text-navy">{item.name}</p>
                                  <p className="text-xs text-navy/60">Qty: {item.quantity}</p>
                                </div>
                                <div className="text-right">
                                  <p className="font-medium text-navy">{item.price.toFixed(2)} €</p>
                                </div>
                              </div>
                            ))}
                          </div>
                          
                          <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
                            <div>
                              <p className="text-sm font-medium text-navy">Total: <span className="text-emerald">{order.total.toFixed(2)} €</span></p>
                            </div>
                            <div className="flex space-x-3">
                              <Link 
                                href={`/account/orders/${order.id}`}
                                className="px-4 py-2 text-xs bg-navy text-cream rounded-md hover:bg-navy/90 transition-colors"
                              >
                                View Details
                              </Link>
                              {order.status === 'Delivered' && (
                                <button className="px-4 py-2 text-xs border border-navy text-navy rounded-md hover:bg-navy/5 transition-colors">
                                  Write Review
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 bg-navy/5 rounded-lg">
                      <ShoppingBagIcon className="h-16 w-16 text-navy/30 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-navy mb-2">No Orders Yet</h3>
                      <p className="text-navy/70 mb-6">You haven't placed any orders yet</p>
                      <Link 
                        href="/collections"
                        className="px-6 py-2 bg-navy text-cream rounded-md hover:bg-navy/90 transition-colors"
                      >
                        Start Shopping
                      </Link>
                    </div>
                  )}
                </div>
              )}
              
              {/* Wishlist tab */}
              {activeTab === 'wishlist' && (
                <div>
                  <h2 className="text-xl font-medium text-navy mb-6">My Wishlist</h2>
                  
                  <div className="text-center py-12 bg-navy/5 rounded-lg">
                    <HeartIcon className="h-16 w-16 text-navy/30 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-navy mb-2">Your Wishlist is Empty</h3>
                    <p className="text-navy/70 mb-6">Save your favorite items to your wishlist</p>
                    <Link 
                      href="/collections"
                      className="px-6 py-2 bg-navy text-cream rounded-md hover:bg-navy/90 transition-colors"
                    >
                      Explore Collections
                    </Link>
                  </div>
                </div>
              )}
              
              {/* Addresses tab */}
              {activeTab === 'addresses' && (
                <div>
                  <h2 className="text-xl font-medium text-navy mb-6">My Addresses</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="border border-gray-200 rounded-lg p-4 relative">
                      <div className="absolute top-4 right-4">
                        <span className="text-xs bg-navy/10 text-navy px-2 py-1 rounded-full">Default</span>
                      </div>
                      <h3 className="font-medium text-navy mb-2">Shipping Address</h3>
                      <div className="text-sm text-navy/70 space-y-1">
                        <p>{`${mockUser.firstName} ${mockUser.lastName}`}</p>
                        <p>123 Rue Mohammed V</p>
                        <p>Apartment 4B</p>
                        <p>Casablanca, 20250</p>
                        <p>Morocco</p>
                        <p>+212 612 345 678</p>
                      </div>
                      <div className="mt-4 flex space-x-2">
                        <button className="text-xs text-emerald hover:underline">Edit</button>
                        <button className="text-xs text-red-600 hover:underline">Delete</button>
                      </div>
                    </div>
                    
                    <div className="border border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center text-center h-full min-h-[200px]">
                      <MapPinIcon className="h-8 w-8 text-navy/30 mb-2" />
                      <p className="text-navy/70 mb-4">Add a new address</p>
                      <button className="px-4 py-2 text-xs border border-navy text-navy rounded-md hover:bg-navy/5 transition-colors">
                        Add Address
                      </button>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Payment Methods tab */}
              {activeTab === 'payment' && (
                <div>
                  <h2 className="text-xl font-medium text-navy mb-6">Payment Methods</h2>
                  
                  <div className="text-center py-12 bg-navy/5 rounded-lg">
                    <CreditCardIcon className="h-16 w-16 text-navy/30 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-navy mb-2">No Payment Methods</h3>
                    <p className="text-navy/70 mb-6">Add a payment method for faster checkout</p>
                    <button className="px-6 py-2 bg-navy text-cream rounded-md hover:bg-navy/90 transition-colors">
                      Add Payment Method
                    </button>
                  </div>
                </div>
              )}
              
              {/* Notifications tab */}
              {activeTab === 'notifications' && (
                <div>
                  <h2 className="text-xl font-medium text-navy mb-6">Notifications</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="bg-navy/5 p-4 rounded-lg">
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center mr-3 mt-1">
                          <ShoppingBagIcon className="h-5 w-5 text-navy" />
                        </div>
                        <div>
                          <p className="font-medium text-navy">Your order has been shipped</p>
                          <p className="text-sm text-navy/70 mb-2">
                            Order #ORD-12346 has been shipped and is on its way to you.
                          </p>
                          <p className="text-xs text-navy/50">April 3, 2025</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-navy/5 p-4 rounded-lg">
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center mr-3 mt-1">
                          <BellIcon className="h-5 w-5 text-navy" />
                        </div>
                        <div>
                          <p className="font-medium text-navy">New collection available</p>
                          <p className="text-sm text-navy/70 mb-2">
                            Discover our new Ramadan collection, now available online.
                          </p>
                          <p className="text-xs text-navy/50">April 1, 2025</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="font-medium text-navy mb-4">Notification Preferences</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label htmlFor="order-updates" className="text-sm text-navy/70">
                        Order Updates
                      </label>
                      <div className="relative inline-block w-10 mr-2 align-middle select-none">
                        <input 
                          type="checkbox" 
                          id="order-updates" 
                          className="sr-only peer"
                          defaultChecked 
                        />
                        <div className="w-10 h-5 bg-gray-200 rounded-full peer peer-checked:bg-navy peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <label htmlFor="promotions" className="text-sm text-navy/70">
                        Promotions and Offers
                      </label>
                      <div className="relative inline-block w-10 mr-2 align-middle select-none">
                        <input 
                          type="checkbox" 
                          id="promotions" 
                          className="sr-only peer"
                          defaultChecked 
                        />
                        <div className="w-10 h-5 bg-gray-200 rounded-full peer peer-checked:bg-navy peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <label htmlFor="newsletter" className="text-sm text-navy/70">
                        Newsletter
                      </label>
                      <div className="relative inline-block w-10 mr-2 align-middle select-none">
                        <input 
                          type="checkbox" 
                          id="newsletter" 
                          className="sr-only peer"
                          defaultChecked 
                        />
                        <div className="w-10 h-5 bg-gray-200 rounded-full peer peer-checked:bg-navy peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Account Settings tab */}
              {activeTab === 'settings' && (
                <div>
                  <h2 className="text-xl font-medium text-navy mb-6">Account Settings</h2>
                  
                  <form className="space-y-6">
                    <div>
                      <h3 className="font-medium text-navy mb-4">Personal Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-navy/80 mb-1">
                            First Name
                          </label>
                          <input
                            id="firstName"
                            type="text"
                            defaultValue={mockUser.firstName}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy/30"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-navy/80 mb-1">
                            Last Name
                          </label>
                          <input
                            id="lastName"
                            type="text"
                            defaultValue={mockUser.lastName}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy/30"
                          />
                        </div>
                        
                        <div className="md:col-span-2">
                          <label htmlFor="email" className="block text-sm font-medium text-navy/80 mb-1">
                            Email Address
                          </label>
                          <input
                            id="email"
                            type="email"
                            defaultValue={mockUser.email}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy/30"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-navy mb-4">Password</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="currentPassword" className="block text-sm font-medium text-navy/80 mb-1">
                            Current Password
                          </label>
                          <input
                            id="currentPassword"
                            type="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy/30"
                            placeholder="••••••••"
                          />
                        </div>
                        
                        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="newPassword" className="block text-sm font-medium text-navy/80 mb-1">
                              New Password
                            </label>
                            <input
                              id="newPassword"
                              type="password"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy/30"
                              placeholder="••••••••"
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-navy/80 mb-1">
                              Confirm New Password
                            </label>
                            <input
                              id="confirmPassword"
                              type="password"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy/30"
                              placeholder="••••••••"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4 flex justify-end">
                      <button
                        type="submit"
                        className="px-6 py-2 bg-navy text-cream rounded-md hover:bg-navy/90 transition-colors"
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
