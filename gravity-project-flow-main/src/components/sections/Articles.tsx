import { motion } from "framer-motion";
import { Calendar, Clock, ExternalLink, ArrowRight } from "lucide-react";

const Articles = () => {
  const articles = [
    {
      id: 1,
      title: "Building Scalable React Applications with TypeScript",
      excerpt: "Learn how to structure large React applications using TypeScript, advanced patterns, and best practices for maintainable code.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "React",
      image: "/api/placeholder/400/250",
      link: "#",
      featured: true,
    },
    {
      id: 2,
      title: "The Future of Web Animations with Framer Motion",
      excerpt: "Explore advanced animation techniques and how Framer Motion is revolutionizing web interactions and user experiences.",
      date: "2023-12-20",
      readTime: "6 min read",
      category: "Animation",
      image: "/api/placeholder/400/250",
      link: "#",
      featured: false,
    },
    {
      id: 3,
      title: "Optimizing Three.js Performance for Web Applications",
      excerpt: "Deep dive into performance optimization techniques for 3D web applications, including LOD, frustum culling, and memory management.",
      date: "2023-11-28",
      readTime: "12 min read",
      category: "3D Graphics",
      image: "/api/placeholder/400/250",
      link: "#",
      featured: true,
    },
    {
      id: 4,
      title: "Modern CSS Techniques for Dynamic Layouts",
      excerpt: "Discover the latest CSS features like Container Queries, Subgrid, and CSS Houdini for creating responsive and dynamic layouts.",
      date: "2023-10-10",
      readTime: "5 min read",
      category: "CSS",
      image: "/api/placeholder/400/250",
      link: "#",
      featured: false,
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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="articles" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
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
            Featured <span className="text-neon">Articles</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Thoughts, tutorials, and insights about web development and technology
          </motion.p>
        </motion.div>

        {/* Featured Article */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="mb-16"
        >
          {articles.filter(article => article.featured)[0] && (
            <motion.article
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="glass-card overflow-hidden group"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/40 z-10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-background/20 to-transparent z-20" />
                  <div className="absolute top-4 left-4 z-30">
                    <span className="px-3 py-1 bg-primary text-background text-sm font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                </div>

                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full">
                      {articles[0].category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {formatDate(articles[0].date)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      {articles[0].readTime}
                    </div>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-neon mb-4 group-hover:text-neon-pink transition-colors duration-300">
                    {articles[0].title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {articles[0].excerpt}
                  </p>

                  <motion.a
                    href={articles[0].link}
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors duration-300"
                  >
                    Read Article
                    <ArrowRight size={16} />
                  </motion.a>
                </div>
              </div>
            </motion.article>
          )}
        </motion.div>

        {/* Articles Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {articles.slice(1).map((article, index) => (
            <motion.article
              key={article.id}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 z-10" />
                <div className="absolute top-4 right-4 z-20">
                  <motion.a
                    href={article.link}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-background/80 backdrop-blur-sm rounded-full text-primary hover:text-accent transition-colors"
                  >
                    <ExternalLink size={16} />
                  </motion.a>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <span className="px-2 py-1 bg-secondary/20 text-secondary rounded">
                    {article.category}
                  </span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Calendar size={12} />
                    {formatDate(article.date)}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-neon mb-3 group-hover:text-neon-purple transition-colors duration-300 line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock size={12} />
                    {article.readTime}
                  </div>
                  <motion.a
                    href={article.link}
                    whileHover={{ x: 3 }}
                    className="text-primary hover:text-accent transition-colors text-sm font-medium"
                  >
                    Read more →
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mt-12"
        >
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary-neon flex items-center gap-2 mx-auto"
          >
            <ExternalLink size={20} />
            View All Articles
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Articles;