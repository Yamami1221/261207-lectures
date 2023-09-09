"use client";
import { runningPlans } from "@/libs/runningPlans";
import { Button, Checkbox, Container, Group, Select, TextInput, Title, Text, Anchor, Modal, Radio } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function Home() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Container size="xs">
      <Title color="Pink">
        Register CMU Marathon 2021
      </Title>

      <Group grow>
        <TextInput label="First Name" required />
        <TextInput label="Last Name" required />
      </Group>
      
      <Radio.Group name="gender" label="Please choose your gender" withAsterisk>
        <Radio value="Male" label="Male" />
        <Radio value="Female" label="Female" />
      </Radio.Group>

      <Select data={runningPlans} label="Plan" placeholder="Select Running Plan" required searchable />

      <Group spacing="xs">
        <Checkbox />
        <Text>I accept <Anchor color="Pink" onClick={open}>terms and conditions</Anchor>{" "}</Text>
      </Group>

      <Button color="pink" fullWidth>Register</Button>

      <Modal opened={opened} onClose={close} title="Terms and Conditions">
        <Text>
          1.some terms and conditions
          <br />
          2.some terms and conditions
          <br />
          3.some terms and conditions
        </Text>
        <Button color="pink" fullWidth onClick={close}>I accept</Button>
      </Modal>
    </Container>
  )
}
