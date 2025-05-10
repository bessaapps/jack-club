import { Link, Text } from "@chakra-ui/react";
import { legalLinks } from "@/utils/links";

export default function Footer() {
  return (
    <footer>
      <Text fontSize={14}>
        Copyright &copy; 2005{" "}
        <Link href={"/"} title={"Sin City Jacks"}>
          Sin City Jacks
        </Link>
      </Text>
      {legalLinks.map(({ anchor, href }) => (
        <Link key={href} href={href}>
          <Text fontSize={14}>{anchor}</Text>
        </Link>
      ))}
    </footer>
  );
}
