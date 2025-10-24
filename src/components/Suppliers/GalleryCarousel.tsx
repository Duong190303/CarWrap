"use client";

import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";
import { motion } from "framer-motion";
import classes from "./Gallery.module.css";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
const itemVariants = {
  hidden: {
    opacity: 0,
    x: -60,
    y: 30,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.6,
    },
  },
};

const images = [
  { src: "/assets/galley/Manicure.png", alt: "Manicure", span: 3, mt: 0 },
  { src: "/assets/galley/Pedicure.png", alt: "Pedicure", span: 3, mt: 50 },
  { src: "/assets/galley/EyeLashes.png", alt: "EyeLashes", span: 3, mt: 0 },
  {
    src: "/assets/galley/Nail_Enhancements.png",
    alt: "Nail_Enhancements",
    span: 3,
    mt: 50,
  },
  {
    src: "/assets/galley/Facial_Services.png",
    alt: "Facial_Services",
    span: 3,
    mt: -50,
  },
  { src: "/assets/galley/Waxing.png", alt: "Waxing", span: 3, mt: 0 },
  {
    src: "/assets/galley/Dipping_Powder.png",
    alt: "Dipping_Powder",
    span: 3,
    mt: -50,
  },
  { src: "/assets/galley/Rectangle.png", alt: "Rectangle", span: 3, mt: 0 },
];

export const GalleyCarousel: React.FC = () => {
  const autoplay = useRef(Autoplay({ delay: 3000 }));

  return (
    <Carousel
      hiddenFrom="xs"
      classNames={{
        viewport: classes.viewport,
        controls: classes.controls,
        control: classes.control,
      }}
      // withControls={false}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={() => autoplay.current.play()}
    >
      {images.map((image) => (
        <Carousel.Slide key={image.alt}>
          <motion.div variants={itemVariants}>
            <Image
              renderRoot={(props) => (
                <motion.img
                  variants={{
                    hover: {
                      scale: 0.95,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                      },
                    },
                  }}
                  whileHover="hover"
                  {...props}
                />
              )}
              src={image.src}
              alt={image.alt}
              w="100%"
              h="auto"
              fit="contain"
              style={{
                borderRadius: "8px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                transition: "box-shadow 0.3s ease",
              }}
              styles={{
                root: {
                  "&:hover": {
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                  },
                },
              }}
            />
          </motion.div>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};
