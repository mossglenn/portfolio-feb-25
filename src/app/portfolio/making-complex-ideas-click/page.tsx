import Head from 'next/head';
import { Box, Heading, Text } from '@chakra-ui/react';
import { List } from '@chakra-ui/react';

export default function ProjectPage() {
  return (
    <>
      <Head>
        <title>
          Making Complex Ideas Click: Connecting Researchers, Educators, and
          Industry Partners | Digital Learning Portfolio
        </title>
        <meta
          name="description"
          content="Explore how research communication bridges the gap between scientists, educators, and industry professionals to make complex ideas actionable."
        />
      </Head>
      <Box as="main" maxW="800px" mx="auto" p={6}>
        <Heading as="h1" size="xl" mb={4}>
          Making Complex Ideas Click: Connecting Researchers, Educators, and
          Industry Partners
        </Heading>
        <Text fontSize="lg" color="gray.600" mb={4}>
          Cutting-edge research is only as impactful as its ability to be
          understood, applied, and acted upon. Across multiple projects, I have
          worked as a translator and facilitator, helping scientists, educators,
          and industry professionals understand each other’s needs, values, and
          constraints. By taking complex ideas—from machine learning to
          scientific collaboration—and turning them into clear, actionable
          messages, I have helped researchers connect with educators, school
          administrators, industry partners, and students in meaningful ways.
        </Text>

        <Heading as="h2" size="lg" mb={3}>
          Key Projects in Research Communication & Collaboration
        </Heading>
        <List.Root fontSize="md" mb={4}>
          <List.Item>
            📢{' '}
            <strong>
              Recruiting & Communicating Research to Educators (Carnegie Mellon:
              Adaptive Cognitive Tutors Using Machine Learning)
            </strong>
            <List.Root>
              <List.Item>
                Translated machine learning and adaptive tutoring concepts into
                terms that educators could understand, ensuring they saw how the
                research connected to their classrooms and students.
              </List.Item>
              <List.Item>
                Developed presentations, handouts, and online materials that
                reframed technical research language into practical, real-world
                applications.
              </List.Item>
              <List.Item>
                Used contextualized, non-technical examples to explain
                intelligent tutoring, machine learning, and research vs. beta
                testing, making abstract concepts accessible.
              </List.Item>
              <List.Item>
                Result: Successfully recruited nearly 2,000 students across
                multiple school districts by making the research clear,
                relatable, and actionable for decision-makers.
              </List.Item>
            </List.Root>
          </List.Item>

          <List.Item>
            🎓{' '}
            <strong>
              Explaining Science to Non-Scientists (Carnegie Mellon: Academic
              Poster for Industry Partners)
            </strong>
            <List.Root>
              <List.Item>
                Took dense academic research on educational games and reframed
                it in terms of business impact, making it compelling for
                industry leaders and foundations.
              </List.Item>
              <List.Item>
                Used visual storytelling, clear language, and real-world
                applications to explain the research in a way that aligned with
                business priorities—helping potential partners see the value of
                collaboration.
              </List.Item>
              <List.Item>
                Result: The approach was so successful that researchers
                requested my help in refining their other outreach materials.
              </List.Item>
            </List.Root>
          </List.Item>

          <List.Item>
            🔬{' '}
            <strong>
              Integrating Social & Emotional Learning into Science Games
              (Collaborative Process of Scientific Inquiry)
            </strong>
            <List.Root>
              <List.Item>
                Helped two research teams with conflicting priorities (science
                education and social-emotional learning) find common ground.
              </List.Item>
              <List.Item>
                Created a new framework—The Collaborative Process of Scientific
                Inquiry, which redefined science as a social process where
                discoveries build on each other rather than just an isolated
                method.
              </List.Item>
              <List.Item>
                Translated this framework into game mechanics and level designs,
                ensuring that SEL principles were woven into the learning
                experience in an authentic way.
              </List.Item>
            </List.Root>
          </List.Item>

          <List.Item>
            🤝{' '}
            <strong>
              Facilitating Collaboration in Intelligent Tutoring Systems
              (Collaborative Fractions Tutor)
            </strong>
            <List.Root>
              <List.Item>
                Took a behind-the-scenes AI-driven tutoring system and made it
                understandable to teachers and school leaders so they could feel
                confident adopting it.
              </List.Item>
              <List.Item>
                Designed clear, structured presentations that broke down how the
                software responded to student mistakes in real time—explaining
                it in terms of classroom benefits rather than technical
                functionality.
              </List.Item>
              <List.Item>
                Bridged the gap between AI researchers and educators, ensuring
                both groups understood each other’s needs, concerns, and goals.
              </List.Item>
            </List.Root>
          </List.Item>
        </List.Root>

        <Heading as="h2" size="lg" mb={3}>
          Why It Matters
        </Heading>
        <Text fontSize="md" mb={4}>
          My work ensures that research doesn’t just stay in the lab—it reaches
          the people who can use it. By translating technical concepts into
          clear, relatable messaging, I have helped research teams engage
          educators, recruit participants, secure partnerships, and make their
          findings actionable.
        </Text>
      </Box>
    </>
  );
}

/*
    <Head>
        <title>/Mnt/Data/Portfolio_Entries/Portfolio/Making Complex Ideas Click/Page | Portfolio</title>
        <meta name="description" content="Explore my instructional design portfolio and learning solutions." />
    </Head>
    

Making Complex Ideas Click: Connecting Researchers, Educators, and Industry Partners

Cutting-edge research is only as impactful as its ability to be understood, applied, and acted upon. Across multiple projects, I have worked as a translator and facilitator, helping scientists, educators, and industry professionals understand each other’s needs, values, and constraints. By taking complex ideas—from machine learning to scientific collaboration—and turning them into clear, actionable messages, I have helped researchers connect with educators, school administrators, industry partners, and students in meaningful ways.

Key Projects in Research Communication & Collaboration

📢 Recruiting & Communicating Research to Educators (Carnegie Mellon: Adaptive Cognitive Tutors Using Machine Learning)
- Translated machine learning and adaptive tutoring concepts into terms that educators could understand, ensuring they saw how the research connected to their classrooms and students.
- Developed presentations, handouts, and online materials that reframed technical research language into practical, real-world applications.
- Used contextualized, non-technical examples to explain intelligent tutoring, machine learning, and research vs. beta testing, making abstract concepts accessible.
- Result: Successfully recruited nearly 2,000 students across multiple school districts by making the research clear, relatable, and actionable for decision-makers.

🎓 Explaining Science to Non-Scientists (Carnegie Mellon: Academic Poster for Industry Partners)
- Took dense academic research on educational games and reframed it in terms of business impact, making it compelling for industry leaders and foundations.
- Used visual storytelling, clear language, and real-world applications to explain the research in a way that aligned with business priorities—helping potential partners see the value of collaboration.
- Result: The approach was so successful that researchers requested my help in refining their other outreach materials.

🔬 Integrating Social & Emotional Learning into Science Games (Collaborative Process of Scientific Inquiry)
- Helped two research teams with conflicting priorities (science education and social-emotional learning) find common ground.
- Created a new framework—The Collaborative Process of Scientific Inquiry, which redefined science as a social process where discoveries build on each other rather than just an isolated method.
- Translated this framework into game mechanics and level designs, ensuring that SEL principles were woven into the learning experience in an authentic way.

🤝 Facilitating Collaboration in Intelligent Tutoring Systems (Collaborative Fractions Tutor)
- Took a behind-the-scenes AI-driven tutoring system and made it understandable to teachers and school leaders so they could feel confident adopting it.
- Designed clear, structured presentations that broke down how the software responded to student mistakes in real time—explaining it in terms of classroom benefits rather than technical functionality.
- Bridged the gap between AI researchers and educators, ensuring both groups understood each other’s needs, concerns, and goals.

Why It Matters

My work ensures that research doesn’t just stay in the lab—it reaches the people who can use it. By translating technical concepts into clear, relatable messaging, I have helped research teams engage educators, recruit participants, secure partnerships, and make their findings actionable.
*/
