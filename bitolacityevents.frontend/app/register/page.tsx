"use client";

import React, { useState } from 'react'
import { useLanguage } from "../providers/LanguageProvider"

export default function Register() {
  const [isLogin, setIsLogin] = useState(false);
  const [userRole, setUserRole] = useState('user');
  const { t } = useLanguage()

  const roleImages: { [key: string]: string } = {
    user: '/images/user.jpg',
    organizer: '/images/organizer.jpg',
    admin: '/images/admin.jpg'
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-b from-indigo-600 via-indigo-500 to-purple-500 px-4 py-8">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl">
        <div className="relative">
          {/* Background Image */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <img
              src="/images/avatar2.jpg"
              alt="Bitola City"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Form Card - Overlaid on Image */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 items-stretch min-h-96 lg:min-h-full">
            {/* Hidden on mobile, visible on desktop - Image overlay */}
            <div className="hidden lg:block relative rounded-l-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
              <img
                src={roleImages[userRole]}
                alt="Bitola City"
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>

            {/* Form Section */}
            <div className="w-full">
        {/* Card Container */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-r-2xl lg:rounded-2xl shadow-2xl overflow-hidden h-full flex flex-col">
          {/* Header with Toggle */}
          <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 px-8 pt-8 pb-6">
            <h1 className="text-3xl font-bold text-white text-center mb-6">
              {isLogin ? useLanguage().t('register.welcome') : useLanguage().t('register.join')}
            </h1>

            {/* Toggle Buttons */}
            <div className="flex gap-4 bg-white/10 p-1 rounded-lg">
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2 px-4 rounded-md font-semibold transition-all duration-300 ${
                  !isLogin
                    ? 'bg-white/20 text-white shadow-lg'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {useLanguage().t('nav.register')}
              </button>
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2 px-4 rounded-md font-semibold transition-all duration-300 ${
                  isLogin
                    ? 'bg-white/20 text-white shadow-lg'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {t('register.login')}
              </button>
            </div>
          </div>

          {/* Form Container */}
          <form className="p-8 space-y-5">
            {/* Sign Up Fields */}
            {!isLogin && (
              <>
                {/* User Role Selection */}
                <div className="space-y-2 animate-in fade-in duration-300">
                  <label className="block text-white/90 text-sm font-semibold mb-3">
                    {t('register.role')}
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="userRole"
                        value="user"
                        checked={userRole === 'user'}
                        onChange={(e) => setUserRole(e.target.value)}
                        className="w-4 h-4 cursor-pointer"
                      />
                      <img src="/images/user.png" alt="User Icon" className="w-4 h-4 ml-2" />
                      <span className="ml-2 text-white/90 text-sm">{t('register.role.user')}</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="userRole"
                        value="organizer"
                        checked={userRole === 'organizer'}
                        onChange={(e) => setUserRole(e.target.value)}
                        className="w-4 h-4 cursor-pointer"
                      />
                      <img src="/images/organizer2.png" alt="Organizer Icon" className="w-4 h-4 ml-2" />
                      <span className="ml-2 text-white/90 text-sm">{t('register.role.organizer')}</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="userRole"
                        value="admin"
                        checked={userRole === 'admin'}
                        onChange={(e) => setUserRole(e.target.value)}
                        className="w-4 h-4 cursor-pointer"
                      />
                      <img src="/images/admin2.png" alt="Admin Icon" className="w-4 h-4 ml-2" />
                      <span className="ml-2 text-white/90 text-sm">{t('register.role.admin')}</span>
                    </label>
                  </div>
                </div>

                <div className="space-y-2 animate-in fade-in duration-300 delay-100">
                  <label className="block text-white/90 text-sm font-semibold">
                    {t('register.username')}
                  </label>
                  <input
                    type="text"
                    placeholder={t('register.username.placeholder')}
                    className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all"
                  />
                </div>

                <div className="space-y-2 animate-in fade-in duration-300 delay-100">
                  <label className="block text-white/90 text-sm font-semibold">
                    {t('register.email')}
                  </label>
                  <input
                    type="email"
                    placeholder={t('register.email.placeholder')}
                    className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all"
                  />
                </div>

                <div className="space-y-2 animate-in fade-in duration-300 delay-200">
                  <label className="block text-white/90 text-sm font-semibold">
                    {t('register.password')}
                  </label>
                  <input
                    type="password"
                    placeholder={t('register.password.create.placeholder')}
                    className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all"
                  />
                </div>

                <div className="space-y-2 animate-in fade-in duration-300 delay-300">
                  <label className="block text-white/90 text-sm font-semibold">
                    {t('register.password.confirm')}
                  </label>
                  <input
                    type="password"
                    placeholder={t('register.password.confirm.placeholder')}
                    className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all"
                  />
                </div>
              </>
            )}

            {/* Login Fields */}
            {isLogin && (
              <>
                <div className="space-y-2 animate-in fade-in duration-300">
                  <label className="block text-white/90 text-sm font-semibold mb-3">
                    {t('register.role')}
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="userRole"
                        value="user"
                        checked={userRole === 'user'}
                        onChange={(e) => setUserRole(e.target.value)}
                        className="w-4 h-4 cursor-pointer"
                      />
                      <img src="/images/user.png" alt="User Icon" className="w-4 h-4 ml-2" />
                      <span className="ml-2 text-white/90 text-sm">{t('register.role.user')}</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="userRole"
                        value="organizer"
                        checked={userRole === 'organizer'}
                        onChange={(e) => setUserRole(e.target.value)}
                        className="w-4 h-4 cursor-pointer"
                      />
                      <img src="/images/organizer2.png" alt="Organizer Icon" className="w-4 h-4 ml-2" />
                      <span className="ml-2 text-white/90 text-sm">{t('register.role.organizer')}</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="userRole"
                        value="admin"
                        checked={userRole === 'admin'}
                        onChange={(e) => setUserRole(e.target.value)}
                        className="w-4 h-4 cursor-pointer"
                      />
                      <img src="/images/admin2.png" alt="Admin Icon" className="w-4 h-4 ml-2" />
                      <span className="ml-2 text-white/90 text-sm">{t('register.role.admin')}</span>
                    </label>
                  </div>
                </div>
                <div className="space-y-2 animate-in fade-in duration-300">
                  <label className="block text-white/90 text-sm font-semibold">
                    {t('register.login.emailOrUsername')}
                  </label>
                  <input
                    type="text"
                    placeholder={t('register.login.placeholder')}
                    className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all"
                  />
                </div>

                <div className="space-y-2 animate-in fade-in duration-300 delay-100">
                  <div className="flex items-center justify-between">
                    <label className="block text-white/90 text-sm font-semibold">
                      {t('register.password')}
                    </label>
                    <a href="#" className="text-sm text-indigo-300 hover:text-indigo-200 transition-colors">
                      {t('register.forgot')}
                    </a>
                  </div>
                  <input
                    type="password"
                    placeholder={t('register.password.placeholder')}
                    className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all"
                  />
                </div>

                <div className="flex items-center pt-2 animate-in fade-in duration-300 delay-200">
                  <input
                    type="checkbox"
                    id="remember"
                    className="w-4 h-4 rounded border-white/20 bg-white/10 text-indigo-500 focus:ring-2 focus:ring-indigo-500"
                  />
                  <label htmlFor="remember" className="ml-2 text-sm text-white/80">
                    {t('register.remember')}
                  </label>
                </div>
              </>
            )}

            {/* Submit Button */}
              <button
              type="submit"
              className="w-full mt-8 py-3 px-4 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-indigo-900"
            >
              {isLogin ? t('register.signin') : t('register.createAccount')}
            </button>

            {/* Divider */}
            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20"></div>
              </div>
                <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white/5 text-white/60">{t('register.orContinue')}</span>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="grid gap-4">
                <button
                type="button"
                className="py-2.5 px-4 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/15 transition-all flex items-center justify-center gap-2 font-medium"
              >
                <img src="/images/google.png" alt="Google Icon" className="w-5 h-5" />
                {t('auth.google')}
              </button>
              <button
                type="button"
                className="py-2.5 px-4 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/15 transition-all flex items-center justify-center gap-2 font-medium"
              >
                <img src="/images/facebook.png" alt="Facebook Icon" className="w-5 h-5" />  
                {t('auth.facebook')}
              </button>
            </div>
          </form>
        

        {/* Footer Text */}
        <div className="text-center mt-2 text-white/80">
          {!isLogin ? (
            <p>{t('register.already')} <button onClick={() => setIsLogin(true)} className="text-indigo-300 hover:text-indigo-200 font-semibold transition-colors">{t('register.signin')}</button></p>
          ) : (
            <p>{t('register.noAccount')} <button onClick={() => setIsLogin(false)} className="text-indigo-300 hover:text-indigo-200 font-semibold transition-colors">{t('register.createAccount')}</button></p>
          )}
        </div> 
        </div>       
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
