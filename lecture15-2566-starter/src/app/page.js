"use client";

import { TermsAndCondsModal } from "@/components/TermsAndCondsModal";
import {
  Anchor,
  Button,
  Checkbox,
  Container,
  Group,
  Radio,
  Select,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { runningPlans } from "../libs/runningPlans";
import { useForm, zodResolver } from "@mantine/form";
import { z } from "zod";

const schema = z.object({
  firstName: z.string().min(3, "Required at least 3 characters"),
  lastName: z.string().min(3, "Required at least 3 characters"),
  email: z.string().email(),
  plan: z.enum([...runningPlans.map((plan) => plan.value)], {
    errorMap: () => ({ message: "Please select plan" }),
  }),
  gender: z.enum(["male", "female"], {
    errorMap: () => ({ message: "please select your gender"}),
  }),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "Please accept terms and conditions",
  }),
});

export default function Home() {
  const [opened, { open, close }] = useDisclosure(false);

  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      plan: null,
      gender: null,
      acceptTerms: false,
    },
    validateInputOnChange: true,
    validate: zodResolver(schema),
  });

  return (
    <div>
      <Container size="500px">
        <Title italic align="center" color="pink">
          Register CMU Marathon 🥈
        </Title>
        <form onSubmit={form.onSubmit(() => {alert('fuck you')})} >
          <Stack spacing="sm">
            <Group grow align="start">
              <TextInput label="First Name" {...form.getInputProps('firstName')} />
              <TextInput label="Last Name" {...form.getInputProps('lastName')} />
            </Group>
            <TextInput label="Email" {...form.getInputProps('email')} />
            <Select
              label="Plan"
              data={runningPlans}
              placeholder="Please select plan..."
              {...form.getInputProps('plan')}
            />
            <Radio.Group label="Gender" {...form.getInputProps('gender')}>
              <Radio value="male" label="Male 👨" mb="xs" />
              <Radio value="female" label="Female 👧" />
            </Radio.Group>

            <Checkbox
              {...form.getInputProps('acceptTerms')}
              label={
                <Text>
                  I accept{" "}
                  <Anchor onClick={open} href="#">
                    terms and conditions
                  </Anchor>
                </Text>
              }
            />
            <Button type="submit">Register</Button>
          </Stack>
        </form>
      </Container>

      <TermsAndCondsModal opened={opened} close={close} />
    </div >
  );
}
