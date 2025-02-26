import Head from 'next/head';
import { Box, Heading, Text } from '@chakra-ui/react';
import { List } from '@chakra-ui/react';

export default function ProjectPage() {
  return (
    <>
      <Head>
        <title>Project Title | Digital Learning Portfolio</title>
        <meta
          name="description"
          content="Explore this project, showcasing digital learning design with adaptive, interactive, and data-driven approaches."
        />
      </Head>
      <Box as="main" maxW="800px" mx="auto" p={6}>
        <Heading as="h1" size="xl" mb={4}>
          Project Title
        </Heading>
        <Text fontSize="lg" color="gray.600" mb={4}>
          Brief project summary goes here, highlighting its purpose, audience,
          and impact.
        </Text>

        <Heading as="h2" size="lg" mb={3}>
          Background & Challenge
        </Heading>
        <Text fontSize="md" mb={4}>
          Explain the problem or challenge that led to this project. What was
          the learning or business need?
        </Text>

        <Heading as="h2" size="lg" mb={3}>
          Solution
        </Heading>
        <Text fontSize="md" mb={4}>
          Describe the approach, instructional design strategies, and
          technologies used to develop the solution.
        </Text>

        <Heading as="h2" size="lg" mb={3}>
          Key Features
        </Heading>
        <List.Root fontSize="md" mb={4}>
          <List.Item>✔ Adaptive learning techniques</List.Item>
          <List.Item>✔ Interactive and game-based elements</List.Item>
          <List.Item>✔ Data-driven feedback and analytics</List.Item>
          <List.Item>
            ✔ Accessibility and inclusive design considerations
          </List.Item>
        </List.Root>

        <Heading as="h2" size="lg" mb={3}>
          Results & Impact
        </Heading>
        <Text fontSize="md" mb={4}>
          Summarize the outcomes. How did this project improve learning,
          engagement, or efficiency?
        </Text>
      </Box>
    </>
  );
}
