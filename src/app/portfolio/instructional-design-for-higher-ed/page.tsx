import Head from 'next/head';
import { Box, Heading, Text } from '@chakra-ui/react';
import { List } from '@chakra-ui/react';

export default function ProjectPage() {
  return (
    <>
      <Head>
        <title>
          Instructional Design for Higher Ed & Faculty Support | Digital
          Learning Portfolio
        </title>
        <meta
          name="description"
          content="Explore instructional design strategies that optimize course materials for clarity, engagement, and accessibility in higher education."
        />
      </Head>
      <Box as="main" maxW="800px" mx="auto" p={6}>
        <Heading as="h1" size="xl" mb={4}>
          Instructional Design for Higher Ed & Faculty Support
        </Heading>
        <Text fontSize="lg" color="gray.600" mb={4}>
          Faculty and instructors are experts in their fields, but they don’t
          always have the time or resources to optimize their course materials
          for clarity, engagement, and accessibility. My work in higher
          education instructional design has focused on making instructional
          content clearer, easier to use, and more effective for both
          instructors and students. Through standardized course guides, improved
          instructional materials, and redesigned learning platforms, I have
          helped institutions streamline course delivery, enhance learning
          experiences, and improve usability for faculty and students alike.
        </Text>

        <Heading as="h2" size="lg" mb={3}>
          Key Projects
        </Heading>
        <List.Root fontSize="md" mb={4}>
          <List.Item>
            📖{' '}
            <strong>
              Instructor Guides Project (Standardizing Course Delivery for
              Rotating Faculty)
            </strong>
            <List.Root>
              <List.Item>
                Developed structured instructor guides to help faculty
                transition seamlessly into courses with multiple rotating
                instructors.
              </List.Item>
              <List.Item>
                Observed live courses to document timing, instructional
                strategies, and learning activities, creating a consistent
                roadmap for future instructors.
              </List.Item>
              <List.Item>
                Ensured guides included learning objectives, activity
                breakdowns, logistics, and student expectations, making course
                prep more efficient and standardized.
              </List.Item>
            </List.Root>
          </List.Item>

          <List.Item>
            📊{' '}
            <strong>
              Slide Redesign (Improving Instructional Clarity & Engagement in
              Online Learning)
            </strong>
            <List.Root>
              <List.Item>
                Redesigned instructional slide decks to improve readability,
                engagement, and cognitive load management for online and blended
                courses.
              </List.Item>
              <List.Item>
                Applied visual hierarchy, concise messaging, and multimedia
                integration to create materials that supported better student
                comprehension.
              </List.Item>
              <List.Item>
                Ensured slides aligned with evidence-based learning design
                principles, making complex concepts easier to absorb.
              </List.Item>
            </List.Root>
          </List.Item>

          <List.Item>
            🎓{' '}
            <strong>
              ICRE LMS (Moodle Design & Management) (Enhancing Usability &
              Engagement in Learning Platforms)
            </strong>
            <List.Root>
              <List.Item>
                Led a usability-focused redesign of a higher ed learning
                management system (LMS) to make navigation more intuitive and
                accessible.
              </List.Item>
              <List.Item>
                Streamlined the structure of course pages, resource
                organization, and student workflows, reducing friction in online
                learning experiences.
              </List.Item>
              <List.Item>
                Improved faculty training and onboarding materials to ensure
                instructors could effectively use the platform without
                unnecessary complexity.
              </List.Item>
            </List.Root>
          </List.Item>
        </List.Root>

        <Heading as="h2" size="lg" mb={3}>
          Why It Matters
        </Heading>
        <Text fontSize="md" mb={4}>
          By making higher education instructional content more accessible,
          organized, and engaging, I have helped faculty deliver courses more
          effectively while enhancing student learning outcomes. Whether through
          better course materials, improved LMS usability, or standardized
          instructional guides, these projects demonstrate my ability to
          optimize instructional content for clarity, efficiency, and impact.
        </Text>
      </Box>
    </>
  );
}

/*
    <Head>
        <title>/Mnt/Data/Portfolio_Entries/Portfolio/Instructional Design For Higher Ed/Page | Portfolio</title>
        <meta name="description" content="Explore my instructional design portfolio and learning solutions." />
    </Head>
    

Instructional Design for Higher Ed & Faculty Support

Faculty and instructors are experts in their fields, but they don’t always have the time or resources to optimize their course materials for clarity, engagement, and accessibility. My work in higher education instructional design has focused on making instructional content clearer, easier to use, and more effective for both instructors and students. Through standardized course guides, improved instructional materials, and redesigned learning platforms, I have helped institutions streamline course delivery, enhance learning experiences, and improve usability for faculty and students alike.

Key Projects

📖 Instructor Guides Project (Standardizing Course Delivery for Rotating Faculty)
- Developed structured instructor guides to help faculty transition seamlessly into courses with multiple rotating instructors.
- Observed live courses to document timing, instructional strategies, and learning activities, creating a consistent roadmap for future instructors.
- Ensured guides included learning objectives, activity breakdowns, logistics, and student expectations, making course prep more efficient and standardized.

📊 Slide Redesign (Improving Instructional Clarity & Engagement in Online Learning)
- Redesigned instructional slide decks to improve readability, engagement, and cognitive load management for online and blended courses.
- Applied visual hierarchy, concise messaging, and multimedia integration to create materials that supported better student comprehension.
- Ensured slides aligned with evidence-based learning design principles, making complex concepts easier to absorb.

🎓 ICRE LMS (Moodle Design & Management) (Enhancing Usability & Engagement in Learning Platforms)
- Led a usability-focused redesign of a higher ed learning management system (LMS) to make navigation more intuitive and accessible.
- Streamlined the structure of course pages, resource organization, and student workflows, reducing friction in online learning experiences.
- Improved faculty training and onboarding materials to ensure instructors could effectively use the platform without unnecessary complexity.

Why It Matters

By making higher education instructional content more accessible, organized, and engaging, I have helped faculty deliver courses more effectively while enhancing student learning outcomes. Whether through better course materials, improved LMS usability, or standardized instructional guides, these projects demonstrate my ability to optimize instructional content for clarity, efficiency, and impact.
*/
