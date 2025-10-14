import {
  Box,
  Container,
  Flex,
  Group,
  Image,
  Paper,
  Text,
  UnstyledButton,
  useMatches,
} from "@mantine/core";
import {
  IconBrandFacebookFilled,
  IconBrandGmail,
  IconBrandInstagramFilled,
  IconBrandTiktokFilled,
  IconPhoneCall,
  IconPhoneRinging,
} from "@tabler/icons-react";
import classes from "./Header.module.css";
import Link from "next/link";
import { ButtonDaisy } from "../ButtonDaisy";
import clsx from "clsx";
import GooeyNav from "./Navigation/Navigation";
import { motion } from "framer-motion";
import { GradientText } from "../UI/GradientText/GradientText";
import { DrawerNav } from "./Drawer/DrawerNav";
import { MenuImg } from "./MenuImg";

const socialLinks = [
  {
    icon: IconBrandFacebookFilled,
    href: "/#",
  },
  {
    icon: IconBrandInstagramFilled,
    href: "/#",
  },
  {
    icon: IconBrandTiktokFilled,
    href: "/#",
  },
];
export type NavigationType = {
  id: number;
  label: string;
  href: string;
  active?: boolean;
  subNavigation?: NavigationType[];
};

export const DEFAULT_NAVIGATION_ITEMS: NavigationType[] = [
  {
    id: 1,
    label: "Home",
    href: "/#",
  },
  {
    id: 2,
    label: "Services",
    href: "/#services",
  },
  {
    id: 3,
    label: "Gallery",
    href: "/#gallery",
  },
  {
    id: 4,
    label: "Contact Us",
    href: "/#contact_us",
  },
  {
    id: 5,
    label: "About Us",
    href: "/#about_us",
  },
];

export const Header: React.FC<{ pinned: boolean }> = ({ pinned }) => {
  const headerVariants = {
    hidden: { y: -80, x: "-50%", opacity: 0 },
    visible: { y: 5, x: "-50%", opacity: 1 },
  };
  const sizeIconSocial = useMatches({
    base: 16,
    md: 20,
  });

  return (
    <>
      <Container size="xl" mx="auto" visibleFrom="sm">
        <Flex align="center" justify="space-between" w="100%" h={60}>
          <Flex align="center" gap={30}>
            <Group gap={10}>
              <IconBrandGmail size={20} stroke={1.5} color="#fff" />
              <Text fz={{ base: 14, md: 16 }} c="#fff" fw="bold">
                info@nailartstudio.com
              </Text>
            </Group>
            <Group gap={10}>
              <IconPhoneCall size={20} stroke={1.5} color="#fff" />
              <GradientText
                colors={["#ff0066", "#ffff00", "#00ff66", "#ff0066", "#ffff00"]}
                animationSpeed={3}
                showBorder={false}
                className="custom-class"
              >
                (209) 555-0104
              </GradientText>
            </Group>
          </Flex>
          <Flex align="center" gap={20} justify="flex-end">
            {socialLinks.map((link, index) => (
              <Paper
                key={index}
                classNames={{ root: classes.socialLink }}
                w={{ base: 30, md: 35 }}
                h={{ base: 30, md: 35 }}
              >
                <link.icon size={sizeIconSocial} color="#fff" />
              </Paper>
            ))}
          </Flex>
        </Flex>
      </Container>

      <motion.div
        className={clsx(classes.headerBottom, {
          [classes.pinned]: pinned,
        })}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={headerVariants}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
      >
        <Group
          //   visibleFrom="sm"
          classNames={{ root: classes.headerBottomContent }}
          w="100%"
          h={{
            base: 60,
            md: 80,
          }}
          px={{
            base: 5,
            sm: 20,
          }}
        >
          <Group flex={1} h="100%">
            <UnstyledButton component={Link} href="#">
              <Image
                src="/logo.png"
                alt="logo"
                fit="contain"
                h="100%"
                w={{
                  base: 150,
                  md: 200,
                }}
              />
            </UnstyledButton>
          </Group>

          <Box hiddenFrom="md">
            <ButtonDaisy
              type="primary"
              size="sm"
              radius="sm"
              w={100}
              iconLeft={<Image src="/booking_icon.png" alt="booking" w={20} />}
              iconRight={<IconPhoneRinging size={20} />}
              fz={14}
            >
              Booking
            </ButtonDaisy>
          </Box>

          <Group pos="relative" h="100%" gap={2} visibleFrom="md">
            <GooeyNav
              items={DEFAULT_NAVIGATION_ITEMS}
              particleCount={15}
              particleDistances={[90, 10]}
              particleR={100}
              initialActiveIndex={0}
              animationTime={600}
              timeVariance={300}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
            <MenuImg />
            <ButtonDaisy
              type="primary"
              size="md"
              radius="sm"
              w={150}
              h={45}
              iconLeft={<Image src="/booking_icon.png" alt="booking" w={20} />}
              iconRight={<IconPhoneRinging size={20} />}
            >
              Booking
            </ButtonDaisy>
          </Group>
          <DrawerNav />
        </Group>
      </motion.div>
    </>
  );
};
