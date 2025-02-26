import Head from 'next/head';
import { Box, Heading, Text } from '@chakra-ui/react';
import { List } from '@chakra-ui/react';

export default function ProjectPage() {
  return (
    <>
      <Head>
        <title>
          Gamified and Personalized Statistics Tutor | Digital Learning
          Portfolio
        </title>
        <meta
          name="description"
          content="Explore how gamified, adaptive learning strategies transformed statistics education into an engaging and personalized experience."
        />
      </Head>
      <Box as="main" maxW="800px" mx="auto" p={6}>
        <Heading as="h1" size="xl" mb={4}>
          📌 Gamified and Personalized Statistics Tutor
        </Heading>
        <Text fontSize="lg" color="gray.600" mb={4}>
          Statistics problems are often multi-step and complex, where a single
          mistake can send students down the wrong path with no way to recover.
          Traditional problem sets offer no immediate help, leaving learners
          stuck and frustrated. This project introduced an adaptive, game-based
          tutor that identified misconceptions in real time, provided targeted
          hints, and adjusted feedback based on student needs—ensuring students
          stayed engaged while developing true mastery of statistical
          problem-solving.
        </Text>

        <Heading as="h2" size="lg" mb={3}>
          Background & Design Challenge
        </Heading>
        <List.Root fontSize="md" mb={4}>
          <List.Item>
            🔹 How can we design an instructional system that keeps learners
            engaged while also providing personalized, real-time feedback to
            improve problem-solving skills?
          </List.Item>
          <List.Item>
            Traditional problem sets often fail to capture learners’ interest
            and provide no guidance when students struggle with complex,
            multi-step problems.
          </List.Item>
          <List.Item>
            The transition to an online Biostatistics course created an
            opportunity to develop an adaptive, interactive learning experience.
          </List.Item>
        </List.Root>

        <Heading as="h2" size="lg" mb={3}>
          🧠 Solution & Instructional Design Approach
        </Heading>
        <List.Root fontSize="md" mb={4}>
          <List.Item>
            ✅ Escape Room-Themed Probability Challenge – Students solved a
            probability puzzle to unlock a room, with hints guiding them through
            the problem-solving process.
          </List.Item>
          <List.Item>
            ✅ Treasure Hunt Adventure in the Perth Zoo – Probability problems
            were framed as a treasure hunt, providing step-by-step guidance as
            students progressed.
          </List.Item>
          <List.Item>
            ✅ Personalized, Adaptive Feedback – The tutor analyzed learner
            responses and provided tailored feedback based on common
            misconceptions.
          </List.Item>
          <List.Item>
            ✅ Targeted Instruction – The system adjusted difficulty levels and
            instructional depth to prevent unnecessary frustration.
          </List.Item>
        </List.Root>

        <Heading as="h2" size="lg" mb={3}>
          🏗️ Implementation & Delivery
        </Heading>
        <List.Root fontSize="md" mb={4}>
          <List.Item>
            🧪 Pilot Phase – Tested with students, refined based on learner
            feedback and analytics.
          </List.Item>
          <List.Item>
            🚀 Full-Scale Rollout – Integrated into the Institute for Clinical
            Research Education’s learning platform.
          </List.Item>
          <List.Item>
            ✔ SCORM-compliant learning objects ensured LMS compatibility.
          </List.Item>
        </List.Root>

        <Heading as="h2" size="lg" mb={3}>
          🎓 Results & Impact
        </Heading>
        <List.Root fontSize="md" mb={4}>
          <List.Item>
            📊 Increased learner engagement through gamification and interactive
            storytelling.
          </List.Item>
          <List.Item>
            💡 Improved problem-solving efficiency with real-time, targeted
            feedback.
          </List.Item>
          <List.Item>
            🎯 Enhanced adaptive learning, ensuring students received
            step-by-step guidance when needed.
          </List.Item>
        </List.Root>

        <Heading as="h2" size="lg" mb={3}>
          🥡 Key Takeaways
        </Heading>
        <List.Root fontSize="md" mb={4}>
          <List.Item>
            🧩 Gamification enhances motivation while reinforcing complex
            problem-solving skills.
          </List.Item>
          <List.Item>
            🧩 Adaptive feedback ensures real-time learning support tailored to
            individual errors.
          </List.Item>
          <List.Item>
            🧩 Personalized instructional design optimizes efficiency,
            preventing unnecessary cognitive overload.
          </List.Item>
        </List.Root>
      </Box>
    </>
  );
}

/*
    <Head>
        <title>/Mnt/Data/Portfolio_Entries/Portfolio/Gamified Statistics Tutor/Page | Portfolio</title>
        <meta name="description" content="Explore my instructional design portfolio and learning solutions." />
    </Head>
    

📌 Gamified and Personalized Statistics TutorA Case Study in Interactive and Adaptive Learning Design

Role: Instructional DesignerPartners: Institute for Clinical Research EducationAudience: Students enrolled in the online Biostatistics courseTags: Gamification, Adaptive Learning, SCORM, Personalized Feedback, Data-Driven Instruction, Real-Time Learning Support

From Frustration to Mastery: A Gamified, Adaptive Approach to Learning Statistics

Statistics problems are often multi-step and complex, where a single mistake can send students down the wrong path with no way to recover. Traditional problem sets offer no immediate help, leaving learners stuck and frustrated. This project introduced an adaptive, game-based tutor that identified misconceptions in real time, provided targeted hints, and adjusted feedback based on student needs—ensuring students stayed engaged while developing true mastery of statistical problem-solving.

Background & Design Challenge

In the Institute for Clinical Research Education’s Biostatistics course, students are assigned problem sets to practice applying what they learn. When the ICRE moved its Biostatistics course online, it created an opportunity to go beyond simply digitizing assignments.

Traditional problem sets often fail to capture learners’ interest and provide no guidance when students struggle with complex, multi-step problems. This raised a critical question:

🔹 How can we design an instructional system that keeps learners engaged while also providing personalized, real-time feedback to improve problem-solving skills?

To address this challenge, I designed an interactive, gamified statistics tutor as part of the ICRE’s online Biostatistics course. This system provided two immersive problem sets that transformed statistical problem-solving into motivating, personalized challenges—guiding students through real-time feedback and adaptive learning pathways to reinforce understanding and build confidence.
✏️ My Role

🎯 Designed and developed an interactive, SCORM-compliant learning system🎯 Implemented real-time, adaptive feedback based on learner inputs🎯 Integrated gamification elements to improve engagement and motivation🎯 Aligned instructional strategies with research-backed principles of learning

🎯 Work to SME to break problem sets into knowledge component-based  steps

🧠 Solution & Instructional Design Approach

To create an engaging and effective learning experience, I structured the tutor around game mechanics, real-time adaptive feedback, and targeted learning support.

✅ Escape Room-Themed Probability ChallengeOne problem set placed students in a locked room with a numbered keypad securing the exit. The unlock code was hidden within a conditional probability problem. Learners had to correctly solve the problem to escape. If they struggled, the tutor provided step-by-step hints and feedback, guiding them toward the correct solution.

✅ Treasure Hunt Adventure in the Perth ZooAnother problem set framed probability problems as a treasure hunt, where solving calculations revealed map coordinates for the next clue. The game guided learners through increasingly complex probability problems, allowing them to track progress and make real-time corrections.

✅ Personalized, Adaptive FeedbackThe SCORM-compliant tutor analyzed every learner input and provided customized feedback based on response patterns:

If an incorrect answer was given, the tutor explained why it was incorrect.

If the system detected recurring mistakes, it addressed likely misconceptions causing errors.

Learners received step-by-step breakdowns of the problem-solving process only when needed, ensuring efficient use of time.

✅ Targeted Instruction for Efficient LearningA key challenge in probability problem-solving is the potential for multiple failure points across dozens of steps. This system prevented unnecessary frustration by:

Identifying specific mistakes so learners didn’t have to review concepts they already understood.

Allowing students to “escape” the problem set as soon as they demonstrated mastery.

Adapting the depth of instruction based on the complexity of the learner’s error.

🏗️ Implementation & Delivery

🧪 Pilot Phase:✔ Tested with students in the online Biostatistics course.✔ Gathered learner feedback and performance analytics to refine problem sequences.

🚀 Full-Scale Rollout:✔ Integrated into the Institute for Clinical Research Education’s learning platform.✔ Packaged as SCORM-compliant learning objects, ensuring LMS compatibility.✔ Optimized for asynchronous learning, enabling students to engage at their own pace.

🎓 Results & Impact

📊 Increased learner engagement by incorporating interactive storytelling and game mechanics.💡 Improved problem-solving efficiency, reducing frustration while maintaining conceptual rigor.🎯 Enhanced adaptive feedback, ensuring students received real-time, targeted support to correct misconceptions.🔢 More effective skill mastery, allowing students to move through learning objectives efficiently while ensuring robust understanding.

🥡 Key Takeaways

🧩 Gamification enhances learner motivation while reinforcing complex problem-solving skills.🧩 Adaptive feedback ensures targeted, real-time learning support tailored to individual errors.🧩 Personalized instructional design optimizes efficiency, preventing unnecessary cognitive overload.

This portfolio entry demonstrates my expertise in designing engaging, adaptive learning experiences that blend instructional rigor with innovative game mechanics. By featuring it in my portfolio, I highlight:

✅ Gamified and scenario-based instructional design expertise✅ Proficiency in real-time adaptive learning and SCORM-compliant course development✅ Ability to create interactive, data-driven learning solutions for complex subjects✅ Commitment to making quantitative subjects more accessible and engaging for diverse learners

This case study pairs well with my Digital Literacy and Researcher Ethics Training, showcasing my ability to design interactive, problem-based instructional solutions that promote deep learning.

*/
