import Head from 'next/head';
import { Box, Heading, Text } from '@chakra-ui/react';
import { List } from '@chakra-ui/react';

export default function ProjectPage() {
  return (
    <>
      <Head>
        <title>
          Making Learning Smarter: Adaptive, Data-Driven Instruction | Digital
          Learning Portfolio
        </title>
        <meta
          name="description"
          content="Explore adaptive learning projects that personalize instruction and enhance engagement through data-driven feedback."
        />
      </Head>
      <Box as="main" maxW="800px" mx="auto" p={6}>
        <Heading as="h1" size="xl" mb={4}>
          Making Learning Smarter: Adaptive, Data-Driven Instruction
        </Heading>
        <Text fontSize="lg" color="gray.600" mb={4}>
          Traditional learning experiences often take a one-size-fits-all
          approach, leaving learners frustrated when struggling or unchallenged
          when advancing quickly. Adaptive learning meets learners where they
          are, adjusting instruction based on their needs in real time. Across
          multiple projects, I have designed intelligent tutoring systems,
          adaptive problem-solving experiences, and data-driven learning tools
          that personalize learning and improve engagement.
        </Text>

        <Heading as="h2" size="lg" mb={3}>
          Key Projects in Adaptive Learning
        </Heading>
        <List.Root fontSize="md" mb={4}>
          <List.Item>
            📊 <strong>Discrete Math Tutors (OLI)</strong> (Real-Time,
            Data-Driven Remediation for Struggling Learners)
            <List.Root>
              <List.Item>
                Designed an intelligent tutoring system that adapts to student
                performance in discrete mathematics, a notoriously challenging
                subject.
              </List.Item>
              <List.Item>
                Used learning analytics to identify misconceptions and knowledge
                gaps, providing targeted feedback and scaffolded hints based on
                student errors.
              </List.Item>
              <List.Item>
                Ensured that students who struggled with foundational concepts
                received additional support while those who mastered material
                could progress efficiently.
              </List.Item>
            </List.Root>
          </List.Item>

          <List.Item>
            ➕ <strong>Collaborative Fractions Tutor</strong> (Adaptive Learning
            Through Peer Interaction)
            <List.Root>
              <List.Item>
                Designed an adaptive tutor that responded not just to individual
                learners, but to student collaboration.
              </List.Item>
              <List.Item>
                Used real-time data to analyze student conversations and
                actions, adjusting instructional prompts based on their
                problem-solving approach.
              </List.Item>
              <List.Item>
                Helped researchers explore how collaborative learning affects
                student understanding in an adaptive environment.
              </List.Item>
            </List.Root>
          </List.Item>

          <List.Item>
            🎮{' '}
            <strong>
              Escape Room Statistics Tutor & Gamified Statistics Tutor
            </strong>{' '}
            (Adaptive Feedback in Game-Based Learning)
            <List.Root>
              <List.Item>
                Developed adaptive tutoring mechanics for two gamified learning
                experiences, where students solved probability and statistics
                problems in an interactive, scenario-based format.
              </List.Item>
              <List.Item>
                Built an adaptive hint system that provided just-in-time
                support, ensuring students received step-by-step guidance only
                when needed.
              </List.Item>
              <List.Item>
                Incorporated branching problem-solving pathways, allowing
                students to adjust their approach based on previous mistakes.
                (Read more about these projects in the Games & Gamification
                section.)
              </List.Item>
            </List.Root>
          </List.Item>
        </List.Root>

        <Heading as="h2" size="lg" mb={3}>
          Why It Matters
        </Heading>
        <Text fontSize="md" mb={4}>
          Adaptive learning removes barriers to mastery by personalizing
          instruction in real time. By integrating data-driven feedback,
          intelligent tutoring, and interactive learning pathways, these
          projects demonstrate how instructional design can respond to
          individual learners, keeping them engaged, challenged, and supported
          throughout their learning journey.
        </Text>
      </Box>
    </>
  );
}

/*
    <Head>
        <title>/Mnt/Data/Portfolio_Entries/Portfolio/Adaptive Learning/Page | Portfolio</title>
        <meta name="description" content="Explore my instructional design portfolio and learning solutions." />
    </Head>
    

Making Learning Smarter: Adaptive, Data-Driven Instruction

Traditional learning experiences often take a one-size-fits-all approach, leaving learners frustrated when struggling or unchallenged when advancing quickly. Adaptive learning meets learners where they are, adjusting instruction based on their needs in real time. Across multiple projects, I have designed intelligent tutoring systems, adaptive problem-solving experiences, and data-driven learning tools that personalize learning and improve engagement.

Key Projects in Adaptive Learning

📊 Discrete Math Tutors (OLI) (Real-Time, Data-Driven Remediation for Struggling Learners)
- Designed an intelligent tutoring system that adapts to student performance in discrete mathematics, a notoriously challenging subject.
- Used learning analytics to identify misconceptions and knowledge gaps, providing targeted feedback and scaffolded hints based on student errors.
- Ensured that students who struggled with foundational concepts received additional support while those who mastered material could progress efficiently.

➕ Collaborative Fractions Tutor (Adaptive Learning Through Peer Interaction)
- Designed an adaptive tutor that responded not just to individual learners, but to student collaboration.
- Used real-time data to analyze student conversations and actions, adjusting instructional prompts based on their problem-solving approach.
- Helped researchers explore how collaborative learning affects student understanding in an adaptive environment.

🎮 Escape Room Statistics Tutor & Gamified Statistics Tutor (Adaptive Feedback in Game-Based Learning)
- Developed adaptive tutoring mechanics for two gamified learning experiences, where students solved probability and statistics problems in an interactive, scenario-based format.
- Built an adaptive hint system that provided just-in-time support, ensuring students received step-by-step guidance only when needed.
- Incorporated branching problem-solving pathways, allowing students to adjust their approach based on previous mistakes. (Read more about these projects in the Games & Gamification section.)

Why It Matters

Adaptive learning removes barriers to mastery by personalizing instruction in real time. By integrating data-driven feedback, intelligent tutoring, and interactive learning pathways, these projects demonstrate how instructional design can respond to individual learners, keeping them engaged, challenged, and supported throughout their learning journey.
*/
