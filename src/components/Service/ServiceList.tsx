"use client";

import { lora } from "@/theme/fonts";
import {
  Flex,
  Grid,
  Image,
  Text,
  Title,
  UnstyledButton,
  Box,
} from "@mantine/core";
import { useMemo } from "react";
import classes from "./Service.module.css";
import { ServiceCarousel } from "./ServiceCarousel";

export type ServiceType = {
  image: string;
  title: string;
  description: string;
  href?: string;
};

export const ServiceList: React.FC = () => {
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
    <Box>
      <Grid
        classNames={{ inner: classes.serviceGridInner }}
        gutter={{ base: 0, sm: 10, md: 0 }}
        visibleFrom="sm"
      >
        {serviceList.map((service) => (
          <Grid.Col
            className={classes.serviceCardCol}
            key={service.title}
            span={{ base: 12, sm: 6, md: 6, lg: 3 }}
            p={0}
            maw={{ base: 400, sm: 360, md: 400, lg: "100%" }}
            w={"100%"}
          >
            <Flex
              classNames={{ root: classes.serviceCard }}
              direction="column"
              gap={10}
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
                c="main.0"
                fw={300}
                fz={{ base: 30, sm: 25, md: 30 }}
              >
                {service.title}
              </Title>
              <Text ta="center" fz={16} h={74}>
                {service.description}
              </Text>
              <UnstyledButton mt={10}>
                <Text ta="center" fz={16} fw={600} tt="uppercase">
                  View details
                </Text>
              </UnstyledButton>
            </Flex>
          </Grid.Col>
        ))}
      </Grid>
      <ServiceCarousel />
    </Box>
  );
};
