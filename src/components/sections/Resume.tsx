import { motion } from "framer-motion";
import { Download, Calendar, MapPin, Building, ExternalLink } from "lucide-react";

const Resume = () => {
  const experience = [
    {
      company: "Tech Innovations Inc.",
      position: "Senior Frontend Developer",
      period: "2022 - Present",
      location: "San Francisco, CA",
      description: "Led development of scalable React applications, mentored junior developers, and implemented modern UI/UX practices.",
      achievements: [
        "Improved app performance by 40% through optimization",
        "Built reusable component library used across 5 products",
        "Mentored 3 junior developers"
      ]
    },
    {
      company: "Digital Solutions LLC",
      position: "Frontend Developer",
      period: "2020 - 2022",
      location: "Remote",
      description: "Developed responsive web applications and collaborated with design teams to create intuitive user experiences.",
      achievements: [
        "Reduced loading times by 60% through code splitting",
        "Implemented automated testing suite",
        "Led migration from jQuery to React"
      ]
    },
    {
      company: "StartupXYZ",
      position: "Junior Developer",
      period: "2019 - 2020",
      location: "New York, NY",
      description: "Built features for an early-stage fintech startup, focusing on user onboarding and dashboard interfaces.",
      achievements: [
        "Increased user conversion by 25%",
        "Built responsive mobile-first interfaces",
        "Integrated third-party payment APIs"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Technology",
      period: "2015 - 2019",
      location: "California, USA",
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="resume" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            My <span className="text-neon">Resume</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
          >
            A journey through my professional experience and education
          </motion.p>
          
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="btn-neon flex items-center gap-2 mx-auto"
            onClick={() => window.open('/resume.pdf', '_blank')}
          >
            <Download size={20} />
            Download Resume
          </motion.button>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="lg:col-span-2"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-neon-purple mb-8 flex items-center gap-3"
            >
              <Building className="text-primary" />
              Professional Experience
            </motion.h3>

            <div className="space-y-8">
              {experience.map((job, index) => (
                <motion.div
                  key={job.company}
                  variants={itemVariants}
                  className="glass-card p-6 group hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-neon group-hover:text-neon-pink transition-colors duration-300">
                        {job.position}
                      </h4>
                      <p className="text-primary font-medium">{job.company}</p>
                    </div>
                    <div className="text-sm text-muted-foreground space-y-1 md:text-right">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {job.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        {job.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {job.description}
                  </p>

                  <div className="space-y-2">
                    <h5 className="font-medium text-foreground">Key Achievements:</h5>
                    <ul className="space-y-1">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education & Sidebar */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="space-y-8"
          >
            {/* Education */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-neon-purple mb-6">Education</h3>
              {education.map((edu, index) => (
                <div key={edu.degree} className="glass-card p-6">
                  <h4 className="font-bold text-neon mb-2">{edu.degree}</h4>
                  <p className="text-primary font-medium mb-1">{edu.school}</p>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {edu.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      {edu.location}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Certifications */}
            <motion.div variants={itemVariants} className="glass-card p-6">
              <h3 className="text-xl font-bold text-neon-purple mb-4">Certifications</h3>
              <div className="space-y-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <p className="font-medium text-primary">AWS Certified Developer</p>
                  <p className="text-sm text-muted-foreground">Amazon Web Services</p>
                </div>
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <p className="font-medium text-secondary">React Professional</p>
                  <p className="text-sm text-muted-foreground">Meta Certified</p>
                </div>
                <div className="p-3 bg-accent/10 rounded-lg">
                  <p className="font-medium text-accent">TypeScript Expert</p>
                  <p className="text-sm text-muted-foreground">Microsoft Certified</p>
                </div>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div variants={itemVariants} className="glass-card p-6">
              <h3 className="text-xl font-bold text-neon-purple mb-4">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Experience</span>
                  <span className="font-bold text-primary">5+ Years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Projects</span>
                  <span className="font-bold text-accent">50+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Team Size</span>
                  <span className="font-bold text-secondary">Up to 8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Languages</span>
                  <span className="font-bold text-primary">10+</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;