// import { Container, Flex, Group, Stack, Text, Box, Paper } from "@mantine/core";
// import {
//   IconBrandFacebookFilled,
//   IconBrandInstagramFilled,
//   IconBrandTiktokFilled,
// } from "@tabler/icons-react";
// import { useMatches } from "@mantine/core";
// const socialLinks = [
//   {
//     icon: IconBrandFacebookFilled,
//     href: "/#",
//   },
//   {
//     icon: IconBrandInstagramFilled,
//     href: "/#",
//   },
//   {
//     icon: IconBrandTiktokFilled,
//     href: "/#",
//   },
// ];
// export const ContactUs: React.FC = () => {
//   const sizeIconSocial = useMatches({
//     base: 16,
//     md: 20,
//   });
//   return (
//     <Container size="xl" mx="auto" component="section" id="contact_us">
//       <Flex direction={"row"} gap={{ base: 20, sm: 50 }} p={0}>
//         <Stack>
//           <Group>
//             <Text>
//               At Nail Daisy, we create a relaxing nail experience with safe
//               materials, on-trend color palettes, and strict sanitation. Easy
//               booking, thoughtful consultation, and a 7-day polish guarantee—so
//               you feel confident every day.
//             </Text>
//             <Box>
//               {" "}
//               <Text>Flow us</Text>
//               <Flex align="center" gap={20} p={10} justify="flex-start">
//                 {socialLinks.map((link, index) => (
//                   <Paper
//                     key={index}
//                     classNames={{ root: "socialLink" }}
//                     w={{ base: 30, md: 35 }}
//                     h={{ base: 30, md: 35 }}
//                   >
//                     <link.icon size={sizeIconSocial} color="#fff" />
//                   </Paper>
//                 ))}
//               </Flex>
//             </Box>
//           </Group>
//         </Stack>{" "}
//       </Flex>
//     </Container>
//   );
// };
// src/components/ContactUs/index.tsx
"use client";

import React from "react";
import { Flex, Group, Stack, Text, Box, Paper, Divider, Container } from "@mantine/core";
import {
  IconBrandFacebookFilled,
  IconBrandInstagramFilled,
  IconBrandTiktokFilled,
  IconBrandGmail,
  IconPhoneCall,
} from "@tabler/icons-react";
import { useMatches } from "@mantine/core";
import { GradientText } from "../UI/GradientText/GradientText";
import { ContactForm } from "./ContactForm";

const socialLinks = [
  { icon: IconBrandFacebookFilled, href: "/#" },
  { icon: IconBrandInstagramFilled, href: "/#" },
  { icon: IconBrandTiktokFilled, href: "/#" },
];

export const ContactUs: React.FC = () => {
  // chọn 16 trên mobile, 20 từ md trở lên
  const sizeIconSocial = useMatches<number>({ base: 16, md: 20 });

  return (
    <Container mt={50} size="xl" mx="auto" component="section" id="contact_us">
      <Flex direction="row" gap={{ base: 20, sm: 0 }} p={{base: 0, md : " 0 20px" }}>
        <Stack w={"50%"} gap={75} justify="flex-end" visibleFrom="md">
          <Group align="flex-start" gap={30}>
            <Text w={"80%"}>
              At Nail Daisy, we create a relaxing nail experience with safe
              materials, on-trend color palettes, and strict sanitation. Easy
              booking, thoughtful consultation, and a 7-day polish guarantee—so
              you feel confident every day.
            </Text>

            <Box>
              <Text fw={600} mb={8}>
                Follow us
              </Text>

              <Flex
                align="center"
                gap={20}
                p={10}
                justify="flex-start"
                direction={"row"}
              >
                {socialLinks.map(({ icon: Icon, href }, i) => (
                  <Paper
                    key={i}
                    component="a"
                    href={href}
                    radius="xl"
                    withBorder={false}
                    w={{ base: 30, md: 35 }}
                    h={{ base: 30, md: 35 }}
                    style={{
                      display: "grid",
                      placeItems: "center",
                      background: "#f666ae",
                    }}
                  >
                    <Icon size={sizeIconSocial} color="#fff" />
                  </Paper>
                ))}
              </Flex>
            </Box>
          </Group>
          <Divider  color={"#f666ae"}/>
          <Box style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <Text fw={600}>More Infomation</Text>
            <Flex align="flex-start" gap={15} direction={"column"}>
              <Group gap={10}>
                <IconBrandGmail size={20} stroke={1.5} color="#f666ae" />
                <Text fz={{ base: 14, md: 16 }} c="#f666ae">
                  info@nailartstudio.com
                </Text>
              </Group>
              <Group gap={10}>
                <IconPhoneCall size={20} stroke={1.5} color="#f666ae" />
                <GradientText
                  colors={[
                    "#ff0066",
                    "#ffff00",
                    "#00ff66",
                    "#ff0066",
                    "#ffff00",
                  ]}
                  animationSpeed={3}
                  showBorder={false}
                  className="custom-class"
                >
                  (209) 555-0104
                </GradientText>
              </Group>
            </Flex>
          </Box>
        </Stack>
        <ContactForm />
      </Flex>
    </Container>
  );
};
