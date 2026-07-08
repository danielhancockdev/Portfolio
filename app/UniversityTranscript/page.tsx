import Image from "next/image";

export default function UniversityTranscriptPage() {
  return (
    <div className="mx-auto my-4 w-full max-w-7xl rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
      <Image
        src="/fulltranscriptx2.png"
        alt="University Transcript 1"
        width={1600}
        height={1600}
        className="w-full h-auto"
        priority
      />
    </div>
  );
}