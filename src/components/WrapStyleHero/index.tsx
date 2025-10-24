"use client";

import React from "react";
import { Box, Container, Title, Text, Group, rem, Image } from "@mantine/core";
import { GalleryButton } from "./GalleryButton";
import { BookButton } from "./BookButton";
import classes from "./wrapstylehero.module.css";

type Props = {
  images: string[];
  title?: string;
  subtitle?: string;
};

export const WrapstyleHero: React.FC<Props> = ({
  images,
  title = "WRAPSTYLE IS PRIMARILY DESIGN",
  subtitle = `If you are looking for ideas for your car, come to our library of works, there will be many suggestions for you. Or contact us directly and talk about your ideas, we will give you many suggestions for you to choose from!`,
}) => {
  return (
    <Box className={classes.root}>
      <Box className={classes.mosaic} aria-hidden="true">
        {images.map((src, i) => (
          <Box className={classes.cell} key={i}>
            <Image className={classes.image} src={src} alt="" loading="lazy" />
          </Box>
        ))}
      </Box>

      <Box className={classes.overlay} />

      <Container size="lg" className={classes.content}>
        <Title className={classes.title}>{title}</Title>
        <Text className={classes.subtitle}>{subtitle}</Text>

        <Group justify="center" mt={rem(24)} gap="md">
          <GalleryButton href="/gallery" />
          <BookButton href="/booking" />
        </Group>
      </Container>
    </Box>
  );
};
