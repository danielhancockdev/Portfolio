"use client";

import { useState } from "react";

type Message = {
  role: "user" | "ai";
  text: string;
};

export default function MiniAssistantPage() {
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userText = input;

    setMessages((prev) => [
      ...prev,
      { role: "user", text: userText },
    ]);

    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userText,
        }),
      });

      const data = await res.json();

     setMessages((prev) => [
  ...prev,
  { role: "ai", text: data.reply ?? "No response from Gemini" },
]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: "Error: something went wrong." },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="mx-auto mt-8 w-full max-w-3xl rounded-xl bg-zinc-100 p-4 shadow-lg dark:bg-zinc-950 sm:p-6 lg:p-8">
  <h1 className="mb-4 text-2xl font-bold text-zinc-900 dark:text-zinc-100">
    AI Mini Assistant
  </h1>

  {/* Chat Box */}
  <div className="h-[60vh] space-y-3 overflow-y-auto rounded-lg border border-zinc-300 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-900">
    {messages.map((msg, i) => (
      <div
        key={i}
        className={`flex ${
          msg.role === "user" ? "justify-end" : "justify-start"
        }`}
      >
        <div
          className={`max-w-[80%] rounded-xl px-4 py-2 ${
            msg.role === "user"
              ? "bg-zinc-900 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-900"
              : "bg-zinc-200 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100"
          }`}
        >
          {msg.text}
        </div>
      </div>
    ))}

    {loading && (
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        Thinking...
      </p>
    )}
  </div>

  {/* Input */}
  <div className="mt-4 flex overflow-hidden rounded-lg border border-zinc-300 bg-white dark:border-zinc-700 dark:bg-zinc-800">
    <input
      className="flex-1 bg-transparent p-3 text-zinc-900 placeholder:text-zinc-500 outline-none dark:text-zinc-100 dark:placeholder:text-zinc-400"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Ask something..."
      onKeyDown={(e) => {
        if (e.key === "Enter") sendMessage();
      }}
    />

    <button
      onClick={sendMessage}
      className="bg-zinc-900 px-6 font-medium text-zinc-100 transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
    >
      Send
    </button>
  </div>
</div>
  );
}