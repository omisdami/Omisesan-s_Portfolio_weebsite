import React from 'react';
import { Calendar, MapPin, Award, BookOpen, Code, Briefcase } from 'lucide-react';

const Resume = () => {
  const experiences = [
    {
      company: 'Ozexs',
      position: 'UX Research & Product Design Co-op',
      duration: 'Jan 2024 - April 2024',
      location: 'Hamilton, ON',
      description: [
        'Built and analyzed user research datasets to inform prototype iterations, leveraging Excel and Python to summarize findings and present insights to stakeholders',
        ' Developed and maintained clear documentation and data logs, improving data transparency and reducing onboarding time by25%',
        ' Coordinated technical setups and resolved data collection issues during usability testing, ensuring accuracy and smooth operations'
      ]
    },
    {
      company: 'Stanbic IBTC Bank',
      position: 'Data Analyst Customer Insights & Strategy ',
      duration: 'Aug 2021 - Mar 2022',
      location: ' Lagos, NG',
      description: [
        'Conducted exploratory and statistical analysis on customer banking behavior, helping inform the launch of digital wallet services across the youth segment',
        'Designed Tableau dashboards to monitor service usage KPIs and NPS score trends across product lines, facilitating monthly executive briefings',
        'Created logistic regression models to assess churn risk and payment defaults, leading to a proactive retention campaign that reduced attrition by 8%',
        'Worked with engineering and compliance teams to ensure clean, secure access to PII-compliant datasets for analysis and reporting'
      ]
    },
    {
      company: 'Zenith Insurance',
      position: 'Risk Analyst',
      duration: 'Jun 2022 - Aug 2023',
      location: 'Lagos, NG',
      description: [
        'Automated Python scripts to process and validate large insurance datasets, supporting risk modeling and analytics teams with clean, reliable data.',
        'Provided SQL-based data extracts and ad-hoc reports to analysts, streamlining internal decision-making',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Maintained data inventory and collaborated on updating data workflows, enhancing operational efficiency and compliance'
      ]
    }
  ];

  const education = [
    {
      institution: 'Babcock University',
      degree: 'Bachelor of Science in Anatomy ',
      duration: '2016 - 2020',
      location: 'Ilishan-Remo, Ogun State, Nigeria',
      gpa: 'Second Class Upper'
    },
    {
      institution: 'Mohawak College',
      degree: 'Digital Health (postgraduate) ',
      duration: 'Sep 2023 - May 2024',
      location: 'Hamilton ON, Canada',
      gpa: '92%'
    },
    {
      institution: 'George Brown College',
      degree: 'Applied Ai Development Solutions (postgraduate) ',
      duration: 'Jan 2025 - Dec 2025',
      location: 'Toronto, ON, Canada',
      gpa: 'Still in progress'
    }
  ];

  const skills = {
  'AI & Machine Learning': [
    'Python',
    'PyTorch',
    'TensorFlow',
    'scikit-learn',
    'OpenCV',
    'Transformers (HuggingFace)',
    'YOLO',
    'TuriCreate',
    'Surprise (Recommender Systems)'
  ],
  'Data Analytics & Visualization': [
    'SQL',
    'Tableau',
    'Pandas',
    'NumPy',
    'Matplotlib',
    'Seaborn',
    'Excel',
    'Jupyter',
    'EDA',
    'A/B Testing',
    'Regression Modeling',
    'Logistic Regression'
  ],
  'DevOps & Deployment': [
    'Docker',
    'Git',
    'CI/CD (GitHub Actions)',
    'Streamlit',
    'FastAPI',
    'Heroku',
    'AWS EC2/S3',
    'MLflow'
  ],
  'General Tools & Collaboration': [
    'VS Code',
    'Jira',
    'Figma',
    'Notion',
    'Slack'
  ]
};


  return (
  <section id="resume" className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Resume
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          My professional journey, skills, and achievements
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-16">
        {/* Experience Section */}
        <div>
          <div className="flex items-center space-x-3 mb-8">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Briefcase className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Experience</h3>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-blue-200">
                <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-0"></div>
                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h4 className="text-xl font-bold text-gray-800">{exp.position}</h4>
                    <div className="flex items-center space-x-2 text-gray-500 text-sm">
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-blue-600 font-medium">{exp.company}</span>
                    <div className="flex items-center space-x-1 text-gray-500 text-sm">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-gray-600 flex items-start space-x-2">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <div className="flex items-center space-x-3 mb-8">
            <div className="p-2 bg-purple-100 rounded-lg">
              <BookOpen className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Education</h3>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h4 className="text-xl font-bold text-gray-800">{edu.degree}</h4>
                  <div className="flex items-center space-x-2 text-gray-500 text-sm">
                    <Calendar size={16} />
                    <span>{edu.duration}</span>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <span className="text-purple-600 font-medium">{edu.institution}</span>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 text-gray-500 text-sm">
                      <MapPin size={16} />
                      <span>{edu.location}</span>
                    </div>
                    <span className="text-green-600 font-medium">GPA: {edu.gpa}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <div className="flex items-center space-x-3 mb-8">
            <div className="p-2 bg-green-100 rounded-lg">
              <Code className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Skills</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-bold text-gray-800 mb-4">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
};

export default Resume;