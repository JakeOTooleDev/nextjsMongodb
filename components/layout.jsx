import { Icon } from "@chakra-ui/icon";
import { Center, Grid, GridItem } from "@chakra-ui/layout";
import { MdCopyright } from "react-icons/md";

import Header from "./header";

const Layout = ({ children }) => (
  <Grid
    height="100vh"
    width="100vw"
    templateColumns="250px 1fr"
    templateRows="80px 1fr 80px"
  >
    <GridItem colSpan={2} rowSpan={1}>
      <Header />
    </GridItem>
    <GridItem colSpan={1} rowSpan={1}>
      Sidenav
    </GridItem>
    <GridItem colSpan={1} rowSpan={1}>
      {children}
    </GridItem>
    <GridItem colSpan={2} rowSpan={1}>
      <Center>
        <Icon as={MdCopyright} />
        Camping Plus, Inc
      </Center>
    </GridItem>
  </Grid>
);

export default Layout;
