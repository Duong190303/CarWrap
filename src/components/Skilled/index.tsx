"use client";

import { lora } from "@/theme/fonts";
import {
  Box,
  Container,
  Flex,
  Grid,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { ButtonDaisy } from "../ButtonDaisy";
import { CountUp } from "../UI/CountUp/CountUp";
import { ShinyText } from "../UI/ShinyText/ShinyText";
import classes from "./Skilled.module.css";
import { motion } from "framer-motion";

export const Skilled: React.FC = () => {
  return (
    <Box component="section" py={{ base: 100, sm: 80 }} id="skilled">
      <Container size="xl" mx="auto" className={classes.container}>
        <Grid gutter={60} display={{ base: "block", sm: "flex" }}>
          <Grid.Col span={5}>
            <Flex
              direction="column"
              justify={{ base: "space-between" }}
              h={"100%"}
              gap={15}
              pos={{ base: "absolute", sm: "relative" }}
              columnGap={{ base: 50 }}
              classNames={{ root: classes.FlexRoot }}
            >
              <Text
                tt="uppercase"
                fz={16}
                fw={600}
                c="main.0"
                renderRoot={(props) => (
                  <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1,
                    }}
                    {...props}
                  />
                )}
              >
                GET YOUR SHINE ON
              </Text>
              <Title
                className={lora.className}
                order={2}
                tt="capitalize"
                fz={{ base: 42, sm: 38, md: 42 }}
                fw={400}
                w={{ base: 200, sm: "100%" }}
                c={{ base: "#f0f0f0", sm: "#444444" }}
                renderRoot={(props) => (
                  <motion.p
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1,
                    }}
                    {...props}
                  />
                )}
              >
                Skilled Nail Art
              </Title>
              <ShinyText
                text="Where creativity meets care. At NailsArt Studio, every nail is a canvas and every design tells your story.   Enjoy a luxurious experience with personalized treatments, premium products, and meticulous artistry that keeps your hands flawless."
                disabled={false}
                speed={2}
                className={`${lora.className} ${classes.shinyText}`}
              />
              <Flex gap={{ base: 50, sm: 20 }} direction={"column"}>
                <Group gap={70} mt={10}>
                  <Stack gap={0}>
                    <Text
                      className={lora.className}
                      fz={{ base: 42, sm: 38, md: 42 }}
                      fw={500}
                      c="main.0"
                      lh={1.2}
                    >
                      <CountUp
                        from={0}
                        to={20}
                        separator=","
                        direction="up"
                        duration={1}
                        className="count-up-text"
                      />
                      K+
                    </Text>
                    <Text fz={14} fw={400} tt="uppercase">
                      HAPPY CUSTOMERS
                    </Text>
                  </Stack>
                  <Stack gap={0}>
                    <Text
                      className={lora.className}
                      fz={42}
                      fw={500}
                      c="main.0"
                      lh={1.2}
                    >
                      <CountUp
                        from={0}
                        to={15}
                        separator=","
                        direction="up"
                        duration={1}
                        className="count-up-text"
                      />
                      +
                    </Text>
                    <Text fz={14} fw={400} tt="uppercase">
                      YEARS OF EXPERIENCE
                    </Text>
                  </Stack>
                </Group>
                <ButtonDaisy
                  type="primary"
                  size="md"
                  radius="sm"
                  right={{ base: 6, sm: "unset" }}
                  w={{ base: "100%", sm: 180 }}
                  h={45}
                  iconLeft={
                    <Image src="/booking_icon.png" alt="booking" w={20} />
                  }
                  iconRight={
                    <Image
                      style={{
                        overflow: "hidden",
                        borderRadius: "100%",
                      }}
                      src="/phone.gif"
                      alt="booking"
                      w={25}
                      h={25}
                    />
                  }
                >
                  BOOK NOW
                </ButtonDaisy>
              </Flex>
            </Flex>
          </Grid.Col>
          <Grid.Col span={7} visibleFrom="sm">
            <Group
              classNames={{
                root: classes.skilledGroup,
              }}
              pos="relative"
              justify="center"
              align={"center"}
              h="100%"
              w="100%"
            >
              <Box
                className={classes.skilledBox}
                style={{
                  zIndex: -1,
                }}
                w={200}
                h={150}
                bg="#F2F2F2"
              />
              <Image
                visibleFrom="sm"
                className={classes.skilledImage}
                src="/assets/skilled/img_skilled.png"
                alt="nail art skilled"
                w={{ base: "auto", sm: 420, md: 550,xl: 700 }}
                h={420}
                fit="cover"
              />
              <Image
                className={classes.skilledCircle}
                style={{
                  zIndex: -1,
                }}
                src="/assets/skilled/circle_pink.png"
                alt="nail art skilled"
                w={145}
                h={145}
                fit="cover"
              />
            </Group>
          </Grid.Col>
        </Grid>

        <Group
          classNames={{
            root: classes.skilledGroup,
          }}
          pos="relative"
          justify="center"
          align={"center"}
          h="100%"
          w="100%"
          hiddenFrom="xs"
        >
          <Image
            className={classes.skilledCircle}
            style={{
              zIndex: -1,
            }}
            src="/assets/skilled/circle_pink.png"
            alt="nail art skilled"
            w={145}
            h={145}
            fit="cover"
          />
          <Image
            className={classes.skilledCircle1}
            style={{
              zIndex: -1,
            }}
            src="/assets/skilled/circle_pink.png"
            alt="nail art skilled"
            w={145}
            h={145}
            fit="cover"
          />
        </Group>
      </Container>
    </Box>
  );
};
