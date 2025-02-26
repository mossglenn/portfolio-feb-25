import Head from 'next/head';
import { Box, Heading, Text } from '@chakra-ui/react';
import { List } from '@chakra-ui/react';

export default function ProjectPage() {
  return (
    <>
      <Head>
        <title>
          Turning Play into Learning: Game-Based Instructional Design | Digital
          Learning Portfolio
        </title>
        <meta
          name="description"
          content="Explore how game-based learning strategies integrate instructional design with interactive problem-solving and scaffolded learning mechanics."
        />
      </Head>
      <Box as="main" maxW="800px" mx="auto" p={6}>
        <Heading as="h1" size="xl" mb={4}>
          Turning Play into Learning: Game-Based Instructional Design
        </Heading>
        <Text fontSize="lg" color="gray.600" mb={4}>
          Educational games provide an opportunity to engage learners, reinforce
          scientific concepts, and promote discovery-based learning. Across
          multiple projects, I have designed and developed games that use
          instructional strategies, interactive problem-solving, and scaffolded
          learning mechanics to teach scientific principles and critical
          thinking skills.
        </Text>

        <Heading as="h2" size="lg" mb={3}>
          Bridging Disciplines: Scientists & Entertainment Technology Experts
        </Heading>
        <List.Root fontSize="md" mb={4}>
          <List.Item>
            🔹 Scientists and experts—including cognitive psychologists,
            human-computer interaction researchers, and learning scientists who
            provided insights into how people learn.
          </List.Item>
          <List.Item>
            🔹 Entertainment technology practitioners—including artists, coders,
            and UX specialists responsible for making the game engaging,
            interactive, and visually compelling.
          </List.Item>
        </List.Root>
        <Text fontSize="md" mb={4}>
          I served as the translator and facilitator, ensuring both groups:
        </Text>
        <List.Root fontSize="md" mb={4}>
          <List.Item>
            Understood each other’s priorities, constraints, and expertise.
          </List.Item>
          <List.Item>
            Worked toward the same instructional and engagement goals.
          </List.Item>
          <List.Item>
            Aligned the game mechanics with evidence-based learning strategies.
          </List.Item>
        </List.Root>

        <Heading as="h2" size="lg" mb={3}>
          Key Game-Based Learning Projects
        </Heading>
        <List.Root fontSize="md" mb={4}>
          <List.Item>
            🎮 <strong>Gamification at Think Through Math</strong>
            <List.Root>
              <List.Item>
                Consulted with ThinkThroughMath to integrate gamification into
                online learning products.
              </List.Item>
              <List.Item>
                Delivered a presentation on game design principles and learning
                science.
              </List.Item>
              <List.Item>
                Guided instructional designers and leadership in research-based
                gamification strategies.
              </List.Item>
            </List.Root>
          </List.Item>
          <List.Item>
            🌱 <strong>Beanstalk: Teaching the Principles of Balance</strong>
            <List.Root>
              <List.Item>
                Designed game mechanics and levels reinforcing physics-based
                balance concepts.
              </List.Item>
              <List.Item>
                Worked with scientists to identify common misconceptions and
                correct them through gameplay.
              </List.Item>
              <List.Item>
                Integrated scaffolded guidance through NPCs to support
                struggling learners.
              </List.Item>
            </List.Root>
          </List.Item>
          <List.Item>
            🏗 <strong>Rumble Blocks: Building Strong Structures</strong>
            <List.Root>
              <List.Item>
                Designed progressive challenge levels to teach structural
                stability.
              </List.Item>
              <List.Item>
                Aligned instructional goals with game mechanics to reinforce
                engineering principles.
              </List.Item>
              <List.Item>
                Facilitated collaboration between learning scientists and game
                developers.
              </List.Item>
            </List.Root>
          </List.Item>
          <List.Item>
            ⚖{' '}
            <strong>Torque-It: Exploring Balance & Scientific Discovery</strong>
            <List.Root>
              <List.Item>
                Designed game mechanics and instructional strategies for
                teaching balance and weight distribution.
              </List.Item>
              <List.Item>
                Created a visual notebook feature to track player actions and
                reinforce the scientific method.
              </List.Item>
              <List.Item>
                Bridged the gap between scientists and game developers to ensure
                engagement and scientific rigor.
              </List.Item>
            </List.Root>
          </List.Item>
        </List.Root>

        <Heading as="h2" size="lg" mb={3}>
          Why It Matters
        </Heading>
        <Text fontSize="md" mb={4}>
          By bridging the gap between experts in science and experts in game
          development, I helped create learning experiences that were engaging,
          instructionally sound, and scientifically valid. These projects
          demonstrate the power of collaboration across disciplines, showing
          that educational games can be both effective learning tools and
          compelling interactive experiences.
        </Text>
      </Box>
    </>
  );
}

/*
    <Head>
        <title>/Mnt/Data/Portfolio_Entries/Portfolio/Game Based Instructional Design/Page | Portfolio</title>
        <meta name="description" content="Explore my instructional design portfolio and learning solutions." />
    </Head>
    

Turning Play into Learning: Game-Based Instructional Design

Educational games provide an opportunity to engage learners, reinforce scientific concepts, and promote discovery-based learning. Across multiple projects, I have designed and developed games that use instructional strategies, interactive problem-solving, and scaffolded learning mechanics to teach scientific principles and critical thinking skills.

Bridging Disciplines: Scientists & Entertainment Technology Experts

One of my most important contributions to these projects was bridging the gap between two very different groups:
🔹 Scientists and experts—including cognitive psychologists, human-computer interaction researchers, and learning scientists who provided insights into how people learn.
🔹 Entertainment technology practitioners—including artists, coders, and UX specialists responsible for making the game engaging, interactive, and visually compelling.

I served as the translator and facilitator, ensuring both groups:
- Understood each other’s priorities, constraints, and expertise.
- Worked toward the same instructional and engagement goals.
- Aligned the game mechanics with evidence-based learning strategies.

This role was critical in ensuring that each game was not just fun but also scientifically grounded and instructionally sound.

Key Game-Based Learning Projects

🎮 Gamification at Think Through Math
Consulted with ThinkThroughMath to help their team integrate gamification into online learning products. Delivered a presentation on game design principles and learning science, guiding their instructional designers and leadership team in developing engaging, research-based gamification strategies.

🌱 Beanstalk: Teaching the Principles of Balance
Designed game mechanics and levels for Beanstalk, a physics-based game that helps young learners discover the laws of balance through interactive problem-solving.
- Worked with scientists to identify common misconceptions about balance and ensure they were addressed through game mechanics.
- Partnered with entertainment technology teams to ensure gameplay remained engaging while reinforcing key learning concepts.
- Designed non-player characters (NPCs) that provided scaffolded guidance to struggling players.

🏗 Rumble Blocks: Building Strong Structures
Assisted in level design for Rumble Blocks, a physics-based game where young learners experiment with structural stability while helping an alien build a launch platform for a spaceship.
- Ensured collaboration between learning scientists and game developers, aligning instructional goals with game mechanics that reinforced engineering principles.
- Created progressive challenge levels, ensuring students gradually built an understanding of stability and weight distribution.

⚖ Torque-It: Exploring Balance & Scientific Discovery
Designed game mechanics and instructional strategies for Torque-It, a game that teaches students about balance, weight distribution, and the scientific process.
- Helped scientists and game developers align their goals, ensuring both engagement and scientific rigor in the design.
- Designed a visual notebook feature that recorded player actions, allowing students to reflect on their experiments and apply the scientific method.

Why It Matters

By bridging the gap between experts in science and experts in game development, I helped create learning experiences that were engaging, instructionally sound, and scientifically valid. These projects demonstrate the power of collaboration across disciplines, showing that educational games can be both effective learning tools and compelling interactive experiences.
*/
