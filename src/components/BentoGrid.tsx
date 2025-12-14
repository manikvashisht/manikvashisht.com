import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import profileImage from '../assets/Asset.jpg';

interface BentoGridProps {
    onSearch: (query: string) => void;
}

export const BentoGrid = ({ onSearch }: BentoGridProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="w-full max-w-6xl mx-auto px-4 pb-20 grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 relative z-10"
        >
            {/* Card 1: Me (Profile Photo) - Triggers Bio */}
            <div
                onClick={() => onSearch("Tell me about Manik")}
                className="md:col-span-1 md:row-span-2 h-[500px] md:h-auto min-h-[400px] relative rounded-[2rem] overflow-hidden group border border-gray-100 shadow-sm cursor-pointer bg-gray-100"
            >
                <img
                    src={profileImage}
                    alt="Manik Vashisht"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0 grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-6 left-6 text-white">
                    <div className="text-xs font-mono opacity-70 mb-1 tracking-wider">LOCATION</div>
                    <div className="font-bold text-2xl">Columbus, Ohio</div>
                </div>
            </div>

            {/* Card 2: Experience (Projects) - Triggers Experience Query */}
            <div
                onClick={() => onSearch("What is your experience and project history?")}
                className="md:col-span-2 bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all group flex flex-col justify-between h-[280px] cursor-pointer"
            >
                <div className="flex justify-between items-start">
                    <span className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <ArrowUpRightIcon className="w-6 h-6" />
                    </span>
                    <span className="text-5xl font-black text-gray-900 tracking-tighter">14+</span>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Projects & Exp.</h3>
                    <p className="text-base text-gray-500 font-medium">Delivering scalable enterprise software applications.</p>
                </div>
            </div>

            {/* Card 3: Skills (Stack) - Triggers Stack Query */}
            <div
                onClick={() => onSearch("What is your technical stack?")}
                className="md:col-span-1 bg-[#111] text-white p-8 rounded-[2rem] shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col justify-between h-[280px] cursor-pointer"
            >
                <div>
                    <div className="text-xs font-mono text-gray-400 mb-6 border-b border-gray-700 pb-3 tracking-wider">STACK</div>
                    <div className="flex flex-wrap gap-2">
                        {['Java', 'Python', 'Spring Boot', 'GKE', 'AWS', 'RAG Architecture', 'LLMs', 'Microservices'].map(tech => (
                            <span key={tech} className="px-2 py-1 bg-white/10 rounded-lg text-xs font-medium">{tech}</span>
                        ))}
                    </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <span className="font-bold text-xl tracking-tight">Skills</span>
                    <ArrowUpRightIcon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                </div>
            </div>

            {/* Card 4: Contact - Triggers Contact Query */}
            {/* Let's make it sit below Projects/Skills. Layout:
            [ Me ] [ Projects (2) ] [ Skills (1) ]
            [ Me ] [ Contact (3) ... ]  <- This breaks vertical alignment of Me.

            Let's keep Me separate.
            Desktop Grid is 4 Cols.
            Row 1: [ Me (1) ] [ Projects (2) ] [ Skills (1) ]
            Row 2: [ Me (cont) ] [ Contact (3) ]
        */}

            <div
                onClick={() => onSearch("How can I contact/collaborate with you?")}
                className="md:col-span-3 bg-blue-600 text-white p-8 rounded-[2rem] shadow-sm hover:shadow-lg hover:bg-blue-700 transition-all cursor-pointer flex items-center justify-between group h-[120px]"
            >
                <div>
                    <h3 className="text-2xl font-bold">Open for Collaboration</h3>
                    <p className="text-blue-200">click to connect.</p>
                </div>
                <div className="bg-white/20 p-3 rounded-full group-hover:scale-110 transition-transform">
                    <ArrowUpRightIcon className="w-6 h-6 text-white" />
                </div>
            </div>

        </motion.div>
    );
};
