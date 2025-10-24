// "use client";

// import { lora } from "@/theme/fonts";
// import {
//   Flex,
//   Grid,
//   Image,
//   Text,
//   Title,
//   UnstyledButton,
//   Box,
// } from "@mantine/core";
// import { useMemo } from "react";
// import classes from "./Service.module.css";
// import { ServiceCarousel } from "./ServiceCarousel";

// export type ServiceType = {
//   image: string;
//   title: string;
//   description: string;
//   href?: string;
// };

// export const ServiceList: React.FC = () => {
//   const serviceList: ServiceType[] = useMemo(() => {
//     return [
//       {
//         image: "/assets/service/nail_art.png",
//         title: "Nail Art",
//         description:
//           "Turn your nails into tiny works of art. From minimalist lines to bold, colorful patterns — we bring your vision to life.",
//       },
//       {
//         image: "/assets/service/manicure.png",
//         title: "Manicure",
//         description:
//           "A perfect manicure for any occasion. Clean, shape, nourish, and shine — your hands will thank you.",
//       },
//       {
//         image: "/assets/service/pedicure.png",
//         title: "Pedicure",
//         description:
//           "Relax and indulge. Our soothing pedicure treatments rejuvenate your feet and leave them silky soft.",
//       },
//       {
//         image: "/assets/service/other_services.png",
//         title: "Other Services",
//         description:
//           "Waxing, hand spa, gel removal, and more — all in one relaxing beauty space.",
//       },
//     ];
//   }, []);
//   return (
//     <Box>
//       <Grid
//         classNames={{ inner: classes.serviceGridInner }}
//         gutter={{ base: 0, sm: 10, md: 0 }}
//         visibleFrom="sm"
//       >
//         {serviceList.map((service) => (
//           <Grid.Col
//             className={classes.serviceCardCol}
//             key={service.title}
//             span={{ base: 12, sm: 6, md: 6, lg: 3 }}
//             p={0}
//             maw={{ base: 400, sm: 360, md: 400, lg: "100%" }}
//             w={"100%"}
//           >
//             <Flex
//               classNames={{ root: classes.serviceCard }}
//               direction="column"
//               gap={10}
//               align="center"
//               justify="center"
//             >
//               <Image
//                 src={service.image}
//                 alt={service.title}
//                 fit="cover"
//                 w="auto"
//                 h={84}
//               />
//               <Title
//                 ta="center"
//                 className={lora.className}
//                 order={3}
//                 c="main.0"
//                 fw={300}
//                 fz={{ base: 30, sm: 25, md: 30 }}
//               >
//                 {service.title}
//               </Title>
//               <Text ta="center" fz={16} h={74}>
//                 {service.description}
//               </Text>
//               <UnstyledButton mt={10}>
//                 <Text ta="center" fz={16} fw={600} tt="uppercase">
//                   View details
//                 </Text>
//               </UnstyledButton>
//             </Flex>
//           </Grid.Col>
//         ))}
//       </Grid>
//       <ServiceCarousel />
//     </Box>
//   );
// };
"use client";

import React from "react";
import {
  Box,
  Container,
  SimpleGrid,
  Text,
  Stack,
  BackgroundImage,
  Overlay,
  ActionIcon,
  rem,
  Image,
} from "@mantine/core";

export type ServiceItem = {
  id: string | number;
  title: string;
  image: string;
  href?: string;
  icon?: React.ReactNode;
};

function ServiceTile({ item }: { item: ServiceItem }) {
  return (
    <BackgroundImage
      src={item.image}
      radius="md"
      style={{
        position: "relative",
        overflow: "hidden",
        height: rem(260),
        boxShadow: "0 8px 24px rgba(0,0,0,.25)",
      }}
    >
      {/* dark gradient overlay */}
      <Overlay
        gradient="linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.65) 65%, rgba(0,0,0,0.85) 100%)"
        opacity={1}
        zIndex={0}
      />

      <Stack
        align="center"
        justify="center"
        h="100%"
        gap={6}
        style={{ position: "relative", zIndex: 1 }}
      >
        <ActionIcon
          variant="white"
          size={70}
          radius="xl"
          style={{
            background: "rgba(255,255,255,.18)",
            backdropFilter: "blur(4px)",
          }}
        >
          <Image src={item.icon} alt={item.title} h={rem(40)} w={rem(40)} />
        </ActionIcon>
        <Text fw={900} fz={rem(22)} tt="uppercase" c="#fff" lh={1}>
          {item.title}
        </Text>
      </Stack>

      {/* subtle top dotted texture */}
      <Box
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(2px 2px at 10% 10%, rgba(255,255,255,.12) 1px, transparent 1px) repeat",
          backgroundSize: "22px 22px",
          opacity: 0.25,
          pointerEvents: "none",
        }}
      />

      {/* hover shine */}
      <Box
        className="hover-shine"
        style={{
          position: "absolute",
          top: -120,
          left: -120,
          width: 240,
          height: 240,
          transform: "rotate(35deg)",
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,.35), transparent)",
          transition: "all .6s ease",
          pointerEvents: "none",
        }}
      />
      <style>{`
        .mantine-BackgroundImage-root:hover .hover-shine{ left: 120%; }
      `}</style>
    </BackgroundImage>
  );
}

export const ServiceList: React.FC<{ items?: ServiceItem[] }> = ({
  items = defaultItems,
}: {
  items?: ServiceItem[];
}) => {
  return (
    <Box py={rem(48)} style={{ background: "var(--mantine-color-dark-8)" }}>
      <Container size="lg">
        <Stack align="center" gap={4} mb="lg">
          <Text
            fz={rem(34)}
            fw={900}
            tt="uppercase"
            c="#EAF0FF"
            style={{ letterSpacing: 1 }}
          >
            Our Services
          </Text>
          <Text ta="center" c="dimmed" maw={780}>
            There is no challenge we would not commit to do. Our work meets the
            highest quality standards and professionalism in the business.
            Offering premium services in car wrapping, commercial vinyl
            installations, automobile window tinting, yacht wrapping, paint
            protection film and ceramic paint protection.
          </Text>
        </Stack>

        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
          {items.map((it) => (
            <ServiceTile key={it.id} item={it} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

const defaultItems: ServiceItem[] = [
  {
    id: 1,
    title: "Wrapping",
    icon: "/icons/wrapping.png",
    image: "/assets/service/wrapping.jpg",
  },
  {
    id: 2,
    title: "Design",
    icon: "/icons/design.png",
    image:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Protection",
    icon: "/icons/protection.png",
    image: "/assets/service/protection.jpg",
  },
  {
    id: 4,
    title: "Tinting",
    icon: "/icons/tinting.png",
    image: "/assets/service/tinting.jpg",
  },
  {
    id: 5,
    title: "Detailing",
    icon: "/icons/detailing.png",
    image: "/assets/service/detailing.jpg",
  },
  {
    id: 6,
    title: "Bodykit",
    icon: "/icons/bodykit.png",
    image: "/assets/service/bodykit.jpg",
  },
];
