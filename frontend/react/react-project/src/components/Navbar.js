import { useEffect, useState } from "react";
import React from "react";

import { getSession, auth } from "../api/auth";
import { useContext } from "react";
import { SessionContext } from "../context/SessionContext";

import photo from "../logo.svg";

import {
  Avatar,
  Button,
  ButtonGroup,
  Container,
  Heading,
  HStack,
  Image,
  Spacer,
} from "@chakra-ui/react";

export default function Navbar() {
  const [isLogin, setIsLogin] = useState(false);
  const [profileList, setProfileList] = useState([]);

  const getProfileListData = async () => {
    try {
      const profileData = await getSession();
      console.log(profileData);
      setProfileList(profileData.data);
      if (Object.keys(profileData).length > 0) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    } catch (error) {
      console.log("error get profile data ", error);
    }
  };

  useEffect(() => {
    // TODO: answer here
    getProfileListData();
  }, []);

  // TODO: answer here
  return (
    <HStack aria-label="Navbar" className="Navbar">
      <Container as="nav" maxW="container.3xl" py={2}>
        <HStack>
          <HStack href="/" aria-label="App Title">
            <Image src={photo} aria-label="App Logo" w={16} h={16} />
            <Heading as="h3" fontSize="2xl" color="gray.200">
              Instagram Clone
            </Heading>
          </HStack>

          <Spacer />

          <ButtonGroup className="Authlogin">
            {isLogin ? (
              <HStack>
                <Heading
                  as="h3"
                  fontSize="2xl"
                  color="gray.200"
                  aria-label="Profile"
                  onClick={auth}
                >
                  Selamat Datang {profileList.user.name}
                </Heading>
                <Avatar
                  name={profileList.user.name}
                  src={profileList.user.image}
                  aria-label="Profile Picture"
                />
              </HStack>
            ) : (
              <Button aria-label="Login" onClick={auth}>
                Login
              </Button>
            )}
          </ButtonGroup>
        </HStack>
      </Container>
    </HStack>
  );
}
