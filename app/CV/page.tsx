export default function CVPage() {
  return (
    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden m-4 mr-20 ml-20">
      <object
        data="/cv.pdf#view=FitH"
        type="application/pdf"
        className="w-full h-[85vh]"
      />
    </div>
  );
}