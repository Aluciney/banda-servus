import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import GrupoImage from './assets/grupo.jpg';


export const App: React.FC = () => {
  return (
    <div className="min-h-lvh bg-black">
      <Header />
      <main className="pt-20 max-w-screen-xl mx-auto">
        <section id="home" className="h-screen bg-gray-200 scroll-mt-20 py-16" style={{ backgroundImage: 'url(/grupo.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-center font-bold text-white">Banda Servus</h1>
          <div className="">
            <div className="flex flex-col items-center sm:items-end text-gray-400 px-4">
              <p>"Ide por tudo mundo, proclamai o Evangelho a toda criatura"</p>
              <p>Marcos 16:15</p>
            </div>
          </div>
        </section>
        <section id="photos" className="h-screen bg-gray-500 scroll-mt-20">
          <h2 className="text-4xl text-center font-bold text-gray-800">Photos</h2>
          <p className="text-center text-gray-600">Check out our latest photos from gigs and events.</p>
        </section>
        <section id="about" className="h-screen bg-gray-300 scroll-mt-20">
          <h2 className="text-4xl text-center font-bold text-gray-800">About Us</h2>
          <p className="text-center text-gray-600">We are a band that loves to play music and connect with our fans.</p>
        </section>
        <section id="contact" className="h-screen bg-gray-400 scroll-mt-20">
          <h2 className="text-4xl text-center font-bold text-gray-800">Contact Us</h2>
          <p className="text-center text-gray-600">Feel free to reach out to us for any inquiries or collaborations.</p>
        </section>
        <Footer />
      </main>
    </div>
  )
};