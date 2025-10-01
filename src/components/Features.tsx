import { Brain, Users, Wifi, BookOpen, Sparkles, MessageSquare } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Assistant",
    description: "Generate personalized lesson plans and get instant help with your studies, even without internet.",
  },
  {
    icon: MessageSquare,
    title: "Discord-Style Chat",
    description: "Collaborate with study groups in real-time using familiar, intuitive chat channels.",
  },
  {
    icon: Wifi,
    title: "Offline-First Design",
    description: "Access your study materials and AI features anytime, anywhere—no connection required.",
  },
  {
    icon: Users,
    title: "Group Study Spaces",
    description: "Create private or public study rooms and collaborate seamlessly with peers.",
  },
  {
    icon: BookOpen,
    title: "Content Sharing",
    description: "Share notes, resources, and educational materials effortlessly across your study groups.",
  },
  {
    icon: Sparkles,
    title: "Smart Learning",
    description: "Adaptive AI that learns your study patterns and provides personalized recommendations.",
  },
];

export const Features = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Excel in Your Studies
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mirai-Q combines powerful AI with collaborative tools to transform how you learn
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--glow)/0.2)] animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
