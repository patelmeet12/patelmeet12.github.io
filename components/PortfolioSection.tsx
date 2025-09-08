import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink } from "lucide-react";

export function PortfolioSection() {
  const [showAll, setShowAll] = useState(false);

  const portfolioApps = [
    {
      name: "Stable Hub",
      url: "https://apps.apple.com/az/app/stable-hub/id1556437401#?platform=iphone",
      description: "Comprehensive stable management application",
      platforms: ["iOS", "Swift"]
    },
    {
      name: "Mind Mapping - Resilience", 
      url: "https://apps.apple.com/us/app/mindmapping-resilience/id1626979283",
      description: "Mental health and resilience building tool",
      platforms: ["iOS", "SwiftUI"]
    },
    {
      name: "Cintona",
      url: "https://apps.apple.com/in/app/cintona/id1554648094", 
      description: "Professional communication platform",
      platforms: ["iOS", "Swift"]
    },
    {
      name: "LittleSouls",
      url: "https://apps.apple.com/ca/app/littlesouls/id1553078697",
      description: "Child care and development application",
      platforms: ["iOS", "Flutter"]
    },
    {
      name: "Nazaray",
      url: "https://apps.apple.com/in/app/nazaray/id6443620350",
      description: "Cultural and educational platform",
      platforms: ["iOS", "React Native"]
    },
    {
      name: "Neuro Physio Rx.",
      url: "https://apps.apple.com/in/app/neuro-physio-rx/id6478271730",
      description: "Neurological physiotherapy application",
      platforms: ["iOS", "SwiftUI"]
    },
    {
      name: "DiNGr",
      url: "https://apps.apple.com/us/app/dingr/id6499414611", 
      description: "Social networking and communication app",
      platforms: ["iOS", "Flutter"]
    },
    {
      name: "Tradeasia",
      url: "https://apps.apple.com/sk/app/tradeasia/id6478198700",
      description: "Trading and business platform",
      platforms: ["iOS", "Swift"]
    },
    {
      name: "Doggy Date by Dog Days",
      url: "https://apps.apple.com/ca/app/doggy-date-by-dog-days/id1462254114",
      description: "Pet social networking application",
      platforms: ["iOS", "React Native"]
    },
    {
      name: "Added Food Delivery",
      url: "https://apps.apple.com/us/app/added-food-delivery/id1626500994",
      description: "Food delivery customer application",
      platforms: ["iOS", "Flutter"]
    },
    {
      name: "Added Driver", 
      url: "https://apps.apple.com/us/app/added-driver/id1626500465",
      description: "Delivery driver management app",
      platforms: ["iOS", "FlutterFlow"]
    },
    {
      name: "Added Restaurant",
      url: "https://apps.apple.com/us/app/added-restaurant/id1626786117",
      description: "Restaurant management platform",
      platforms: ["iOS", "FlutterFlow"]
    },
    {
      name: "Stem Driver Solutions",
      url: "https://apps.apple.com/ca/app/stem-driver-solutions/id1556178641",
      description: "Professional driver management system",
      platforms: ["iOS", "Swift"]
    },
    {
      name: "Formzi",
      url: "https://apps.apple.com/in/app/formzi/id1192981423",
      description: "Form building and data collection tool",
      platforms: ["iOS", "SwiftUI"]
    }
  ];

  const displayedApps = showAll ? portfolioApps : portfolioApps.slice(0, 6);

  const getPlatformColor = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'ios': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'swift': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'swiftui': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'flutter': return 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200';
      case 'flutterflow': return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200';
      case 'react native': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <section id="portfolio" className="py-20 px-6 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">Portfolio</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            14 successful mobile applications across various industries, all available on the App Store
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedApps.map((app, index) => (
            <Card key={index} className="h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-lg">{app.name}</CardTitle>
                <div className="flex flex-wrap gap-1">
                  {app.platforms.map((platform, platformIndex) => (
                    <Badge 
                      key={platformIndex} 
                      variant="outline" 
                      className={`text-xs ${getPlatformColor(platform)}`}
                    >
                      {platform}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground text-sm mb-4 flex-1">
                  {app.description}
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => window.open(app.url, '_blank')}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View on App Store
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-8">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => setShowAll(true)}
            >
              View More ({portfolioApps.length - 6} more apps)
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}