import { motion } from "framer-motion";
import { Award, Eye, ExternalLink, FileText } from "lucide-react";
import { useState } from "react";
import sathyabamaImage from "./sathyabama.jpeg"; // Import the image directly
import cImage from "./c.jpg";
import OracleImage from "./Oracle.png";
import CentiesImage from "./Centies.jpeg";
import ZoneImage from "./Zone.png";

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  const certificates = [
    {
      id: 1,
      title: "Oracle Certification Course",
      issuer: "Oracle",
      date: "2024",
      description: "Professional Oracle database certification covering SQL, PL/SQL, and database administration",
      credentialUrl: "https://drive.google.com/file/d/1anaep2jWzOlho2eblssArBx4YIfC2gwJ/view?usp=sharing",
      color: "from-red-500 to-orange-500",
      imageUrl: OracleImage,
    },
    {
      id: 2,
      title: "MongoDB Associate Developer",
      issuer: "MongoDB",
      date: "2024",
      description: "MongoDB Associate Developer certification - expertise in designing and building applications with MongoDB",
      credentialUrl: "#",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 3,
      title: "Sathyabama Hackathon 2K25",
      issuer: "Sathyabama Institute of Science and Technology",
      date: "2025",
      description: "Participated in Sathyabama Hackathon 2025 - innovative solutions and coding excellence showcase",
      credentialUrl: "https://drive.google.com/file/d/10V0XYMI2vxEVazvp5DOg-pXPty2ioRkV/view?usp=sharing",
      color: "from-yellow-400 to-orange-500",
      imageUrl: sathyabamaImage, // Use the imported image
    },
    {
      id: 4,
      title: "Sports Chief Minister Trophy",
      issuer: "Sports Department",
      date: "2024",
      description: "Awarded Chief Minister Trophy for outstanding performance in sports",
      credentialUrl: "https://drive.google.com/file/d/1XogxSinUbFD4TMv1mqXruuvJ35clis3l/view?usp=sharing",
      color: "from-purple-500 to-pink-500",
      imageUrl: cImage,
    },
    {
      id: 5,
      title: "Anna University Zone",
      issuer: "Anna University",
      date: "2024",
      description: "Zonal level competition recognition from Anna University for academic and extracurricular excellence",
      credentialUrl: "https://drive.google.com/file/d/1TXJAbgFOI90SanFqW8kVSggbs9I_G6Ap/view?usp=sharing",
      color: "from-blue-500 to-indigo-500",
      imageUrl: ZoneImage,
    },
    {
      id: 6,
      title: "State Level Cricket Tournament",
      issuer: "Tamil Nadu Cricket Association",
      date: "2024",
      description: "Participated in Centies - State level cricket tournament showcasing cricketing prowess at competitive level",
      credentialUrl: "https://drive.google.com/file/d/198ULFdPhJVrWdjvgDE0WG5Eko8-HGzQr/view?usp=sharing",
      color: "from-cyan-400 to-blue-500",
      imageUrl: CentiesImage,
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
    <section id="resume" className="py-20 relative overflow-hidden">
      {/* Removed explicit background as it's handled globally by App.tsx */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" /> */}

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
            className="text-5xl md:text-6xl font-extrabold text-white mb-4 relative inline-block"
          >
            My <span className="text-cyan-400">Certificates</span>
            <span className="absolute left-1/2 -bottom-2 w-24 h-1 bg-cyan-500 rounded-full transform -translate-x-1/2 opacity-70 blur-sm" />
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 mt-4"
          >
            Explore my professional certifications and credentials that showcase my expertise and achievements.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              whileHover={{
                y: -8,
                boxShadow: "0 0 30px rgba(0, 224, 255, 0.4), 0 0 15px rgba(139, 92, 246, 0.2)",
                transition: { duration: 0.3 },
              }}
              onClick={() => setSelectedCert(cert.id.toString())}
              className="relative group cursor-pointer bg-gray-900 rounded-xl border border-cyan-600/40 p-6 shadow-xl"
            >
              {/* <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"
                animate={{
                  backgroundImage: `linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(34, 211, 238, 0.1))`,
                }}
              /> */}

              <div className="absolute inset-0 rounded-xl pointer-events-none"
                style={{
                  background: "radial-gradient(circle at center, rgba(0, 224, 255, 0.1) 0%, transparent 70%)",
                  opacity: 0,
                  transition: "opacity 0.3s ease-in-out",
                }}
              />

              <div className="relative flex flex-col h-full">
                <div className="flex-shrink-0 mb-4">
                  {cert.imageUrl ? (
                    <div className="w-full h-40 rounded-lg overflow-hidden mb-4">
                      <img src={cert.imageUrl} alt={cert.title} className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div className="w-full h-40 flex items-center justify-center bg-gray-800 rounded-lg mb-4">
                      <Award className="w-12 h-12 text-cyan-400 opacity-70" />
                    </div>
                  )}
                </div>

                <div className="flex-grow">
                  <div className={`inline-flex w-fit px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-500 to-blue-500 text-white bg-opacity-20 mb-3 border border-purple-500/50`}>
                    {cert.issuer}
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-white leading-tight">
                    {cert.title}
                  </h3>

                  <p className="text-sm text-gray-400 font-medium mb-3 tracking-wider">
                    {cert.date}
                  </p>

                  <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mb-4" />

                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(139, 92, 246, 0.6)" }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedCert(cert.id.toString())}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-300 shadow-lg group/link"
                >
                  View Certificate <ExternalLink size={16} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-cyan-600/50 shadow-2xl"
              style={{ boxShadow: "0 0 40px rgba(0, 224, 255, 0.3), inset 0 0 20px rgba(0, 224, 255, 0.1)" }}
            >
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-gray-800/70 hover:bg-gray-700 flex items-center justify-center transition-colors border border-gray-700 text-white"
              >
                <span className="text-xl font-light">&times;</span>
              </motion.button>

              {(() => {
                const currentCert = certificates.find((c) => c.id.toString() === selectedCert);
                if (!currentCert) return null; // Defensive check

                return (
                  <div className="p-8 space-y-6">
                    <motion.div
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className={`relative w-full h-64 ${currentCert.imageUrl ? '' : `bg-gradient-to-br from-purple-700 to-cyan-700`} rounded-xl overflow-hidden shadow-2xl`}
                    >
                      {currentCert.imageUrl ? (
                        <img src={currentCert.imageUrl} alt={currentCert.title} className="w-full h-full object-cover" />
                      ) : (
                        <>
                          <div className="absolute inset-0 opacity-10" style={{
                            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,224,255,0.5), transparent 1px)",
                            backgroundSize: "20px 20px"
                          }} />

                          <div className="relative h-full flex flex-col items-center justify-center text-white p-6">
                            <Award className="w-16 h-16 mb-4 text-cyan-400 opacity-80" />
                            <h4 className="text-xl font-bold text-center mb-2">
                              {currentCert.title}
                            </h4>
                            <p className="text-sm opacity-90">
                              Issued by {currentCert.issuer}
                            </p>
                            <p className="text-xs opacity-80 mt-2">
                              {currentCert.date}
                            </p>
                          </div>
                        </>
                      )}

                      <div className="absolute inset-0 border-4 border-cyan-400/50 rounded-xl" />
                    </motion.div>

                    <div className="flex items-start gap-4">
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className={`p-4 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 shadow-lg flex-shrink-0`}
                      >
                        <Award className="w-8 h-8 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-bold mb-1">
                          {currentCert.title}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {currentCert.issuer} • {currentCert.date}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed">
                      {currentCert.description}
                    </p>

                    <motion.a
                      href={currentCert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(139, 92, 246, 0.8)" }}
                      whileTap={{ scale: 0.95 }}
                      className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-300 shadow-lg group/link`}
                    >
                      View Full Credential <ExternalLink size={16} />
                    </motion.a>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Certificates;
