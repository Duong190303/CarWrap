"use client";

import React from "react";
import {
  Box,
  Container,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Badge,
  Card,
  Image,
  rem,
  Anchor,
  ActionIcon,
} from "@mantine/core";
import { IconShare2 } from "@tabler/icons-react";

export type NewsItem = {
  id: string | number;
  category: string; // e.g. "PPF", "WRAPPING", "HOT NEWS"
  categoryColor?: string; // Mantine color or any CSS color
  title: string;
  date: string; // formatted date text
  image: string; // img url
  href?: string; // link to detail
};

function NewsCard({ item }: { item: NewsItem }) {
  return (
    <Card
      withBorder
      variant="transparent"
      radius="lg"
      p={0}
      style={{
        overflow: "hidden",
        boxShadow: "0 8px 24px rgba(0,0,0,.18), 0 2px 8px rgba(0,0,0,.08)",
      }}
    >
      <Box pos="relative">
        <Image
          src={item.image}
          alt={item.title}
          h={rem(260)}
          w="100%"
          fit="cover"
        />
        <Badge
          size="sm"
          radius="sm"
          variant="filled"
          style={{
            position: "absolute",
            left: rem(12),
            top: rem(12),
            background: item.categoryColor ?? "#111",
            fontWeight: 700,
            letterSpacing: 0.4,
          }}
        >
          {item.category}
        </Badge>
      </Box>

      <Stack gap="xs" p="md">
        <Text size="sm" c="dimmed">
          {item.date}
        </Text>

        <Group justify="space-between" align="flex-start">
          {item.href ? (
            <Anchor
              href={item.href}
              underline="never"
              c="var(--mantine-color-text)"
            >
              <Text
                fw={700}
                size="lg"
                lh={1.3}
                style={{ wordBreak: "break-word" }}
              >
                {item.title}
              </Text>
            </Anchor>
          ) : (
            <Text
              fw={700}
              size="lg"
              lh={1.3}
              style={{ wordBreak: "break-word" }}
            >
              {item.title}
            </Text>
          )}

          <ActionIcon variant="subtle" radius="xl" aria-label="Share">
            <IconShare2 size={18} />
          </ActionIcon>
        </Group>
      </Stack>
    </Card>
  );
}

export const NewToday: React.FC<{ items?: NewsItem[]; title?: string }> = ({
  items = defaultItems,
  title = "WHAT'S NEW TODAY",
}: {
  items?: NewsItem[];
  title?: string;
}) => {
  return (
    <Box
      component="section"
      py="xl"
      id="new-today"
      mt={{ base: rem(20), md: rem(40) }}
      style={{
        background: "white",
      }}
    >
      <Container size="lg">
        <Text
          ta="center"
          fw={900}
          fz={{ base: rem(24), md: rem(28), lg: rem(32) }}
          mb="lg"
          style={{ letterSpacing: 1, textTransform: "uppercase" }}
        >
          {title}
        </Text>

        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
          {items.map((it) => (
            <NewsCard key={it.id} item={it} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

// --- Demo data (replace with API data) ---
const defaultItems: NewsItem[] = [
  {
    id: 1,
    category: "PPF",
    categoryColor: "#111",
    title:
      "PHIM PPF OPTIC SHIELD – SẢN PHẨM BẢO VỆ Ô TÔ CAO CẤP CÓ MẶT TẠI WRAPSTYLE VIỆT…",
    date: "March 2, 2025",
    image: "/assets/carousel/img1.jpg",
    href: "#",
  },
  {
    id: 2,
    category: "WRAPPING",
    categoryColor: "#FFB703",
    title:
      "CẬN CẢNH ‘SIÊU BÒ’ LAMBORGHINI URUS S XUỐNG PHỐ VỚI BỘ CÁNH XANH BABY BLUE…",
    date: "October 23, 2024",
    image: "/assets/carousel/img2.jpg",
    href: "#",
  },
  {
    id: 3,
    category: "HOT NEWS",
    categoryColor: "#F03E3E",
    title:
      "WRAPSTYLE ‘LÀM ĐẸP’ CHO DÀN XE PORSCHE CLUB VIETNAM HẬU CHUYẾN HÀNH TRÌNH…",
    date: "October 17, 2024",
    image: "/assets/carousel/img3.jpg",
    href: "#",
  },
];
