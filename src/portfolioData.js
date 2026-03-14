export const profile = {
  name: 'Hanna Sherin',
  shortName: 'Hanna',
  title: 'Software developer focused on programming, clean logic, and dependable systems.',
  longTitle:
    'I build software with strong problem-solving foundations, practical interfaces, and backend logic that stays readable as systems grow.',
  location: 'Calicut, Kerala, India',
  email: 'hannasherin7110@gmail.com',
  phone: '+91 95394 97110',
  intro:
    'I like software that feels thoughtful on the surface and disciplined underneath. I am especially interested in programming fundamentals, data structures, algorithmic thinking, and systems that remain clear as they scale.',
  summary:
    'MCA graduate from 2025 with hands-on experience in Java, C, React, Node.js, REST APIs, MySQL, MongoDB, and collaborative Git workflows. I currently work on backend-heavy client systems while building stronger programming-focused projects alongside that work.',
  personalStatement:
    'My goal is to build software that is both useful and dependable. That means clear logic, readable architecture, and systems that continue to make sense when the product gets more complex.',
  links: [
    { label: 'GitHub', href: 'https://github.com/Hannasherin7' },
    { label: 'LinkedIn', href: 'http://linkedin.com/in/hanna-sherin916854272' },
    { label: 'Email', href: 'mailto:hannasherin7110@gmail.com' },
  ],
}

export const siteIntro = {
  kicker: 'Developer journal',
  message:
    'A multi-page space focused on development work, product thinking, and the systems behind the interface.',
}

export const highlights = [
  {
    title: 'Current role',
    text: 'Building backend features and business logic for active client systems since May 2025.',
  },
  {
    title: 'Main stack',
    text: 'Java, C, React, Node.js, MySQL, MongoDB, REST APIs, and Git-based workflows.',
  },
  {
    title: 'Working style',
    text: 'Practical, collaborative, and strongly focused on programming clarity, reliability, and maintainable structure.',
  },
]

export const featuredNotes = [
  {
    label: 'What I care about',
    title: 'Interfaces should feel calm.',
    text: 'I prefer layouts that guide attention naturally instead of overwhelming users with too much at once.',
  },
  {
    label: 'How I build',
    title: 'Backend logic should stay readable.',
    text: 'As products scale, code quality starts to matter more than feature count. I value maintainable structure.',
  },
  {
    label: 'Where I fit best',
    title: 'Teams shipping real products.',
    text: 'The work I enjoy most is where design, development, and business requirements need to align carefully.',
  },
]

export const experience = [
  {
    role: 'PHP Laravel Developer',
    company: 'Bpract Software Solutions',
    period: 'May 2025 - Present',
    description:
      'Developing backend functionality using PHP and Laravel, implementing business logic, working with database-driven systems, and collaborating in agile development cycles.',
    bullets: [
      'Build and maintain backend features in PHP and Laravel for live client applications.',
      'Work on live client systems with complex database and business-logic dependencies.',
      'Collaborate with teams through sprint-based delivery and version control workflows.',
    ],
  },
  {
    role: 'MERN Stack Developer Intern',
    company: 'Ipix Technologies Pvt Ltd',
    period: 'February 2025 - May 2025',
    description:
      'Built and maintained scalable web applications using the MERN stack, handled API integration tasks, fixed bugs, and gained practical project experience in a collaborative development environment.',
    bullets: [
      'Contributed to React-based UI implementation.',
      'Worked with REST APIs and full-stack debugging.',
      'Improved development discipline through real-time project delivery.',
    ],
  },
]

export const education = [
  {
    degree: 'Master of Computer Application',
    school: 'FISAT, Angamaly',
    period: 'May 2025',
    detail: 'CGPA: 8.27',
  },
]

export const skills = {
  programming: ['Java', 'C', 'JavaScript', 'Python'],
  frontend: ['React.js', 'HTML5', 'CSS3', 'Bootstrap'],
  backend: ['PHP', 'Node.js', 'Express.js', 'Spring Boot'],
  databases: ['MySQL', 'MongoDB', 'SQL'],
  tools: ['Git', 'GitHub', 'VS Code', 'Postman'],
  foundations: ['Data Structures', 'Algorithms', 'Problem Solving', 'REST API', 'MVC Architecture'],
}

export const projects = [
  {
    slug: 'dsa-visualizer',
    name: 'DSA Visualizer',
    eyebrow: 'Java + React project',
    stack: ['Java', 'Spring Boot', 'React', 'Data Structures', 'Algorithms'],
    summary:
      'An interactive learning tool that visualizes core algorithms and data structures step by step using a React frontend and a Java Spring Boot backend.',
    challenge:
      'I wanted a project that felt closer to programming-focused software engineering than a standard CRUD build, while still being visual and easy to explain.',
    solution:
      'I designed the system so the Java backend generates structured execution steps and the React frontend renders those states for bubble sort, binary search, stack, queue, circular queue, and linked list walkthroughs.',
    outcome:
      'The project highlights my interest in programming fundamentals, problem solving, and building software that can explain its own logic clearly.',
    features: [
      'Step-by-step algorithm and data structure visualization',
      'Java Spring Boot backend with dedicated execution endpoints',
      'React interface for switching structures and walking through each step',
      'Built-in explanation layer for what each algorithm does and why it matters',
    ],
  },
  {
    slug: 'ecoharvest',
    name: 'EcoHarvest',
    eyebrow: 'ML-enhanced project',
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'Python'],
    summary:
      'An e-commerce platform connecting farmers directly with consumers, with machine-learning-assisted crop yield prediction built into the broader product experience.',
    challenge:
      'The project needed to combine commerce, agricultural information, user engagement, and predictive intelligence in one system without making the experience feel fragmented.',
    solution:
      'I approached it as a multi-layered product with separate user actions for ordering, crop intelligence, recipes, and storytelling, all supported through a MERN foundation and a Python-based machine learning module for crop yield prediction.',
    outcome:
      'The result is a more ambitious product that shows my ability to connect application workflows with machine learning support and feature coordination.',
    features: [
      'Farmer-to-consumer product marketplace',
      'Order tracking workflows',
      'Machine-learning-powered crop yield prediction',
      'Recipe sharing and farmer blog content',
    ],
  },
  {
    slug: 'apartment-management-system',
    name: 'Apartment Management System',
    eyebrow: 'MERN project',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    summary:
      'A web application for apartment residents and administrators to manage notices, complaints, events, and user information through one shared platform.',
    challenge:
      'The product had to serve two kinds of users, residents and admins, while keeping sensitive information organized and actions easy to understand.',
    solution:
      'I built role-oriented flows with React and a Node/Express backend so that notices, complaints, and operational updates could live in one coherent system.',
    outcome:
      'The project reflects my ability to think in terms of real operational workflows instead of isolated screens.',
    features: [
      'Resident and admin management flows',
      'Notice, event, and complaint handling',
      'Secure data interaction',
      'Centralized apartment communication',
    ],
  },
  {
    slug: 'fitness-tracker',
    name: 'Fitness Tracker',
    eyebrow: 'MERN build',
    stack: ['MongoDB', 'Express', 'React', 'Node.js'],
    summary:
      'A fitness tracking application that helps users log workouts, monitor calories, set goals, and visualize progress.',
    challenge:
      'The product needed to turn personal fitness data into something motivating and readable rather than just another form-based dashboard.',
    solution:
      'I designed around regular user habits like logging workouts and checking progress, then connected those patterns to data views and tracking features inside the MERN stack.',
    outcome:
      'This project demonstrates my interest in products where ongoing user engagement matters as much as basic feature delivery.',
    features: [
      'Workout logging',
      'Goal setting',
      'Calorie monitoring',
      'Progress visualization',
    ],
  },
  {
    slug: 'fisat-college-bus-pass-booking',
    name: 'FISAT College Bus Pass Booking',
    eyebrow: 'MERN project',
    stack: ['MongoDB', 'Express', 'React', 'Node.js'],
    summary:
      'An online system for FISAT students to book, cancel, and manage bus passes with admin control and secure access.',
    challenge:
      'Transportation workflows are small but operationally sensitive, so the system had to make routine actions quick while still handling admin control cleanly.',
    solution:
      'I modeled it as a straightforward service flow: secure login, clear booking actions, cancellation support, and a separate layer for administrative oversight.',
    outcome:
      'The project highlights my ability to build useful service-based applications around practical day-to-day needs.',
    features: [
      'Bus pass booking and cancellation',
      'Admin controls',
      'Secure user login',
      'Student self-service workflow',
    ],
  },
]

export const certifications = [
  'SQL and Relational Database from IBM',
  'Learn Java Programming Beginner to Master from Udemy',
  'Introduction to Data Science from Infosys Springboard',
]

export const extras = {
  traits: [
    'Time management',
    'Problem solving',
    'Team collaboration',
    'Quick learner',
    'Positive in changing situations',
  ],
  volunteering: ['Guides and Scout', 'National Service Scheme'],
  interests: ['Photography', 'Gardening', 'Drawing'],
  activities: ['Volunteering', 'Social club member', 'Cultural events'],
}

export const projectLinks = projects.map((project) => ({
  name: project.name,
  slug: project.slug,
  href: `/projects/${project.slug}`,
}))
