import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";

/* ================= DATA ================= */

const graphicDesigns = [
  { id: 1, name: "Biriyani JPEG", imageUrl: "/images/biriyani.jpeg" },
  {
    id: 2,
    name: "Biriyani Poster Finish",
    imageUrl: "/images/biriyani-poster-finish.jpeg",
  },
  {
    id: 3,
    name: "Monster Poster Finish",
    imageUrl: "/images/monster-poster-finish.jpeg",
  },
  {
    id: 4,
    name: "Ponds Poster Finish",
    imageUrl: "/images/ponds-poster-finish.jpeg",
  },
];

/* duplicate for infinite feel */
const infiniteDesigns = [...graphicDesigns, ...graphicDesigns];

/* ================= COMPONENT ================= */

const GraphicDesigns = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [selected, setSelected] = useState<any>(null);

  const { scrollXProgress } = useScroll({
    container: galleryRef,
  });

  /* auto scroll */
  useEffect(() => {
    const timer = setInterval(() => {
      if (!paused) setIndex((prev) => prev + 1);
    }, 2200);

    return () => clearInterval(timer);
  }, [paused]);

  /* scroll to card */
  useEffect(() => {
    if (!galleryRef.current) return;

    const card = galleryRef.current.querySelector(
      ".design-card"
    ) as HTMLElement;

    if (!card) return;

    const width = card.offsetWidth + 24;

    galleryRef.current.scrollTo({
      left: index * width,
      behavior: "smooth",
    });
  }, [index]);

  return (
    <>
      <section id="graphic-designs" className="py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
            My <span className="text-pink-500">Graphic Designs</span>
          </h2>

          <div
            ref={galleryRef}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          >
            {infiniteDesigns.map((design, i) => (
              <DesignCard
                key={i}
                design={design}
                scrollProgress={scrollXProgress}
                onClick={() => setSelected(design)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= FULLSCREEN MODAL ================= */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-lg
              flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.img
              src={selected.imageUrl}
              alt={selected.name}
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              className="max-h-[90vh] rounded-xl
                shadow-[0_0_40px_#ec4899]"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

/* ================= CARD ================= */

interface CardProps {
  design: (typeof graphicDesigns)[0];
  scrollProgress: any;
  onClick: () => void;
}

const DesignCard = ({ design, scrollProgress, onClick }: CardProps) => {
  /* parallax ONLY for image */
  const x = useTransform(scrollProgress, [0, 1], [-40, 40]);

  return (
    <div className="design-card w-80 flex-shrink-0 snap-center group">
      {/* IMAGE (moves) */}
      <motion.div
        style={{ x }}
        whileHover={{ scale: 1.05 }}
        onClick={onClick}
        className="relative h-56 rounded-xl overflow-hidden cursor-pointer
          bg-white/10 backdrop-blur-xl border border-white/20
          shadow-[0_0_25px_rgba(236,72,153,0.35)]"
      >
        <img
          src={design.imageUrl}
          alt={design.name}
          className="w-full h-full object-cover"
          draggable={false}
        />

        {/* overlay */}
        <div
          className="absolute inset-0 bg-black/60 opacity-0
          group-hover:opacity-100 transition flex items-center justify-center"
        >
          <p className="text-white text-lg font-semibold text-center px-4">
            {design.name}
          </p>
        </div>
      </motion.div>

      {/* TEXT (static, does NOT move) */}
      <p className="mt-3 text-center text-white font-semibold pointer-events-none">
        {design.name}
      </p>
    </div>
  );
};

export default GraphicDesigns;
