import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ChatInterface } from './components/ChatInterface';
import { Experience } from './components/Experience';
import { MouseSpotlight } from './components/MouseSpotlight';

function App() {
    const [view, setView] = useState<'home' | 'chat'>('home');
    const [initialQuery, setInitialQuery] = useState('');

    const handleSearch = (query: string) => {
        setInitialQuery(query);
        setView('chat');
    };

    return (
        <div className="min-h-screen bg-[#f8f9fa] selection:bg-black selection:text-white pb-20 font-sans">

            {/* 1. Fixed Elements */}
            <MouseSpotlight />
            <Header />

            {/* 2. Main View Switch */}
            {view === 'home' ? (
                <>
                    <Hero onSearch={handleSearch} />
                    <Experience />
                </>
            ) : (
                <ChatInterface
                    initialQuery={initialQuery}
                    onBack={() => setView('home')}
                />
            )}

        </div>
    );
}

export default App;
