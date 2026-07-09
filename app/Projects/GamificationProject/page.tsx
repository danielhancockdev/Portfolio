export default function GamificationProjectPage() {
  return (
    <main className="min-h-screen px-6 py-12 text-zinc-900 dark:text-white">
      <div className="max-w-6xl mx-auto space-y-10">
<section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
    <p className="mt-4">
  <a
    href="https://github.com/danielhancockdev/FlutterDissertationProject"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:underline dark:text-blue-400"
  >
    Project Repo
  </a>
</p>
     
    
  </div>

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
        Flutter
      </li>

      <li>
        <span className="font-semibold">Backend:</span>
        <br />
        Dart
      </li>

      <li>
        <span className="font-semibold">Database:</span>
        <br />
        Firebase, Firestore, NoSQL
      </li>

      <li>
        <span className="font-semibold">Tools:</span>
        <br />
        Git, GitHub, Visual Studio Code
      </li>

    </ul>

  </div>

</section>
        {/* Left Image 1 */}
        <section className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-6">

  <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 shadow-sm">
    <img
      src="/project1/loginpage.png"
      alt="Application homepage"
      className="w-full rounded-lg border border-zinc-200 dark:border-zinc-700"
    />
  </div>

  <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 shadow-sm">
    <h2 className="text-2xl font-semibold mb-4">
      Application Interface/Login Screen
    </h2>

    <ul className="list-disc pl-5 space-y-3 text-zinc-700 dark:text-zinc-300 leading-relaxed">
      <li>
        This screenshot shows the login screen for the application and the general UI layout.
      </li>
      <li>
        The layout was designed primarily for mobile devices, but can also be used as a web application.
      </li>
      <li>
        A dark/light mode toggle uses <code>themeServices</code> to keep the theme consistent across all pages.
      </li>
      <li>
        The users can choose between login if they already have an account or signup the accounts are stored in a firebase firestore for perminence.
      </li>
      <li>
        Users data is secured appropriately passwords are hashed and never in plain text.
      </li>
      <li>
        For testing purposes I intentionally didn`t require 2FA but it would be included if it became a commercial project.
      </li>
      <li>
        This is also the case for email verification, so I could test multiple accounts I didn`t verify emails although they did have to be formatted like an email
      </li>
    </ul>
  </div>

</section>
{/* Right Image 1 */}
<section className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-6">
  <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 shadow-sm">
    <h2 className="text-2xl font-semibold mb-4">
      Home Page
    </h2>

    <ul className="list-disc pl-5 space-y-3 text-zinc-700 dark:text-zinc-300 leading-relaxed">
      <li>
        This screenshot shows the homepage which is the landing page after you login and has all of the application usage options.
      </li>
      <li>
        There is a small personalised welcome message so you can verify you are logged in as the correct user.
      </li>
      <li> 
        The dark/light mode button persists on the header throught-out the application.
      </li>
      <li>
        The title of the current application page is also typed in the header to help track navigation alongside a back button to go to the previous page.
      </li>
      <li>
        Each function button is a large square this is for accessibility and ease of use on mobile devices-
      </li>
      <li>
        Each button has the title and icon also for accessibility because on mobile devices there is no hover alt-text
      </li>
    
      <li>
        At the bottom is a log out button if you wish to changed account the app uses a token to keep you logged in if you clsoe the applications.
      </li>
    </ul>
  </div>
  <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 shadow-sm">
    <img
      src="/project1/homepage.png"
      alt="Achievement system"
      className="w-full rounded-lg border border-zinc-200 dark:border-zinc-700"
    />
  </div>

</section>      
      </div>
    </main>
  );
}