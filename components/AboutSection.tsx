import { Card, CardContent } from "./ui/card";
import { CheckCircle, Award, Users, Zap } from "lucide-react";
import { motion } from "motion/react";

export function AboutSection() {
  const highlights = [
    {
      icon: Award,
      title: "7+ Years of Excellence",
      description: "Proven track record in iOS development with consistent delivery of high-quality applications"
    },
    {
      icon: Users,
      title: "2M+ Users Served",
      description: "My applications have reached millions of users across various industries and platforms"
    },
    {
      icon: Zap,
      title: "End-to-End Expertise",
      description: "From concept to App Store deployment, I handle every aspect of mobile app development"
    }
  ];

  const capabilities = [
    "Native iOS development with Swift & SwiftUI",
    "Cross-platform solutions with Flutter & React Native",
    "Low-code development with FlutterFlow",
    "API integration and third-party libraries",
    "Push notifications and real-time features",
    "App performance optimization and security",
    "App Store submission and compliance",
    "Code reviews and technical mentoring"
  ];

  return (
    <section id="about" className="py-20 px-6 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-3xl font-bold">Why Choose Me?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            With over 7 years of dedicated experience in mobile app development, I bring deep technical expertise 
            and a passion for creating exceptional user experiences.
          </p>
        </motion.div>

        {/* Experience Highlights */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <highlight.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="mb-3 text-lg font-semibold">{highlight.title}</h4>
                  <p className="text-muted-foreground text-sm">{highlight.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-2xl font-bold">Technical Leadership & Innovation</h3>
            <p className="text-muted-foreground mb-6">
              Throughout my career, I've collaborated with startups, SMBs, and large enterprises, consistently 
              delivering projects on time and within budget. My deep understanding of mobile app architecture, 
              UI/UX design principles, and modern development frameworks enables me to create scalable, 
              maintainable solutions.
            </p>
            
            <p className="text-muted-foreground mb-6">
              I stay at the forefront of iOS development trends, leveraging both traditional coding approaches 
              and modern low-code platforms like FlutterFlow to provide cost-effective solutions with fast 
              turnarounds without compromising quality.
            </p>

            <div className="flex gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Apps Published</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">100%</div>
                <div className="text-sm text-muted-foreground">On-Time Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">4.8★</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h4 className="mb-4 text-lg font-semibold">Core Expertise</h4>
                <div className="space-y-3">
                  {capabilities.map((capability, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{capability}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}