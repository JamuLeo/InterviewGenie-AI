# InterviewGenie-AI
# PrepMate AI 🎓🤖

Your intelligent interview preparation assistant for graduates and job seekers.

## 🚀 Overview

**PrepMate AI** is a web-based application built to help fresh graduates and aspiring professionals prepare for technical job interviews with the help of Artificial Intelligence.

Users can:
- ✅ Create an account and login
- 🧠 Generate custom AI interview questions based on role, experience, and topics
- 📘 View detailed AI-generated answers with explanations and code samples
- 📌 Understand key technical concepts behind each question
- 🔁 Practice repeatedly and track progress

Whether you're applying for your first job or transitioning into tech, PrepMate AI gives you the tailored guidance you need to succeed.

---

## 🛠️ Tech Stack

- **Frontend:** React + Tailwind CSS
- **Backend:** Node.js + Express
- **Database:** MongoDB
- **AI Integration:** Custom prompt engineering with GPT-based APIs
- **Authentication:** JWT-based secure login system

---

## 📦 Features

- 🔐 User authentication (Register/Login)
- 🎯 Question generator with filters: role, experience, focus topics
- 📝 Detailed answers with explanations and code snippets
- 📖 Concept explanation module
- 📁 JSON-based output for integration/export

---

## 📸 Screenshots

*Coming soon...*

---

## 🧪 Getting Started

### Prerequisites

- Node.js v18+
- MongoDB (local or Atlas)
- OpenAI API key (or similar AI model)

### Installation

```bash
git clone https://github.com/yourusername/prepmate-ai.git
cd prepmate-ai
npm install
cd client
npm install

export const questionAnswerPrompt = (role, experience, topicsToFocus, numberOfQuestions) => (
  `
You are an AI trained to generate technical interview questions and answers.
Task:
- Role: ${role}
- Candidate Experience: ${experience}
- Focus Topics: ${topicsToFocus}
- Write: ${numberOfQuestions} interview questions.

Instructions:
- For each question, generate a detailed but beginner-friendly answer.
- Include a code block if needed.
- Return a pure JSON array only.
  `
);

📜 License
MIT License

🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss.

📬 Contact
Built with ❤️ by Leo Jamu
[https://www.linkedin.com/in/leo-jamu-b08261344/
] |bsc-com-06-21@unima.ac.mw |leojamu.netlify.app