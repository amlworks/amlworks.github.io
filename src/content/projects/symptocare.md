# SymptoCare

SymptoCare is a healthcare accessibility platform designed to provide disease search and diagnosis support through data-driven insights. Created at the Tech For Change 2024 Hackathon, where it won the overall competition.

## The Problem

Healthcare access remains a significant barrier for many communities. Visiting a doctor is expensive and time-consuming, and people often need basic information before deciding whether to seek professional care. We wanted to create a tool that could provide preliminary insights while being completely free and accessible to anyone.

## The Approach

We built a symptom checker that matches user-reported symptoms against a comprehensive database of diseases. The data comes from discharge summaries at New York Presbyterian Hospital, processed and cleaned to associate each disease with its characteristic symptoms.

The system uses cosine similarity calculations to find the best matches, then presents results in a clear, understandable format. We integrated GPT to provide additional context and explanations, giving users a "second opinion" on their results.

## Key Features

- **Symptom Checker**: Enter symptoms and receive insights into potential medical conditions
- **GPT Integration**: Get additional information and context through AI assistance
- **Free Access**: No cost, no barriers — healthcare information for everyone
- **Educational Resources**: Learn more about conditions and when to seek professional care

## Technical Implementation

The backend uses Python and Flask, with Pandas handling the data processing. The symptom matching algorithm uses scikit-learn for cosine similarity calculations, ensuring accurate and relevant results.

We chose this stack for its simplicity and reliability — the focus was on getting a working tool into people's hands quickly, not on using the latest frameworks.

## Impact

This tool is intended for informational purposes only and is not a substitute for professional medical advice. However, it can help people:

- Identify potential medical conditions based on symptoms
- Understand more about a symptom or condition
- Prepare informed questions for healthcare providers
- Make better decisions about when to seek care

## What We Learned

Building for healthcare requires a different mindset. Every design decision had to balance being helpful with being responsible. We learned to be clear about limitations, to cite sources, and to always encourage professional consultation when appropriate.

The hackathon taught us that the best solutions often come from understanding the community you're serving. We spent significant time talking to potential users about their healthcare access challenges before writing any code.

## Tech Stack

- Python & Flask for backend
- Pandas for data manipulation
- OpenAI GPT for additional insights
- scikit-learn for similarity calculations
- Data from Columbia University Medical Center

> "The best healthcare tools are the ones that empower people to make informed decisions about their own care."