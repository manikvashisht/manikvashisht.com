export const EXPERIENCE_DATA = [
    {
        year: "2023 — Present",
        title: "Sr. Engineer - Application & AI Engineering",
        company: "CardinalHealth", // Replace with actual company name if desired
        description: "Spearheading the convergence of Cloud-Native Infrastructure and AI. Architecting secure GKE platforms [cite: 21] and DevSecOps pipelines [cite: 25] that serve as the foundation for deploying production-grade RAG pipelines and Python-based AI agents.",
        badges: ["GKE/Kubernetes", "GenAI Agents", "RAG Pipelines", "DevSecOps", "Python"]
    },
    {
        year: "2021 — 2023",
        title: "Application Development Manager",
        company: "Accenture",
        description: "Orchestrated delivery for a $5M portfolio , serving as the primary Tech Lead [cite: 43] for cloud transformation. Directed full-stack teams in building scalable Spring Boot & Angular systems [cite: 47] while managing vendor relationships and roadmap strategy[cite: 28, 40].",
        badges: ["Portfolio Mgmt ($5M)", "Cloud Strategy", "Angular/Spring", "Team Leadership"]
    },
    {
        year: "2019 — 2021",
        title: "Associate Manager - Distributed Systems",
        company: "Accenture",
        description: "Designed resilient, event-driven microservices using the Spring Cloud ecosystem (Hystrix, Eureka)[cite: 56, 58]. Modernized legacy monolithic architectures into distributed systems secured by Okta SSO [cite: 62] and deployed via automated Jenkins/Concourse pipelines[cite: 59].",
        badges: ["Distributed Systems", "Microservices", "System Resilience", "Okta Security"]
    },
    {
        year: "2011 — 2019",
        title: "Team Lead & Senior Analyst",
        company: "Accenture",
        description: "Foundational engineering leadership. Bridged the gap between legacy enterprise frameworks (IBM Websphere, JSR 286) [cite: 75, 95] and modern cloud-native adoption (PCF PaaS, Spring Boot)[cite: 81, 82]. Led multiple development teams through the full SDLC[cite: 73].",
        badges: ["Java Expert", "Legacy Modernization", "Pivotal Cloud Foundry", "IBM Websphere"]
    }
];

export const Experience = () => {
    return (
        <section id="experience" className="py-20 md:py-32 px-4 max-w-6xl mx-auto relative z-10">

            <div className="mb-12 md:mb-20">
                <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
                    14+ Years of Engineering.
                </h2>
                <p className="text-xl text-gray-500 max-w-2xl">
                    From managing <b>$5M portfolios</b> at Accenture to architecting <b>Autonomous AI Agents</b>. A journey of continuous evolution.
                </p>
            </div>

            <div className="flex flex-col gap-8">
                {EXPERIENCE_DATA.map((item, idx) => (
                    <div key={idx} className="group flex flex-col md:flex-row gap-8 p-8 rounded-[2.5rem] bg-white border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-500">

                        {/* Left: Year & Company */}
                        <div className="md:w-1/4 flex flex-col justify-between">
                            <span className="text-lg font-mono text-gray-400 font-medium tracking-wide">{item.year}</span>
                            <span className="text-xl font-bold text-gray-900 mt-2">{item.company}</span>
                        </div>

                        {/* Right: Details */}
                        <div className="md:w-3/4">
                            <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                {item.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {item.badges.map(tech => (
                                    <span key={tech} className="px-4 py-2 bg-gray-50 rounded-full text-sm font-semibold text-gray-600 border border-gray-100">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>
                ))}
            </div>

        </section>
    );
};
