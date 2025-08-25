import React from "react";
import { School, GraduationCap, Briefcase } from "lucide-react";

export const experience = [
  {
    title: "Senior Consultant",
    company: "Deloitte India",
    period: "Mar 2025 - Present",
    items: [
      "Architecting and implementing scalable cloud infrastructure solutions across 15+ AWS services, serving 500K+ daily users.",
      "Developing enterprise-grade infrastructure as code using Terraform with advanced automation and GitHub Actions workflows.",
      "Enhancing development productivity by 40% through GitHub Copilot integration and automated code review processes.",
      "Leading cross-functional teams of 8+ engineers in orchestrating complex deployments using Ansible.",
      "Mentoring junior consultants and establishing DevOps best practices across client organizations.",
    ],
    tags: ["AWS", "Terraform", "GitHub Actions", "Ansible", "GitHub Copilot", "Infrastructure as Code", "Team Leadership"],
  },
  {
    title: "Technology Lead",
    company: "Synechron Technologies", 
    period: "Jul 2023 - Jan 2025",
    items: [
      "Led AWS cloud migrations for 12+ enterprise applications, reducing infrastructure costs by 35%.",
      "Implemented CI/CD automation pipelines serving 200+ daily deployments with 99.9% success rate.",
      "Managed containerization strategies using Docker and Kubernetes, improving deployment speed by 60%.",
      "Established monitoring, logging, and security frameworks using CloudWatch, ELK stack, and AWS Security Hub.",
      "Collaborated with architecture teams to design fault-tolerant, highly available cloud solutions.",
    ],
    tags: ["AWS", "Terraform", "CloudFormation", "Jenkins", "Docker", "Kubernetes", "Python", "Team Leadership"],
  },
  {
    title: "Senior Associate Consultant",
    company: "Infosys",
    period: "Apr 2022 - Jan 2023", 
    items: [
      "Automated build and deployment pipelines using Jenkins and GitHub Actions, reducing deployment time by 50%.",
      "Developed 25+ RESTful APIs and microservices in Golang for high-performance financial applications.",
      "Configured comprehensive monitoring solutions with New Relic and Splunk, improving incident response time by 45%.",
      "Led technical workshops and knowledge transfer sessions for development teams.",
    ],
    tags: ["Jenkins", "GitHub Actions", "Golang", "New Relic", "Splunk", "Microservices", "API Development"],
  },
  {
    title: "DevOps Engineer",
    company: "Wipro",
    period: "Aug 2017 - Apr 2022",
    items: [
      "Managed source control and release management for 50+ enterprise applications across multiple environments.",
      "Implemented containerization strategies using Docker and Kubernetes, supporting 1M+ daily transactions.",
      "Developed 100+ automation scripts for system health monitoring, reducing manual effort by 70%.",
      "Collaborated with development teams to establish CI/CD best practices and code quality standards.",
      "Managed Linux server infrastructure and automated backup/recovery processes.",
    ],
    tags: ["AWS", "Docker", "Kubernetes", "Shell Scripting", "Linux", "Git", "Bitbucket", "Automation"],
  },
];

export const allProjects = [
  {
    title: "Enterprise Cloud Transformation Initiative",
    description: "Leading comprehensive cloud infrastructure modernization for Fortune 500 client, migrating 50+ applications using Terraform, GitHub Actions, and AWS services with AI-assisted development workflows.",
    skills: ["AWS", "Terraform", "GitHub Actions", "GitHub Copilot", "Ansible", "Cloud Architecture"],
    date: "2025",
    link: "",
    platform: "Deloitte India",
    impact: "Reduced infrastructure costs by 40%, improved deployment speed by 3x"
  },
  {
    title: "LIGHTHOUSE Application Migration to AWS Cloud",
    description: "Led end-to-end migration of critical banking applications to AWS, implementing CI/CD, IaC, and containerization strategies for enhanced scalability and security.",
    skills: ["AWS", "Jenkins", "Terraform", "Docker", "Kubernetes", "Python"],
    date: "2024",
    link: "",
    platform: "Wells Fargo & Company",
    impact: "Achieved 99.9% uptime, reduced deployment time by 60%"
  },
  {
    title: "Insurance Australia Group DevOps Automation",
    description: "Architected and implemented comprehensive DevOps automation suite for microservices architecture, handling 2M+ daily insurance transactions with zero-downtime deployments.",
    skills: ["AWS", "Jenkins", "Kubernetes", "Docker", "Golang", "Microservices"],
    date: "2023",
    link: "",
    platform: "IAG, Sydney",
    impact: "Improved system reliability to 99.95%, reduced incident response time by 50%"
  },
  {
    title: "Multi-Region AWS Infrastructure Setup",
    description: "Designed and implemented multi-region AWS infrastructure for critical telecom applications, ensuring high availability and disaster recovery across US-East and US-West regions.",
    skills: ["AWS", "Terraform", "Route 53", "RDS", "S3", "CloudFormation"],
    date: "2023",
    link: "",
    platform: "Enterprise Client",
    impact: "Achieved RTO of 15 minutes, RPO of 1 hour"
  },
  {
    title: "ENM (MTG) Cloud Infrastructure",
    description: "Managed CI/CD, container orchestration, and AWS infrastructure for telecom applications serving 10M+ subscribers across multiple regions.",
    skills: ["AWS", "Jenkins", "Kubernetes", "Ansible", "Docker", "Monitoring"],
    date: "2022",
    link: "",
    platform: "Ericsson, Ireland",
    impact: "Scaled to handle 500% traffic increase during peak hours"
  },
  {
    title: "Automated Infrastructure Provisioning Platform",
    description: "Built self-service infrastructure provisioning platform using Terraform and Jenkins, enabling development teams to spin up AWS environments on-demand with governance controls.",
    skills: ["Terraform", "Jenkins", "AWS", "Python", "Ansible", "GitLab"],
    date: "2021",
    link: "",
    platform: "Enterprise Client",
    impact: "Reduced environment provisioning time from days to hours"
  },
  {
    title: "Legacy Application Containerization Initiative",
    description: "Led containerization of 20+ legacy Java applications using Docker and migrated to Kubernetes on AWS EKS, modernizing deployment strategies and improving resource utilization.",
    skills: ["Docker", "Kubernetes", "AWS EKS", "Java", "Jenkins", "Helm"],
    date: "2020",
    link: "",
    platform: "Financial Services Client", 
    impact: "Reduced infrastructure costs by 30%, improved deployment reliability"
  },
  {
    title: "AWS Monitoring and Observability Framework",
    description: "Implemented comprehensive monitoring solution using AWS CloudWatch, Prometheus, Grafana, and ELK stack for 200+ microservices, providing real-time insights and automated alerting.",
    skills: ["AWS CloudWatch", "Prometheus", "Grafana", "ELK Stack", "Kubernetes", "Python"],
    date: "2019",
    link: "",
    platform: "E-commerce Platform",
    impact: "Reduced MTTR by 65%, achieved 99.9% system availability"
  },
  {
    title: "CI/CD Pipeline Standardization",
    description: "Standardized CI/CD processes across multiple development teams using Jenkins and GitLab, establishing automated testing, code quality checks, and deployment strategies.",
    skills: ["Jenkins", "GitLab", "SonarQube", "Maven", "Shell Scripting", "Git"],
    date: "2018",
    link: "",
    platform: "Multiple Projects",
    impact: "Reduced deployment failures by 70%, improved code quality scores"
  }
];

export const journeyTree = [
  {
    year: "2011-2015",
    school: "Sree Kavitha Engineering College, Khammam",
    icon: <GraduationCap className="text-teal-400 w-5 h-5" />,
    activities: [
      {
        title: "Bachelor of Technology (B.Tech)",
        jobTitle: "Engineering Graduate",
        jobPeriod: "2011 - 2015",
        description: "Completed B.Tech in Engineering with strong fundamentals in computer science, algorithms, and system design that provided the foundation for cloud and infrastructure expertise.",
        tags: ["Engineering", "Computer Science", "System Design", "Programming"],
      },
    ],
  },
  {
    year: "2015-2017", 
    school: "Skills Development & Industry Preparation",
    icon: <School className="text-teal-400 w-5 h-5" />,
    activities: [
      {
        title: "Professional Transition & Skill Building",
        jobTitle: "Self-Learning & Practice",
        jobPeriod: "2015 - 2017",
        description: "Intensive self-study in cloud technologies, DevOps practices, and automation tools. Focused on Linux administration, AWS fundamentals, and scripting languages to transition into cloud infrastructure.",
        tags: ["AWS Self-Study", "Linux", "Shell Scripting", "DevOps Fundamentals", "Hands-on Practice"],
      },
    ],
  },
  {
    year: "2017-2025",
    school: "Professional Excellence Journey",
    icon: <Briefcase className="text-teal-400 w-5 h-5" />,
    activities: [
      {
        title: "AWS Cloud & DevOps Expertise",
        jobTitle: "Senior Cloud Consultant",
        jobPeriod: "2017 - Present",
        description:
          "8+ years of hands-on experience specializing in AWS cloud architecture, infrastructure automation, and DevOps practices. Expert in AWS ecosystem with deep knowledge of infrastructure as code, containerization, and modern CI/CD workflows. Led 50+ successful cloud migrations and automation initiatives.",
        tags: [
          "AWS Expert",
          "Terraform Specialist", 
          "GitHub Actions",
          "Docker & Kubernetes",
          "Ansible",
          "GitHub Copilot",
          "Cloud Architecture",
          "Infrastructure as Code",
          "Team Leadership"
        ],
      },
    ],
  }
];

// Key achievements without certifications
export const keyAchievements = [
  {
    metric: "50+",
    description: "AWS Cloud Migration Projects Led",
    icon: "☁️"
  },
  {
    metric: "99.9%", 
    description: "Average System Uptime Achieved",
    icon: "⚡"
  },
  {
    metric: "$2M+",
    description: "Infrastructure Cost Savings Delivered", 
    icon: "💰"
  },
  {
    metric: "15+",
    description: "Team Members Mentored",
    icon: "👥"
  }
];

// Updated technical expertise focusing on AWS
export const technicalExpertise = {
  "Cloud Platform": ["AWS (Expert)", "Azure (Intermediate)", "GCP (Intermediate)"],
  "Infrastructure as Code": ["Terraform (Expert)", "CloudFormation (Advanced)", "AWS CDK (Intermediate)"],
  "CI/CD & Automation": ["Jenkins (Expert)", "GitHub Actions (Expert)", "GitLab CI (Advanced)"],
  "Containerization": ["Docker (Expert)", "Kubernetes (Expert)", "AWS EKS (Expert)", "Helm (Advanced)"],
  "Configuration Management": ["Ansible (Expert)", "AWS Systems Manager (Advanced)"],
  "Monitoring & Observability": ["AWS CloudWatch (Expert)", "Prometheus/Grafana (Advanced)", "ELK Stack (Advanced)", "New Relic (Advanced)"],
  "Programming & Scripting": ["Python (Advanced)", "Golang (Advanced)", "Shell/Bash (Expert)", "PowerShell (Intermediate)"],
  "Databases": ["AWS RDS (Expert)", "PostgreSQL (Advanced)", "MySQL (Advanced)", "Redis (Intermediate)", "MongoDB (Basic)"],
  "AWS Services": ["EC2, S3, VPC, IAM (Expert)", "Lambda, API Gateway (Advanced)", "ECS, EKS, ECR (Expert)", "Route 53, CloudFront (Advanced)"]
};