import React from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  useDisclosure,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";

import {
  useColorMode,
  useColorModeValue,
  IconButton,
  IconButtonProps,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { GiTicket } from "react-icons/gi";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">;

export const ColorModeSwitcher = (props: ColorModeSwitcherProps) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      size="md"
      fontSize="lg"
      variant="ghost"
      color="current"
      marginLeft="2"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      aria-label={`Switch to ${text} mode`}
      {...props}
    />
  );
};

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const BodyBgColor = useColorModeValue("#FFF8D5", "gray.600");

  return (
    <>
      <Box bg={BodyBgColor} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            color="purple.600"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Stack direction="row">
              <Image
                width={10}
                height={10}
                src="/Sabelologo.png"
                alt="Sabelologo logo"
              />
              <Text fontFamily="mono" fontSize="3xl" fontWeight="bold">
                Sabelo
              </Text>
            </Stack>

            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Stack
                direction={"row"}
                spacing={12}
                justify={"center"}
                align={"center"}
              >
                <Link
                  py={3}
                  fontSize="md"
                  textTransform="uppercase"
                  fontWeight="normal"
                  letterSpacing={2}
                  _hover={{
                    textDecorationColor: "red.300",
                  }}
                  href={"/"}
                >
                  Home
                </Link>
                <Link
                  py={3}
                  fontSize="md"
                  textTransform="uppercase"
                  fontWeight="normal"
                  letterSpacing={1}
                  href={"sell"}
                >
                  About
                </Link>
                <Link
                  py={3}
                  fontSize="md"
                  textTransform="uppercase"
                  fontWeight="normal"
                  letterSpacing={2}
                  href={"collection"}
                >
                  Blog
                </Link>
                <Link
                  py={3}
                  fontSize="md"
                  textTransform="uppercase"
                  fontWeight="normal"
                  letterSpacing={2}
                  href={"myassets"}
                >
                  Projects
                </Link>
                <Link
                  py={3}
                  fontSize="md"
                  textTransform="uppercase"
                  fontWeight="normal"
                  letterSpacing={2}
                  href={"myassets"}
                >
                  Github
                </Link>
                <Link
                  py={3}
                  fontSize="md"
                  textTransform="uppercase"
                  fontWeight="normal"
                  letterSpacing={2}
                  href={"myassets"}
                >
                  YouTube
                </Link>
                <Link
                  py={3}
                  fontSize="md"
                  textTransform="uppercase"
                  fontWeight="normal"
                  letterSpacing={2}
                  href={"myassets"}
                >
                  Connect
                </Link>
              </Stack>
            </HStack>
          </HStack>

          <Flex alignItems={"center"}>
            <ColorModeSwitcher variant="ghost" size="sm" mr={4} />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Link
                px={2}
                py={1}
                fontSize="md"
                textTransform="uppercase"
                fontWeight="normal"
                letterSpacing={2}
                color="purple.600"
                href="/"
              >
                Home
              </Link>
              <Link
                px={2}
                py={1}
                fontSize="md"
                textTransform="uppercase"
                fontWeight="normal"
                letterSpacing={2}
                color="purple.600"
                href={"sell"}
              >
                About
              </Link>
              <Link
                px={2}
                py={1}
                fontSize="md"
                textTransform="uppercase"
                fontWeight="normal"
                letterSpacing={2}
                color="purple.600"
                href={"collection"}
              >
                Blog
              </Link>
              <Link
                px={2}
                py={1}
                fontSize="md"
                textTransform="uppercase"
                fontWeight="normal"
                letterSpacing={3}
                color="purple.600"
                href={"myassets"}
              >
                Projects
              </Link>
              <Link
                px={2}
                py={1}
                fontSize="md"
                textTransform="uppercase"
                fontWeight="normal"
                letterSpacing={3}
                color="purple.600"
                href={"myassets"}
              >
                Github
              </Link>
              <Link
                px={2}
                py={1}
                fontSize="md"
                textTransform="uppercase"
                fontWeight="normal"
                letterSpacing={3}
                color="purple.600"
                href={"myassets"}
              >
                YouTube
              </Link>
              <Link
                px={2}
                py={1}
                fontSize="md"
                textTransform="uppercase"
                fontWeight="normal"
                letterSpacing={3}
                color="purple.600"
                href={"myassets"}
              >
                Connect
              </Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
