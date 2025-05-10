"use client";

import { Collapse, Link, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function About() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen && <Link onClick={() => setIsOpen(true)}>Read more</Link>}
      <Collapse in={isOpen}>
        <Text mb={4}>
          At Sin City Jacks, men (called Jacks) come together to make strong
          bonds. Here, we celebrate being real and honest. Our guests come from
          all over the world. Some are big, some are small, and they come in all
          colors. Come discover new things about yourself and others.
        </Text>
        <Text>
          Sin City Jacks is where brotherhood is made, memories are created, and
          bonds are built strong. Welcome, brothers!
        </Text>
      </Collapse>
    </>
  );
}
