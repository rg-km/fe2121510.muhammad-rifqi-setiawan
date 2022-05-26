// TODO: answer here
import React from "react";
import LikeDislikeButton from "./LikeDislikeButton";

import {
  Avatar,
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function PostCard({
  image,
  caption,
  username,
  avatar,
  userId,
  date,
  id,
  likeCount,
  dislikeCount,
  isLiked,
  isDisliked,
  refetchListPost,
}) {
  // TODO: answer here
  return (
    <Box
      aria-label="Post Card"
      w="600px"
      minH="400px"
      bgColor="gray.100"
      textColor="gray.900"
      borderRadius={4}
      boxShadow="md"
    >
      <Flex direction="column" w="full" h="full">
        <HStack p={4} spacing={4} align="center">
          <Avatar name={username} src={avatar} size="lg" />
          <VStack align="start" spacing={1}>
            <Heading aria-label="Post User Name" as="h3" fontSize="lg">
              {username}
            </Heading>
            <Text fontSize="sm" opacity={0.8}>
              {`@${userId}`}
            </Text>
          </VStack>
        </HStack>

        <Flex w="full" borderY="1px">
          <Image
            aria-label="Post Image"
            src={image}
            w="full"
            h="320px"
            objectFit="cover"
          />
        </Flex>

        <VStack w="full" px={4} py={8} align="start" textAlign="left">
          <LikeDislikeButton
            id={id}
            likeCount={likeCount}
            dislikeCount={dislikeCount}
            isLiked={isLiked}
            isDisliked={isDisliked}
            refetchListPost={refetchListPost}
          />

          <Text aria-label="Post Date" fontSize="xs" opacity={0.8}>
            {date}
          </Text>
          <Text aria-label="Post Caption" fontSize="lg">
            {caption}
          </Text>
        </VStack>
      </Flex>
    </Box>
  );
}
