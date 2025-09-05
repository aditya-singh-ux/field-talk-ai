import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Send, Bot, User, Sprout } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";

interface Message {
  id: string;
  content: string;
  isBot: boolean;
  timestamp: Date;
}

const Chat = () => {
  const { toast } = useToast();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm your AI farming assistant. I'm here to help you with agricultural questions, farming techniques, crop management, and more. What would you like to know about farming today?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    try {
      const hfApiKey = localStorage.getItem('hf_api_key');
      const hfModel = localStorage.getItem('hf_model') || 'microsoft/DialoGPT-medium';
      let botResponse = "";

      if (hfApiKey) {
        // Use Hugging Face API for better responses
        const response = await fetch(`https://api-inference.huggingface.co/models/${hfModel}`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${hfApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            inputs: `As a knowledgeable farming assistant, respond to this question about agriculture: ${inputMessage}`,
            parameters: {
              max_new_tokens: 150,
              temperature: 0.7,
              return_full_text: false
            }
          }),
        });

        if (response.ok) {
          const data = await response.json();
          botResponse = data[0]?.generated_text || "I'm here to help with your farming questions. Could you provide more details?";
        } else {
          throw new Error('API request failed');
        }
      } else {
        // Fallback to mock responses when no API key
        const botResponses = [
          "That's a great question about farming! Here are some key points to consider... (Connect your Hugging Face API key in Profile for more detailed responses)",
          "For sustainable farming practices, I recommend looking into crop rotation and soil health management. (Upgrade to AI-powered responses in your Profile)",
          "Weather patterns can significantly impact your harvest. Let me help you understand the best practices for your crops. (Enable AI integration for advanced insights)",
          "Precision agriculture tools can really improve your yield efficiency. Would you like specific recommendations? (Connect AI for personalized advice)",
          "Soil testing is crucial for optimal crop growth. I can guide you through the testing process and interpretation. (AI integration available in Profile)",
        ];
        botResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: botResponse,
        isBot: true,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    } catch (error) {
      console.error('Error getting AI response:', error);
      
      // Fallback to mock response on error
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I'm experiencing some technical difficulties. Please try again or check your API key settings in your Profile.",
        isBot: true,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="min-h-screen bg-gradient-earth">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-foreground flex items-center justify-center gap-2">
              <Bot className="h-8 w-8 text-primary" />
              Farm AI Assistant
            </h1>
            <p className="text-muted-foreground">Get expert advice on farming, crops, equipment, and agricultural best practices</p>
          </div>

          {/* Chat Container */}
          <Card className="shadow-soft">
            <CardHeader className="border-b bg-gradient-primary text-primary-foreground">
              <CardTitle className="flex items-center gap-2">
                <Sprout className="h-5 w-5" />
                Agricultural Chat Assistant
              </CardTitle>
            </CardHeader>
            
            <CardContent className="p-0">
              {/* Messages Area */}
              <div className="h-[500px] overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    {message.isBot && (
                      <Avatar className="h-8 w-8 bg-primary">
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          <Bot className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                    
                    <div className={`max-w-[70%] ${message.isBot ? 'order-2' : 'order-1'}`}>
                      <div
                        className={`rounded-lg p-3 ${
                          message.isBot
                            ? 'bg-muted text-foreground'
                            : 'bg-gradient-primary text-primary-foreground'
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 px-1">
                        {formatTime(message.timestamp)}
                      </p>
                    </div>

                    {!message.isBot && (
                      <Avatar className="h-8 w-8 bg-harvest">
                        <AvatarFallback className="bg-harvest text-harvest-foreground">
                          <User className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex gap-3 justify-start">
                    <Avatar className="h-8 w-8 bg-primary">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        <Bot className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="bg-muted rounded-lg p-3 max-w-[70%]">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="border-t p-4">
                <div className="flex gap-2">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about farming techniques, crop management, equipment, weather, or any agricultural topic..."
                    className="flex-1"
                    disabled={isTyping}
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim() || isTyping}
                    className="bg-gradient-primary hover:opacity-90"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Questions */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>Quick Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "What's the best time to plant corn?",
                  "How do I test my soil pH?",
                  "What are signs of crop disease?",
                  "How to improve soil health naturally?",
                ].map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="text-left h-auto p-3 hover:bg-primary/5"
                    onClick={() => setInputMessage(question)}
                  >
                    {question}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Chat;