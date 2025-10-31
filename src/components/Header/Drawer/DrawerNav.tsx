"use client";

import React from "react";
import Link from "next/link";
import {
  Drawer,
  ThemeIcon,
  Box,
  Image,
  UnstyledButton,
  Anchor,
  Text,
  Stack,
  Collapse,
  rem,
  Button,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconMenu2, IconChevronDown } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import classes from "./DrawerNav.module.css";

export type NavigationType = {
  id: string | number;
  label: string;
  href: string;
  active?: boolean;
  subNavigation?: NavigationType[];
  children?: NavigationType[];
};

type NavProps = { items: NavigationType[] };

export const DrawerNav: React.FC<NavProps> = ({ items }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const pathname = usePathname();

  // Lấy hash để xác định active
  const [currentHash, setCurrentHash] = React.useState<string>("");
  React.useEffect(() => {
    const update = () => setCurrentHash(window.location.hash || "");
    update();
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);
  const activeHref = React.useMemo(() => {
    if (currentHash) return `/${currentHash}`;
    return pathname || "/";
  }, [pathname, currentHash]);

  const isActive = (href: string) => href === activeHref;

  // --- NEW: quản lý mở/đóng cho mục có children (Services) ---
  const [openParents, setOpenParents] = React.useState<
    Record<string | number, boolean>
  >({});

  // Auto mở parent nếu có child khớp activeHref
  React.useEffect(() => {
    const next: Record<string | number, boolean> = {};
    for (const it of items) {
      const hasChildActive =
        it.children?.some((c) => c.href === activeHref) ?? false;
      if (hasChildActive) next[it.id] = true;
    }
    setOpenParents((prev) => ({ ...prev, ...next }));
  }, [activeHref, items]);

  const toggleParent = (id: string | number) =>
    setOpenParents((prev) => ({ ...prev, [id]: !prev[id] }));

  const handleCloseAfterClick = () => close();

  return (
    <Box component="div" hiddenFrom="md">
      <Drawer.Root
        opened={opened}
        onClose={close}
        position="right"
        size="xs"
        hiddenFrom="md"
      >
        <Drawer.Overlay />
        <Drawer.Content>
          <Drawer.Header
            style={{ borderBottom: "1px solid #246FB4", padding: 10 }}
          >
            <UnstyledButton
              component={Link}
              href="#"
              onClick={handleCloseAfterClick}
            >
              <Image
                src="/LogoCW_des.svg"
                alt="logo"
                fit="contain"
                h="100%"
                w={{ base: 100, md: 200 }}
              />
            </UnstyledButton>
            <Drawer.CloseButton c="#246FB4" size={40} />
          </Drawer.Header>

          <Drawer.Body
            p={0}
            px={0}
            display="flex"
            h="100%"
            style={{ flexDirection: "column", justifyContent: "space-between" }}
          >
            <Box component="nav" mt={5}>
              <Stack gap={0}>
                {items.map((item) => {
                  const parentActive =
                    isActive(item.href) ||
                    (item.children?.some((c) => c.href === activeHref) ??
                      false);

                  // Nếu KHÔNG có children => Anchor bình thường
                  if (!item.children || item.children.length === 0) {
                    return (
                      <Anchor
                        key={item.id}
                        component={Link}
                        href={item.href}
                        onClick={handleCloseAfterClick}
                        underline="never"
                        fw={700}
                        fz="md"
                        w="100%"
                        p="10px 16px"
                        aria-current={parentActive ? "page" : undefined}
                        classNames={{ root: classes.Anchorroot }}
                        data-active={parentActive || undefined}
                        style={{
                          textTransform: "uppercase",
                          letterSpacing: 0.6,
                        }}
                      >
                        <Text
                          fz={16}
                          tt="uppercase"
                          fw={500}
                          classNames={{ root: classes.Textroot }}
                        >
                          {item.label}
                        </Text>
                      </Anchor>
                    );
                  }

                  const openedParent = !!openParents[item.id];

                  return (
                    <>
                      <Button
                        key={item.id}
                        onClick={() => toggleParent(item.id)}
                        aria-expanded={openedParent}
                        className={classes.DrawerParentButton}
                        classNames={{
                          section: classes.sectionBtn,
                          inner: classes.innerBtn,
                        }}
                        data-active={parentActive || undefined}
                        style={{
                          width: "100%",
                          background: "transparent",
                          border: 0,
                          padding: "12px 16px",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                        leftSection={
                          <Text
                            fz={16}
                            fw={500}
                            tt="uppercase"
                            className={classes.DrawerParentText}
                            style={{ letterSpacing: 0.6 }}
                          >
                            {item.label}
                          </Text>
                        }
                        rightSection={
                          <IconChevronDown
                            size={18}
                            color="black"
                            style={{
                              transition: "transform .2s ease",
                              transform: openedParent
                                ? "rotate(180deg)"
                                : "rotate(0deg)",
                            }}
                          />
                        }
                      ></Button>

                      <Collapse in={openedParent}>
                        <Stack gap={0} pl={16} mb={4}>
                          {item.children.map((child) => {
                            const childActive = isActive(child.href);
                            return (
                              <Anchor
                                key={child.id}
                                component={Link}
                                href={child.href}
                                onClick={handleCloseAfterClick}
                                underline="never"
                                fw={600}
                                fz={rem(13)}
                                w="100%"
                                p="10px 14px"
                                aria-current={childActive ? "page" : undefined}
                                classNames={{ root: classes.Anchorchild }}
                                data-active={childActive || undefined}
                                style={{ letterSpacing: 0.4 }}
                              >
                                <Text
                                  fz={14}
                                  classNames={{ root: classes.Textchild }}
                                  tt="uppercase"
                                  fw={500}
                                >
                                  {child.label}
                                </Text>
                              </Anchor>
                            );
                          })}
                        </Stack>
                      </Collapse>
                    </>
                  );
                })}
              </Stack>
            </Box>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>

      <ThemeIcon
        variant="transparent"
        onClick={open}
        aria-label="Open navigation menu"
      >
        <IconMenu2 stroke={2} color="#246FB4" />
      </ThemeIcon>
    </Box>
  );
};
