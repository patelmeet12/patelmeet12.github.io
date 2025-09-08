import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Github, Linkedin, Twitter, Users, BookOpen, Briefcase, Phone, Mail } from "lucide-react";

export function SocialSection() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/patelmeet12",
      icon: Github,
      description: "View my code repositories and open source contributions"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/patelmeet12", 
      icon: Linkedin,
      description: "Connect with me professionally and see my career journey"
    },
    {
      name: "Twitter",
      url: "https://x.com/patelmeet_12",
      icon: Twitter,
      description: "Follow me for tech insights and industry updates"
    },
    {
      name: "Medium",
      url: "https://medium.com/@patelmeet12",
      icon: BookOpen,
      description: "Read my articles about mobile development and tech trends"
    },
    {
      name: "Upwork",
      url: "https://www.upwork.com/freelancers/~0167ccc74d85c427a1?mp_source=share",
      icon: Briefcase,
      description: "Hire me for your next mobile app development project"
    },
    {
      name: "Microsoft Teams",
      url: "https://teams.live.com/l/invite/FEAJntj2DbZhBCcKgQ",
      icon: Users,
      description: "Schedule a meeting or collaboration session"
    }
  ];

  const contactInfo = [
    {
      name: "Phone",
      value: "+1 (555) 123-4567", // Replace with actual phone number
      icon: Phone,
      action: () => window.open("tel:+15551234567", "_self")
    },
    {
      name: "Email",
      value: "patelmeet12@example.com", // Replace with actual email
      icon: Mail,
      action: () => window.open("mailto:patelmeet12@example.com", "_self")
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">Let's Connect</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your app ideas to life? Connect with me on social media or get in touch directly
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid sm:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto">
          {contactInfo.map((contact, index) => (
            <Card key={index} className="transition-all hover:shadow-lg cursor-pointer" onClick={contact.action}>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <contact.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1">{contact.name}</h4>
                    <p className="text-muted-foreground text-sm">{contact.value}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Links */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialLinks.map((link, index) => (
            <Card key={index} className="transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <link.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-2">{link.name}</h4>
                    <p className="text-muted-foreground text-sm mb-4">
                      {link.description}
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open(link.url, '_blank')}
                    >
                      Connect
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}