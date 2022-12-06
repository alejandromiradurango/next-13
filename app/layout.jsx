import React from 'react';
import Header from '../components/Header';
import './globals.css'

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        {children}
        </body>
    </html>
  )
}

export default RootLayout;
