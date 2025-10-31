"use client";

import {
  Button,
  Checkbox,
  CheckboxGroup,
  Grid,
  GridCol,
  Group,
  Paper,
  Select,
  Text,
  TextInput,
  Textarea,
  rem,
  Tooltip,
  Box,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import {
  IconCalendar,
  IconMail,
  IconPhone,
  IconUser,
} from "@tabler/icons-react";
import { BRANDS, DEFAULT_VALUES, SERVICE_OPTIONS } from "./constants";
import type { BookingFormProps, FormValues } from "./types";
import classes from "./ContactUs.module.css";

export const ContactForm: React.FC<BookingFormProps> = ({
  initial,
  apiEndpoint = "/api/booking",
}: BookingFormProps) => {
  const form = useForm<FormValues>({
    initialValues: { ...DEFAULT_VALUES, ...initial },
    validateInputOnBlur: true,
    validate: {
      name: (v) => (v.trim().length >= 2 ? null : "Enter a valid name"),
      phone: (v) =>
        /^\+?[0-9\s\-()]{8,}$/.test(v) ? null : "Phone number is invalid",
      email: (v) => (/^\S+@\S+\.\S+$/.test(v) ? null : "Email is invalid"),
      services: (v) => (v.length > 0 ? null : "Select at least one service"),
      date: (v) => (v ? null : "Pick a date"),
      accept: (v) => (v ? null : "You must agree to the terms"),
    },
  });

  const handleSubmit = async (values: FormValues) => {
    const res = await fetch(apiEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (!res.ok) {
      alert("Something went wrong. Please try again later.");
      return;
    }

    alert("Your appointment request has been sent!");
    form.reset();
  };

  return (
    <Paper
      variant="transparent"
      shadow="xxl"
      p="lg"
      radius="md"
      className={classes.formCard}
    >
      <Text
        fz={{ base: rem(24), md: rem(28), lg: rem(32) }}
        fw={700}
        className={classes.formTitle}
      >
        BOOK A GARAGE SERVICE
      </Text>
      <Box className={classes.stripe} />

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Grid gutter="md">
          <GridCol
            span={{ base: 12, sm: 4 }}
            style={{ alignItems: "flex-end", display: "flex" }}
          >
            <Select
              aria-label="Salutation"
              data={["Mr", "Ms", "Mx"]}
              {...form.getInputProps("salutation")}
            />
          </GridCol>

          <GridCol span={{ base: 12, sm: 8 }}>
            <TextInput
              required
              label="Name"
              leftSection={<IconUser size={16} />}
              placeholder="Your name"
              {...form.getInputProps("name")}
            />
          </GridCol>

          <GridCol span={{ base: 12, sm: 6 }}>
            <TextInput
              required
              label="Phone"
              leftSection={<IconPhone size={16} />}
              placeholder="+84 ..."
              {...form.getInputProps("phone")}
            />
          </GridCol>

          <GridCol span={{ base: 12, sm: 6 }}>
            <TextInput
              required
              label="Email"
              leftSection={<IconMail size={16} />}
              placeholder="you@email.com"
              {...form.getInputProps("email")}
            />
          </GridCol>

          <GridCol span={12}>
            <Text
              size="xs"
              fw={600}
              c="dark.6"
              mb={6}
              className={classes.legend}
            >
              SERVICES
            </Text>
            <CheckboxGroup {...form.getInputProps("services")} withAsterisk>
              <Group gap="lg">
                {SERVICE_OPTIONS.map((s) => (
                  <Checkbox
                    key={s.value}
                    value={s.value}
                    label={s.label}
                    color={"#389fff"}
                  />
                ))}
              </Group>
            </CheckboxGroup>
          </GridCol>

          <GridCol span={{ base: 12, sm: 6 }}>
            <Select
              label="BRAND"
              data={BRANDS}
              {...form.getInputProps("brand")}
            />
          </GridCol>

          <GridCol span={{ base: 12, sm: 6 }}>
            <Tooltip label="Select your preferred date">
              <DateInput
                label="SCHEDULE"
                placeholder="mm/dd/yyyy"
                leftSection={<IconCalendar size={16} />}
                valueFormat="MM/DD/YYYY"
                {...form.getInputProps("date")}
              />
            </Tooltip>
          </GridCol>

          <GridCol span={12}>
            <Textarea
              label="Message"
              minRows={5}
              autosize
              placeholder="Vehicle details, service notes, preferred time..."
              {...form.getInputProps("message")}
            />
          </GridCol>

          <GridCol span={12}>
            <Checkbox
              color={"#389fff"}
              label={
                <Text size="xs">
                  I have read the{" "}
                  <Text span fw={600} className={classes.link}>
                    “General Terms Of Use”
                  </Text>{" "}
                  and agree to it
                </Text>
              }
              {...form.getInputProps("accept", { type: "checkbox" })}
            />
          </GridCol>

          <GridCol span={12}>
            <Button
              type="submit"
              radius="sm"
              size="md"
              className={classes.submit}
            >
              BOOK APPOINTMENT
            </Button>
          </GridCol>
        </Grid>
      </form>
    </Paper>
  );
};
