import { motion } from 'framer-motion';

export const Header = () => {
    return (
        <>
            {/* Top Left: Identity */}
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="fixed top-6 left-6 z-[100]"
            >
                <div className="bg-white/90 backdrop-blur-md border border-gray-200 shadow-sm rounded-full px-4 py-2 flex items-center gap-3 cursor-pointer hover:shadow-md transition-all">
                    <div className="w-2 h-2 rounded-full bg-black"></div>
                    <span className="text-sm font-bold tracking-tight">Manik Vashisht</span>
                    <span className="text-xs text-gray-400 border-l border-gray-200 pl-3">AI Engineer</span>
                </div>
            </motion.div>

            {/* Top Right: Action */}
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="fixed top-6 right-6 z-[100]"
            >
                <button className="bg-black text-white rounded-full px-5 py-2 text-sm font-semibold shadow-lg hover:scale-105 transition-transform flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    Open to Work
                </button>
            </motion.div>
        </>
    );
};
