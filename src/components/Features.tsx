import { Brain, Monitor, FileText, Wifi, Users, MessageSquare, ClipboardCheck, Globe } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Tutoring",
    description: "Understand difficult concepts, ask questions naturally, receive personalized explanations, learn at your own pace, generate summaries, and improve comprehension across multiple subjects. The goal is not to replace teachers — it is to support learners and empower educators.",
  },
  {
    icon: Monitor,
    title: "Smart Classroom System",
    description: "Anyone can create public, private, community-driven, institution-based, project-focused, or mentor-led classrooms. Each supports learning materials, assignments, AI-generated lessons, real-time discussions, collaboration spaces, scheduling, notifications, and interactive participation.",
  },
  {
    icon: FileText,
    title: "AI Lesson Generation",
    description: "Upload materials and Mirai-Q generates structured lesson plans, summaries, quizzes, practice questions, and learning paths. Adapts content for different levels — reducing educator workload while improving accessibility.",
  },
  {
    icon: Wifi,
    title: "Offline-First Learning",
    description: "Built for unstable internet, expensive data, and power limitations. Supports local AI models, offline access, low-bandwidth systems, PWA, mobile-first experiences, and lightweight delivery. Education should not stop when the internet disappears.",
  },
  {
    icon: Users,
    title: "Collaboration & Community Spaces",
    description: "Discuss ideas, build projects, form study groups, connect with mentors, share opportunities, participate in innovation communities, join events, and collaborate across institutions and regions.",
  },
  {
    icon: MessageSquare,
    title: "Real-Time Communication",
    description: "Live discussions, group collaboration, notifications, classroom messaging, real-time updates, video meeting integration, and community engagement. We want learners to feel connected, not isolated.",
  },
  {
    icon: ClipboardCheck,
    title: "Intelligent Assessments",
    description: "Objective assessments, essay evaluations, AI-assisted grading, coding assessments, dynamic quizzes, interactive assignments, and personalized feedback. Helping educators scale quality while reducing repetitive workload.",
  },
  {
    icon: Globe,
    title: "Inclusive Learning Ecosystem",
    description: "Designed for students, teachers, lecturers, schools, universities, bootcamps, communities, NGOs, innovation hubs, founders, researchers, self-learners, and underserved communities. Education should not be exclusive.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Core <span className="bg-gradient-to-r from-primary to-blue-300 bg-clip-text text-transparent">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to learn, collaborate, and grow — all in one unified ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 md:p-8 glass rounded-xl hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--glow)/0.15)] animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
