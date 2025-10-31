"use client";

import { Group, Stack, Text, Box } from "@mantine/core";
import type { LeftPaneProps } from "./types";
import classes from "./ContactUs.module.css";

export function LeftPane({
  titleLines = ["LET'S", "REVAMP", "YOUR", "RIDES"],
  description = "For the best experience at CarWrap, you can book in advance via the form or contact our hotline.",
  hotline = "+84 933 622 225",
}: LeftPaneProps) {
  return (
    <Stack gap="md" className={classes.leftWrap}>
      <Box className={classes.slogan}>
        <Box component="span" className={classes.sloganItem}>
          <span className={classes.line1}>{titleLines[0]}</span>
          <span className={classes.line2}>{titleLines[1]}</span>
        </Box>
        <Box component="span" className={classes.sloganItem}>
          <span className={classes.line3}>{titleLines[2]}</span>
          <span className={classes.line4}>{titleLines[3]}</span>
        </Box>
      </Box>

      <Group align="center" gap={8} className={classes.flagRow}>
        <Text c="black" size="sm">
          {description}
        </Text>
      </Group>

      <Text fw={700}>{hotline}</Text>
    </Stack>
  );
}
