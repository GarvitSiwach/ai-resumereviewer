# AI-Driven Resume Lie Detector

A production-ready full-stack web application that analyzes PDF resumes, verifies claims using AI, and generates a "Truth Score" to detect inconsistencies.

## 🚀 Features

- **PDF Parsing**: Extracts text and entities from uploaded resumes.
- **AI Verification**: Uses LLMs to cross-reference skills, projects, and timelines.
- **Truth Score**: Calculates a weighted credibility score based on multiple factors.
- **Detailed Report**: Visualizes suspicious points and generates technical follow-up questions.
- **Full-Stack Architecture**: Spring Boot (Backend), FastAPI (AI Service), React (Frontend), PostgreSQL (DB).

## 🛠️ Tech Stack

- **Backend**: Java 17, Spring Boot 3, PostgreSQL, Apache PDFBox
- **AI Microservice**: Python 3.11, FastAPI, OpenAI/Gemini Integration
- **Frontend**: React, Vite, Tailwind CSS, Recharts
- **Infrastructure**: Docker, Docker Compose

## 🏁 Getting Started

### Prerequisites

- Docker & Docker Compose installed
- (Optional) OpenAI or Gemini API Key for real AI analysis

### Running the Application

1.  **Clone the repository** (if applicable)
2.  **Set API Keys (Optional)**:
    Create a `.env` file in the root directory or export variables:
    ```bash
    export OPENAI_API_KEY=your_key_here
    # OR
    export GEMINI_API_KEY=your_key_here
    ```
    *Note: If no keys are provided, the system runs in simulation mode with mock data.*

3.  **Build and Run**:
    ```bash
    docker compose up --build
    ```

4.  **Access the App**:
    - **Frontend**: [http://localhost:3000](http://localhost:3000)
    - **Backend API**: [http://localhost:8080](http://localhost:8080)
    - **AI Service**: [http://localhost:8000/docs](http://localhost:8000/docs)

## 📸 Usage

1.  Go to `http://localhost:3000`.
2.  Upload a PDF resume.
3.  Wait for the analysis to complete.
4.  View the Truth Score, suspicious points, and suggested interview questions.

## 📂 Project Structure

```
root/
 ├── backend/       # Spring Boot Application
 ├── ai-service/    # Python FastAPI Microservice
 ├── frontend/      # React Frontend
 ├── docker-compose.yml
 └── README.md
```
