import {
  AspectRatio,
  Box,
  Container,
  Divider,
  Heading,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import About from "@/components/About";
import Link1 from "@/assets/images/links/1.jpg";

export default function Home() {
  const links = [
    {
      heading: "Jack Club Chatroom",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      href: "https://t.me/jackclubs",
      image: Link1,
    },
    {
      heading: "Instagram",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      href: "https://www.instagram.com/sincityjacks",
      image: Link1,
    },
    {
      heading: "X",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      href: "https://twitter.com/sincityjackss",
      image: Link1,
    },
    {
      heading: "TikTok",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      href: "http://www.tiktok.com/@jackclubsocial",
      image: Link1,
    },
    {
      heading: "BateWorld",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      href: "https://bateworld.com/login.php?return_url=http%3A%2F%2Fbateworld.com%2Fgroup.php%3Fgroup_id%3D3531",
      image: Link1,
    },
  ];

  return (
    <>
      <main>
        <Container py={8}>
          <Stack gap={4}>
            <Heading as={"h1"}>
              Sin
              <br />
              City
              <br />
              Jacks
            </Heading>
            <Divider mb={6} />
            <AspectRatio maxW={75} ratio={1}>
              <Image
                src={Logo}
                alt={"Sin City Jacks"}
                objectFit={"cover"}
                style={{ mixBlendMode: "color-burn" }} // todo: Edit in Photoshop
              />
            </AspectRatio>
            <Box>
              <Text fontWeight={800} color={"primary.500"}>
                Brotherhood is made.
              </Text>
              <Text fontWeight={800} color={"primary.500"}>
                Memories are created.
              </Text>
              <Text fontWeight={800} color={"primary.500"}>
                Bonds are built strong.
              </Text>
            </Box>
            <Heading py={8}>
              Welcome to Sin City Jacks. We are bold. We are brave. We are
              Bator.
            </Heading>
            <Text>
              Jack clubs give men a safe place to bond through our shared love
              of masturbation. Sin City Jacks is known for its diversity. In a
              city famous for big things like the world&apos;s largest casino,
              tallest tower, and biggest adult clubs, Sin City Jacks wants to be
              the world&apos;s biggest Jack Club.
            </Text>
            <About />
            {links.map(({ heading, description, href, image }) => (
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
        </Container>
      </main>
    </>
  );
}
