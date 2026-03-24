import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User, Sparkles } from "lucide-react";
import axios from "axios";

// Initial dummy messages
const INITIAL_MESSAGES = [
  {
    id: 1,
    sender: "bot",
    text: "Hi there! 👋 I'm Vikram's AI assistant.",
    timestamp: new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
  },
  {
    id: 2,
    sender: "bot",
    text: "Feel free to ask me anything about his experience, projects, or tech stack!",
    timestamp: new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
  },
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);

  // Lock the background page scrolling natively
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  // Handle auto-expanding textarea
  const handleInput = (e) => {
    setInputValue(e.target.value);
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
    }
  };

  // Backend Integration
  const handleSendMessage = async (e) => {
    e?.preventDefault();

    if (!isButtonDisabled && inputValue.trim() !== "") {
      const userMessageText = inputValue.trim();

      const newUserMsg = {
        id: Date.now(),
        sender: "user",
        text: userMessageText,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, newUserMsg]);
      setInputValue("");
      setIsButtonDisabled(true);
      setIsTyping(true);

      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }

      try {
        const VITE_API_URL =
          import.meta.env.VITE_API_URL || "http://localhost:8000/api";
        const response = await axios.post(
          `${VITE_API_URL}/chat`,
          {
            persona: "Vikram Kumar",
            messages: [{ role: "user", content: userMessageText }],
          },
          {
            headers: { "Content-Type": "application/json" },
          },
        );

        const aiReply = response?.data?.reply;

        const aiMessage = {
          id: Date.now() + 1,
          sender: "bot",
          text: aiReply || "I couldn't process that. Try again.",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };

        setMessages((prev) => [...prev, aiMessage]);
      } catch (error) {
        console.error("Chat API Error:", error);
        const errorMsg = {
          id: Date.now() + 1,
          sender: "bot",
          text: "<i>Oops! Something went wrong connecting to the server. Please try again later.</i>",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };
        setMessages((prev) => [...prev, errorMsg]);
      } finally {
        setIsTyping(false);
        setIsButtonDisabled(false);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(e);
    }
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-17 right-6 md:bottom-10 md:right-10 z-[90] p-4 bg-[#1a1a1a] text-white rounded-full shadow-2xl flex items-center justify-center transition-transform cursor-pointer ${isOpen ? "hidden md:flex opacity-0 pointer-events-none" : ""}`}
      >
        <MessageSquare size={28} />
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-[#f28e2c] border-2 border-[#1a1a1a] rounded-full"></span>
      </motion.button>

      {/* Chat Window Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.95,
              transformOrigin: "bottom right",
            }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onWheel={stopPropagation}
            onTouchMove={stopPropagation}
            className="fixed inset-0 z-[100] flex flex-col bg-white shadow-2xl overflow-hidden overscroll-none md:inset-auto md:bottom-28 md:right-10 md:w-[400px] lg:w-[450px] md:h-[600px] md:rounded-[2rem] md:border md:border-gray-200"
          >
            <div className="bg-[#1a1a1a] px-6 py-4 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-3">
                <div>
                  <h3 className="text-white font-bold text-lg leading-tight flex items-center gap-2">
                    AI Assistant{" "}
                    <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse "></span>
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer flex items-center justify-center"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div
              className="flex-1 overflow-y-auto overscroll-y-contain p-6 bg-[#fcfaf5] flex flex-col gap-6 custom-scrollbar"
              data-lenis-prevent="true"
            >
              {messages.map((msg) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={msg.id}
                  className={`flex items-end gap-3 ${msg.sender === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.sender === "user" ? "bg-[#1a1a1a]" : "bg-[#fdf4e7] border border-[#faeedb]"}`}
                  >
                    {msg.sender === "user" ? (
                      <User size={16} className="text-white" />
                    ) : (
                      <Bot size={16} className="text-[#f28e2c]" />
                    )}
                  </div>

                  <div
                    className={`max-w-[85%] flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
                  >
                    <div
                      className={`px-4 py-3 rounded-2xl text-[15px] leading-relaxed ${
                        msg.sender === "user"
                          ? "bg-[#1a1a1a] text-white rounded-br-sm"
                          : "bg-white border border-gray-100 shadow-sm text-[#333333] rounded-bl-sm"
                      }`}
                    >
                      {msg.sender === "user" ? (
                        <span className="whitespace-pre-wrap">{msg.text}</span>
                      ) : (
                        <div
                          className="chat-html-content break-words whitespace-pre-wrap"
                          dangerouslySetInnerHTML={{ __html: msg.text }}
                        />
                      )}
                    </div>
                    <span className="text-[10px] text-gray-400 mt-1.5 px-1">
                      {msg.timestamp}
                    </span>
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex items-end gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#fdf4e7] border border-[#faeedb] flex items-center justify-center flex-shrink-0">
                    <Bot size={16} className="text-[#f28e2c]" />
                  </div>
                  <div className="bg-white border border-gray-100 shadow-sm px-4 py-3.5 rounded-2xl rounded-bl-sm flex gap-1.5 items-center h-[44px]">
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                      className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                    />
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: 0.2,
                      }}
                      className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                    />
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: 0.4,
                      }}
                      className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                    />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
            <div className="p-4 bg-white border-t border-gray-100 flex-shrink-0">
              <form
                onSubmit={handleSendMessage}
                className="relative flex items-end gap-2 bg-[#fcfaf5] border border-gray-200 rounded-2xl p-2 focus-within:border-[#f28e2c] focus-within:ring-4 focus-within:ring-[#f28e2c]/10 transition-all"
              >
                <textarea
                  ref={textareaRef}
                  value={inputValue}
                  onChange={handleInput}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask me anything..."
                  rows={1}
                  disabled={isButtonDisabled}
                  data-lenis-prevent="true"
                  className="w-full max-h-[120px] min-h-[44px] bg-transparent border-none outline-none resize-none px-3 py-3 text-md text-[#1a1a1a] placeholder-gray-400 custom-scrollbar disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isButtonDisabled}
                  className={`flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-all cursor-pointer ${
                    inputValue.trim() && !isButtonDisabled
                      ? "bg-[#1a1a1a] text-white hover:bg-black shadow-md"
                      : "bg-gray-100 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  <Send
                    size={18}
                    className={
                      inputValue.trim() && !isButtonDisabled ? "ml-0.5" : ""
                    }
                  />
                </button>
              </form>
              <div className="text-center mt-3"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        /* Custom Scrollbar */
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e5e7eb; border-radius: 4px; }

        /* API HTML Content Styling */
        .chat-html-content {
          font-family: inherit;
        }
        
        /* Paragraph spacing */
        .chat-html-content p {
          margin-bottom: 0.5rem;
        }
        .chat-html-content p:last-child {
          margin-bottom: 0;
        }

        /* BOLD TEXT: Highlighted properly */
        .chat-html-content b, 
        .chat-html-content strong {
          font-weight: 700;
          color: #000000;
        }

        /* LINKS: Blue and Underlined */
        .chat-html-content a {
          color: #2563eb; /* Tailwind blue-600 */
          text-decoration: underline;
          text-underline-offset: 2px;
          transition: color 0.2s ease;
        }
        .chat-html-content a:hover {
          color: #1d4ed8; /* Tailwind blue-800 */
        }

        /* LISTS: Bullet points UI */
        .chat-html-content ul {
          list-style-type: disc;
          padding-left: 1.25rem;
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
        }
        .chat-html-content ol {
          list-style-type: decimal;
          padding-left: 1.25rem;
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
        }
        .chat-html-content li {
          margin-bottom: 0.25rem;
        }

        /* INLINE CODE: Small highlighted text */
        .chat-html-content code {
          background-color: #f3f4f6; /* Tailwind gray-100 */
          color: #e11d48; /* Tailwind rose-600 */
          padding: 0.125rem 0.375rem;
          border-radius: 0.375rem;
          font-family: monospace;
          font-size: 0.85em;
        }

        /* CODE BLOCKS: Dark UI with padding and scroll */
        .chat-html-content pre {
          background-color: #1a1a1a;
          color: #e5e7eb;
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          overflow-x: auto;
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);
        }
        .chat-html-content pre code {
          background-color: transparent;
          color: inherit;
          padding: 0;
          font-size: 0.85em;
          border-radius: 0;
        }
      `,
        }}
      />
    </>
  );
};

export default Chatbot;
