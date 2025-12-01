import { GoogleGenerativeAI } from "@google/generative-ai";

export const analyzeResume = async (text, apiKey) => {
    if (!apiKey) {
        throw new Error("API Key is required");
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `You are an expert Resume Verifier and Lie Detector. Analyze this resume and identify inconsistencies, exaggerations, or false claims.

RESUME TEXT:
${text}

Analyze for:
1. Skill Consistency: Do listed skills match project descriptions?
2. Project Authenticity: Do projects sound realistic for the experience level?
3. Timeline Validity: Are there gaps or overlapping dates?
4. Education Credibility: Does education match the career path?

You MUST provide at least 3-5 suspicious points and 3-5 follow-up questions.

Return ONLY valid JSON (no markdown, no code blocks) in this exact format:
{
    "skillConsistency": 0.85,
    "projectConsistency": 0.75,
    "timelineConsistency": 0.90,
    "educationCredibility": 0.95,
    "questionConfidence": 0.80,
    "suspiciousPoints": [
        "Specific concern about skill X",
        "Timeline gap between Y and Z",
        "Project claim seems exaggerated"
    ],
    "followupQuestions": [
        "Can you explain specific details about project X?",
        "How did you use technology Y in role Z?",
        "What were the measurable outcomes of achievement A?"
    ]
}`;

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        let textResponse = response.text();

        // Clean up markdown code blocks if present
        textResponse = textResponse.replace(/```json/g, "").replace(/```/g, "").trim();
        if (textResponse.startsWith("json")) {
            textResponse = textResponse.substring(4).trim();
        }

        const data = JSON.parse(textResponse);

        // Ensure we have data
        if (!data.suspiciousPoints) {
            data.suspiciousPoints = ["No specific concerns identified, but manual review recommended."];
        }
        if (!data.followupQuestions) {
            data.followupQuestions = ["Please provide more details about your key achievements."];
        }

        // Calculate truth score (average of consistencies * 100)
        const consistencies = [
            data.skillConsistency || 0.5,
            data.projectConsistency || 0.5,
            data.timelineConsistency || 0.5,
            data.educationCredibility || 0.5
        ];
        const avgConsistency = consistencies.reduce((a, b) => a + b, 0) / consistencies.length;
        data.truthScore = Math.round(avgConsistency * 100);

        return data;

    } catch (error) {
        console.error("Error analyzing resume with Gemini:", error);
        throw error;
    }
};
