# 💬 RAG Chatbot Frontend

This is the React-based frontend for the Retrieval-Augmented Generation (RAG) Chatbot, which interacts with a FastAPI backend to deliver intelligent, context-aware responses from a knowledge base of support pages and PDFs.

---

## 🖥️ Features

- Modern React-based UI for chatting with the bot
- Auto-scrolls and shows loading while waiting for a response
- Uses environment variable for API base URL
- Styled with clean, minimal CSS
- Easily deployable to platforms like Render

---

## ⚙️ Tech Stack

- **React 18+**
- **JavaScript (ES6+)**
- **Vite** – lightning-fast dev server and build
- **Axios / fetch** – to make API calls to backend
- **Render** – for deployment (free tier compatible)

---

## 📁 Project Structure

.
├── public/ # Static assets
├── src/
│ ├── components/
│ │ ├── ChatInput.js
│ │ ├── ChatMessage.js
│ │ └── ChatWindow.js
│ ├── api.js # sendMessage API function
│ ├── App.js # Main app component
│ └── main.jsx # Entry point
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md # You're here


## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-org/rag-chatbot-frontend.git
cd rag-chatbot-frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create .env 

```bash
REACT_APP_API_URL=https://rag-chatbot-backend-4bls.onrender.com
```

### 4. Start

```bash
npm start
```