import { AspectRatio, Divider, Heading, Link, Stack } from "@chakra-ui/react";
import Menu from "@/components/navigation/Menu";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";

export default function Header() {
  return (
    <header>
      <Stack gap={4} mb={4}>
        <Link href={"/"} title={"Sin City Jacks"}>
          <Heading as={"h1"} textTransform={"uppercase"}>
            Sin
            <br />
            City
            <br />
            Jacks
          </Heading>
        </Link>
        <Divider />
        <Menu />
        <AspectRatio maxW={75} ratio={1}>
          <Image
            src={Logo}
            alt={"Sin City Jacks"}
            objectFit={"cover"}
            style={{ mixBlendMode: "color-burn" }} // todo: Edit in Photoshop Instead
          />
        </AspectRatio>
      </Stack>
    </header>
  );
}
