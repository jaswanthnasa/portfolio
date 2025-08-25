import React from "react";
import { School, GraduationCap } from "lucide-react";

export const experience = [
  {
    title: "Senior Consultant",
    company: "Deloitte India",
    period: "Mar 2025 - Present",
    items: [
      "Architected and implemented scalable cloud infrastructure solutions across multiple AWS services.",
      "Developed infrastructure as code using Terraform with advanced automation and GitHub Actions workflows.",
      "Enhanced development productivity by integrating GitHub Copilot for accelerated code development and infrastructure provisioning.",
      "Orchestrated complex deployments using Ansible for configuration management and system automation.",
    ],
    tags: ["AWS", "Terraform", "GitHub Actions", "Ansible", "GitHub Copilot", "Infrastructure as Code", "Cloud Architecture"],
  },
  {
    title: "Technology Lead",
    company: "Synechron Technologies",
    period: "Jul 2023 - Jan 2025",
    items: [
      "Led AWS cloud migrations, CI/CD automation, and infrastructure as code using Terraform and CloudFormation.",
      "Managed containerization and orchestration with Docker and Kubernetes.",
      "Implemented monitoring, logging, and security best practices across enterprise environments.",
    ],
    tags: ["AWS", "Terraform", "CloudFormation", "Jenkins", "Docker", "Kubernetes", "Python"],
  },
  {
    title: "Senior Associate Consultant",
    company: "Infosys",
    period: "Apr 2022 - Jan 2023",
    items: [
      "Automated build and deployment pipelines using Jenkins and GitHub Actions.",
      "Developed RESTful APIs and microservices in Golang for high-performance applications.",
      "Configured comprehensive monitoring and alerting solutions with New Relic and Splunk.",
    ],
    tags: ["Jenkins", "GitHub Actions", "Golang", "New Relic", "Splunk", "Microservices"],
  },
  {
    title: "DevOps Engineer",
    company: "Wipro",
    period: "Aug 2017 - Apr 2022",
    items: [
      "Managed source control, build automation, and release management for enterprise applications.",
      "Implemented containerization strategies using Docker and Kubernetes on AWS infrastructure.",
      "Developed automation scripts for system health monitoring and operational efficiency.",
    ],
    tags: ["AWS", "Docker", "Kubernetes", "Shell Scripting", "Linux", "Git", "Bitbucket"],
  },
];

export const allProjects = [
  {
    title: "Enterprise Cloud Transformation Initiative",
    description: "Leading comprehensive cloud infrastructure modernization using Terraform, GitHub Actions, and AWS services with AI-assisted development workflows.",
    skills: ["AWS", "Terraform", "GitHub Actions", "GitHub Copilot", "Ansible", "Cloud Architecture"],
    date: "2025",
    link: "",
    platform: "Deloitte India",
  },
  {
    title: "LIGHTHOUSE Application Migration to AWS Cloud",
    description: "Led migration of critical applications to AWS, implemented CI/CD, IaC, and containerization strategies.",
    skills: ["AWS", "Jenkins", "Terraform", "Docker", "Kubernetes", "Python"],
    date: "2024",
    link: "",
    platform: "Wells Fargo & Company",
  },
  {
    title: "Insurance Australia Group DevOps Automation",
    description: "Automated build, deployment, and monitoring for microservices using Docker, Kubernetes, and Jenkins.",
    skills: ["AWS", "Jenkins", "Kubernetes", "Docker", "Golang", "Microservices"],
    date: "2023",
    link: "",
    platform: "IAG, Sydney",
  },
  {
    title: "ENM (MTG) Cloud Infrastructure",
    description: "Managed CI/CD, container orchestration, and AWS infrastructure for telecom applications.",
    skills: ["AWS", "Jenkins", "Kubernetes", "Ansible", "Docker"],
    date: "2022",
    link: "",
    platform: "Ericsson, Ireland",
  },
  {
    title: "Zurich Azure DevOps Pipelines",
    description: "Implemented CI/CD pipelines, managed Azure resources, and automated deployments for insurance applications.",
    skills: ["Azure DevOps", "YAML", "PowerShell", "ARM Templates"],
    date: "2021",
    link: "",
    platform: "Zurich Insurance",
  },
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
        description: "Completed B.Tech in Engineering with focus on computer science fundamentals, building a strong foundation for cloud and infrastructure technologies.",
        tags: ["Engineering", "Computer Science", "IT Fundamentals"],
      },
    ],
  },
  {
    year: "2017-2025",
    school: "Professional Excellence Journey",
    icon: <School className="text-teal-400 w-5 h-5" />,
    activities: [
      {
        title: "Cloud & DevOps Expertise",
        jobTitle: "Senior Cloud Consultant",
        jobPeriod: "2017 - Present",
        description:
          "Specialized in AWS cloud architecture, infrastructure automation, and modern DevOps practices. Proficient in Terraform, GitHub Actions, containerization, and AI-assisted development workflows.",
        tags: [
          "AWS",
          "Terraform",
          "GitHub Actions",
          "Docker",
          "Kubernetes",
          "Ansible",
          "GitHub Copilot",
          "Cloud Architecture",
          "Infrastructure as Code",
        ],
      },
    ],
  },
];