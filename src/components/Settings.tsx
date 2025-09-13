import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Bell, 
  Shield, 
  User, 
  Moon, 
  Sun, 
  Globe, 
  Smartphone, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff,
  Download,
  Trash2,
  LogOut
} from 'lucide-react';
import Layout from './Layout';

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('account');
  const [settings, setSettings] = useState({
    // Account Settings
    twoFactorEnabled: false,
    passwordVisibility: false,
    
    // Notification Settings
    emailNotifications: true,
    smsNotifications: true,
    appointmentReminders: true,
    healthTips: false,
    promotionalEmails: false,
    
    // Privacy Settings
    profileVisibility: 'private',
    shareHealthData: false,
    analyticsOptIn: true,
    
    // Preferences
    darkMode: false,
    language: 'en',
    timezone: 'America/New_York',
    dateFormat: 'MM/DD/YYYY'
  });

  const handleToggle = (setting: string) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting as keyof typeof prev]
    }));
  };

  const handleSelectChange = (setting: string, value: string) => {
    setSettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  const tabs = [
    { id: 'account', label: 'Account', icon: <User className="w-5 h-5" /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell className="w-5 h-5" /> },
    { id: 'privacy', label: 'Privacy', icon: <Shield className="w-5 h-5" /> },
    { id: 'preferences', label: 'Preferences', icon: <Globe className="w-5 h-5" /> }
  ];

  const languages = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Español' },
    { value: 'fr', label: 'Français' },
    { value: 'de', label: 'Deutsch' },
    { value: 'zh', label: '中文' }
  ];

  const timezones = [
    { value: 'America/New_York', label: 'Eastern Time (ET)' },
    { value: 'America/Chicago', label: 'Central Time (CT)' },
    { value: 'America/Denver', label: 'Mountain Time (MT)' },
    { value: 'America/Los_Angeles', label: 'Pacific Time (PT)' }
  ];

  return (
    <Layout>
      <div className="min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Settings
            </h1>
            <p className="text-xl text-gray-600">
              Manage your account preferences and privacy settings
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Settings Navigation */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-xl shadow-lg p-6">
                <nav className="space-y-2">
                  {tabs.map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors duration-200 ${
                        activeTab === tab.id
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {tab.icon}
                      <span className="font-medium">{tab.label}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </motion.div>

            {/* Settings Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-xl shadow-lg p-6">
                {/* Account Settings */}
                {activeTab === 'account' && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">Account Settings</h2>
                      
                      {/* Two-Factor Authentication */}
                      <div className="border-b border-gray-200 pb-6 mb-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-lg font-medium text-gray-900">Two-Factor Authentication</h3>
                            <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
                          </div>
                          <button
                            onClick={() => handleToggle('twoFactorEnabled')}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                              settings.twoFactorEnabled ? 'bg-blue-600' : 'bg-gray-300'
                            }`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                settings.twoFactorEnabled ? 'translate-x-6' : 'translate-x-1'
                              }`}
                            />
                          </button>
                        </div>
                        {settings.twoFactorEnabled && (
                          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                            <p className="text-sm text-blue-800">
                              Two-factor authentication is enabled. You'll receive a code via SMS when signing in.
                            </p>
                            <button className="mt-2 text-sm text-blue-600 hover:text-blue-800">
                              Configure 2FA Settings
                            </button>
                          </div>
                        )}
                      </div>

                      {/* Password */}
                      <div className="border-b border-gray-200 pb-6 mb-6">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Password</h3>
                        <div className="space-y-4">
                          <div className="flex items-center space-x-4">
                            <input
                              type={settings.passwordVisibility ? 'text' : 'password'}
                              value="••••••••••••"
                              disabled
                              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
                            />
                            <button
                              onClick={() => handleToggle('passwordVisibility')}
                              className="p-2 text-gray-600 hover:text-gray-800"
                            >
                              {settings.passwordVisibility ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors duration-200">
                              Change Password
                            </button>
                          </div>
                          <p className="text-sm text-gray-600">
                            Last changed: December 15, 2024
                          </p>
                        </div>
                      </div>

                      {/* Account Actions */}
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Account Actions</h3>
                        <div className="space-y-3">
                          <button className="flex items-center space-x-3 px-4 py-3 w-full text-left bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                            <Download className="w-5 h-5 text-gray-600" />
                            <div>
                              <p className="font-medium text-gray-900">Download Your Data</p>
                              <p className="text-sm text-gray-600">Export your account data and health records</p>
                            </div>
                          </button>
                          <button className="flex items-center space-x-3 px-4 py-3 w-full text-left bg-red-50 hover:bg-red-100 rounded-lg transition-colors duration-200">
                            <Trash2 className="w-5 h-5 text-red-600" />
                            <div>
                              <p className="font-medium text-red-900">Delete Account</p>
                              <p className="text-sm text-red-600">Permanently delete your account and all data</p>
                            </div>
                          </button>
                          <button className="flex items-center space-x-3 px-4 py-3 w-full text-left bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                            <LogOut className="w-5 h-5 text-gray-600" />
                            <div>
                              <p className="font-medium text-gray-900">Sign Out</p>
                              <p className="text-sm text-gray-600">Sign out from all devices</p>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Notification Settings */}
                {activeTab === 'notifications' && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">Notification Settings</h2>
                      
                      <div className="space-y-6">
                        {/* Email Notifications */}
                        <div className="flex items-center justify-between py-4 border-b border-gray-200">
                          <div className="flex items-center space-x-3">
                            <Mail className="w-5 h-5 text-gray-600" />
                            <div>
                              <h3 className="font-medium text-gray-900">Email Notifications</h3>
                              <p className="text-sm text-gray-600">Receive notifications via email</p>
                            </div>
                          </div>
                          <button
                            onClick={() => handleToggle('emailNotifications')}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                              settings.emailNotifications ? 'bg-blue-600' : 'bg-gray-300'
                            }`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                settings.emailNotifications ? 'translate-x-6' : 'translate-x-1'
                              }`}
                            />
                          </button>
                        </div>

                        {/* SMS Notifications */}
                        <div className="flex items-center justify-between py-4 border-b border-gray-200">
                          <div className="flex items-center space-x-3">
                            <Smartphone className="w-5 h-5 text-gray-600" />
                            <div>
                              <h3 className="font-medium text-gray-900">SMS Notifications</h3>
                              <p className="text-sm text-gray-600">Receive text message notifications</p>
                            </div>
                          </div>
                          <button
                            onClick={() => handleToggle('smsNotifications')}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                              settings.smsNotifications ? 'bg-blue-600' : 'bg-gray-300'
                            }`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                settings.smsNotifications ? 'translate-x-6' : 'translate-x-1'
                              }`}
                            />
                          </button>
                        </div>

                        {/* Appointment Reminders */}
                        <div className="flex items-center justify-between py-4 border-b border-gray-200">
                          <div className="flex items-center space-x-3">
                            <Bell className="w-5 h-5 text-gray-600" />
                            <div>
                              <h3 className="font-medium text-gray-900">Appointment Reminders</h3>
                              <p className="text-sm text-gray-600">Get reminded about upcoming appointments</p>
                            </div>
                          </div>
                          <button
                            onClick={() => handleToggle('appointmentReminders')}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                              settings.appointmentReminders ? 'bg-blue-600' : 'bg-gray-300'
                            }`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                settings.appointmentReminders ? 'translate-x-6' : 'translate-x-1'
                              }`}
                            />
                          </button>
                        </div>

                        {/* Health Tips */}
                        <div className="flex items-center justify-between py-4 border-b border-gray-200">
                          <div>
                            <h3 className="font-medium text-gray-900">Health Tips & Articles</h3>
                            <p className="text-sm text-gray-600">Receive personalized health tips and articles</p>
                          </div>
                          <button
                            onClick={() => handleToggle('healthTips')}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                              settings.healthTips ? 'bg-blue-600' : 'bg-gray-300'
                            }`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                settings.healthTips ? 'translate-x-6' : 'translate-x-1'
                              }`}
                            />
                          </button>
                        </div>

                        {/* Promotional Emails */}
                        <div className="flex items-center justify-between py-4">
                          <div>
                            <h3 className="font-medium text-gray-900">Promotional Emails</h3>
                            <p className="text-sm text-gray-600">Receive promotional offers and updates</p>
                          </div>
                          <button
                            onClick={() => handleToggle('promotionalEmails')}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                              settings.promotionalEmails ? 'bg-blue-600' : 'bg-gray-300'
                            }`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                settings.promotionalEmails ? 'translate-x-6' : 'translate-x-1'
                              }`}
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Privacy Settings */}
                {activeTab === 'privacy' && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">Privacy Settings</h2>
                      
                      <div className="space-y-6">
                        {/* Profile Visibility */}
                        <div className="py-4 border-b border-gray-200">
                          <h3 className="font-medium text-gray-900 mb-2">Profile Visibility</h3>
                          <p className="text-sm text-gray-600 mb-3">Control who can see your profile information</p>
                          <select
                            value={settings.profileVisibility}
                            onChange={(e) => handleSelectChange('profileVisibility', e.target.value)}
                            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            <option value="private">Private</option>
                            <option value="healthcare-providers">Healthcare Providers Only</option>
                            <option value="public">Public</option>
                          </select>
                        </div>

                        {/* Share Health Data */}
                        <div className="flex items-center justify-between py-4 border-b border-gray-200">
                          <div>
                            <h3 className="font-medium text-gray-900">Share Health Data for Research</h3>
                            <p className="text-sm text-gray-600">Allow anonymized health data to be used for medical research</p>
                          </div>
                          <button
                            onClick={() => handleToggle('shareHealthData')}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                              settings.shareHealthData ? 'bg-blue-600' : 'bg-gray-300'
                            }`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                settings.shareHealthData ? 'translate-x-6' : 'translate-x-1'
                              }`}
                            />
                          </button>
                        </div>

                        {/* Analytics */}
                        <div className="flex items-center justify-between py-4">
                          <div>
                            <h3 className="font-medium text-gray-900">Analytics & Performance</h3>
                            <p className="text-sm text-gray-600">Help us improve our services by sharing usage analytics</p>
                          </div>
                          <button
                            onClick={() => handleToggle('analyticsOptIn')}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                              settings.analyticsOptIn ? 'bg-blue-600' : 'bg-gray-300'
                            }`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                settings.analyticsOptIn ? 'translate-x-6' : 'translate-x-1'
                              }`}
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Preferences */}
                {activeTab === 'preferences' && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">Preferences</h2>
                      
                      <div className="space-y-6">
                        {/* Dark Mode */}
                        <div className="flex items-center justify-between py-4 border-b border-gray-200">
                          <div className="flex items-center space-x-3">
                            {settings.darkMode ? <Moon className="w-5 h-5 text-gray-600" /> : <Sun className="w-5 h-5 text-gray-600" />}
                            <div>
                              <h3 className="font-medium text-gray-900">Dark Mode</h3>
                              <p className="text-sm text-gray-600">Switch between light and dark themes</p>
                            </div>
                          </div>
                          <button
                            onClick={() => handleToggle('darkMode')}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                              settings.darkMode ? 'bg-blue-600' : 'bg-gray-300'
                            }`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                settings.darkMode ? 'translate-x-6' : 'translate-x-1'
                              }`}
                            />
                          </button>
                        </div>

                        {/* Language */}
                        <div className="py-4 border-b border-gray-200">
                          <h3 className="font-medium text-gray-900 mb-2">Language</h3>
                          <p className="text-sm text-gray-600 mb-3">Choose your preferred language</p>
                          <select
                            value={settings.language}
                            onChange={(e) => handleSelectChange('language', e.target.value)}
                            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            {languages.map(lang => (
                              <option key={lang.value} value={lang.value}>{lang.label}</option>
                            ))}
                          </select>
                        </div>

                        {/* Timezone */}
                        <div className="py-4 border-b border-gray-200">
                          <h3 className="font-medium text-gray-900 mb-2">Timezone</h3>
                          <p className="text-sm text-gray-600 mb-3">Set your local timezone for appointments</p>
                          <select
                            value={settings.timezone}
                            onChange={(e) => handleSelectChange('timezone', e.target.value)}
                            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            {timezones.map(tz => (
                              <option key={tz.value} value={tz.value}>{tz.label}</option>
                            ))}
                          </select>
                        </div>

                        {/* Date Format */}
                        <div className="py-4">
                          <h3 className="font-medium text-gray-900 mb-2">Date Format</h3>
                          <p className="text-sm text-gray-600 mb-3">Choose how dates are displayed</p>
                          <select
                            value={settings.dateFormat}
                            onChange={(e) => handleSelectChange('dateFormat', e.target.value)}
                            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            <option value="MM/DD/YYYY">MM/DD/YYYY (US)</option>
                            <option value="DD/MM/YYYY">DD/MM/YYYY (European)</option>
                            <option value="YYYY-MM-DD">YYYY-MM-DD (ISO)</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Save Button */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-600">
                      Settings are automatically saved when changed
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">
                      Save All Changes
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;