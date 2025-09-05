import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, User, Bot, Sprout, Users, BarChart3 } from "lucide-react";
import farmHero from "@/assets/farm-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-earth">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${farmHero})` }}
        >
          <div className="absolute inset-0 bg-primary/70"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-24 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sprout className="h-12 w-12 text-primary-foreground" />
              <h1 className="text-5xl font-bold text-primary-foreground">FarmChat AI</h1>
            </div>
            
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
              Your intelligent farming companion. Get expert advice, manage your farm profile, 
              and connect with AI-powered agricultural insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link to="/chat">
                <Button size="lg" variant="secondary" className="bg-white/95 text-primary hover:bg-white">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Start Chatting
                </Button>
              </Link>
              
              <Link to="/profile">
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <User className="h-5 w-5 mr-2" />
                  Manage Profile
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Everything You Need for Smart Farming
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Leverage AI technology to make better farming decisions, connect with experts, 
            and optimize your agricultural operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* AI Assistant Feature */}
          <Card className="shadow-soft hover:shadow-glow transition-all duration-300 border-primary/20">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                <Bot className="h-6 w-6 text-primary-foreground" />
              </div>
              <CardTitle className="text-primary">AI Farm Assistant</CardTitle>
              <CardDescription>
                Get instant answers to your farming questions from our intelligent AI assistant.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="text-sm text-muted-foreground space-y-1">
                <p>• Crop management advice</p>
                <p>• Weather and season planning</p>
                <p>• Equipment recommendations</p>
                <p>• Pest and disease identification</p>
              </div>
            </CardContent>
          </Card>

          {/* Profile Management Feature */}
          <Card className="shadow-soft hover:shadow-glow transition-all duration-300 border-primary/20">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-12 h-12 bg-gradient-harvest rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-harvest-foreground" />
              </div>
              <CardTitle className="text-primary">Farm Profile</CardTitle>
              <CardDescription>
                Create and manage your detailed farming profile to get personalized advice.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="text-sm text-muted-foreground space-y-1">
                <p>• Farm details and location</p>
                <p>• Crop and livestock tracking</p>
                <p>• Experience and expertise</p>
                <p>• Personalized recommendations</p>
              </div>
            </CardContent>
          </Card>

          {/* Smart Analytics Feature */}
          <Card className="shadow-soft hover:shadow-glow transition-all duration-300 border-primary/20">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-12 h-12 bg-gradient-earth rounded-full flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-foreground" />
              </div>
              <CardTitle className="text-primary">Smart Insights</CardTitle>
              <CardDescription>
                Receive data-driven insights and recommendations tailored to your farm.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="text-sm text-muted-foreground space-y-1">
                <p>• Yield optimization tips</p>
                <p>• Resource efficiency guides</p>
                <p>• Market trend insights</p>
                <p>• Sustainable practices</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-primary-foreground">
              Ready to Transform Your Farming?
            </h2>
            <p className="text-primary-foreground/90 text-lg">
              Join thousands of farmers who are already using AI to improve their agricultural outcomes.
              Start your journey today!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/chat">
                <Button size="lg" variant="secondary" className="bg-white/95 text-primary hover:bg-white">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Get Started with AI Chat
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
