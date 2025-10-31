"use client";

import { Box, Container, Grid, GridCol } from "@mantine/core";
import { LeftPane } from "./LeftPane";
import { ContactForm } from "./ContactForm";
import type { BookingSectionProps } from "./types";
import classes from "./ContactUs.module.css";

export const ContactUs: React.FC<BookingSectionProps> = ({
  // backgroundUrl = '/logobrand/supplierimage.jpg',
  titleLines,
  description,
  hotline,
  initial,
}: BookingSectionProps) => {
  return (
    <Box
      className={classes.section}
      component="section"
      style={{
        backgroundImage: `linear-gradient(var(--overlay), var(--overlay)), url('/logobrand/supplierimage.jpg')`,
        // backgroundImage: `url('/logobrand/supplierimage.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container size="lg">
        <Grid gutter="xl" align="stretch">
          <GridCol span={{ base: 12, md: 5 }}>
            <LeftPane
              titleLines={titleLines}
              description={description}
              hotline={hotline}
            />
          </GridCol>

          <GridCol span={{ base: 12, md: 7 }}>
            <ContactForm initial={initial} />
          </GridCol>
        </Grid>
      </Container>
    </Box>
  );
};
