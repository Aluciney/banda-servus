import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';


export const App: React.FC = () => {
  return (
    <div className="relative max-h-lvh">
      <Header />
      <main className="pt-16">
        <section id="home" className="h-screen bg-gray-200">
          <h1 className="text-5xl text-center font-bold text-gray-800">Welcome to Banda Servus</h1>
          <p className="text-center text-gray-600">A digital platform for musicians, bands, and fans</p>
        </section>
        <section id="photos" className="h-screen bg-gray-500">
          <h2 className="text-4xl text-center font-bold text-gray-800">Photos</h2>
          <p className="text-center text-gray-600">Check out our latest photos from gigs and events.</p>
        </section>
        <section id="about" className="h-screen bg-gray-300">
          <h2 className="text-4xl text-center font-bold text-gray-800">About Us</h2>
          <p className="text-center text-gray-600">We are a band that loves to play music and connect with our fans.</p>
        </section>
        <section id="contact" className="h-screen bg-gray-400">
          <h2 className="text-4xl text-center font-bold text-gray-800">Contact Us</h2>
          <p className="text-center text-gray-600">Feel free to reach out to us for any inquiries or collaborations.</p>
        </section>
        <Footer />
      </main>
    </div>
  )
};