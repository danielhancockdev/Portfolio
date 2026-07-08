export default function GamificationProjectPage() {
  return (
    <main className="min-h-screen px-6 py-12 text-zinc-900 dark:text-white">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* INTRO CARD */}
        {/* TOP INTRO SECTION */}
<section className="grid grid-cols-1 lg:grid-cols-3 gap-8">

  {/* DESCRIPTION CARD */}
  <div className="lg:col-span-2 bg-white dark:bg-zinc-900 
    border border-zinc-200 dark:border-zinc-800 
    rounded-xl p-8 shadow-sm">

    <h1 className="text-4xl font-bold mb-4">
      Gamification Application
    </h1>

    <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
      This project was developed as part of my Computer Science dissertation.
      The aim of the application was to investigate how gamification techniques
      can improve user engagement and motivation through features such as
      achievements, rewards, and progress tracking.
    </p>

    <p className="mt-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
      The application focused on designing an interactive experience that
      encourages users to complete tasks while providing feedback through
      gamified elements.
    </p>

  </div>


  {/* STACK CARD */}
  <div className="bg-white dark:bg-zinc-900 
    border border-zinc-200 dark:border-zinc-800 
    rounded-xl p-8 shadow-sm">

    <h2 className="text-2xl font-semibold mb-4">
      Technology Stack
    </h2>

    <ul className="space-y-3 text-zinc-700 dark:text-zinc-300">

      <li>
        <span className="font-semibold">Frontend:</span>
        <br />
        React, Next.js, TypeScript, Tailwind CSS
      </li>

      <li>
        <span className="font-semibold">Backend:</span>
        <br />
        Node.js, .NET
      </li>

      <li>
        <span className="font-semibold">Database:</span>
        <br />
        MySQL / Firebase
      </li>

      <li>
        <span className="font-semibold">Tools:</span>
        <br />
        Git, GitHub, Visual Studio Code
      </li>

    </ul>

  </div>

</section>

        {/* FEATURE CARD 1 */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center 
          bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 
          rounded-xl p-6 shadow-sm">

          <img
            src="/gamification-home.png"
            alt="Application homepage"
            className="rounded-xl border border-zinc-200 dark:border-zinc-700"
          />

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              Application Interface
            </h2>

            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
              This screenshot demonstrates the main application interface.
              Users can navigate through the system and access the available
              gamification features designed to encourage continued interaction.
            </p>
          </div>

        </section>


        {/* FEATURE CARD 2 */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center 
          bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 
          rounded-xl p-6 shadow-sm">

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              Achievement System
            </h2>

            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
              The achievement system rewards users for completing specific
              activities. This feature was implemented to increase motivation
              by providing users with visible progress and goals.
            </p>
          </div>

          <img
            src="/achievements.png"
            alt="Achievement system"
            className="rounded-xl border border-zinc-200 dark:border-zinc-700"
          />

        </section>


        {/* FEATURE CARD 3 */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center 
          bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 
          rounded-xl p-6 shadow-sm">

          <img
            src="/progress.png"
            alt="Progress tracking"
            className="rounded-xl border border-zinc-200 dark:border-zinc-700"
          />

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              User Progress Tracking
            </h2>

            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Progress tracking allows users to monitor their achievements and
              activity over time. This provides feedback and encourages users
              to continue engaging with the application.
            </p>
          </div>

        </section>

      </div>
    </main>
  );
}