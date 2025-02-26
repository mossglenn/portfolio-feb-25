import Head from 'next/head';
import { Box, Heading, Text } from '@chakra-ui/react';
import { List } from '@chakra-ui/react';

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>
          Creating Digital Learning That Works—For Learners and Organizations |
          Portfolio
        </title>
        <meta
          name="description"
          content="Explore my portfolio of digital learning design projects, where I create adaptive, interactive, and data-driven learning experiences that drive real-world impact."
        />
      </Head>
      <Box as="main" maxW="800px" mx="auto" p={6}>
        <Heading as="h1" size="xl" mb={4}>
          Creating Digital Learning That Works—For Learners and Organizations
        </Heading>
        <Text fontSize="lg" mb={4}>
          Great learning experiences do more than deliver information—they{' '}
          <strong>bridge gaps</strong> between research and practice, between
          experts and learners, and between complex ideas and real-world
          application. <strong>As a digital learning designer,</strong>I create
          learning experiences that do more than inform—they engage, challenge,
          and support people in applying what they learn, while also driving
          meaningful outcomes for organizations.
        </Text>
        <Text fontSize="lg" mb={4}>
          I specialize in <strong>digital learning design</strong>, using
          technology to create adaptive, interactive, and data-driven learning
          experiences. My work often involves{' '}
          <strong>
            bringing together cross-functional teams and diverse stakeholders
          </strong>
          —translating between subject matter experts, researchers, designers,
          and learners to create learning experiences that are{' '}
          <strong>
            clear, impactful, and designed for real-world application
          </strong>
          .
        </Text>
        <Heading as="h2" size="lg" mt={6} mb={4}>
          What I Do
        </Heading>
        <List.Root fontSize="lg">
          <List.Item>
            <strong>
              Bridge organizational goals with learner motivations
            </strong>
          </List.Item>
          <List.Item>
            <strong>Help learners engage with and apply complex ideas</strong>
          </List.Item>
          <List.Item>
            <strong>Personalize instruction through adaptive learning</strong>
          </List.Item>
          <List.Item>
            <strong>
              Create interactive and game-based learning solutions
            </strong>
          </List.Item>
          <List.Item>
            <strong>
              Facilitate collaboration across cross-functional teams and
              stakeholders
            </strong>
          </List.Item>
        </List.Root>
        <Text fontSize="lg" mt={6}>
          📌{' '}
          <strong>
            Explore my projects below to see how I design smart, scalable, and
            engaging learning solutions.
          </strong>
        </Text>
      </Box>
    </>
  );
}
