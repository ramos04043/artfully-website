import { useState, useRef, useEffect } from "react";
import { X, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { findBestIntent, fallbackResponse } from "@/lib/chatbot-knowledge";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  quickActions?: string[] | undefined;
}

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello and welcome to Artfully! 🎨 I am your automated assistant. How can I help you today?\n\nYou can ask me about:\n• 🎨 Art mediums & classes (Watercolor, Acrylics, Texture, Geometry, Pottery)\n• 🗓️ Weekend masterclass schedules\n• 🖌️ Walk-in painting sessions\n• 📍 Location & studio hours in Salem\n\nWe're open 6 days a week, 11 AM–9 PM (Closed only on Tuesdays)",
      sender: "bot",
      timestamp: new Date(),
      quickActions: ["Classes", "Workshops", "Walk-In", "Contact"],
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): { text: string; quickActions?: string[] | undefined } => {
    // Use the knowledge base to find the best matching intent
    const matchedIntent = findBestIntent(userMessage);

    if (matchedIntent) {
      // Use quick reply for shorter, more conversational responses
      return {
        text: matchedIntent.quickReply,
        quickActions: matchedIntent.quickActions || undefined,
      };
    }

    // Return fallback response if no match found
    return {
      text: fallbackResponse.quickReply,
      quickActions: fallbackResponse.quickActions || undefined,
    };
  };

  const handleQuickReply = (reply: string) => {
    // Remove emojis from the reply text
    const cleanReply = reply.replace(/[🎨🚶🎉📞🖌️📍💼🎁👶]/g, '').trim();
    
    const userMessage: Message = {
      id: messages.length + 1,
      text: cleanReply,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    // Simulate bot thinking
    setTimeout(() => {
      const response = getBotResponse(cleanReply);
      const botMessage: Message = {
        id: messages.length + 2,
        text: response.text,
        sender: "bot",
        timestamp: new Date(),
        quickActions: response.quickActions,
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 800);
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    const messageToProcess = inputValue;
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Simulate bot thinking
    setTimeout(() => {
      const response = getBotResponse(messageToProcess);
      const botMessage: Message = {
        id: messages.length + 2,
        text: response.text,
        sender: "bot",
        timestamp: new Date(),
        quickActions: response.quickActions,
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 group"
          aria-label="Open chat"
        >
          <div className="relative">
            {/* Mascot Image */}
            <div className="w-24 h-24 transition-transform duration-300 hover:scale-110 animate-bounce-slow drop-shadow-2xl">
              <img
                src="/art.png"
                alt="Arty the Art Studio Mascot"
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Fallback if image doesn't load
                  (e.target as HTMLImageElement).style.display = "none";
                  (e.target as HTMLImageElement).parentElement!.innerHTML =
                    '<div class="w-full h-full flex items-center justify-center text-4xl">🎨</div>';
                }}
              />
            </div>

            {/* Notification Badge */}
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-pulse shadow-lg">
              1
            </div>

            {/* Chat Bubble Tooltip */}
            <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
                Chat with Arty! 🎨
                <div className="absolute top-full right-4 -mt-px">
                  <div className="border-8 border-transparent border-t-gray-900"></div>
                </div>
              </div>
            </div>
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border-2 border-[#607456] animate-slide-up">
          {/* Header */}
          <div className="bg-[#607456] p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center">
                <img
                  src="/art.png"
                  alt="Arty"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                    (e.target as HTMLImageElement).parentElement!.innerHTML =
                      '<div class="w-full h-full flex items-center justify-center text-2xl">🎨</div>';
                  }}
                />
              </div>
              <div>
                <h3 className="text-[#FFF2DB] font-bold text-lg">Arty</h3>
                <p className="text-[#FFF2DB]/80 text-xs">Your Creative Guide</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-[#FFF2DB] hover:bg-white/20 rounded-full"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Messages Area */}
          <ScrollArea className="flex-1 p-4 bg-[#FFF2DB]">
            <div className="space-y-4">
              {messages.map((message) => (
                <div key={message.id}>
                  <div
                    className={`flex ${
                      message.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                        message.sender === "user"
                          ? "bg-[#607456] text-[#FFF2DB] rounded-br-sm"
                          : "bg-white border-2 border-[#607456]/20 text-[#493628] rounded-bl-sm shadow-sm"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                      <p
                        className={`text-xs mt-1 ${
                          message.sender === "user"
                            ? "text-[#FFF2DB]/70"
                            : "text-[#493628]/50"
                        }`}
                      >
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                  
                  {/* Quick Actions for bot messages */}
                  {message.sender === "bot" && message.quickActions && (
                    <div className="flex gap-2 mt-2 ml-2">
                      {message.quickActions.map((action) => (
                        <button
                          key={action}
                          onClick={() => handleQuickReply(action)}
                          className="px-3 py-1 bg-white border border-[#607456] text-[#607456] rounded-full text-xs font-medium hover:bg-[#607456] hover:text-[#FFF2DB] transition-colors"
                        >
                          {action}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-[#607456]/20">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="flex-1 rounded-full border-2 border-[#607456]/30 focus:border-[#607456] focus-visible:ring-[#607456]"
              />
              <Button
                onClick={handleSend}
                size="icon"
                className="rounded-full bg-[#607456] hover:bg-[#493628] w-10 h-10"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
