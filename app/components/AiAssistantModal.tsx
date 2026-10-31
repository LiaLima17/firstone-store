"use client";

import { useState } from "react";
import { Sparkles, X, Send } from "lucide-react";

interface AIAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AIAssistantModal({ isOpen, onClose }: AIAssistantModalProps) {
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Olá! Sou o assistente virtual da Firstone. Como posso ajudar a montar o teu look streetwear ideal hoje?" }
  ]);
  const [input, setInput] = useState("");

  if (!isOpen) return null;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input;
    setMessages((prev) => [...prev, { sender: "user", text: userMsg }]);
    setInput("");

    setTimeout(() => {
      let aiResponse = "Recomendo combinar o nosso Oversized Heavy Hoodie com as Cargo Technical Pants para um visual techwear imponente.";
      if (userMsg.toLowerCase().includes("tamanho")) {
        aiResponse = "Para uma modelagem boxy/oversized autêntica, aconselho o teu tamanho habitual.";
      }
      setMessages((prev) => [...prev, { sender: "ai", text: aiResponse }]);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-lg border border-zinc-800 bg-[#121214] shadow-2xl">
        <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-4">
          <div className="flex items-center gap-2 text-orange-400">
            <Sparkles className="h-5 w-5" />
            <h2 className="text-sm font-bold tracking-widest uppercase text-white">Firstone AI Stylist</h2>
          </div>
          <button onClick={onClose} className="text-zinc-400 hover:text-white">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="h-80 overflow-y-auto p-6 space-y-4">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[80%] p-4 text-xs leading-relaxed ${
                msg.sender === "user" 
                  ? "bg-orange-500 text-white font-medium" 
                  : "border border-zinc-800 bg-zinc-900 text-zinc-300"
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleSend} className="flex border-t border-zinc-800 p-4 bg-zinc-950">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Pergunta sobre tamanhos ou combinações..."
            className="flex-1 bg-transparent px-4 py-2 text-xs text-white placeholder-zinc-600 focus:outline-none"
          />
          <button type="submit" className="bg-orange-500 px-4 py-2 text-white hover:bg-orange-600">
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
}