# AI-Driven Resume Lie Detector (Frontend Only)

A production-ready web application that analyzes PDF resumes, verifies claims using AI, and generates a "Truth Score" to detect inconsistencies. **Now running entirely in the browser!**

## 🚀 Features

- **Client-Side PDF Parsing**: Extracts text from uploaded resumes directly in your browser.
- **AI Verification**: Uses Google Gemini API to cross-reference skills, projects, and timelines.
- **Truth Score**: Calculates a weighted credibility score based on multiple factors.
- **Detailed Report**: Visualizes suspicious points and generates technical follow-up questions.
- **Secure**: Your resume data stays local and is sent directly to the AI API, not stored on any intermediate server.

## 🛠️ Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, Framer Motion
- **AI**: Google Gemini API (`@google/generative-ai`)
- **PDF Processing**: `pdfjs-dist`

## 🏁 Getting Started

### Prerequisites

- Node.js installed
- A Google Gemini API Key (Get one [here](https://aistudio.google.com/app/apikey))

### Running the Application

1.  **Clone the repository**
2.  **Install Dependencies**:
    ```bash
    cd frontend
    npm install
    ```
3.  **Run Locally**:
    ```bash
    npm run dev
    ```
4.  **Access the App**:
    - Open [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal)

## 📸 Usage

1.  Open the application in your browser.
2.  Enter your **Gemini API Key** (it's saved locally for convenience).
3.  Upload a PDF resume.
4.  Wait for the analysis to complete.
5.  View the Truth Score, suspicious points, and suggested interview questions.

## 📂 Project Structure

```
root/
 ├── frontend/      # React Frontend (Main Application)
 └── README.md
```
# ai-resumereviewer
# ai-resumereviewer
