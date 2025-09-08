import { Card, CardContent } from "./ui/card";
import { motion } from "motion/react";

export function AchievementsSection() {
  const achievements = [
    {
      number: "15+",
      label: "Apps Published",
      description: "Successfully published on App Store",
      icon: "📱"
    },
    {
      number: "2M+",
      label: "Active Users",
      description: "Across all my applications",
      icon: "👥"
    },
    {
      number: "4.8",
      label: "Average Rating",
      description: "Exceptional user satisfaction",
      icon: "⭐"
    },
    {
      number: "7+",
      label: "Years Experience",
      description: "In mobile app development",
      icon: "🚀"
    },
    {
      number: "50K+",
      label: "Lines of Code",
      description: "Swift & Objective-C expertise",
      icon: "💻"
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      description: "Happy clients and repeat business",
      icon: "💯"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">Key Achievements</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Delivering exceptional results with proven track record of success
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full">
                <CardContent className="p-6">
                  <div className="text-3xl mb-2">{achievement.icon}</div>
                  <div className="text-2xl font-bold text-primary mb-1">
                    {achievement.number}
                  </div>
                  <div className="font-medium mb-2">{achievement.label}</div>
                  <div className="text-xs text-muted-foreground">
                    {achievement.description}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}