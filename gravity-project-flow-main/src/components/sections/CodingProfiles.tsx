import { motion } from "framer-motion";
import { Trophy, Target, Zap, Star, ExternalLink, TrendingUp } from "lucide-react";

const CodingProfiles = () => {
  const profiles = [
    {
      platform: "LeetCode",
      username: "yourname",
      stats: {
        solved: "450+",
        rating: "1847",
        rank: "Top 5%",
        badge: "Knight",
      },
      color: "from-orange-500 to-yellow-500",
      icon: "🔥",
      link: "#",
      achievements: ["100 Days Streak", "Contest Expert", "Algorithm Master"],
    },
    {
      platform: "HackerRank",
      username: "yourname",
      stats: {
        solved: "280+",
        rating: "Gold",
        rank: "Top 3%",
        badge: "Problem Solver",
      },
      color: "from-green-500 to-emerald-500",
      icon: "🏆",
      link: "#",
      achievements: ["5 Star Python", "SQL Expert", "30 Days Challenge"],
    },
    {
      platform: "Codeforces",
      username: "yourname",
      stats: {
        solved: "320+",
        rating: "1654",
        rank: "Expert",
        badge: "Blue",
      },
      color: "from-blue-500 to-cyan-500",
      icon: "⚡",
      link: "#",
      achievements: ["Contest Veteran", "Speed Coder", "Div 2 Expert"],
    },
    {
      platform: "CodeChef",
      username: "yourname",
      stats: {
        solved: "180+",
        rating: "1923",
        rank: "4 Star",
        badge: "Cook",
      },
      color: "from-purple-500 to-pink-500",
      icon: "🌟",
      link: "#",
      achievements: ["Long Challenge", "Cook-Off Winner", "Monthly Leader"],
    },
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

  const cardVariants = {
    hidden: { opacity: 0, rotateY: -30 },
    visible: {
      opacity: 1,
      rotateY: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="profiles" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-accent/5" />
      
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
            Coding <span className="text-neon-purple">Profiles</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            My competitive programming journey and achievements across different platforms
          </motion.p>
        </motion.div>

        {/* Overall Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { icon: Trophy, label: "Total Problems", value: "1200+", color: "text-yellow-500" },
            { icon: Target, label: "Contest Rating", value: "1850+", color: "text-primary" },
            { icon: Zap, label: "Best Streak", value: "120 Days", color: "text-accent" },
            { icon: Star, label: "Global Rank", value: "Top 5%", color: "text-secondary" },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card p-6 text-center group"
              >
                <Icon className={`w-8 h-8 mx-auto mb-3 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                <div className="text-2xl font-bold text-neon mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Platform Profiles */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8"
        >
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.platform}
              variants={cardVariants}
              whileHover={{ y: -10, rotateY: 5 }}
              className="glass-card p-8 group relative overflow-hidden"
              style={{ perspective: "1000px" }}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${profile.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />

              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{profile.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-neon">{profile.platform}</h3>
                    <p className="text-sm text-muted-foreground">@{profile.username}</p>
                  </div>
                </div>
                <motion.a
                  href={profile.link}
                  whileHover={{ scale: 1.1, rotate: 15 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full bg-primary/20 text-primary hover:bg-primary hover:text-background transition-all duration-300"
                >
                  <ExternalLink size={16} />
                </motion.a>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {Object.entries(profile.stats).map(([key, value]) => (
                  <div key={key} className="text-center p-3 bg-background/30 rounded-lg">
                    <div className="text-lg font-bold text-foreground">{value}</div>
                    <div className="text-xs text-muted-foreground capitalize">{key}</div>
                  </div>
                ))}
              </div>

              {/* Achievements */}
              <div>
                <h4 className="font-semibold text-neon-pink mb-3 flex items-center gap-2">
                  <TrendingUp size={16} />
                  Recent Achievements
                </h4>
                <div className="space-y-2">
                  {profile.achievements.map((achievement, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-2 text-sm"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-muted-foreground">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-6 pt-4 border-t border-border/20">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-muted-foreground">Progress to next rank</span>
                  <span className="text-xs text-primary">78%</span>
                </div>
                <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "78%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className={`h-full bg-gradient-to-r ${profile.color} rounded-full`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mt-16"
        >
          <motion.div
            variants={itemVariants}
            className="glass-card p-8 max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-neon mb-4">Want to Code Together?</h3>
            <p className="text-muted-foreground mb-6">
              I'm always up for coding challenges, hackathons, or collaborative problem-solving sessions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-neon flex items-center gap-2 mx-auto"
            >
              <Trophy size={20} />
              Challenge Me
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodingProfiles;