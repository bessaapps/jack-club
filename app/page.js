import {
  Box,
  Heading,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import About from "@/components/About";
import { socialLinks } from "@/utils/links";

export default function Home() {
  return (
    <>
      <main>
        <Stack gap={4}>
          <Box>
            <Text fontWeight={800} color={"secondary.500"}>
              Brotherhood is made.
            </Text>
            <Text fontWeight={800} color={"secondary.500"}>
              Memories are created.
            </Text>
            <Text fontWeight={800} color={"secondary.500"}>
              Bonds are built strong.
            </Text>
          </Box>
          <Heading py={6}>
            Welcome to Sin City Jacks. We are bold. We are brave. We are Bator.
          </Heading>
          <Text>
            Jack clubs give men a safe place to bond through our shared love of
            masturbation. Sin City Jacks is known for its diversity. In a city
            famous for big things like the world&apos;s largest casino, tallest
            tower, and biggest adult clubs, Sin City Jacks wants to be the
            world&apos;s biggest Jack Club.
          </Text>
          <About />
          {socialLinks.map(({ heading, description, href, image }) => (
            <LinkBox key={href}>
              <Heading as={"h3"} fontSize={16}>
                <LinkOverlay href={href}>{heading}</LinkOverlay>
              </Heading>
              <Text fontSize={14} mb={2}>
                {description}
              </Text>
              <Image src={image} alt={"Contact"} />
            </LinkBox>
          ))}
        </Stack>
      </main>
    </>
  );
}
