"use client";

import { Box, Collapse, Flex, Link, Text } from "@chakra-ui/react";
import { useState } from "react";
import { ArrowRight, Menu as MenuIcon, X } from "lucide-react";
import { navigationLinks } from "@/utils/links";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box mb={8}>
      <Flex
        align={"center"}
        justify={"space-between"}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Text textTransform={"uppercase"}>Menu</Text>
        {isOpen ? <X /> : <MenuIcon />}
      </Flex>
      <Collapse in={isOpen}>
        <nav>
          {navigationLinks.map(({ anchor, href }) => (
            <Link key={href} href={href}>
              <Flex align={"center"} gap={4}>
                <Text>{anchor}</Text>
                <ArrowRight />
              </Flex>
            </Link>
          ))}
        </nav>
      </Collapse>
    </Box>
  );
}
