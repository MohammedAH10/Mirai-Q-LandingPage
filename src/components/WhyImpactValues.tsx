import { Shield, Target, Lightbulb, Users, Leaf, Zap, Globe } from "lucide-react";

const values = [
  { icon: Shield, title: "Accessibility", desc: "Education should be available to everyone." },
  { icon: Lightbulb, title: "Innovation", desc: "We believe technology can improve human learning." },
  { icon: Users, title: "Collaboration", desc: "Communities accelerate growth and impact." },
  { icon: Globe, title: "Inclusion", desc: "Learning ecosystems should serve diverse realities." },
  { icon: Leaf, title: "Sustainability", desc: "Long-term impact matters more than short-term trends." },
  { icon: Zap, title: "Empowerment", desc: "Technology should help people unlock opportunities." },
];

const impactGoals = [
  "Expanding access to quality education",
  "Reducing digital learning inequality",
  "Supporting underserved communities",
  "Improving AI accessibility in education",
  "Empowering educators with intelligent tools",
  "Encouraging innovation and collaboration",
  "Building sustainable learning ecosystems",
  "Supporting youth development and digital literacy",
  "Enabling future-ready education systems",
];

const techAreas = [
  "Artificial Intelligence",
  "Machine Learning",
  "Natural Language Processing",
  "Recommendation Systems",
  "Retrieval-Augmented Generation (RAG)",
  "Real-time communication systems",
  "Offline AI deployment",
  "Mobile-first architectures",
  "Progressive Web Apps",
  "Cloud-native systems",
  "Open collaboration technologies",
];

const whoFor = [
  { title: "For Students", desc: "Access intelligent learning support, communities, mentorship, and collaborative educational tools." },
  { title: "For Educators", desc: "Reduce repetitive workload and enhance teaching with AI-assisted systems." },
  { title: "For Institutions", desc: "Deploy scalable digital learning infrastructure designed for modern education." },
  { title: "For Communities", desc: "Build local ecosystems for learning, innovation, and collaboration." },
  { title: "For Africa", desc: "Create technology infrastructure that reflects local realities while enabling global opportunities." },
];

export const WhyImpactValues = () => {
  return (
    <section id="impact" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10 space-y-24">
        {/* Why Mirai-Q Matters */}
        <div className="space-y-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Why Mirai-Q <span className="text-primary">Matters</span>
          </h2>
          <div className="glass rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Mirai-Q is not simply a technology platform. It is an infrastructure response to educational inequality.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "AI should empower education, not replace humanity",
                "Technology should work in low-resource environments",
                "Students deserve personalized support",
                "Collaboration should be accessible",
                "Communities should shape learning",
                "Innovation should not be limited by geography",
                "African learners deserve world-class educational systems",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Impact Goals */}
        <div className="space-y-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Our Social Impact <span className="bg-gradient-to-r from-primary to-blue-300 bg-clip-text text-transparent">Goals</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {impactGoals.map((goal) => (
              <div key={goal} className="glass rounded-xl px-6 py-4 hover:border-primary/30 transition-all group">
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">{goal}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Long-Term Vision */}
        <div className="space-y-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Our Long-Term <span className="text-primary">Vision</span>
          </h2>
          <div className="glass rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <p className="text-muted-foreground mb-6">We envision a future where:</p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Every learner has access to intelligent educational support",
                "Schools can deploy affordable AI-powered learning systems",
                "Communities can create local knowledge ecosystems",
                "Education becomes collaborative, adaptive, and accessible",
                "African innovation ecosystems become globally competitive",
                "Students are empowered to solve real-world problems",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-foreground font-medium mt-6 text-center">
              Mirai-Q aims to become a foundational educational infrastructure layer for emerging communities.
            </p>
          </div>
        </div>

        {/* Technology */}
        <div className="space-y-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Technology Behind <span className="bg-gradient-to-r from-primary to-blue-300 bg-clip-text text-transparent">Mirai-Q</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {techAreas.map((tech) => (
              <span key={tech} className="px-4 py-2 glass rounded-full text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-all">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="space-y-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Our Core <span className="text-primary">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <div key={value.title} className="glass rounded-xl p-6 hover:border-primary/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Built for Emerging Communities */}
        <div className="space-y-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Built for <span className="bg-gradient-to-r from-primary to-blue-300 bg-clip-text text-transparent">Emerging Communities</span>
          </h2>
          <div className="glass rounded-2xl p-8 md:p-12 max-w-4xl mx-auto text-center">
            <p className="text-muted-foreground mb-4">
              Most educational platforms are built for environments with stable internet, strong infrastructure, high-end devices, and constant connectivity.
            </p>
            <p className="text-foreground font-semibold text-lg mb-4">Mirai-Q is different.</p>
            <p className="text-muted-foreground mb-6">
              We are building for realities that many people experience daily: limited infrastructure, shared devices, mobile-first usage, data limitations, intermittent connectivity, and resource-constrained environments.
            </p>
            <p className="text-primary font-semibold text-lg">
              This is why accessibility is not an afterthought for us. It is the foundation.
            </p>
          </div>
        </div>

        {/* Who We Are Building For */}
        <div className="space-y-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Who We Are <span className="text-primary">Building For</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whoFor.map((item) => (
              <div key={item.title} className="glass rounded-xl p-6 hover:border-primary/30 transition-all group">
                <h3 className="text-lg font-semibold mb-2 text-primary">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
