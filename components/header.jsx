import { Icon } from "@chakra-ui/icon";
import { Box, Flex, List, ListItem, ListIcon } from "@chakra-ui/layout";
import { MdOutlineTerrain, MdHome, MdPerson } from "react-icons/md";

const pages = [
  { name: "Home", icon: MdHome, url: "/" },
  {
    name: "Profile",
    icon: MdPerson,
    url: "/profile",
  },
];

const Header = () => (
  <Flex justifyContent="space-between" alignItems="center" marginX="8px">
    <Flex alignItems="center">
      <Icon as={MdOutlineTerrain} w={10} h={10} />
      Camping Plus
    </Flex>

    <List display="flex">
      {pages.map((page) => (
        <ListItem paddingX="4px" key={page.name}>
          <ListIcon as={page.icon} />
          {page.name}
        </ListItem>
      ))}
    </List>
  </Flex>
);

export default Header;
