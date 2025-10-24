// "use client";

// import { lora } from "@/theme/fonts";
// import {
//   Box,
//   Container,
//   Flex,
//   Grid,
//   Group,
//   Image,
//   Stack,
//   Text,
//   Title,
// } from "@mantine/core";
// import { ButtonDaisy } from "../ButtonDaisy";
// import { CountUp } from "../UI/CountUp/CountUp";
// import { ShinyText } from "../UI/ShinyText/ShinyText";
// import classes from "./Skilled.module.css";
// import { motion } from "framer-motion";

// export const NewToday: React.FC = () => {
//   return (
//     <Box component="section" py={{ base: 100, sm: 80 }} id="skilled">
//       <Container size="xl" mx="auto" className={classes.container}>
//         <Grid gutter={60} display={{ base: "block", sm: "flex" }}>
//           <Grid.Col span={5}>
//             <Flex
//               direction="column"
//               justify={{ base: "space-between" }}
//               h={"100%"}
//               gap={15}
//               pos={{ base: "absolute", sm: "relative" }}
//               columnGap={{ base: 50 }}
//               classNames={{ root: classes.FlexRoot }}
//             >
//               <Text
//                 tt="uppercase"
//                 fz={16}
//                 fw={600}
//                 c="main.0"
//                 renderRoot={(props) => (
//                   <motion.p
//                     initial={{ opacity: 0, y: -20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{
//                       duration: 0.5,
//                       delay: 0.1,
//                     }}
//                     {...props}
//                   />
//                 )}
//               >
//                 GET YOUR SHINE ON
//               </Text>
//               <Title
//                 className={lora.className}
//                 order={2}
//                 tt="capitalize"
//                 fz={{ base: 42, sm: 38, md: 42 }}
//                 fw={400}
//                 w={{ base: 200, sm: "100%" }}
//                 c={{ base: "#f0f0f0", sm: "#444444" }}
//                 renderRoot={(props) => (
//                   <motion.p
//                     initial={{ opacity: 0, y: -30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{
//                       duration: 0.5,
//                       delay: 0.1,
//                     }}
//                     {...props}
//                   />
//                 )}
//               >
//                 Skilled Nail Art
//               </Title>
//               <ShinyText
//                 text="Where creativity meets care. At NailsArt Studio, every nail is a canvas and every design tells your story.   Enjoy a luxurious experience with personalized treatments, premium products, and meticulous artistry that keeps your hands flawless."
//                 disabled={false}
//                 speed={2}
//                 className={`${lora.className} ${classes.shinyText}`}
//               />
//               <Flex gap={{ base: 50, sm: 20 }} direction={"column"}>
//                 <Group gap={70} mt={10}>
//                   <Stack gap={0}>
//                     <Text
//                       className={lora.className}
//                       fz={{ base: 42, sm: 38, md: 42 }}
//                       fw={500}
//                       c="main.0"
//                       lh={1.2}
//                     >
//                       <CountUp
//                         from={0}
//                         to={20}
//                         separator=","
//                         direction="up"
//                         duration={1}
//                         className="count-up-text"
//                       />
//                       K+
//                     </Text>
//                     <Text fz={14} fw={400} tt="uppercase">
//                       HAPPY CUSTOMERS
//                     </Text>
//                   </Stack>
//                   <Stack gap={0}>
//                     <Text
//                       className={lora.className}
//                       fz={42}
//                       fw={500}
//                       c="main.0"
//                       lh={1.2}
//                     >
//                       <CountUp
//                         from={0}
//                         to={15}
//                         separator=","
//                         direction="up"
//                         duration={1}
//                         className="count-up-text"
//                       />
//                       +
//                     </Text>
//                     <Text fz={14} fw={400} tt="uppercase">
//                       YEARS OF EXPERIENCE
//                     </Text>
//                   </Stack>
//                 </Group>
//                 <ButtonDaisy
//                   type="primary"
//                   size="md"
//                   radius="sm"
//                   right={{ base: 6, sm: "unset" }}
//                   w={{ base: "100%", sm: 180 }}
//                   h={45}
//                   iconLeft={
//                     <Image src="/booking_icon.png" alt="booking" w={20} />
//                   }
//                   iconRight={
//                     <Image
//                       style={{
//                         overflow: "hidden",
//                         borderRadius: "100%",
//                       }}
//                       src="/phone.gif"
//                       alt="booking"
//                       w={25}
//                       h={25}
//                     />
//                   }
//                 >
//                   BOOK NOW
//                 </ButtonDaisy>
//               </Flex>
//             </Flex>
//           </Grid.Col>
//           <Grid.Col span={7} visibleFrom="sm">
//             <Group
//               classNames={{
//                 root: classes.skilledGroup,
//               }}
//               pos="relative"
//               justify="center"
//               align={"center"}
//               h="100%"
//               w="100%"
//             >
//               <Box
//                 className={classes.skilledBox}
//                 style={{
//                   zIndex: -1,
//                 }}
//                 w={200}
//                 h={150}
//                 bg="#F2F2F2"
//               />
//               <Image
//                 visibleFrom="sm"
//                 className={classes.skilledImage}
//                 src="/assets/skilled/img_skilled.png"
//                 alt="nail art skilled"
//                 w={{ base: "auto", sm: 420, md: 550, xl: 700 }}
//                 h={420}
//                 fit="cover"
//               />
//               <Image
//                 className={classes.skilledCircle}
//                 style={{
//                   zIndex: -1,
//                 }}
//                 src="/assets/skilled/circle_pink.png"
//                 alt="nail art skilled"
//                 w={145}
//                 h={145}
//                 fit="cover"
//               />
//             </Group>
//           </Grid.Col>
//         </Grid>

//         <Group
//           classNames={{
//             root: classes.skilledGroup,
//           }}
//           pos="relative"
//           justify="center"
//           align={"center"}
//           h="100%"
//           w="100%"
//           hiddenFrom="xs"
//         >
//           <Image
//             className={classes.skilledCircle}
//             style={{
//               zIndex: -1,
//             }}
//             src="/assets/skilled/circle_pink.png"
//             alt="nail art skilled"
//             w={145}
//             h={145}
//             fit="cover"
//           />
//           <Image
//             className={classes.skilledCircle1}
//             style={{
//               zIndex: -1,
//             }}
//             src="/assets/skilled/circle_pink.png"
//             alt="nail art skilled"
//             w={145}
//             h={145}
//             fit="cover"
//           />
//         </Group>
//       </Container>
//     </Box>
//   );
// };
"use client";

import React from "react";
import {
  Box,
  Container,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Badge,
  Card,
  Image,
  rem,
  Anchor,
  ActionIcon,
} from "@mantine/core";
import { IconShare2 } from "@tabler/icons-react";

export type NewsItem = {
  id: string | number;
  category: string; // e.g. "PPF", "WRAPPING", "HOT NEWS"
  categoryColor?: string; // Mantine color or any CSS color
  title: string;
  date: string; // formatted date text
  image: string; // img url
  href?: string; // link to detail
};

function NewsCard({ item }: { item: NewsItem }) {
  return (
    <Card
      withBorder
      variant="transparent"
      radius="lg"
      p={0}
      style={{
        overflow: "hidden",
        boxShadow: "0 8px 24px rgba(0,0,0,.18), 0 2px 8px rgba(0,0,0,.08)",
      }}
    >
      <Box pos="relative">
        <Image
          src={item.image}
          alt={item.title}
          h={rem(260)}
          w="100%"
          fit="cover"
        />
        <Badge
          size="sm"
          radius="sm"
          variant="filled"
          style={{
            position: "absolute",
            left: rem(12),
            top: rem(12),
            background: item.categoryColor ?? "#111",
            fontWeight: 700,
            letterSpacing: 0.4,
          }}
        >
          {item.category}
        </Badge>
      </Box>

      <Stack gap="xs" p="md">
        <Text size="sm" c="dimmed">
          {item.date}
        </Text>

        <Group justify="space-between" align="flex-start">
          {item.href ? (
            <Anchor
              href={item.href}
              underline="never"
              c="var(--mantine-color-text)"
            >
              <Text
                fw={700}
                size="lg"
                lh={1.3}
                style={{ wordBreak: "break-word" }}
              >
                {item.title}
              </Text>
            </Anchor>
          ) : (
            <Text
              fw={700}
              size="lg"
              lh={1.3}
              style={{ wordBreak: "break-word" }}
            >
              {item.title}
            </Text>
          )}

          <ActionIcon variant="subtle" radius="xl" aria-label="Share">
            <IconShare2 size={18} />
          </ActionIcon>
        </Group>
      </Stack>
    </Card>
  );
}

export const NewToday: React.FC<{ items?: NewsItem[]; title?: string }> = ({
  items = defaultItems,
  title = "WHAT'S NEW TODAY",
}: {
  items?: NewsItem[];
  title?: string;
}) => {
  return (
    <Box
      component="section"
      py="xl"
      id="new-today"
      mt={50}
      style={{
        background: "white",
      }}
    >
      <Container size="lg">
        <Text
          ta="center"
          fw={900}
          fz={rem(44)}
          mb="lg"
          style={{ letterSpacing: 1, textTransform: "uppercase" }}
        >
          {title}
        </Text>

        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
          {items.map((it) => (
            <NewsCard key={it.id} item={it} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

// --- Demo data (replace with API data) ---
const defaultItems: NewsItem[] = [
  {
    id: 1,
    category: "PPF",
    categoryColor: "#111",
    title:
      "PHIM PPF OPTIC SHIELD – SẢN PHẨM BẢO VỆ Ô TÔ CAO CẤP CÓ MẶT TẠI WRAPSTYLE VIỆT…",
    date: "March 2, 2025",
    image:
      "/assets/carousel/img1.jpg",
    href: "#",
  },
  {
    id: 2,
    category: "WRAPPING",
    categoryColor: "#FFB703",
    title:
      "CẬN CẢNH ‘SIÊU BÒ’ LAMBORGHINI URUS S XUỐNG PHỐ VỚI BỘ CÁNH XANH BABY BLUE…",
    date: "October 23, 2024",
    image:
      "/assets/carousel/img2.jpg",
    href: "#",
  },
  {
    id: 3,
    category: "HOT NEWS",
    categoryColor: "#F03E3E",
    title:
      "WRAPSTYLE ‘LÀM ĐẸP’ CHO DÀN XE PORSCHE CLUB VIETNAM HẬU CHUYẾN HÀNH TRÌNH…",
    date: "October 17, 2024",
    image:
      "/assets/carousel/img3.jpg",
    href: "#",
  },
];
