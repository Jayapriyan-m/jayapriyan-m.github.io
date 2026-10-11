// ─────────────────────────────────────────────────────────────
// All editable content lives here. Components only render it.
// ─────────────────────────────────────────────────────────────
export const asset = (p) => import.meta.env.BASE_URL + p

export const site = {
  name: 'Jayapriyan M',
  alias: 'JP',
  title: 'Full Stack Developer',
  stack: ['React.js', 'Node.js', 'ASP.NET', 'SQL Server', 'AI-Assisted Development'],
  location: 'Chennai, Tamil Nadu, India',
  intro:
    'I build web applications and backend services: React.js interfaces, Node.js and ASP.NET APIs, and SQL Server underneath. I integrate APIs, debug across the stack, and use Claude daily to understand code and ship faster.',
  photo: 'images/profile.jpg', // ← replace the file, or change this one value
  photoAlt: 'Portrait of Jayapriyan M wearing sunglasses and a light denim shirt, with green hills behind',
  resume: 'resume.pdf', // ← replace public/resume.pdf
}

export const links = {
  email: 'jayapriyan11802@gmail.com',
  phone: '+91 78689 32481',
  phoneHref: 'tel:+917868932481',
  linkedin: 'https://www.linkedin.com/in/jayapriyan-m-87766a222/',
  github: 'https://github.com/jayapriyan-m',
  hackerrank: 'https://www.hackerrank.com/profile/Jayapriyan_Jp',
}

export const nav = [
  { id: 'home', label: 'Home' }, { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' }, { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },{ id: 'certifications', label: 'Certifications' },
   { id: 'achievements', label: 'Achievements' }, { id: 'education', label: 'Education' }, 
  { id: 'contact', label: 'Contact' },
]

export const about = {
  paragraphs: [
    'I’m a Full Stack Developer at Tata Consultancy Services in Chennai, working across React.js front ends and Node.js and ASP.NET back ends, with SQL Server holding the data. The applications I maintain are used by clients every day.',
    'Before TCS, I spent a year at KAT Enterprise LLC as a SQL Server and mobile developer, building two Flutter inventory apps with payroll features from scratch. My engineering degree gave me a grounding in Python, machine learning and computer vision, and I’m now expanding into Generative AI while using Claude in my everyday workflow.',
  ],
  highlights: [
    'Client-facing web applications with React.js and Node.js',
    'REST APIs and .NET backend services',
    'SQL Server database design and integration',
    'Source control and deployment through Azure DevOps',
  ],
  interests: [
    'Full Stack Development', 'Backend & REST API Development', 'AI & Generative AI',
    'Machine Learning & Computer Vision', 'Database Management & SQL', 'Mobile Application Development',
  ],
}

export const experience = [
  {
    company: 'Tata Consultancy Services (TCS)', role: 'Full Stack Developer',
    place: 'Chennai, Tamil Nadu, India', period: 'April 2025 – Present', current: true,
    points: [
      ['Web applications', 'Develop and maintain client-facing web applications using React.js and Node.js.'],
      ['APIs and data', 'Build and integrate REST APIs and backend services with Node.js and ASP.NET, using SQL Server for application data.'],
      ['.NET integration', 'Develop .NET API solutions and connect them to React.js interfaces.'],
      ['AI-assisted development', 'Use Claude to understand code, explore implementation approaches, debug and work more efficiently.'],
      ['Debugging', 'Trace issues across frontend and backend, then implement fixes and feature changes.'],
      ['Azure DevOps', 'Source control, branch management, code changes and deployment across development environments.'],
      ['Teamwork', 'Work with development and project teams to understand requirements, implement changes and test application flows.'],
    ],
  },
  {
    company: 'KAT Enterprise LLC', role: 'SQL Server Developer & Mobile Application Developer',
    place: 'Remote', period: 'April 2024 – March 2025', current: false,
    points: [
      ['Flutter apps', 'Developed two mobile applications from scratch with Flutter for inventory management with payroll-enabled features.'],
      ['Modules', 'Implemented sales reports, agent management, pay structures and user profiles.'],
      ['SQL Server', 'Designed and integrated application databases.'],
      ['End to end', 'Covered UI implementation, business logic and data handling.'],
    ],
  },
]

export const projectFilters = ['All', 'Web', 'Mobile', 'AI / ML', 'Python']
export const projects = [
  {
    id: 'asthma', title: 'Asthma Risk Prediction using Decision Tree Classifier', year: '2022',
    categories: ['AI / ML', 'Python'], art: 'ml', image: 'images/projects/asthma-project.jpg',
    tags: ['Python', 'Machine Learning', 'Flask', 'SQLite'],
    summary: 'A team project that predicts asthma risk with a Decision Tree Classifier. I built the Flask UI and connected the database with Python’s sqlite3 module.',
    badge: 'First place, National Level Project Expo (twice)',
    github: 'https://github.com/Jayapriyan-m/Astha-Risk-Prediction-using-Decision-tree-Algorithm',
  },
  {
    id: 'musix', title: 'Musix: Music Player App', year: 'July 2024',
    categories: ['Mobile'], art: 'music', image: 'images/projects/musix-project.jpg',
    tags: ['Flutter', 'GetX', 'Dart', 'iTunes API'],
    summary: 'A Flutter music player using the iTunes API: previews, random top hits, search and filters, region-based search, favorites, background playback with persistent state, and a custom bottom sheet for playback controls.',
    github: 'https://github.com/Jayapriyan-m/musix-flutter-app',
  },
  {
    id: 'parental', title: 'Parental Control Application', year: '2023',
    categories: ['Python'], art: 'shield', image: 'images/projects/parental-control.jpg',
    tags: ['Python', 'Tkinter', 'Twilio'],
    summary: 'A desktop app with screen-time control, location tracking, usage restrictions and website blocking for safer browsing. Twilio sends alert messages for SOS.',
    // github: 'https://github.com/...'  ← add the repository URL here when available
  },
  {
    id: 'shopper', title: 'Shopper: E-commerce Website', year: 'Live',
    categories: ['Web'], art: 'shop', image: 'images/projects/shopper.jpg',
    tags: ['Hosted on Render'],
    summary: 'An e-commerce website I designed and launched, live on Render.',
    live: 'https://shopper-4atx.onrender.com/',
  },
]

export const coreStack = ['React.js', 'Node.js', 'ASP.NET', 'Microsoft SQL Server', 'Python', 'GitHub', 'Azure DevOps', 'Claude']
export const skills = [
  { name: 'Programming Languages', icon: 'code', items: ['Python', 'JavaScript', 'Java', 'SQL', 'Dart', 'C#'] },
  { name: 'Frontend', icon: 'layout', items: ['React.js', 'Flutter', 'HTML', 'CSS', 'Redux', 'GetX'] },
  { name: 'Backend', icon: 'server', items: ['Node.js', 'ASP.NET', 'Flask', 'Django'] },
  { name: 'APIs', icon: 'plug', items: ['REST APIs', 'RapidAPI'] },
  { name: 'AI and Generative AI', icon: 'sparkles', items: ['Claude', 'Prompt Engineering', 'AI-Assisted Development'] },
  { name: 'Databases', icon: 'db', items: ['Microsoft SQL Server', 'MySQL', 'SQLite'] },
  { name: 'Machine Learning', icon: 'cpu', items: ['Decision Trees', 'LSTM', 'YOLO', 'Pandas', 'NumPy', 'Matplotlib'] },
  { name: 'Development Tools', icon: 'tool', items: ['Git', 'GitHub', 'Azure DevOps', 'Visual Studio', 'Postman', 'Figma', 'Adobe XD'] },
]

export const achievements = [
  { icon: 'trophy', featured: true, text: 'First place at the National Level Project Expo, twice, for the Asthma Risk Prediction project.', link: { href: '#projects', label: 'See the project' } },
  { icon: 'award', text: 'Received the Dr. Kalam Young Achiever Award from the World Youth Federation for project presentation.' },
  { icon: 'code', text: 'Won cash prizes in coding contests at various colleges.' },
  { icon: 'users', text: 'Participated in three hackathons, including one organized by SRM University, and won a prize in a college-hosted hackathon in March 2023.' },
  { icon: 'presentation', text: 'Secured prizes through project presentations at college-level and national-level events.' },
  { icon: 'globe', text: 'Designed and launched an e-commerce website hosted on Render.', link: { href: 'https://shopper-4atx.onrender.com/', label: 'Visit the site', external: true } },
  { icon: 'ball', text: 'Captain of the football team, leading it to runner-up in the Zonal Tournament 2023.' },
]

export const education = [
  { school: 'CK College of Engineering and Technology', degree: 'B.E. Computer Science and Engineering', place: 'Cuddalore, Tamil Nadu', period: '2020 – 2024', score: 'CGPA 8.32' },
  { school: 'ARLM Matriculation Higher Secondary School', degree: 'HSC – Computer Science', place: 'Cuddalore, Tamil Nadu', period: '2018 – 2020', score: '75.33%' },
  { school: 'Lakshmi Matriculation School', degree: 'SSLC', place: 'Cuddalore, Tamil Nadu', period: '2018', score: '88.6%' },
]

export const leadership = [
  { role: 'President, Mobile App Development Club', org: 'CK College of Engineering and Technology', period: '2022 – 2024' },
  { role: 'Department Minister', org: 'Computer Science and Engineering, CKCET', period: '2023 – 2024' },
  { role: 'Team Captain, Football', org: 'CK College of Engineering and Technology', period: '2023 – 2024', note: 'Zonal Tournament 2023 runner-up' },
]

export const featuredCert = { issuer: 'Anthropic',link:"https://www.credly.com/badges/6f62d66b-bae5-47a8-8cde-4b2a778e73ac/public_url",
   name: 'Claude Certified Associate – Foundations', note: 'Foundations of working with Claude, which I use daily for AI-assisted development.' }

   export const certifications = [
  { issuer: 'IBM & TNSDC', name: 'Course and Project Completion (6 Months)', link: 'https://courses.tnsdc.skillsnetwork.site/certificates/055d9655b2024b8fbc72850a5f9fd491' },
  { issuer: 'HackerRank', name: 'FrontEnd Developer', link: 'https://www.hackerrank.com/certificates/fb0c5b2b113c' },
  { issuer: 'HackerRank', name: 'Python (Basic)',link:'https://www.hackerrank.com/certificates/019b7c245d13' },
  { issuer: 'HackerRank', name: 'Problem Solving (Basic)',link:'https://www.hackerrank.com/certificates/5ec4461a0ff0' },
  { issuer: 'Ingage Technologies', name: 'AR/VR Development',link:'https://drive.google.com/file/d/1vEkpF150tqPxu9u05TSRGkOxctT2h7Ti/view' },
  { issuer: 'HCL GUVI', name: 'Full stack with Python programming',link:'https://www.guvi.in/certificate?id=1zZ0899nK267x0VBG3' },
  { issuer: 'freecodecamp', name: 'JavaScript Algorithms and Data Structures',link:'https://www.freecodecamp.org/certification/fcc025285d3-2516-450e-b9ea-590a0939415e/javascript-algorithms-and-data-structures' },
  { issuer: 'Codekaro Boot Camp', name: 'CSS Masterclass',link:'' },
  { issuer: 'Codekaro Boot Camp', name: 'JavaScript Masterclass',link:'' },
]
