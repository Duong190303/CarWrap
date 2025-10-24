import {
  Stack,
  Text,
  Grid,
  TextInput,
  Textarea,
  Button,
  Box,
  rem,
  Select,
} from "@mantine/core";
import { useForm } from "@mantine/form";

export const ContactForm: React.FC = () => {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
    validate: {
      name: (v) => (!v ? "Please enter your name" : null),
      email: (v) =>
        v && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "Invalid email" : null,
      phone: (v) => (!v ? "Please enter your phone" : null),
    },
  });
  return (
    <Stack
      w={{ base: "100%", md: "50%" }}
      bg={"#FBCDE3"}
      p={30}
      style={{ borderRadius: 30 }}
    >
      <Box
        w={{ base: 250, sm: 340 }}
        display={"flex"}
        style={{ flexDirection: "column", justifyContent: "space-between" }}
      >
        <Text
          fw={1000}
          c={"#fff"}
          fz={{ base: 30, sm: 40 }}
          w={{ base: 250, sm: 340 }}
        >
          Book Your
        </Text>
        <Text
          fw={1000}
          display={"flex"}
          style={{ justifyContent: "flex-end" }}
          c={"#fff"}
          fz={{ base: 30, sm: 40 }}
          w={"100%"}
        >
          {" "}
          Appointment
        </Text>
      </Box>
      <Box
        component="form"
        onSubmit={form.onSubmit((values) => {
          // TODO: handle submit (fetch/axios)
          console.log(values);
        })}
      >
        <Grid gutter={20}>
          {/* Name */}
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <TextInput
              label="Name"
              placeholder="Full name"
              radius="md"
              size="md"
              styles={{
                input: { borderRadius: rem(12) },
                label: { fontWeight: 600 },
              }}
              {...form.getInputProps("name")}
            />
          </Grid.Col>

          {/* Email */}

          {/* Phone */}
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <TextInput
              label="Phone number"
              placeholder="(124) 454 - 6452"
              radius="md"
              size="md"
              styles={{
                input: { borderRadius: rem(12) },
                label: { fontWeight: 600 },
              }}
              {...form.getInputProps("phone")}
            />
          </Grid.Col>

          {/* Service */}
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <Select
              label="Service"
              placeholder="All services"
              data={[
                "Classic Manicure",
                "Gel Manicure",
                "Pedicure",
                "Nail Art",
                "Acrylic/Extensions",
                "Combo",
              ]}
              radius="md"
              size="md"
              styles={{
                input: { borderRadius: rem(12) },
                label: { fontWeight: 600 },
              }}
              {...form.getInputProps("service")}
            />
          </Grid.Col>

          {/* Message */}
          <Grid.Col span={12}>
            <Textarea
              label="Message"
              placeholder="Please type your message here..."
              minRows={4}
              autosize
              radius="md"
              size="md"
              styles={{
                input: { borderRadius: rem(12) },
                label: { fontWeight: 600 },
              }}
              {...form.getInputProps("message")}
            />
          </Grid.Col>

          {/* Submit button */}
          <Grid.Col span={12}>
            <Stack align="flex-start">
              <Button
                type="submit"
                size="md"
                radius="xl"
                px={24}
                styles={{
                  root: {
                    background:
                      "linear-gradient(135deg, #246FB4 0%, #F78AC5 100%) ",
                    boxShadow: "0 10px 24px rgba(246, 102, 174, 0.25)",
                  },
                }}
              >
                Send message
              </Button>
            </Stack>
          </Grid.Col>
        </Grid>
      </Box>
    </Stack>
  );
};
