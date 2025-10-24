// "use client";

// import { lora } from "@/theme/fonts";
// import { Carousel } from "@mantine/carousel";
// import {
//   Avatar,
//   Box,
//   Card,
//   Container,
//   Rating,
//   Stack,
//   Text,
//   Title,
// } from "@mantine/core";
// import classes from "./AboutUs.module.css";
// import Autoplay from "embla-carousel-autoplay";
// import { useRef } from "react";

// export const AboutUs: React.FC = () => {
//   const autoplay = useRef(Autoplay({ delay: 5000 }));

//   const feedbacks = [
//     {
//       avatar: "https://i.pravatar.cc/150?img=5",
//       text: "Excellent experience from booking to finish. The salon is spotless, and the staff is lovely!",
//       rating: 5,
//     },
//     {
//       avatar: "https://i.pravatar.cc/150?img=12",
//       text: "Super professional staff and very clean salon. I’ll definitely come back!",
//       rating: 4.5,
//     },
//     {
//       avatar: "https://i.pravatar.cc/150?img=19",
//       text: "My manicure lasted over two weeks without a chip! Best nail service I’ve ever had.",
//       rating: 5,
//     },
//     {
//       avatar: "https://i.pravatar.cc/150?img=23",
//       text: "They took their time and paid attention to detail. My nails look perfect.",
//       rating: 4.5,
//     },
//     {
//       avatar: "https://i.pravatar.cc/150?img=29",
//       text: "Super professional, super clean, and the designs are stunning. I’m definitely coming back!",
//       rating: 5,
//     },
//     {
//       avatar: "https://i.pravatar.cc/150?img=32",
//       text: "Quick service but still very high quality. My gel nails look flawless.",
//       rating: 4.5,
//     },
//     {
//       avatar: "https://i.pravatar.cc/150?img=36",
//       text: "Beautiful nail art, gentle service, and relaxing atmosphere. Highly recommended.",
//       rating: 5,
//     },
//     {
//       avatar: "https://i.pravatar.cc/150?img=45",
//       text: "Great variety of nail colors and designs. Staff is very creative.",
//       rating: 4.5,
//     },
//     {
//       avatar: "https://i.pravatar.cc/150?img=47",
//       text: "My nails look gorgeous, and the polish is still shiny after days!",
//       rating: 5,
//     },
//     {
//       avatar: "https://i.pravatar.cc/150?img=49",
//       text: "Excellent experience overall, from booking to finish. Highly recommended.",
//       rating: 4.5,
//     },
//   ];

//   return (
//     <Box component="section" pt={80} id="about_us">
//       <Container fluid mx={{ base: 0, sm: 70 }}>
//         <Title
//           className={lora.className}
//           order={2}
//           tt="capitalize"
//           fz={42}
//           fw="bold"
//           ta="center"
//           c="#444444"
//         >
//           What People Say About Us
//         </Title>

//         <Carousel
//           py={20}
//           h={{ base: 250, sm: 300 }}
//           slideSize={{
//             base: "100%",
//             sm: "33.333333%",
//             md: "33.333333%",
//             lg: "33.333333%",
//             xl: "25%",
//           }}
//           slideGap={190}
//           emblaOptions={{ loop: true, align: "start", slidesToScroll: 1 }}
//           plugins={[autoplay.current]}
//           onMouseEnter={autoplay.current.stop}
//           onMouseLeave={() => autoplay.current.play()}
//           classNames={{
//             viewport: classes.viewport,
//             controls: classes.controls,
//             control: classes.control,
//             slide: classes.slide,
//           }}
//           style={{ gap: "20px" }}
//         >
//           {feedbacks.map((item, index) => (
//             <Carousel.Slide key={index}>
//               <Stack gap={10} align="center">
//                 <Avatar src={item.avatar} size={70} />
//                 <Text ta="center" fz={14} fw={400} h={70} p={"0 20px"}>
//                   {item.text}
//                 </Text>
//                 <Card
//                   radius="lg"
//                   bg="white"
//                   styles={{
//                     root: {
//                       stroke: "1px solid #F8F8F8",
//                       boxShadow: "0 0 11px 0 rgba(0, 0, 0, 0.08)",
//                     },
//                   }}
//                   p={10}
//                 >
//                   <Rating
//                     value={item.rating}
//                     fractions={2}
//                     readOnly
//                     color="main.0"
//                     size="sm"
//                   />
//                 </Card>
//               </Stack>
//             </Carousel.Slide>
//           ))}
//         </Carousel>
//       </Container>
//     </Box>
//   );
// };
"use client";

import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  GridCol,
  Group,
  Image,
  Stack,
  Text,
  rem,
} from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";

export type AboutProps = {
  eyebrow?: string; // e.g. "ABOUT US"
  highlight?: string; // e.g. brand name to color
  paragraphs?: string[]; // main copy
  historyTitle?: string; // e.g. "LỊCH SỬ HÌNH THÀNH"
  history?: string[]; // history paragraphs
  ctaText?: string;
  ctaHref?: string;
  image?: string;
};
export const AboutUs: React.FC<AboutProps> = ({
  eyebrow = "ABOUT US",
  highlight = "CarWrap™",
  paragraphs = [
    `${"CarWrap™"} is a world-leading company in the Wrapping industry. With over 14 years of experience and development, WrapStyle has always been a trusted choice for speed enthusiasts and automotive perfectionists.`,
  ],
  historyTitle = "OUR HISTORY",
  history = [
    "CarWrap Vietnam was established in 2017, but its journey began in 2015, when CEO Phong Ho – a true car enthusiast – opened one of the first shops specializing in vehicle personalization, especially for supercars.",
    "Recognizing the potential of the wrapping market in Vietnam, along with the increasing demand for premium services, CEO Phong Ho decided to partner with WrapStyle™ (…).",
  ],
  ctaText = "LEARN MORE",
  ctaHref = "#",
  image = "/assets/about/Aboutmage.jpg",
}: AboutProps) => {
  return (
    <Box
      component="section"
      id="about_us"
      mt={30}
      py={rem(36)}
      // style={{
      //   background:
      //     "radial-gradient(1100px 250px at 50% -10%, rgba(255,255,255,.06), transparent), var(--mantine-color-dark-8)",
      // }}
    >
      <Container size="xl">
        <Grid gutter={{ base: "md", md: 32 }} align="stretch">
          <GridCol span={{ base: 12, md: 6 }}>
            <Stack gap={rem(18)} justify="center" h="100%">
              <Text
                fw={900}
                fz={rem(32)}
                tt="uppercase"
                style={{ letterSpacing: 1 }}
              >
                {eyebrow}
              </Text>

              {paragraphs.map((p, i) => (
                <Text key={`p-${i}`} c="dimmed" fz="md" lh={1.7}>
                  {/* highlight brand mentions */}
                  {p.split(highlight).map((seg, j, arr) => (
                    <React.Fragment key={j}>
                      {seg}
                      {j < arr.length - 1 && (
                        <Text span fw={700} c="#FFB703">
                          {highlight}
                        </Text>
                      )}
                    </React.Fragment>
                  ))}
                </Text>
              ))}

              <Text fw={900} fz={rem(18)} mt={4}>
                {historyTitle}
              </Text>

              {history.map((h, i) => (
                <Text key={`h-${i}`} c="dimmed" fz="md" lh={1.7}>
                  {h.split(highlight).map((seg, j, arr) => (
                    <React.Fragment key={j}>
                      {seg}
                      {j < arr.length - 1 && (
                        <Text span fw={700} c="#FFB703">
                          {highlight}
                        </Text>
                      )}
                    </React.Fragment>
                  ))}
                </Text>
              ))}

              <Group mt="xs">
                <Button
                  component="a"
                  href={ctaHref}
                  size="md"
                  radius="md"
                  rightSection={<IconChevronRight size={18} />}
                  styles={{
                    root: {
                      background:
                        "linear-gradient(135deg, #9F82FF 0%, #7C5CFF 45%, #6B8CFF 100%)",
                      boxShadow: "0 10px 24px rgba(124,92,255,0.25)",
                    },
                  }}
                >
                  {ctaText}
                </Button>
              </Group>
            </Stack>
          </GridCol>

          <GridCol span={{ base: 12, md: 6 }}>
            <Image
              src={image}
              alt="About image"
              radius="md"
              h={{ base: rem(260), md: rem(420) }}
              fit="cover"
            />
          </GridCol>
        </Grid>
      </Container>
    </Box>
  );
};
