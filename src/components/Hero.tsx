import { useState } from 'react';
import { motion } from 'framer-motion';
import { MagnifyingGlassIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { BentoGrid } from './BentoGrid';

interface HeroProps {
    onSearch: (query: string) => void; // Changed prop name and type
}

export const Hero = ({ onSearch }: HeroProps) => { // Changed prop name
    const [inputValue, setInputValue] = useState(''); // Added state for input

    const handleSubmit = (e?: React.FormEvent) => { // Added handleSubmit function
        e?.preventDefault();
        if (inputValue.trim()) {
            onSearch(inputValue);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center pt-32 pb-20 relative">

            {/* Small Background Blur - Strictly positioned */}
            <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

            {/* Greeting */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12 relative z-20"
            >
                <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-4">
                    Hey, I'm Manik <span className="inline-block animate-bounce origin-bottom">👋</span>
                </h1>
                <p className="text-xl text-gray-500 font-medium">
                    Building the future with <span className="text-black font-semibold">AI & Architecture</span>
                </p>
            </motion.div>

            {/* Search / Chat Input */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="w-full max-w-xl relative mb-20 px-4 z-30"
            >
                <form // Changed div to form
                    onSubmit={handleSubmit} // Added onSubmit handler
                    className="flex items-center px-6 py-5 bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 cursor-text group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow"
                >
                    <MagnifyingGlassIcon
                        className="h-6 w-6 text-gray-400 group-hover:text-[var(--accent-blue)] transition-colors cursor-pointer" // Added cursor-pointer
                        onClick={() => handleSubmit()} // Added onClick handler
                    />
                    <input
                        type="text"
                        value={inputValue} // Made input controlled
                        onChange={(e) => setInputValue(e.target.value)} // Added onChange handler
                        placeholder="Ask me anything about my work..."
                        className="flex-1 ml-4 bg-transparent outline-none text-lg text-gray-800 placeholder-gray-400" // Removed cursor-text
                    />
                    <div className="hidden md:block">
                        <kbd className="px-2 py-1 bg-gray-50 border border-gray-200 rounded text-xs text-gray-400 font-mono">Enter</kbd> {/* Changed kbd text */}
                    </div>
                </form>
            </motion.div>

            {/* The Grid */}
            <BentoGrid onSearch={onSearch} />

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 15, 0] }}
                transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer text-gray-900 hover:text-blue-600 transition-colors"
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <span className="text-sm font-bold tracking-widest uppercase">Scroll Down</span>
                <ChevronDownIcon className="w-6 h-6 stroke-2" />
            </motion.div>

        </div>
    );
};
