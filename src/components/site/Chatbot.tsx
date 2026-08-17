import { useState, useRef, useEffect } from "react";
import { X, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi there! 🎨 I'm Arty, your creative guide! How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
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

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    if (
      message.includes("hello") ||
      message.includes("hi") ||
      message.includes("hey")
    ) {
      return "Hello! 👋 Welcome to our Art Studio! I'd love to help you explore our classes, workshops, or events. What interests you?";
    }

    if (message.includes("class") || message.includes("learn")) {
      return "We offer amazing art classes! 🎨\n\n• Kids Art Classes - Creative programs for children\n• Adult Art Classes - For beginners and experienced artists\n• Online Classes - Learn from anywhere\n\nWhich one sounds interesting to you?";
    }

    if (message.includes("kid") || message.includes("child")) {
      return "Our kids classes are fantastic! 🌟 Children explore drawing, painting, colors, craft, and mixed media. Classes are designed to be fun and educational. Would you like to inquire about availability?";
    }

    if (message.includes("adult")) {
      return "Perfect! Our adult classes are relaxed and inspiring. 🖌️ Whether you're a beginner or have some experience, you'll enjoy learning in our supportive environment. Want to know more about schedules?";
    }

    if (message.includes("online")) {
      return "Great choice! 💻 Our online classes let you create from anywhere. We provide clear instruction and personal guidance. Just send us an inquiry and we'll share class details and material requirements!";
    }

    if (message.includes("workshop")) {
      return "We host exciting workshops! 🎭\n\n• Watercolour Workshop\n• Portrait Drawing\n• Acrylic Painting\n• Mixed Media\n• Clay & Texture Art\n\nThese are special one-time sessions. Want to check upcoming dates?";
    }

    if (message.includes("walk-in") || message.includes("walk in")) {
      return "Love our walk-in studio! 🚶‍♀️ No commitment needed - just visit, pick a project (canvas painting, tote bag, pottery), choose materials, and start creating! It's super flexible. Want our studio hours?";
    }

    if (message.includes("party") || message.includes("birthday")) {
      return "Art birthday parties are so fun! 🎉🎨 We handle everything - guided activities, materials, creative themes, and instructor support. Kids love it! Want to plan a party?";
    }

    if (message.includes("event")) {
      return "We host creative events for all occasions! 🎊\n\n• Birthday Parties\n• Private Art Parties\n• Family Sessions\n• Corporate Events\n• School Groups\n\nShall I help you plan something special?";
    }

    if (message.includes("price") || message.includes("cost") || message.includes("fee")) {
      return "For pricing details, I'd recommend sending us an inquiry or chatting on WhatsApp. Prices vary based on class type, duration, and group size. Our team will give you specific information! 💬";
    }

    if (message.includes("time") || message.includes("schedule") || message.includes("when")) {
      return "Our studio hours are:\n\n📅 Monday - Friday: 10:00 AM - 7:30 PM\n📅 Saturday - Sunday: 10:00 AM - 6:00 PM\n\nClass schedules vary. Want to inquire about specific class timings?";
    }

    if (message.includes("location") || message.includes("address") || message.includes("where")) {
      return "You can find us at our creative studio! 📍 For the exact address and directions, please check our Contact page or send us an inquiry. We're easy to find!";
    }

    if (message.includes("contact") || message.includes("inquiry")) {
      return "Great! You can reach us:\n\n📞 Phone: +91 73589 82333\n📧 Email: hello@artfully.in\n💬 WhatsApp: Click the WhatsApp button\n\nOr fill out our inquiry form on the Contact page!";
    }

    if (message.includes("thank")) {
      return "You're very welcome! 😊 Feel free to ask me anything else about our studio, or reach out directly if you'd like to get started!";
    }

    if (message.includes("bye") || message.includes("goodbye")) {
      return "Goodbye! 👋 Thanks for chatting with me. Can't wait to see you create something amazing at our studio! Feel free to come back anytime!";
    }

    // Default response
    return "That's a great question! 🎨 I can help you with:\n\n• Kids & Adult Classes\n• Online Classes\n• Workshops\n• Walk-In Studio\n• Birthday Parties & Events\n• Studio Hours & Contact\n\nWhat would you like to know more about?";
  };

  const handleQuickReply = (reply: string) => {
    // Remove emojis from the reply text
    const cleanReply = reply.replace(/[🎨🚶🎉📞]/g, '').trim();
    
    const userMessage: Message = {
      id: messages.length + 1,
      text: cleanReply,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    // Simulate bot thinking
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: getBotResponse(cleanReply),
        sender: "bot",
        timestamp: new Date(),
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

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Simulate bot thinking
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputValue),
        sender: "bot",
        timestamp: new Date(),
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
                <div
                  key={message.id}
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
              ))}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          {/* Quick Replies */}
          <div className="px-4 py-2 bg-[#FFF2DB] border-t border-[#607456]/20">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {["Classes 🎨", "Walk-In 🚶", "Events 🎉", "Contact 📞"].map(
                (reply) => (
                  <button
                    key={reply}
                    onClick={() => handleQuickReply(reply)}
                    className="px-3 py-1 bg-white border border-[#607456] text-[#607456] rounded-full text-xs font-medium hover:bg-[#607456] hover:text-[#FFF2DB] transition-colors whitespace-nowrap"
                  >
                    {reply}
                  </button>
                )
              )}
            </div>
          </div>

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
