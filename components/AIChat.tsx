import React, { useState, useRef, useEffect } from 'react';
import { useAIAssistant } from '../hooks/useAIAssistant';
import type { ChatMessage, AIAssistantConfig } from '../types';

interface AIChatProps {
  productContext: string;
  aiConfig: AIAssistantConfig;
}

const colorThemes = {
  cyan: {
    bg: 'bg-cyan-500',
    hoverBg: 'hover:bg-cyan-600',
    text: 'text-cyan-400',
    dot: 'bg-cyan-400',
    userBubble: 'bg-cyan-500',
  },
  indigo: {
    bg: 'bg-indigo-500',
    hoverBg: 'hover:bg-indigo-600',
    text: 'text-indigo-400',
    dot: 'bg-indigo-400',
    userBubble: 'bg-indigo-500',
  },
  emerald: {
    bg: 'bg-emerald-500',
    hoverBg: 'hover:bg-emerald-600',
    text: 'text-emerald-400',
    dot: 'bg-emerald-400',
    userBubble: 'bg-emerald-500',
  },
  rose: {
    bg: 'bg-rose-500',
    hoverBg: 'hover:bg-rose-600',
    text: 'text-rose-400',
    dot: 'bg-rose-400',
    userBubble: 'bg-rose-500',
  },
};

const AIChat: React.FC<AIChatProps> = ({ productContext, aiConfig }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const { messages, isLoading, sendMessage } = useAIAssistant(productContext, aiConfig);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const theme = colorThemes[aiConfig.themeColor] || colorThemes.cyan;

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputValue);
    setInputValue('');
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`${theme.bg} text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg ${theme.hoverBg} transition-all duration-300 transform hover:scale-110`}
        >
          <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-robot'} text-2xl`}></i>
        </button>
      </div>
      <div
        className={`fixed bottom-24 right-6 w-[calc(100%-3rem)] sm:w-96 h-[70vh] bg-slate-800 rounded-2xl shadow-2xl flex flex-col z-50 transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <div className="bg-slate-900 p-4 rounded-t-2xl shadow-md flex items-center gap-4">
          <img src={aiConfig.avatarUrl} alt="AI Avatar" className="w-10 h-10 rounded-full" />
          <h3 className="text-lg font-bold text-white">Assistente Virtual</h3>
        </div>
        
        <div className="flex-1 p-4 overflow-y-auto">
          {messages.map((msg: ChatMessage) => (
            <div key={msg.id} className={`flex mb-4 items-end gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              {msg.sender === 'ai' && (
                <img src={aiConfig.avatarUrl} alt="AI Avatar" className="w-8 h-8 rounded-full self-start" />
              )}
              <div
                className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                  msg.sender === 'user'
                    ? `${theme.userBubble} text-white rounded-br-none`
                    : 'bg-slate-700 text-gray-200 rounded-bl-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start items-end gap-2 mb-4">
               <img src={aiConfig.avatarUrl} alt="AI Avatar" className="w-8 h-8 rounded-full" />
               <div className="bg-slate-700 text-gray-200 rounded-2xl rounded-bl-none px-4 py-3 flex items-center space-x-2">
                 <div className={`w-2 h-2 ${theme.dot} rounded-full animate-pulse`}></div>
                 <div className={`w-2 h-2 ${theme.dot} rounded-full animate-pulse [animation-delay:0.2s]`}></div>
                 <div className={`w-2 h-2 ${theme.dot} rounded-full animate-pulse [animation-delay:0.4s]`}></div>
               </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>
        
        <form onSubmit={handleSend} className="p-4 border-t border-slate-700">
          <div className="flex items-center bg-slate-700 rounded-full">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Digite sua dúvida..."
              className="w-full bg-transparent text-white px-5 py-3 focus:outline-none"
              disabled={isLoading}
              aria-label="Chat input"
            />
            <button
              type="submit"
              disabled={isLoading || !inputValue.trim()}
              className={`${theme.bg} rounded-full w-10 h-10 flex-shrink-0 mr-2 flex items-center justify-center text-white disabled:bg-slate-600 disabled:cursor-not-allowed ${theme.hoverBg} transition-colors`}
              aria-label="Send message"
            >
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AIChat;