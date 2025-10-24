// "use client"

// import { Grid, Image } from "@mantine/core"
// import { motion } from "framer-motion"
// import { GalleyCarousel } from "./GalleryCarousel"

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//       delayChildren: 0.2,
//     },
//   },
// }

// const itemVariants = {
//   hidden: {
//     opacity: 0,
//     x: -60,
//     y: 30,
//     scale: 0.8,
//   },
//   visible: {
//     opacity: 1,
//     x: 0,
//     y: 0,
//     scale: 1,
//     transition: {
//       type: "spring",
//       stiffness: 100,
//       damping: 12,
//       duration: 0.6,
//     },
//   },
// }

// const images = [
//   { src: "/assets/galley/Manicure.png", alt: "Manicure", span: 3, mt: 0 },
//   { src: "/assets/galley/Pedicure.png", alt: "Pedicure", span: 3, mt: 50 },
//   { src: "/assets/galley/EyeLashes.png", alt: "EyeLashes", span: 3, mt: 0 },
//   {
//     src: "/assets/galley/Nail_Enhancements.png",
//     alt: "Nail_Enhancements",
//     span: 3,
//     mt: 50,
//   },
//   {
//     src: "/assets/galley/Facial_Services.png",
//     alt: "Facial_Services",
//     span: 3,
//     mt: -50,
//   },
//   { src: "/assets/galley/Waxing.png", alt: "Waxing", span: 3, mt: 0 },
//   {
//     src: "/assets/galley/Dipping_Powder.png",
//     alt: "Dipping_Powder",
//     span: 3,
//     mt: -50,
//   },
//   { src: "/assets/galley/Rectangle.png", alt: "Rectangle", span: 3, mt: 0 },
// ]

// export const GalleyList: React.FC = () => {
//   return (
//     <motion.div
//       variants={containerVariants}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.2 }}
//     >
//       <Grid gutter={20} visibleFrom="sm">
//         {images.map((image) => (
//           <Grid.Col key={image.alt} span={image.span} mt={image.mt}>
//             <motion.div variants={itemVariants}>
//               <Image
//                 renderRoot={(props) => (
//                   <motion.img
//                     variants={{
//                       hover: {
//                         scale: 0.95,
//                         transition: {
//                           type: "spring",
//                           stiffness: 400,
//                           damping: 25,
//                         },
//                       },
//                     }}
//                     whileHover="hover"
//                     {...props}
//                   />
//                 )}
//                 src={image.src}
//                 alt={image.alt}
//                 w="100%"
//                 h="auto"
//                 fit="contain"
//                 style={{
//                   borderRadius: "8px",
//                   boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
//                   transition: "box-shadow 0.3s ease",
//                 }}
//                 styles={{
//                   root: {
//                     "&:hover": {
//                       boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
//                     },
//                   },
//                 }}
//               />
//             </motion.div>
//           </Grid.Col>
//         ))}
//       </Grid>
//       <GalleyCarousel />
//     </motion.div>
//   )
// }
"use client";

import React from "react";
import {
  Box,
  Container,
  Text,
  Stack,
  Image,
  rem,
  // useMantineTheme,
  Overlay,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

export type Supplier = {
  id: string | number;
  name: string;
  logo: string; // transparent PNG/SVG
  href?: string;
};

export const SupplierList: React.FC<{
  items?: Supplier[];
  title?: string;
  blurb?: string;
  background?: string;
}> = ({
  items = demoSuppliers,
  title = "OUR SUPPLIERS",
  blurb = "WrapStyle Vietnam values service quality and customer satisfaction as our core. We partner only with reputable brands recognized globally.",
  background = "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1600&auto=format&fit=crop",
}) => {
  // const theme = useMantineTheme();
  const autoplay = useRef(Autoplay({ delay: 3000 }));

  return (
    <Box pos="relative" py={rem(48)} style={{ overflow: "hidden" }}>
      {/* Background with tint */}
      <Image
        src={background}
        alt="Suppliers background"
        h={rem(360)}
        w="100%"
        fit="cover"
        // styles={{ figure: { position: "absolute", inset: 0, zIndex: 0 } }}
      />
      <Overlay
        gradient="linear-gradient(180deg, rgba(12,12,16,.65) 0%, rgba(12,12,16,.85) 60%, rgba(12,12,16,.85) 100%)"
        color="#000"
        opacity={1}
        zIndex={1}
      />

      <Container size="lg" style={{ position: "relative", zIndex: 2 }}>
        <Stack align="center" gap="xs" mb="lg">
          <Text
            fz={rem(30)}
            fw={900}
            tt="uppercase"
            c="#EAF0FF"
            style={{ letterSpacing: 1 }}
          >
            {title}
          </Text>
          <Text ta="center" c="rgba(255,255,255,.75)" maw={960}>
            {blurb}
          </Text>
        </Stack>

        <Carousel
          slideSize={{ base: "70%", sm: "40%", md: "28%" }}
          slideGap="lg"
          withIndicators={false}
          withControls
          nextControlIcon={<IconChevronRight size={22} />}
          previousControlIcon={<IconChevronLeft size={22} />}
          emblaOptions={{ loop: true, align: "start", slidesToScroll: 1 }}
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={() => autoplay.current.play()}
          styles={{
            control: {
              background: "rgba(255,255,255,.15)",
              backdropFilter: "blur(4px)",
              border: "1px solid rgba(255,255,255,.25)",
            },
            controls: {
              width: "110%",
              left: "-5%",
            },
          }}
        >
          {items.map((s) => (
            <Carousel.Slide key={s.id}>
              {/* <Box
                component={s.href ? "a" : "div"}
                href={s.href}
                p="lg"
                style={{
                  height: rem(120),
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(255,255,255,.06)",
                  border: "1px solid rgba(255,255,255,.12)",
                  boxShadow: "0 8px 24px rgba(0,0,0,.25)",
                }}
              > */}
              <Image
                src={s.logo}
                alt={s.name}
                fit="contain"
                h={56}
                mah={56}
                w="auto"
              />
              {/* </Box> */}
            </Carousel.Slide>
          ))}
        </Carousel>
      </Container>
    </Box>
  );
};

// --- Demo data: replace with your suppliers logos ---
const demoSuppliers: Supplier[] = [
  {
    id: 1,
    name: "Wrapstock",
    logo: "/logobrand/brand1.png",
    href: "#",
  },
  {
    id: 2,
    name: "3D Changer",
    logo: "/logobrand/brand2.png",
  },
  {
    id: 3,
    name: "Unreal Exists",
    logo: "/logobrand/brand3.png",
  },
  {
    id: 4,
    name: "XERO",
    logo: "/logobrand/brand4.png",
  },
  {
    id: 5,
    name: "Premium Films",
    logo: "/logobrand/brand5.png",
  },
  {
    id: 6,
    name: "3D Changer",
    logo: "/logobrand/brand6.png",
  },
  {
    id: 7,
    name: "Unreal Exists",
    logo: "/logobrand/brand7.png",
  },
  {
    id: 8,
    name: "XERO",
    logo: "/logobrand/brand8.png",
  },
];
