import { useState, useCallback } from 'react';
import type { ChatMessage, AIAssistantConfig } from '../types';
import { getAIResponse } from '../services/geminiService';

export const useAIAssistant = (productContext: string, aiConfig: AIAssistantConfig) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      sender: 'ai',
      text: aiConfig.welcomeMessage
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now(),
      sender: 'user',
      text,
    };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setError(null);

    try {
      const aiText = await getAIResponse(text, productContext, aiConfig.personality);
      const aiMessage: ChatMessage = {
        id: Date.now() + 1,
        sender: 'ai',
        text: aiText,
      };
      setMessages(prev => [...prev, aiMessage]);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Ocorreu um erro desconhecido.';
      setError(errorMessage);
      const aiErrorMessage: ChatMessage = {
        id: Date.now() + 1,
        sender: 'ai',
        text: 'Desculpe, estou com problemas para me conectar. Tente novamente mais tarde.',
      };
      setMessages(prev => [...prev, aiErrorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, productContext, aiConfig.personality]);

  return { messages, isLoading, error, sendMessage };
};