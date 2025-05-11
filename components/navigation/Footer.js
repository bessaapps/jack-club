import { Link, Text } from "@chakra-ui/react";
import { legalLinks } from "@/utils/links";

export default function Footer() {
  return (
    <footer>
      {legalLinks.map(({ anchor, href }) => (
        <Link key={href} href={href}>
          <Text fontSize={14}>{anchor}</Text>
        </Link>
      ))}
      <Text fontSize={14}>
        Copyright &copy; 2023-2025{" "}
        <Link href={"/"} title={"Sin City Jacks"}>
          Sin City Jacks
        </Link>
      </Text>
    </footer>
  );
}
