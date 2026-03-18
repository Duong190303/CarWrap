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
  Box,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import {
  IconCalendar,
  IconMail,
  IconPhone,
  IconUser,
  IconSend,
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
      name:     (v) => (v.trim().length >= 2   ? null : "Enter a valid name"),
      phone:    (v) => (/^\+?[0-9\s\-()]{8,}$/.test(v) ? null : "Phone number is invalid"),
      email:    (v) => (/^\S+@\S+\.\S+$/.test(v) ? null : "Email is invalid"),
      services: (v) => (v.length > 0            ? null : "Select at least one service"),
      date:     (v) => (v                        ? null : "Pick a date"),
      accept:   (v) => (v                        ? null : "You must agree to the terms"),
    },
  });

  const handleSubmit = async (values: FormValues) => {
    const res = await fetch(apiEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (!res.ok) { alert("Something went wrong. Please try again later."); return; }
    alert("Your appointment request has been sent!");
    form.reset();
  };

  return (
    <Paper radius="xl" p={{ base: "lg", md: "xl" }} className={classes.formCard}>

      {/* ── Form header ── */}
      <Box className={classes.formHeader}>
        <Text className={classes.formTitle}>BOOK A GARAGE SERVICE</Text>
        <Text className={classes.formSubtitle}>
          Fill in the details below and {"we'll"} get back to you within 24 hours.
        </Text>
        <Box className={classes.formHeaderLine} />
      </Box>

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Grid gutter="md">

          {/* Salutation */}
          <GridCol span={{ base: 12, sm: 4 }} style={{ alignItems: "flex-end", display: "flex" }}>
            <Select
              aria-label="Salutation"
              data={["Mr", "Ms", "Mx"]}
              classNames={{ input: classes.input, label: classes.inputLabel }}
              {...form.getInputProps("salutation")}
            />
          </GridCol>

          {/* Name */}
          <GridCol span={{ base: 12, sm: 8 }}>
            <TextInput
              required
              label="Name"
              leftSection={<IconUser size={15} />}
              placeholder="Your name"
              classNames={{ input: classes.input, label: classes.inputLabel }}
              {...form.getInputProps("name")}
            />
          </GridCol>

          {/* Phone */}
          <GridCol span={{ base: 12, sm: 6 }}>
            <TextInput
              required
              label="Phone"
              leftSection={<IconPhone size={15} />}
              placeholder="+84 ..."
              classNames={{ input: classes.input, label: classes.inputLabel }}
              {...form.getInputProps("phone")}
            />
          </GridCol>

          {/* Email */}
          <GridCol span={{ base: 12, sm: 6 }}>
            <TextInput
              required
              label="Email"
              leftSection={<IconMail size={15} />}
              placeholder="you@email.com"
              classNames={{ input: classes.input, label: classes.inputLabel }}
              {...form.getInputProps("email")}
            />
          </GridCol>

          {/* Services */}
          <GridCol span={12}>
            <Text size="xs" fw={700} className={classes.inputLabel} mb={8} style={{ letterSpacing: "0.12em" }}>
              SERVICES <span style={{ color: "#f43f5e" }}>*</span>
            </Text>
            <CheckboxGroup {...form.getInputProps("services")}>
              <Group gap="md">
                {SERVICE_OPTIONS.map((s) => (
                  <Checkbox
                    key={s.value}
                    value={s.value}
                    label={s.label}
                    classNames={{
                      input: classes.checkboxInput,
                      label: classes.checkboxLabel,
                    }}
                  />
                ))}
              </Group>
            </CheckboxGroup>
            {form.errors.services && (
              <Text size="xs" c="red" mt={4}>{form.errors.services}</Text>
            )}
          </GridCol>

          {/* Brand */}
          <GridCol span={{ base: 12, sm: 6 }}>
            <Select
              label="BRAND"
              data={BRANDS}
              classNames={{ input: classes.input, label: classes.inputLabel }}
              {...form.getInputProps("brand")}
            />
          </GridCol>

          {/* Schedule */}
          <GridCol span={{ base: 12, sm: 6 }}>
            <DateInput
              label="SCHEDULE"
              placeholder="mm/dd/yyyy"
              leftSection={<IconCalendar size={15} />}
              valueFormat="MM/DD/YYYY"
              classNames={{ input: classes.input, label: classes.inputLabel }}
              {...form.getInputProps("date")}
            />
          </GridCol>

          {/* Message */}
          <GridCol span={12}>
            <Textarea
              label="Message"
              minRows={4}
              autosize
              placeholder="Vehicle details, service notes, preferred time..."
              classNames={{ input: classes.input, label: classes.inputLabel }}
              {...form.getInputProps("message")}
            />
          </GridCol>

          {/* Accept */}
          <GridCol span={12}>
            <Checkbox
              classNames={{
                input: classes.checkboxInput,
                label: classes.checkboxLabel,
              }}
              label={
                <Text size="xs" c="rgba(255,255,255,0.55)">
                  I have read the{" "}
                  <Text span fw={700} className={classes.link}>
                    General Terms Of Use
                  </Text>{" "}
                  and agree to it
                </Text>
              }
              {...form.getInputProps("accept", { type: "checkbox" })}
            />
          </GridCol>

          {/* Submit */}
          <GridCol span={12}>
            <Button
              type="submit"
              size="md"
              radius="md"
              fullWidth
              rightSection={<IconSend size={16} />}
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