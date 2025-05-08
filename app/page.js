import { Container, Heading, Stack, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <main>
        <Container py={8}>
          <Heading as={"h1"} mb={6}>
            Sin City Jacks
          </Heading>
          <Stack gap={4}>
            <Text>
              Welcome to Sin City Jacks. We are bold. We are brave. We are
              Bator. Jack clubs give men a safe place to bond through our shared
              love of masturbation. Sin City Jacks is known for its diversity.
              In a city famous for big things like the world&apos;s largest
              casino, tallest tower, and biggest adult clubs, Sin City Jacks
              wants to be the world&apos;s biggest Jack Club.
            </Text>
            <Text>
              At Sin City Jacks, men (called Jacks) come together to make strong
              bonds. Here, we celebrate being real and honest. Our guests come
              from all over the world. Some are big, some are small, and they
              come in all colors. Come discover new things about yourself and
              others.
            </Text>
            <Text>
              Sin City Jacks is where brotherhood is made, memories are created,
              and bonds are built strong. Welcome, brothers!
            </Text>
          </Stack>
        </Container>
      </main>
    </>
  );
}
