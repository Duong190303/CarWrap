"use client"

import { lora } from "@/theme/fonts"
import {
  BackgroundImage,
  Box,
  Container,
  Grid,
  GridCol,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core"
import type React from "react"
import { useEffect, useRef, useState } from "react"
import * as motion from "motion/react-client"
import classes from "./NailHero.module.css"

export const NailHero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20
      const y = (e.clientY / window.innerHeight - 0.5) * 20
      setMousePosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <Box component="section" py={80} ref={heroRef}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <BackgroundImage
          pos="relative"
          src="/assets/nail_hero/bg_nail_hero.png"
          h={{
            base: 535,
          }}
          className={classes.backgroundImage}
          style={{
            background:
              "linear-gradient(135deg, #e91e63 0%, #9c27b0 50%, #673ab7 100%)",
            minHeight: "535px",
          }}
        >
          <Box
            pos="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            style={{
              background: "rgba(0, 0, 0, 0.3)",
              zIndex: 0,
            }}
          />

          <motion.div
            className={classes.floatingParticles}
            animate={{
              x: mousePosition.x * 0.5,
              y: mousePosition.y * 0.5,
            }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
            style={{ zIndex: 1 }}
          >
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className={classes.particle}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: isVisible ? [0.3, 0.7, 0.3] : 0,
                  scale: isVisible ? [0.5, 1, 0.5] : 0,
                  y: [-20, 20, -20],
                }}
                transition={{
                  duration: 4 + i * 0.5,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
                style={{
                  left: `${15 + i * 12}%`,
                  top: `${20 + (i % 2) * 30}%`,
                }}
              />
            ))}
          </motion.div>

          <Container size="md" mx="auto" pos="relative" style={{ zIndex: 2 }}>
            <Stack align="center" px={10} py={60}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  y: isVisible ? 0 : 50,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: "easeOut",
                }}
              >
                <Text ta="center" fz={16} tt="uppercase" fw="bold" c="white">
                  GET YOUR SHINE ON
                </Text>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  y: isVisible ? 0 : 50,
                }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  ease: "easeOut",
                }}
              >
                <Title
                  className={lora.className}
                  ta="center"
                  m="0 auto"
                  tt="capitalize"
                  fz={{ base: 30, sm: 42 }}
                  fw={{ base: 700, sm: "bold" }}
                  c="white"
                  w={{ base: "100%", sm: "70%" }}
                >
                  We Care About Your Nail And Your well-Being
                </Title>
              </motion.div>
            </Stack>
          </Container>

          <motion.div
            className={classes.nailHeroThumb}
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: isVisible ? 1 : 0,
              y: isVisible ? 0 : 100,
            }}
            transition={{
              duration: 1.2,
              delay: 0.8,
              ease: "easeOut",
            }}
            style={{ zIndex: 3 }}
          >
            <Grid gutter={10} top={"30%"} >
              <GridCol span={{ base: 12, sm: 6 }}>
                <motion.div
                  className={classes.imageWrapper}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    z: 50,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    duration: 0.8,
                    delay: 1.2,
                    ease: "easeOut",
                  }}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{
                    opacity: isVisible ? 1 : 0,
                    x: isVisible ? 0 : -50,
                  }}
                >
                  <Image
                    src="/assets/nail_hero/img_nail_hero_1.png"
                    alt="nail hero"
                    w="100%"
                    h="100%"
                    fit="cover"
                    className={classes.heroImage}
                  />
                  <motion.div
                    className={classes.imageOverlay}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </GridCol>
              <GridCol span={{ base: 12, sm: 6 }}>
                <motion.div
                  className={classes.imageWrapper}
                  whileHover={{
                    scale: 1.05,
                    rotateY: -5,
                    z: 50,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    duration: 0.8,
                    delay: 1.4,
                    ease: "easeOut",
                  }}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{
                    opacity: isVisible ? 1 : 0,
                    x: isVisible ? 0 : 50,
                  }}
                >
                  <Image
                    src="/assets/nail_hero/img_nail_hero_2.png"
                    alt="nail hero"
                    w="100%"
                    h="100%"
                    fit="cover"
                    className={classes.heroImage}
                  />
                  <motion.div
                    className={classes.imageOverlay}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </GridCol>
            </Grid>
          </motion.div>
        </BackgroundImage>
      </motion.div>
    </Box>
  )
}
