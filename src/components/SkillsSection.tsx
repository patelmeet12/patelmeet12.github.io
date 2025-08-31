import { Card, CardContent } from "./ui/card";
import { motion } from "motion/react";

export function SkillsSection() {
  const skills = [
    {
      category: "Native iOS",
      icon: "📱",
      technologies: ["Swift", "Objective-C", "SwiftUI", "UIKit"],
      description: "Building native iOS applications with modern Swift and SwiftUI"
    },
    {
      category: "Cross-Platform",
      icon: "🌐",
      technologies: ["Flutter", "React Native", "Dart", "JavaScript"],
      description: "Creating apps that work seamlessly across iOS and Android"
    },
    {
      category: "Low-Code/No-Code",
      icon: "⚡",
      technologies: ["FlutterFlow", "Firebase", "Supabase", "REST APIs"],
      description: "Rapid development with modern low-code platforms"
    },
    {
      category: "Backend & APIs",
      icon: "🔗",
      technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
      description: "Building robust backend services and API integrations"
    },
    {
      category: "DevOps & Tools",
      icon: "🛠️",
      technologies: ["Xcode", "Git", "Jenkins", "TestFlight"],
      description: "Professional development workflow and deployment"
    },
    {
      category: "Design & UX",
      icon: "🎨",
      technologies: ["Figma", "Sketch", "Adobe XD", "Prototyping"],
      description: "Creating intuitive and beautiful user experiences"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-3xl font-bold">Technical Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set spanning native development, cross-platform solutions, and modern development practices
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h4 className="mb-3 text-lg font-semibold">{skill.category}</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    {skill.description}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skill.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="mb-6 text-xl font-semibold">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Core Data", "CloudKit", "Push Notifications", "In-App Purchases",
              "ARKit", "CoreML", "MapKit", "HealthKit", "WatchKit",
              "GraphQL", "WebSocket", "OAuth", "CI/CD", "Unit Testing"
            ].map((tech, index) => (
              <motion.span
                key={index}
                className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}