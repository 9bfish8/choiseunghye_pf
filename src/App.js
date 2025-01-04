import React from 'react';
import Header from "./components/Header";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";


const App = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <main className="container mx-auto px-4 py-8">
                <Profile />
                <Projects />
            </main>
            <Footer />
        </div>
    );
};

export default App;