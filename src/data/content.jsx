import React from "react";
import { School, GraduationCap } from "lucide-react";

export const experience = [
  {
    title: "Technology Lead",
    company: "Synechron Technologies",
    period: "Jul 2023 - Jan 2025",
    items: [
      "Led AWS cloud migrations, CI/CD automation, and infrastructure as code using Terraform and CloudFormation.",
      "Managed containerization and orchestration with Docker and Kubernetes.",
      "Implemented monitoring, logging, and security best practices.",
    ],
    tags: ["AWS", "Terraform", "CloudFormation", "Jenkins", "Docker", "Kubernetes", "Python"],
  },
  {
    title: "Senior Associate Consultant",
    company: "Infosys",
    period: "Apr 2022 - Jan 2023",
    items: [
      "Automated build and deployment pipelines using Jenkins and GitHub Actions.",
      "Developed RESTful APIs and microservices in Golang.",
      "Configured monitoring and alerting with New Relic and Splunk.",
    ],
    tags: ["Jenkins", "GitHub Actions", "Golang", "New Relic", "Splunk"],
  },
  {
    title: "DevOps Engineer",
    company: "Wipro",
    period: "Aug 2017 - Apr 2022",
    items: [
      "Managed source control, build automation, and release management.",
      "Worked on Docker, Kubernetes, and AWS infrastructure.",
      "Wrote shell scripts for automation and system health checks.",
    ],
    tags: ["AWS", "Docker", "Kubernetes", "Shell", "Linux", "Git", "Bitbucket"],
  },
];

export const allProjects = [
  {
    title: "LIGHTHOUSE Application Migration to AWS Cloud",
    description: "Led migration of critical applications to AWS, implemented CI/CD, IaC, and containerization.",
    skills: ["AWS", "Jenkins", "Terraform", "Docker", "Kubernetes", "Python"],
    date: "2024",
    link: "",
    platform: "Wells Fargo & Company",
  },
  {
    title: "Insurance Australia Group DevOps Automation",
    description: "Automated build, deployment, and monitoring for microservices using Docker, Kubernetes, and Jenkins.",
    skills: ["AWS", "Jenkins", "Kubernetes", "Docker", "Golang"],
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
        jobTitle: "Student",
        jobPeriod: "2011 - 2015",
        description: "Completed B.Tech in Engineering, developed strong foundation in computer science and IT.",
        tags: ["Engineering", "IT"],
      },
    ],
  },
  {
    year: "2017-2025",
    school: "Professional Experience",
    icon: <School className="text-teal-400 w-5 h-5" />,
    activities: [
      {
        title: "Certifications & Skills",
        jobTitle: "Cloud & DevOps",
        jobPeriod: "2017 - Present",
        description:
          "AWS, Terraform, CloudFormation, Jenkins, Docker, Kubernetes, Ansible, Git, Bitbucket, Maven, SonarQube, AppDynamics, New Relic, Splunk, SQL Server, PostgreSQL, Tomcat, NGINX, Apache, Windows, Linux.",
        tags: [
          "AWS",
          "Terraform",
          "Jenkins",
          "Docker",
          "Kubernetes",
          "Linux",
          "CI/CD",
        ],
      },
    ],
  },
];