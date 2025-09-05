import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Wheat, Users, Save } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Profile = () => {
  const { toast } = useToast();
  const [profile, setProfile] = useState({
    name: "John Anderson",
    email: "john@greenacres.farm",
    farmName: "Green Acres Farm",
    location: "Iowa, USA", 
    farmSize: "250 acres",
    farmType: "Corn & Soybeans",
    experience: "15 years",
    bio: "Family farmer specializing in sustainable corn and soybean production. Always looking to learn about new farming techniques and connect with fellow farmers.",
  });

  const handleSave = () => {
    toast({
      title: "Profile Updated",
      description: "Your farming profile has been successfully updated!",
    });
  };

  const handleInputChange = (field: keyof typeof profile, value: string) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-earth">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-foreground">Farmer Profile</h1>
            <p className="text-muted-foreground">Manage your farming profile and connect with the agricultural community</p>
          </div>

          {/* Profile Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Personal Information */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Personal Information
                </CardTitle>
                <CardDescription>Your basic contact and personal details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name"
                    value={profile.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email"
                    type="email"
                    value={profile.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your.email@farm.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input 
                      id="location"
                      value={profile.location}
                      onChange={(e) => handleInputChange("location", e.target.value)}
                      className="pl-10"
                      placeholder="City, State/Region"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Farm Information */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wheat className="h-5 w-5 text-primary" />
                  Farm Information
                </CardTitle>
                <CardDescription>Details about your farming operation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="farmName">Farm Name</Label>
                  <Input 
                    id="farmName"
                    value={profile.farmName}
                    onChange={(e) => handleInputChange("farmName", e.target.value)}
                    placeholder="Your farm name"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="farmSize">Farm Size</Label>
                    <Input 
                      id="farmSize"
                      value={profile.farmSize}
                      onChange={(e) => handleInputChange("farmSize", e.target.value)}
                      placeholder="e.g., 250 acres"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="experience">Experience</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="experience"
                        value={profile.experience}
                        onChange={(e) => handleInputChange("experience", e.target.value)}
                        className="pl-10"
                        placeholder="e.g., 15 years"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="farmType">Primary Crops/Livestock</Label>
                  <Input 
                    id="farmType"
                    value={profile.farmType}
                    onChange={(e) => handleInputChange("farmType", e.target.value)}
                    placeholder="e.g., Corn & Soybeans"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bio Section */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>About Your Farming Journey</CardTitle>
              <CardDescription>Tell other farmers about your experience and interests</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea 
                  id="bio"
                  value={profile.bio}
                  onChange={(e) => handleInputChange("bio", e.target.value)}
                  placeholder="Share your farming story, specializations, and what you're passionate about..."
                  className="min-h-[100px]"
                />
              </div>
            </CardContent>
          </Card>

          {/* Farming Expertise Tags */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>Farming Expertise</CardTitle>
              <CardDescription>Your areas of knowledge and interest</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                  Sustainable Farming
                </Badge>
                <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                  Crop Rotation
                </Badge>
                <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                  Soil Health
                </Badge>
                <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                  Precision Agriculture
                </Badge>
                <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                  Weather Management
                </Badge>
                <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                  Equipment Maintenance
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Save Button */}
          <div className="flex justify-end">
            <Button onClick={handleSave} className="bg-gradient-primary hover:opacity-90">
              <Save className="h-4 w-4 mr-2" />
              Save Profile
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;