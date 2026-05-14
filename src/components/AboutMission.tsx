export const AboutMission = () => {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10 space-y-24">
        {/* What is Mirai-Q */}
        <div className="space-y-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            What is <span className="bg-gradient-to-r from-primary to-blue-300 bg-clip-text text-transparent">Mirai-Q</span>?
          </h2>
          <div className="glass rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mirai-Q is an AI-powered educational and collaboration platform designed to solve some of the biggest challenges facing students, educators, institutions, and underserved communities.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
              {[
                "AI Tutoring", "Digital Classrooms", "Collaborative Learning",
                "Content Management", "Community Spaces", "Smart Assessments",
                "Real-time Communication", "Offline-First Systems",
                "AI Lesson Generation", "Knowledge Sharing", "Academic Support",
                "Innovation Communities"
              ].map((item) => (
                <div key={item} className="px-4 py-2 glass rounded-lg text-sm text-center hover:border-primary/30 transition-all">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 glass rounded-xl border-primary/20">
              <p className="text-foreground font-medium">
                Mirai-Q is not just another Learning Management System.
              </p>
              <p className="text-muted-foreground mt-2">
                It is a learning infrastructure platform designed specifically for environments where educational access, internet reliability, affordability, mentorship, and digital infrastructure are major barriers.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
          <div className="glass rounded-2xl p-8 md:p-10 hover:border-primary/30 transition-all group">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              To make high-quality, intelligent, collaborative education accessible to every learner regardless of location, infrastructure, or financial status.
            </p>
          </div>

          <div className="glass rounded-2xl p-8 md:p-10 hover:border-primary/30 transition-all group">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              To build Africa's most impactful AI-powered educational ecosystem where learning, innovation, collaboration, and opportunity are accessible to everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
