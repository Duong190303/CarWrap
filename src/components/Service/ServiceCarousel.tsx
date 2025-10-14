"use client";

import { lora } from "@/theme/fonts";
import { Flex, Image, Text, Title, UnstyledButton } from "@mantine/core";
import { useMemo } from "react";
import classes from "./Service.module.css";
import { Carousel } from "@mantine/carousel";

export type ServiceType = {
  image: string;
  title: string;
  description: string;
  href?: string;
};

export const ServiceCarousel: React.FC = () => {
  const serviceList: ServiceType[] = useMemo(() => {
    return [
      {
        image: "/assets/service/nail_art.png",
        title: "Nail Art",
        description:
          "Turn your nails into tiny works of art. From minimalist lines to bold, colorful patterns — we bring your vision to life.",
      },
      {
        image: "/assets/service/manicure.png",
        title: "Manicure",
        description:
          "A perfect manicure for any occasion. Clean, shape, nourish, and shine — your hands will thank you.",
      },
      {
        image: "/assets/service/pedicure.png",
        title: "Pedicure",
        description:
          "Relax and indulge. Our soothing pedicure treatments rejuvenate your feet and leave them silky soft.",
      },
      {
        image: "/assets/service/other_services.png",
        title: "Other Services",
        description:
          "Waxing, hand spa, gel removal, and more — all in one relaxing beauty space.",
      },
    ];
  }, []);
  return (
    <Carousel
      hiddenFrom="xs"
      classNames={{
        slide: classes.slide,
        controls: classes.controls,
        control: classes.control,
        root: classes.root,
      }}
      
      p={"0 5px"}
      // withControls={false}
    >
      {serviceList.map((service) => (
        <Carousel.Slide
          className={classes.serviceCardCol}
          key={service.title}
          p={" 0 10px"}
        >
          <Flex
            classNames={{ root: classes.serviceCard }}
            direction={"column"}
            gap={30}
            align="center"
            justify="center"
          >
            <Image
              src={service.image}
              alt={service.title}
              fit="cover"
              w="auto"
              h={84}
            />
            <Title
              ta="center"
              className={lora.className}
              order={3}
              c="#ffffff"
              fw={300}
              fz={30}
            >
              {service.title}
            </Title>
            <Text
              c="#ffffff"
              ta="center"
              fz={{ base: 14, md: 14, xl: 16 }}
              h={74}
            >
              {service.description}
            </Text>
            <UnstyledButton mt={10}>
              <Text c="#ffffff" ta="center" fz={16} fw={600} tt="uppercase">
                View details
              </Text>
            </UnstyledButton>
          </Flex>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};
