import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Award, ExternalLink } from "lucide-react";
import { useState } from "react";

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  const events = [
    {
      id: 2,
      title: "A National Level PROJECT COMPETITION 2K25",
      type: "Project Competition",
      date: "August 22 and 23, 2024",
      location: "Velammal Institute of Technology, Chennai, India",
      description:
        "Participated in a national level project competition showcasing innovative tech solutions",
      role: "Participant",
      highlights: [
        "Innovative Solutions",
        "Team Collaboration",
        "Project Presentation",
      ],
      image:
        "https://via.placeholder.com/300x200?text=Project+Competition+2K25",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      title: "Hackathon 2024",
      type: "Competition",
      date: "September 11, 2024",
      location: "Kongu Engineering College, Erode, India",
      description:
        "Participated in a 24-hour hackathon focused on building innovative web applications",
      role: "Participant",
      highlights: [
        "Innovative Solutions",
        "Team Collaboration",
        "Project Presentation",
      ],
      image: "https://via.placeholder.com/300x200?text=Design+Workshop",
      color: "from-pink-500 to-rose-500",
    },
    {
      id: 4,
      title: "Hackathon 2025",
      type: "Competition",
      date: "September 12-13, 2025",
      location: "Sathayabama Institute of Technology, Chennai, India",
      description:
        "Competed in a 24-hour hackathon and built a full-stack web application",
      role: " Frontend Developer",
      highlights: ["Top 10 Teams", "Full Stack Project", "Team Collaboration"],
      image: "https://via.placeholder.com/300x200?text=Hackathon+2025",
      color: "from-yellow-400 to-green-500",
    },
    {
      id: 5,
      title: "Full Stack Development Workshop",
      type: "Workshop",
      date: "September 29-30, 2025",
      location: "Kongu Engineering college, Erode, India",
      description:
        "Attended a full stack development workshop and learned about the latest technologies and best practices in web development",
      role: "Participant",
      highlights: ["Full Stack Development", "Latest Technologies", "Best Practices"],
      image: "https://via.placeholder.com/300x200?text=Full+Stack+Development+Workshop",
      color: "from-yellow-500 to-orange-500",
    },

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="events" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
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
            Events & <span className="text-neon">Conferences</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Events and conferences I've participated in to expand my knowledge
            and network
          </motion.p>
        </motion.div>

        {/* Events Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {events.map((event) => (
            <motion.div
              key={event.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative bg-card/50 backdrop-blur-md border border-border/20 rounded-xl overflow-hidden group-hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                <div className="p-5 flex flex-col flex-grow">
                  <div
                    className={`inline-flex w-fit px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${event.color} text-white mb-3`}
                  >
                    {event.type}
                  </div>

                  <h3 className="text-lg font-semibold mb-3 text-foreground">
                    {event.title}
                  </h3>

                  <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-primary" />
                      <span>{event.date}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-primary" />
                      <span>{event.location}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-primary" />
                      <span>{event.role}</span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 flex-grow">
                    {event.description}
                  </p>

                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={
                      selectedEvent === event.id
                        ? { opacity: 1, height: "auto" }
                        : { opacity: 0, height: 0 }
                    }
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mb-4"
                  >
                    <div className="flex flex-wrap gap-2 pt-3 border-t border-border/20">
                      {event.highlights.map((highlight) => (
                        <motion.span
                          key={highlight}
                          initial={{ scale: 0 }}
                          animate={
                            selectedEvent === event.id
                              ? { scale: 1 }
                              : { scale: 0 }
                          }
                          transition={{ delay: 0.05 }}
                          className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${event.color} bg-opacity-20 border border-border/30 text-foreground/80`}
                        >
                          {highlight}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  <motion.button
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() =>
                      setSelectedEvent(
                        selectedEvent === event.id ? null : event.id
                      )
                    }
                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent font-medium transition-colors"
                  >
                    {selectedEvent === event.id
                      ? "Hide Details"
                      : "View Details"}
                    <ExternalLink size={14} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto"
        >
      
        </motion.div>
      </div>
    </section>
  );
};

export default Events;
