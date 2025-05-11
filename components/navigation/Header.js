import { AspectRatio, Divider, Heading, Link, Stack } from "@chakra-ui/react";
import Menu from "@/components/navigation/Menu";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";

export default function Header() {
  return (
    <header>
      <Stack gap={4} mb={4}>
        <Link href={"/"} title={"Sin City Jacks"}>
          <Heading as={"p"} textTransform={"uppercase"}>
            Sin
            <br />
            City
            <br />
            Jacks
          </Heading>
        </Link>
        <Divider />
        <Menu />
        <AspectRatio maxW={100} ratio={1}>
          <Image src={Logo} alt={"Sin City Jacks"} objectFit={"cover"} />
        </AspectRatio>
      </Stack>
    </header>
  );
}
