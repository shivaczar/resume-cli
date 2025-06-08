#!/usr/bin/env node

import chalk from 'chalk';
import boxen from 'boxen';

const resume = `
${chalk.bold('Shiva Singh')}
${chalk.gray('Last Updated: 7th February 2024')}
${chalk.cyan('shivaczar@gmail.com')} | ${chalk.cyan('8130876819')}

${chalk.bold('EDUCATION')}
• PG Diploma in Advanced Computing, CDAC – Jan 2019, Pune
• B.Tech in Electronics & Communications, IMS Engineering College – Oct 2016, Ghaziabad
• Children College – Grad. 2011, Azamgarh

${chalk.bold('LINKS')}
GitHub: ${chalk.underline('https://github.com/shivaczar')}
LinkedIn: ${chalk.underline('https://linkedin.com/in/shiva-singh4')}

${chalk.bold('SKILLS')}
Java, Spring Boot, Python, Flask, Docker, Kubernetes, Hibernate, AWS,
SQL, NoSQL, MySQL, PostgreSQL, Redis, Kafka,
Spring Data JPA, SNS, Cloudwatch, AWS Lambda, Spark, Distributed Systems

${chalk.bold('EXPERIENCE')}

${chalk.yellow('NetObjex Technologies | Software Engineer')}
May 2023 – Present, Bengaluru
- Developed audit log microservice for blockchain logs (Spring Boot + Kafka)
- Built AWS S3 SDK with bulk upload, pause/resume using Redis & Spring Cloud

${chalk.yellow('Zendrive Technologies | Backend Engineer')}
Sep 2021 – Mar 2023, Bengaluru
- Webhook system improved campaign efficiency by 25%
- Migrated services to ECS/EKS reducing downtime by 20%
- Built real-time features in Flask increasing lead generation by 35%

${chalk.yellow('Dassault Systemes | Software Engineer')}
Feb 2019 – Sep 2021, Pune
- Boosted ENOVIA app efficiency by 35%
- Refactored legacy C++ code to improve performance

${chalk.bold('COURSEWORK')}
PG Diploma: Java, Spring Boot, React, Node.js, MongoDB, C++, Unix, OOP
B.Tech: DSP, DSA, Networks, Communication Systems

${chalk.bold('VOLUNTEERISM')}
HUMANS | Program Coordinator – 2015
Led coordination of humanitarian programs
`;

console.log(boxen(resume, { padding: 1, borderColor: 'green', borderStyle: 'round' }));
