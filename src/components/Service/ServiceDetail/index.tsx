"use client";

import { Box } from "@mantine/core";
import type { ServiceDetail } from "@/components/Service/ServiceDetail/Data";
import classes from "./ServiceDetail.module.css";
import { HeroService } from "./HeroService";
import { Overview } from "./Overview";
import { Features } from "./Features";
import { Process } from "./Process";
import { Gallery } from "./Gallery";
import { FAQ } from "./FAQ";
import { CTABanner } from "./CTABanner";

export function ServiceDetailPage({ service }: { service: ServiceDetail }) {
  return (
    <Box className={classes.page}>
      <HeroService service={service} />
      <Overview service={service} />
      <Features service={service} />
      <Process service={service} />
      <Gallery service={service} />
      <FAQ service={service} />
      <CTABanner service={service} />
    </Box>
  );
}
