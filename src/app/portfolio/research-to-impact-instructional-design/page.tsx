import Head from 'next/head';
import { Box, Heading, Text } from '@chakra-ui/react';
import { List } from '@chakra-ui/react';

export default function ProjectPage() {
  return (
    <>
      <Head>
        <title>
          Bridging Research, Instructional Design, and Stakeholder Needs |
          Digital Learning Portfolio
        </title>
        <meta
          name="description"
          content="Explore how research can be transformed into structured learning tools that support study design, grant writing, and innovation."
        />
      </Head>
      <Box as="main" maxW="800px" mx="auto" p={6}>
        <Heading as="h1" size="xl" mb={4}>
          Bridging Research, Instructional Design, and Stakeholder Needs
        </Heading>
        <Text fontSize="lg" color="gray.600" mb={4}>
          Complex research and innovation hold enormous potential, but they’re
          only impactful when researchers, educators, and stakeholders can
          understand, apply, and act on them. My work focuses on translating
          technical research into structured learning tools that help
          researchers navigate study design, write grant proposals, and bring
          innovations to market. By breaking down complexity and structuring
          content for clarity, I help researchers move from ideas to execution
          with confidence.
        </Text>

        <Heading as="h2" size="lg" mb={3}>
          Key Projects
        </Heading>
        <List.Root fontSize="md" mb={4}>
          <List.Item>
            📊{' '}
            <strong>
              PCOR Decision Tool (Helping Researchers Navigate Study Design
              Choices)
            </strong>
            <List.Root>
              <List.Item>
                Translated dense, complex research methodologies into an
                interactive decision-making tool that guides researchers through
                structured study design choices.
              </List.Item>
              <List.Item>
                Created a step-by-step adaptive format, ensuring that users see
                only the most relevant information based on their specific
                research needs.
              </List.Item>
              <List.Item>
                Provided a clear, structured pathway for early-career
                researchers, reducing confusion and supporting better
                decision-making in Comparative Effectiveness Research (CER).
              </List.Item>
            </List.Root>
          </List.Item>

          <List.Item>
            📖{' '}
            <strong>
              PCOR Studies Workbook (Guiding Grant Writers Through Proposal
              Development)
            </strong>
            <List.Root>
              <List.Item>
                Addressed a major barrier to grant writing—researchers often
                struggle to start because of time constraints and the
                overwhelming nature of proposals.
              </List.Item>
              <List.Item>
                Designed a structured, step-by-step workbook that breaks
                applications into manageable tasks.
              </List.Item>
              <List.Item>
                Used a question-based approach to help learners gradually build
                full proposal sections, making the writing process more
                approachable and time-efficient.
              </List.Item>
            </List.Root>
          </List.Item>

          <List.Item>
            🎓{' '}
            <strong>
              Idea 2 Impact Course (Improving Online Learning for Medical
              Technology Innovation)
            </strong>
            <List.Root>
              <List.Item>
                Enhanced the usability, engagement, and instructional
                effectiveness of an online course designed to guide medical
                technology innovators through the process of bringing
                research-based solutions to market.
              </List.Item>
              <List.Item>
                Applied learner-centered design principles to restructure
                content, improve engagement, and make complex commercialization
                processes clearer.
              </List.Item>
            </List.Root>
          </List.Item>
        </List.Root>

        <Heading as="h2" size="lg" mb={3}>
          Why It Matters
        </Heading>
        <Text fontSize="md" mb={4}>
          Research is most valuable when it can be understood, acted upon, and
          applied in real-world contexts. By structuring complex ideas into
          accessible learning experiences, these projects help researchers and
          innovators move from theory to impact—whether that means designing
          better studies, securing funding, or bringing new medical technologies
          to the world.
        </Text>
      </Box>
    </>
  );
}

/*
    <Head>
        <title>/Mnt/Data/Portfolio_Entries/Portfolio/Research To Impact Instructional Design/Page | Portfolio</title>
        <meta name="description" content="Explore my instructional design portfolio and learning solutions." />
    </Head>
    

Bridging Research, Instructional Design, and Stakeholder Needs

Complex research and innovation hold enormous potential, but they’re only impactful when researchers, educators, and stakeholders can understand, apply, and act on them. My work focuses on translating technical research into structured learning tools that help researchers navigate study design, write grant proposals, and bring innovations to market. By breaking down complexity and structuring content for clarity, I help researchers move from ideas to execution with confidence.

Key Projects

📊 PCOR Decision Tool (Helping Researchers Navigate Study Design Choices)
- Translated dense, complex research methodologies into an interactive decision-making tool that guides researchers through structured study design choices.
- Created a step-by-step adaptive format, ensuring that users see only the most relevant information based on their specific research needs.
- Provided a clear, structured pathway for early-career researchers, reducing confusion and supporting better decision-making in Comparative Effectiveness Research (CER).

📖 PCOR Studies Workbook (Guiding Grant Writers Through Proposal Development)
- Addressed a major barrier to grant writing—researchers often struggle to start because of time constraints and the overwhelming nature of proposals.
- Designed a structured, step-by-step workbook that breaks applications into manageable tasks.
- Used a question-based approach to help learners gradually build full proposal sections, making the writing process more approachable and time-efficient.

🎓 Idea 2 Impact Course (Improving Online Learning for Medical Technology Innovation)
- Enhanced the usability, engagement, and instructional effectiveness of an online course designed to guide medical technology innovators through the process of bringing research-based solutions to market.
- Applied learner-centered design principles to restructure content, improve engagement, and make complex commercialization processes clearer.

Why It Matters

Research is most valuable when it can be understood, acted upon, and applied in real-world contexts. By structuring complex ideas into accessible learning experiences, these projects help researchers and innovators move from theory to impact—whether that means designing better studies, securing funding, or bringing new medical technologies to the world.

*/
