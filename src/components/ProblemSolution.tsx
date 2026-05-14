const problems = [
  "Limited access to quality education",
  "Poor internet connectivity",
  "Outdated educational systems",
  "Lack of personalized learning",
  "Limited access to mentors and experts",
  "Expensive learning platforms",
  "Inaccessible digital resources",
  "Weak collaboration between students and educators",
  "Insufficient technical infrastructure in schools",
  "Difficulty accessing modern AI tools",
  "Learning environments that do not adapt to local realities",
];

const solutions = [
  "Learn anywhere, anytime",
  "Collaborate in real time",
  "Access AI tutoring",
  "Generate lesson plans automatically",
  "Organize classrooms digitally",
  "Attend virtual learning sessions",
  "Share educational resources",
  "Receive intelligent academic support",
  "Build communities around learning and innovation",
  "Continue learning even with poor internet access",
];

export const ProblemSolution = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10 space-y-16">
        {/* Problem */}
        <div className="space-y-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            The Problem We Are <span className="text-destructive">Solving</span>
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
            Millions of students across Africa and emerging communities face significant barriers to quality education.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {problems.map((problem) => (
              <div key={problem} className="glass rounded-lg px-5 py-3 flex items-start gap-3 hover:border-destructive/30 transition-all group">
                <svg className="w-5 h-5 text-destructive shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">{problem}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground italic">
            Many institutions still rely on fragmented systems that are expensive, difficult to manage, and disconnected from the actual needs of learners.
            <br />
            <span className="text-primary font-semibold not-italic">Mirai-Q exists to change that.</span>
          </p>
        </div>

        {/* Solution */}
        <div className="space-y-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Our <span className="bg-gradient-to-r from-primary to-blue-300 bg-clip-text text-transparent">Solution</span>
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
            Mirai-Q provides an intelligent, flexible, and accessible ecosystem that enables learners and educators to:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {solutions.map((solution) => (
              <div key={solution} className="glass rounded-lg px-5 py-3 flex items-start gap-3 hover:border-primary/30 transition-all group">
                <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">{solution}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-lg text-foreground font-medium">
            We are building technology that adapts to people — not people adapting to technology.
          </p>
        </div>
      </div>
    </section>
  );
};
