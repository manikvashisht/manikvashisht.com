import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { PaperAirplaneIcon, ArrowLeftIcon } from '@heroicons/react/24/solid';

interface ChatInterfaceProps {
    initialQuery: string;
    onBack: () => void;
}

export const ChatInterface = ({ initialQuery, onBack }: ChatInterfaceProps) => {
    const [messages, setMessages] = useState<{ role: 'user' | 'assistant', text: string }[]>([
        // If initialQuery exists, we'll add it in useEffect
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const bottomRef = useRef<HTMLDivElement>(null);
    const hasInitialized = useRef(false);

    // Initial Load Logic
    useEffect(() => {
        if (hasInitialized.current) return;
        hasInitialized.current = true;

        if (initialQuery) {
            handleSend(initialQuery);
        } else {
            setMessages([{ role: 'assistant', text: "Hey! I'm Manik's AI Agent. Ask me anything about his work, or use the buttons below to explore." }]);
        }
    }, []);

    // Scroll to bottom
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping]);

    const handleSend = (text: string) => {
        const query = text.trim();
        if (!query) return;

        setMessages(prev => [...prev, { role: 'user', text: query }]);
        setIsTyping(true);

        // Simulate AI Delay & Response
        setTimeout(() => {
            const lowerQ = query.toLowerCase();
            let response = "I can explore that with you. Would you like to see his Projects portfolio or Technical Skills?";

            if (lowerQ.includes('project') || lowerQ.includes('experience') || lowerQ.includes('work')) {
                response = `Manik is a veteran Software Engineer with <b>14 years of experience</b>, including <b>7 years as a Tech Lead</b>.<br><br>
                
                🔹 <b>CardinalHealth:</b> He is currently architecting scalable systems, leading GKE cloud platform initiatives, and driving modernization efforts.<br><br>
                
                🔹 <b>AI Engineering & Automation:</b> He is designing specialized <b>RAG-powered Chat Agents</b> for <b>eCommerce platforms</b>. His work focuses on orchestrating intelligent agents that automate complex workflows, enable context-aware product discovery, and streamline operational tasks.<br><br>                
                🔹 <b>Background:</b> Previously, as a Java Full Stack Lead at Accenture, he managed a $5M portfolio and delivered complex Spring Boot microservices.`;

            } else if (lowerQ.includes('skill') || lowerQ.includes('stack') || lowerQ.includes('tech')) {
                response = `Manik combines deep architectural expertise with modern AI Engineering capabilities:<br><br>

                🚀 <b>AI & ML:</b> Python, RAG Architectures, LLM Integration, Prompt Engineering.<br>
                ☁️ <b>Cloud & DevOps:</b> Google Kubernetes Engine (GKE), AWS, System Design (Scalability & Security).<br>
                💻 <b>Core Engineering:</b> Java (Full Stack Expert), Spring Boot, Distributed Systems, Microservices Design.`;

            } else if (lowerQ.includes('contact') || lowerQ.includes('email') || lowerQ.includes('location')) {
                response = `Manik is based in <b>Columbus, Ohio</b> and is currently <b>open for collaboration</b> for roles in Software Architecture or AI Engineering.<br><br>
                
                📧 <b>Email:</b> <a href="mailto:manik.vashisht89@gmail.com">manik.vashisht89@gmail.com</a><br>
                🔗 <b>LinkedIn:</b> <a href="https://www.linkedin.com/in/manik-vashisht-263b692a/" target="_blank">View Profile</a><br>
                🔗 <b>GitHub:</b> <a href="https://github.com/manikvashisht/" target="_blank">View Profile</a>`;
                // Note: Replace # with your actual LinkedIn URL inside the href

            } else if (lowerQ.includes('hello') || lowerQ.includes('hi') || lowerQ.includes('hey')) {
                response = `Hello! 👋 I am Manik's AI Portfolio Assistant.<br><br>
                
                I can discuss his <b>14-year Engineering Journey</b>, his transition into <b>AI & Research</b>, his <b>Tech Stack</b>, or how to <b>Contact</b> him.<br><br>
                
                What would you like to know?`;

            } else if (lowerQ.includes('summary') || lowerQ.includes('about')) {
                response = `Seasoned <b>Software Architect</b> and Tech Lead with <b>14+ years</b> of experience designing scalable, distributed systems for Fortune 500 enterprises. I bridge the gap between robust <b>Cloud-Native Architecture</b>and emerging <b>Artificial Intelligence</b>.
                            Currently focused on engineering production-grade AI applications, I leverage deep expertise in Java/Spring microservices, GKE, and DevSecOps to build secure, high-performance RAG pipelines and autonomous agentic workflows. Proven track record of managing $5M+ portfolios and leading cross-functional teams through digital transformation.`;

            } else {
                // Fallback block for unrecognized inputs
                response = `I'm not sure I understood that correctly. 🤔<br><br>
                
                You can ask me about Manik's <b>Experience</b>, <b>Projects</b>, <b>Skills</b>, or ask for his <b>Contact Info</b>.`;
            }

            setMessages(prev => [...prev, { role: 'assistant', text: response }]);
            setIsTyping(false);
        }, 800);
    };

    const handlePrompt = (label: string) => {
        let text = "";
        switch (label) {
            case 'Projects': text = "Tell me about your projects and experience."; break;
            case 'Skills': text = "What is your tech stack?"; break;
            case 'Contact': text = "How can I contact you?"; break;
            case 'Me': text = "Tell me a summary about Manik."; break;
        }
        handleSend(text);
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="flex flex-col h-screen bg-white pt-24 pb-6 px-4 md:px-0 max-w-4xl mx-auto relative z-20"
        >
            {/* Header / Nav */}
            <div className="flex items-center justify-between mb-6 px-4">
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-black transition-colors"
                >
                    <ArrowLeftIcon className="w-4 h-4" />
                    Back to Home
                </button>
                <div className="text-sm font-mono text-gray-300">AI AGENT ACTIVE</div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto px-4 space-y-6 scrollbar-hide">
                {messages.map((msg, idx) => (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        key={idx}
                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div
                            className={`max-w-[85%] md:max-w-[70%] p-5 rounded-3xl text-base leading-relaxed shadow-sm ${msg.role === 'user'
                                ? 'bg-black text-white rounded-tr-sm'
                                : 'bg-gray-100 text-gray-800 rounded-tl-sm'
                                }`}
                            dangerouslySetInnerHTML={{ __html: msg.text }}
                        />
                    </motion.div>
                ))}
                {isTyping && (
                    <div className="flex justify-start">
                        <div className="bg-gray-50 p-4 rounded-3xl rounded-tl-sm flex gap-1">
                            <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></span>
                            <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-75"></span>
                            <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-150"></span>
                        </div>
                    </div>
                )}
                <div ref={bottomRef} className="h-4" />
            </div>

            {/* Quick Actions (The "Links" user asked for) */}
            <div className="px-4 py-4">
                <div className="flex gap-2 mb-4 overflow-x-auto pb-2 scrollbar-hide">
                    {['Me', 'Projects', 'Skills', 'Contact'].map(item => (
                        <button
                            key={item}
                            onClick={() => handlePrompt(item)}
                            className="whitespace-nowrap px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-semibold text-gray-600 hover:bg-black hover:text-white hover:border-black transition-all shadow-sm"
                        >
                            {item}
                        </button>
                    ))}
                </div>

                {/* Input Bar */}
                <form
                    onSubmit={(e) => { e.preventDefault(); handleSend(input); setInput(''); }}
                    className="relative"
                >
                    <input
                        autoFocus
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask me anything..."
                        className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 pr-12 outline-none focus:ring-2 focus:ring-black/5 focus:border-black/20 transition-all font-medium text-lg placeholder-gray-400"
                    />
                    <button
                        type="submit"
                        disabled={!input.trim()}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black text-white rounded-xl hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                        <PaperAirplaneIcon className="w-5 h-5" />
                    </button>
                </form>
            </div>

        </motion.div>
    );
};
