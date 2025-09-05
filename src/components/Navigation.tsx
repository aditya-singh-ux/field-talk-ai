import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User, MessageSquare, Sprout } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-gradient-primary shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-primary-foreground font-bold text-lg">
            <Sprout className="h-6 w-6" />
            FarmChat AI
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-4">
            <Link to="/profile">
              <Button 
                variant={isActive("/profile") ? "secondary" : "ghost"}
                size="sm"
                className={isActive("/profile") ? "" : "text-primary-foreground hover:bg-white/20"}
              >
                <User className="h-4 w-4 mr-2" />
                Profile
              </Button>
            </Link>
            
            <Link to="/chat">
              <Button 
                variant={isActive("/chat") ? "secondary" : "ghost"}
                size="sm"
                className={isActive("/chat") ? "" : "text-primary-foreground hover:bg-white/20"}
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                Chat
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;