import ChakraContext from "@/components/context/ChakraContext";
import { Container, Grid, GridItem } from "@chakra-ui/react";
import Footer from "@/components/navigation/Footer";
import Header from "@/components/navigation/Header";

export const metadata = {
  title: "Sin City Jacks",
  description:
    "A safe space for men to masturbate together and an unapologetic social experience where the brave and bold Bator Brotherhood can play, learn, and grow as connection thrives.",
};

export default function RootLayout({ children }) {
  return (
    <ChakraContext>
      <html lang={"en"}>
        <body>
          <Grid gridTemplateRows={"1fr auto"} h={"100vh"} gap={4} py={8}>
            <GridItem>
              <Container>
                <Header />
                {children}
              </Container>
            </GridItem>
            <GridItem>
              <Container>
                <Footer />
              </Container>
            </GridItem>
          </Grid>
        </body>
      </html>
    </ChakraContext>
  );
}
