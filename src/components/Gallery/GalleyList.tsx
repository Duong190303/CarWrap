"use client"

import { Grid, Image } from "@mantine/core"
import { motion } from "framer-motion"
import { GalleyCarousel } from "./GalleryCarousel"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

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
}

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
]

export const GalleyList: React.FC = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Grid gutter={20} visibleFrom="sm">
        {images.map((image) => (
          <Grid.Col key={image.alt} span={image.span} mt={image.mt}>
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
          </Grid.Col>
        ))}
      </Grid>
      <GalleyCarousel />
    </motion.div>
  )
}
