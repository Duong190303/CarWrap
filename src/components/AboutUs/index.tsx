"use client";

import { lora } from "@/theme/fonts";
import { Carousel } from "@mantine/carousel";
import {
  Avatar,
  Box,
  Card,
  Container,
  Rating,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import classes from "./AboutUs.module.css";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export const AboutUs: React.FC = () => {
  const autoplay = useRef(Autoplay({ delay: 5000 }));

  const feedbacks = [
    {
      avatar: "https://i.pravatar.cc/150?img=5",
      text: "Excellent experience from booking to finish. The salon is spotless, and the staff is lovely!",
      rating: 5,
    },
    {
      avatar: "https://i.pravatar.cc/150?img=12",
      text: "Super professional staff and very clean salon. I’ll definitely come back!",
      rating: 4.5,
    },
    {
      avatar: "https://i.pravatar.cc/150?img=19",
      text: "My manicure lasted over two weeks without a chip! Best nail service I’ve ever had.",
      rating: 5,
    },
    {
      avatar: "https://i.pravatar.cc/150?img=23",
      text: "They took their time and paid attention to detail. My nails look perfect.",
      rating: 4.5,
    },
    {
      avatar: "https://i.pravatar.cc/150?img=29",
      text: "Super professional, super clean, and the designs are stunning. I’m definitely coming back!",
      rating: 5,
    },
    {
      avatar: "https://i.pravatar.cc/150?img=32",
      text: "Quick service but still very high quality. My gel nails look flawless.",
      rating: 4.5,
    },
    {
      avatar: "https://i.pravatar.cc/150?img=36",
      text: "Beautiful nail art, gentle service, and relaxing atmosphere. Highly recommended.",
      rating: 5,
    },
    {
      avatar: "https://i.pravatar.cc/150?img=45",
      text: "Great variety of nail colors and designs. Staff is very creative.",
      rating: 4.5,
    },
    {
      avatar: "https://i.pravatar.cc/150?img=47",
      text: "My nails look gorgeous, and the polish is still shiny after days!",
      rating: 5,
    },
    {
      avatar: "https://i.pravatar.cc/150?img=49",
      text: "Excellent experience overall, from booking to finish. Highly recommended.",
      rating: 4.5,
    },
  ];

  return (
    <Box component="section" pt={80} id="about_us">
      <Container fluid mx={{ base: 0, sm: 70 }}>
        <Title
          className={lora.className}
          order={2}
          tt="capitalize"
          fz={42}
          fw="bold"
          ta="center"
          c="#444444"
        >
          What People Say About Us
        </Title>

        <Carousel
          py={20}
          h={{ base: 250, sm: 300 }}
          slideSize={{
            base: "100%",
            sm: "33.333333%",
            md: "33.333333%",
            lg: "33.333333%",
            xl: "25%",
          }}
          slideGap={190}
          emblaOptions={{ loop: true, align: "start", slidesToScroll: 1 }}
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={() => autoplay.current.play()}
          classNames={{
            viewport: classes.viewport,
            controls: classes.controls,
            control: classes.control,
            slide: classes.slide,
          }}
          style={{ gap: "20px" }}
        >
          {feedbacks.map((item, index) => (
            <Carousel.Slide key={index}>
              <Stack gap={10} align="center">
                <Avatar src={item.avatar} size={70} />
                <Text ta="center" fz={14} fw={400} h={70} p={"0 20px"}>
                  {item.text}
                </Text>
                <Card
                  radius="lg"
                  bg="white"
                  styles={{
                    root: {
                      stroke: "1px solid #F8F8F8",
                      boxShadow: "0 0 11px 0 rgba(0, 0, 0, 0.08)",
                    },
                  }}
                  p={10}
                >
                  <Rating
                    value={item.rating}
                    fractions={2}
                    readOnly
                    color="main.0"
                    size="sm"
                  />
                </Card>
              </Stack>
            </Carousel.Slide>
          ))}
        </Carousel>
      </Container>
    </Box>
  );
};
