import Head from 'next/head';
import { Box, Heading, Text } from '@chakra-ui/react';
import { List } from '@chakra-ui/react';

export default function ProjectPage() {
  return (
    <>
      <Head>
        <title>
          Microlearning Series for Digital Literacy Skills | Digital Learning
          Portfolio
        </title>
        <meta
          name="description"
          content="Explore how microlearning strategies enhanced digital literacy skills for individuals from underrepresented communities."
        />
      </Head>
      <Box as="main" maxW="800px" mx="auto" p={6}>
        <Heading as="h1" size="xl" mb={4}>
          📎 Microlearning Series for Digital Literacy Skills
        </Heading>
        <Text fontSize="lg" color="gray.600" mb={4}>
          For many, engaging with online platforms is second nature—but for
          individuals with low digital literacy, it can be a barrier that comes
          with unexpected risks. When the All of Us Research Program expanded
          its digital-first approach, they also recognized a responsibility:
          providing accessible training to help individuals navigate digital
          spaces safely.
        </Text>

        <Heading as="h2" size="lg" mb={3}>
          Background & Design Challenge
        </Heading>
        <List.Root fontSize="md" mb={4}>
          <List.Item>
            📍 How do you enable digital participation for individuals who lack
            the digital literacy skills to engage with an online platform?
          </List.Item>
          <List.Item>
            ❌ Many individuals lacked the skills to safely engage online.
          </List.Item>
          <List.Item>❌ Without support, participation was at risk.</List.Item>
        </List.Root>

        <Heading as="h2" size="lg" mb={3}>
          The Solution: A Microlearning Series Built for Low-Digital-Literacy
          Learners
        </Heading>
        <List.Root fontSize="md" mb={4}>
          <List.Item>
            🎯 Managed all aspects of instructional design from concept to
            execution.
          </List.Item>
          <List.Item>
            🎯 Ensured 508-compliance, multilingual accessibility, and cultural
            relevance.
          </List.Item>
          <List.Item>
            🎯 Collaborated with SMEs, community organizations, and program
            leadership.
          </List.Item>
        </List.Root>

        <Heading as="h2" size="lg" mb={3}>
          🧠 Instructional Design Approach
        </Heading>
        <List.Root fontSize="md" mb={4}>
          <List.Item>
            ✅ Helper Enabled – Designed additional instructions for librarians
            or helpers assisting learners.
          </List.Item>
          <List.Item>
            ✅ Simple Navigation – Kept all navigation within the bounds of the
            material to ensure independent engagement.
          </List.Item>
          <List.Item>
            ✅ Microlearning Modules – Short, digestible learning activities
            accessible on any device.
          </List.Item>
          <List.Item>
            ✅ Follow-along Interactive Video – Screen capture videos with
            step-by-step, pause-and-interact functionality.
          </List.Item>
          <List.Item>
            ✅ Scenario-Based Learning – Interactive case studies providing
            real-world digital literacy challenges.
          </List.Item>
          <List.Item>
            ✅ Multilingual & Culturally Responsive Content – Available in
            English, Spanish, Vietnamese, Korean, Chinese, and Arabic.
          </List.Item>
          <List.Item>
            ✅ 508-Compliance & Accessibility – Screen reader-friendly
            formatting and simplified navigation.
          </List.Item>
        </List.Root>

        <Heading as="h2" size="lg" mb={3}>
          🏗️ Implementation & Delivery
        </Heading>
        <List.Root fontSize="md" mb={4}>
          <List.Item>
            🧪 Pilot Phase – Tested with staff & community partners, refined
            based on feedback.
          </List.Item>
          <List.Item>
            🚀 Full-Scale Rollout – Integrated into the NAPC website for open
            access.
          </List.Item>
          <List.Item>
            🧰 Technology & Tools Used – H5P for e-learning, Google Analytics
            for learner engagement tracking.
          </List.Item>
        </List.Root>

        <Heading as="h2" size="lg" mb={3}>
          🎓 Results & Impact
        </Heading>
        <List.Root fontSize="md" mb={4}>
          <List.Item>
            📊 Increased accessibility for learners with low digital literacy.
          </List.Item>
          <List.Item>
            🔬 Ensured equitable access to digital learning for underrepresented
            communities.
          </List.Item>
        </List.Root>

        <Heading as="h2" size="lg" mb={3}>
          🥡 Key Takeaways
        </Heading>
        <List.Root fontSize="md" mb={4}>
          <List.Item>🧩 Step-by-step interactive branching video.</List.Item>
          <List.Item>
            🧩 Innovative instructional strategies for low-tech learners using a
            high-tech platform.
          </List.Item>
          <List.Item>
            🧩 Multilingual and culturally relevant content increased
            accessibility.
          </List.Item>
        </List.Root>
      </Box>
    </>
  );
}

/*
    <Head>
        <title>/Mnt/Data/Portfolio_Entries/Portfolio/Digital Literacy Microlearning/Page | Portfolio</title>
        <meta name="description" content="Explore my instructional design portfolio and learning solutions." />
    </Head>
    

export default ProjectDetails;

📎 Microlearning Series for Digital Literacy Skills 

A Case Study in Microlearning for Low-Digital-Literacy Learners

Role: Instructional Designer

Partners: All of Us Research Program, National Library of Medicine

Audience: People from communities underrepresented in medical research

Tags: Microlearning, Scenario-Based, Interactivity, Learner-Centered, Multilingual, Accessibility, H5P, Community-based, Asynchronous, 



Bridging the Digital Divide for Research Participation—Safely

For many, engaging with online platforms is second nature—but for individuals with low digital literacy, it can be a barrier that comes with unexpected risks. When the All of Us Research Program expanded its digital-first approach, they also recognized a responsibility: providing accessible training to help individuals navigate digital spaces safely.

Background & Design Challenge

📍 How do you enable digital participation for individuals who lack the digital literacy skills to engage with an online platform?

The All of Us Research Program is building one of the largest health databases in history to advance precision medicine. To achieve this, the program depends on a digital platform for participant engagement, including informed consent. However, a fundamental challenge emerged:

❌ Many individuals lacked the skills to safely engage online.
For many potential participants—especially those from communities historically underrepresented in medical research—the program’s digital-first approach created an unintentional barrier to access. Many individuals lacked experience navigating web-based forms, managing digital consent, or recognizing online security risks.

❌ Without support, participation was at risk.
Potential participants struggled to complete onboarding steps, access research updates, and safeguard personal information in digital spaces.

To mitigate this barrier, All of Us partnered with IDstudio at the National All of Us Program Center (NAPC) to design a learner-centered solution that would make digital participation more accessible and safe. However, rather than distributing this training directly through participant channels, the program made it publicly available so that staff could direct learners to it as a resource.

The Solution: A Microlearning Series Built for Low-Digital-Literacy Learners

A flexible, self-guided microlearning series was developed to help individuals build digital skills at their own pace. By integrating interactive videos, scenario-based learning, and multilingual resources, this solution empowered learners to safely and confidently engage with digital tools and online health resources—ensuring that lack of technical experience didn’t stand in the way of health equity or personal security.
✏️ My Role

🎯 Managed all aspects of instructional design from concept to execution🎯 Ensured 508-compliance, multilingual accessibility, and cultural relevance🎯 Collaborated with SMEs, community organizations, and program leadership

🧠 Instructional Design Approach

To ensure digital literacy training was both effective and accessible, I used a learner-centered approach to address key barriers while maximizing engagement.

✅ Helper Enabled

Working with public librarians, who are an important resource for people with low digital literacy, my design called for “helper” instructions to appear alongside the plain language instructions aimed at the learner. These additional instructions provided context and support for a person with higher digital literacy to help the learner get started.  

✅ Simple Navigation

To reduce the cognitive load for learners less confident using web browsers, all of the navigation within the learning material was included within the bounds of the material itself. Even if the learner needed someone else’s help getting to the content, they would be able to engage with the content independently. 

✅ Microlearning ModulesTo accommodate low-digital-literacy users, I developed short, digestible learning activities that can be accessed easily on any device with a simple web address. Learners can find the exact skills they want to build and engage with the content at their own pace.

✅ Follow-along Interactive Video

To reduce the cognitive load when learning more complex digital skills, some modules contained an interactive video of a screen capture demonstrating that skill. The video automatically paused at each step, allowing the learner to complete the action before continuing. When a step required making a choice, the video branched to precisely guide the learner. This method simplified complex skills by allowing learners to focus on each step at their own pace.

   

✅ Scenario-Based LearningTo reinforce practical application and build confidence, I incorporated real-world interactive case studies. Learners received immediate feedback while practicing digital skills in response to common digital challenges.

✅ Multilingual & Culturally Responsive ContentRecognizing the diversity of participants, I ensured the training was available in multiple languages(English, Spanish, Vietnamese, Korean, Chinese, and Arabic). I worked with stakeholders and community representatives to localize examples to make the content relevant to different communities.

✅ 508-Compliance & AccessibilityIn addition to the basic 508 compliance required for federal projects, I designed additional levels of simplified navigation, screen reader-friendly formatting, and visual elements usable by low-vision learners. These features ensured that learners of all ages and abilities have equitable access to all learning activities. 

By integrating these strategies, I developed a training experience that was accessible, engaging, and adaptable to the diverse needs of participants.

🏗️ Implementation & Delivery

🧪 Pilot Phase:

Tested with staff & community partners in diverse regions

Adjusted based on user feedback and engagement analytics

🚀 Full-Scale Rollout:

Integrated into the NAPC 3️⃣ website (instead of the LMS) for open and easy  access 

Google Analytics used to track learner engagement

🧰 Technology & Tools Used:💻 H5P for e-learning development📊 Google Analytics to measure learner engagement

🎓 Results & Impact



🥡  Key Takeaways

🧩 Step-by-step interactive branching video 

🧩 Innovative instructional strategies for low-tech learners using a high-tech platform 

🧩 Multilingual and culturally relevant content increased accessibility

Popover Content



1️⃣ All of Us Research Program

The [All of Us Research Program](https://allofus.nih.gov/about/program-overview) is an NIH initiative designed to build one of the largest and most diverse health databases in history. By gathering health data from one million+ participants reflecting the diversity of the United States, the program aims to advance precision medicine, ensuring more personalized and effective healthcare. 

✅ Why It Matters:

The diversity of the participants allows researchers to better understand how lifestyle, environment, and genetics impact health--leading to better prevention and treatment strategies tailored to individuals. 



 

2️⃣ IDstudio at the NAPC

The IDstudio at the NNLM All of Us Program Center (NAPC) is a cross-functional instructional design team specializing in developing scalable, learner-centered education and training programs with measurable impact.

The NAPC is a multi-institutional program that coordinates engagement and learning activities offered by the Network of the National Library of Medicine (NNLM) in support of the NIH All of Us Research Program. 

Housed at the University of Pittsburgh, the IDstudio has been led by Dr. Amos Glenn since 2018.



3️⃣ NAPC

The NNLM All of Us Program Center

The NAPC is a multi-institutional program that coordinates engagement and learning activities offered by the [Network of the National Library of Medicine](https://www.nnlm.gov/) (NNLM) in support of the NIH All of Us Research Program. There are two functional areas for the NNLM All of Us Program: Training and Engagement. The Training functional area is supported primarily by the University of Pittsburgh, and the Engagement functional area is supported primarily by the University of Iowa. Together, we coordinate our efforts to ensure adequate support for infrastructure and technology, program development, communications, and evaluation and reporting. 
// */
