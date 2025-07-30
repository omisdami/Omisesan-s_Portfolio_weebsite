import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Project';
import Resume from './components/Resume';
import Contact from './components/Contacts';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Resume />
        <Contact />
      </main>
    </div>
  );
}

export default App;
