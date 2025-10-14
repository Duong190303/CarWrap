"use client";

import { Carousel as MantineCarousel } from "@mantine/carousel";
import { BackgroundImage, Flex, Text, Box } from "@mantine/core";
import classes from "./Carousel.module.css";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export const Carousel: React.FC = () => {
  const autoplay = useRef(Autoplay({ delay: 3000 }));
  return (
    <Box component="section">
      <Flex
        pos={"absolute"}
        hiddenFrom="xs"
        direction="column"
        h={200}
        justify="center"
        align="flex-start"
        bottom={"50%"}
        left={"5%"}
        style={{ zIndex: 10 }}
       
      >
        <Text fz={48} c={"#F666AE"} fw={700}>
          BEAUTY
        </Text>
        <Text w={260} fz={40} c={"#FFFFFF"} fw={700}>
          WE BRING IT TO YOU
        </Text>
      </Flex>
      <MantineCarousel
        classNames={{
          indicators: classes.indicators,
          indicator: classes.indicator,
        }}
        withIndicators
        withControls={false}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={() => autoplay.current.play()}
      >
        <MantineCarousel.Slide>
          <BackgroundImage
            src="/assets/carousel/bg_1.png"
            w="100%"
            h={{ base: 660, xl: 500, xxl: 640 }}
            bgsz="cover"
            bgp="center"
          />
        </MantineCarousel.Slide>
        <MantineCarousel.Slide>
          <BackgroundImage
            src="/assets/carousel/bg_1.png"
            w="100%"
            h={{ base: 660, xl: 500, xxl: 640 }}
            bgsz="cover"
            bgp="center"
          />
        </MantineCarousel.Slide>
        <MantineCarousel.Slide>
          <BackgroundImage
            src="/assets/carousel/bg_1.png"
            w="100%"
            h={{ base: 660, xl: 500, xxl: 640 }}
            bgsz="cover"
            bgp="center"
          />
        </MantineCarousel.Slide>
      </MantineCarousel>
    </Box>
  );
};
