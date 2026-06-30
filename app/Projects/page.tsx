import Link from "next/link";

export default function ProjectsPage() {
    return (
        <div className="lg:col-span-2 space-y-6">
            {/* Projects Header Box */}
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-8 shadow-sm">
                <h1 className="text-2xl font-semibold text-center text-zinc-900 dark:text-white">
                    Projects
                </h1>
            </div>

            {/* Project Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                <Link href="/Projects/GamificationProject">
                    <div className="rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-700 hover:scale-110 transition-all duration-300 cursor-pointer">
                        <img
                            src="/gamification.png"
                            alt="Gamification Application"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4 bg-zinc-200 dark:bg-zinc-900 hover:scale-105 transition-all duration-300">
                            <h2 className="text-lg font-semibold text-center text-zinc-900 dark:text-white">
                                Gamification Application
                            </h2>
                        </div>
                    </div>
                </Link>

                <div className="rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-700 shadow-md hover:scale-110 transition-all duration-300">
                    <img
                        src="/profile.png"
                        alt="Mobile Chat App"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4 bg-zinc-200 dark:bg-zinc-900">
                        <h2 className="text-lg font-semibold text-center text-zinc-900 dark:text-white">
                            Mobile Chat App
                        </h2>
                    </div>
                </div>

                <div className="rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-700 hover:scale-110 transition-all duration-300">
                    <img
                        src="/profile.png"
                        alt="IoT Device and Software"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4 bg-zinc-200 dark:bg-zinc-900">
                        <h2 className="text-lg font-semibold text-center text-zinc-900 dark:text-white">
                            IoT Device and Software
                        </h2>
                    </div>
                </div>

                <div className="rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-700 hover:scale-110 transition-all duration-300">
                    <img
                        src="/profile.png"
                        alt="Placeholder 4"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4 bg-zinc-200 dark:bg-zinc-900">
                        <h2 className="text-lg font-semibold text-center text-zinc-900 dark:text-white">
                            Placeholder 4
                        </h2>
                    </div>
                </div>

                <div className="rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-700 hover:scale-110 transition-all duration-300">
                    <img
                        src="/profile.png"
                        alt="Placeholder 5"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4 bg-zinc-200 dark:bg-zinc-900">
                        <h2 className="text-lg font-semibold text-center text-zinc-900 dark:text-white">
                            Placeholder 5
                        </h2>
                    </div>
                </div>

                <div className="rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-700 hover:scale-110 transition-all duration-300">
                    <img
                        src="/profile.png"
                        alt="Placeholder 6"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4 bg-zinc-200 dark:bg-zinc-900">
                        <h2 className="text-lg font-semibold text-center text-zinc-900 dark:text-white">
                            Placeholder 6
                        </h2>
                    </div>
                </div>

            </div>
        </div>
    );
}