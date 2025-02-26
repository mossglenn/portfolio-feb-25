import Head from 'next/head';
import { Box, Heading, Text, Link } from '@chakra-ui/react';
import { List } from '@chakra-ui/react';

export default function ProjectPage() {
  return (
    <>
      <Head>
        <title>
          The Invisible Game: A Playable Accessibility Experiment | Digital
          Learning Portfolio
        </title>
        <meta
          name="description"
          content="Explore how The Invisible Game challenges accessibility assumptions by making screen reader users the default and sighted players the ones needing accommodations."
        />
      </Head>
      <Box as="main" maxW="800px" mx="auto" p={6}>
        <Heading as="h1" size="xl" mb={4}>
          The Invisible Game: A Playable Accessibility Experiment
        </Heading>
        <Text fontSize="lg" color="gray.600" mb={4}>
          Most games rely on visuals—but what happens when sight isn’t an
          option? The Invisible Game is a small experimental game designed to
          challenge assumptions about accessibility in digital design. The
          entire game is invisible and has no visual components, meaning that
          players who use screen readers can navigate and win effortlessly,
          while those who rely on sight and a mouse will struggle. Instead of
          designing accommodations for players with disabilities, this game
          flips the script—sighted players are the ones who need accessibility
          support.
        </Text>

        <Heading as="h2" size="lg" mb={3}>
          Background & Design Challenge
        </Heading>
        <List.Root fontSize="md" mb={4}>
          <List.Item>
            🔹 How can we challenge designers to rethink accessibility by making
            the need for accommodations visible?
          </List.Item>
          <List.Item>
            🔹 Accessibility in digital design is often treated as an
            afterthought, with features added to assist users with disabilities.
          </List.Item>
          <List.Item>
            🔹 What if a game was designed with accessibility as the default
            experience?
          </List.Item>
        </List.Root>
        <Text fontSize="md" mb={4}>
          This small project serves as a thought experiment in universal design,
          accessibility, and inclusive interaction.
        </Text>

        <Heading as="h2" size="lg" mb={3}>
          The Design
        </Heading>
        <List.Root fontSize="md" mb={4}>
          <List.Item>
            ✅ Screen reader users experience seamless gameplay.
          </List.Item>
          <List.Item>
            ✅ Sighted players encounter difficulty and require accommodations
            to succeed.
          </List.Item>
          <List.Item>
            ✅ The absence of visuals makes accessibility the core mechanic, not
            an add-on feature.
          </List.Item>
        </List.Root>

        <Heading as="h2" size="lg" mb={3}>
          Why It Matters
        </Heading>
        <Text fontSize="md" mb={4}>
          By flipping the typical approach to accessibility, The Invisible Game
          encourages designers to think critically about inclusive design—not as
          an extra feature, but as the foundation of digital experiences.
        </Text>

        <Link href="#" color="blue.500">
          Play The Invisible Game (opens in new window)
        </Link>
        <br />
        <Link href="https://www.section508.gov" color="blue.500">
          Learn more about universal design and accessibility at Section508.gov.
        </Link>
      </Box>
    </>
  );
}

/*
    <Head>
        <title>/Mnt/Data/Portfolio_Entries/Portfolio/The Invisible Game/Page | Portfolio</title>
        <meta name="description" content="Explore my instructional design portfolio and learning solutions." />
    </Head>
    

The Invisible Game: A Playable Accessibility Experiment

Most games rely on visuals—but what happens when sight isn’t an option? The Invisible Game is a small experimental game designed to challenge assumptions about accessibility in digital design. The entire game is invisible and has no visual components, meaning that players who use screen readers can navigate and win effortlessly, while those who rely on sight and a mouse will struggle. Instead of designing accommodations for players with disabilities, this game flips the script—sighted players are the ones who need accessibility support.

Background & Design Challenge

🔹 How can we challenge designers to rethink accessibility by making the need for accommodations visible?

Accessibility in digital design is often treated as an afterthought, with features added to assist users with disabilities. However, what if a game was designed with accessibility as the default experience? This small project serves as a thought experiment in universal design, accessibility, and inclusive interaction.

The Design

To test this idea, I designed The Invisible Game, a game where:

✅ Screen reader users experience seamless gameplay.
✅ Sighted players encounter difficulty and require accommodations to succeed.
✅ The absence of visuals makes accessibility the core mechanic, not an add-on feature.

Why It Matters

By flipping the typical approach to accessibility, The Invisible Game encourages designers to think critically about inclusive design—not as an extra feature, but as the foundation of digital experiences.

Play The Invisible Game (opens in new window)

Learn more about universal design and accessibility at Section508.gov.
*/
