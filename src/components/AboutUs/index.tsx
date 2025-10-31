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
                fz={{ base: rem(24), md: rem(28), lg: rem(32) }}
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
                        <Text span fw={700} c={"#389fff"}>
                          {highlight}
                        </Text>
                      )}
                    </React.Fragment>
                  ))}
                </Text>
              ))}

              <Text fw={900} fz={{ base: rem(14), md: rem(16), lg: rem(18) }} mt={4}>
                {historyTitle}
              </Text>

              {history.map((h, i) => (
                <Text key={`h-${i}`} c="dimmed" fz="md" lh={1.7}>
                  {h.split(highlight).map((seg, j, arr) => (
                    <React.Fragment key={j}>
                      {seg}
                      {j < arr.length - 1 && (
                        <Text span fw={700} c={"#389fff"}>
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
                        "linear-gradient(135deg, #7ABEFF 0%, #389FFF 50%, #0B5ED7 100%)",
                      boxShadow: "5px #389FFF",
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
