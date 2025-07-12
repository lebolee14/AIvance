# AIvance

**AIvance** is a platform that combines Applicant Tracking System (ATS) functionality with AI-powered interview preparation and continuous feedback loops. The system analyzes resumes against job descriptions, provides personalized interview preparation, and offers learning recommendations based on identified skill gaps.
### Contributors - Wallace & Lebogang

## 🔗 Submission Links

- 🔴 [loom](<https://www.loom.com/share/042730214f214fa3ace5ba5c0fb4a6ea?sid=aa70d07d-700f-4d27-8b3a-d2223450f1c2>)
- 🌐 [Project Website](https://sparkly-creponne-925506.netlify.app/)

## 🚀 Features

- **Resume Parsing & ATS Compatibility**: Analyze and optimize resumes for ATS systems
- **AI-Powered Interview Simulation**: Practice interviews with AI feedback and scoring
- **Personalized Feedback**: Get tailored improvement suggestions based on performance
- **Learning Resource Recommendations**: Curated content to address skill gaps
- **Progress Tracking**: Monitor improvement over time with retry management
- **Comprehensive Analytics**: Detailed reporting and performance insights

## 🏗️ System Architecture

┌─────────────────────────────────────────────────────────────────┐
│                    FRONTEND LAYER                               │
├─────────────────────────────────────────────────────────────────┤
│  Web App (HTML/CSS/JS)  │  API Documentation Portal             │
│  Dashboard & Reports    │  Mobile-Responsive Design             │
└─────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────┐
│                    API GATEWAY LAYER                            │
├─────────────────────────────────────────────────────────────────┤
│  Authentication  │  Rate Limiting  │  Request Routing           │
│  Load Balancing  │  API Versioning │  Request/Response Logging  │
└─────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────┐
│                  BACKEND SERVICES                               │
├─────────────────────────────────────────────────────────────────┤
│ User Service │ Document Service │ ATS Service │ AI Service      │
│ Interview    │ Scoring Service  │ Learning    │ Notification    │
│ Service      │ Analytics Service│ Service     │ Service         │
└─────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────┐
│                    DATA LAYER                                   │
├─────────────────────────────────────────────────────────────────┤
│ Redis          │ MongoDB        │ File Storage                  │
│ (Cache/Session)│ (Documents)    │ (Resume/Media Files)          │
└─────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                        EXTERNAL SERVICES                                │
├─────────────────────────────────────────────────────────────────────────┤
│ OpenAI/Claude │ Cloud Storage │ Chatbots    │ Microsoft Azure           │
│ GPT-4 API     │ AWS S3/GCP    │ DigitalOcean│ Voice Assistant & STT API │
└─────────────────────────────────────────────────────────────────────────┘

## 🧱 Technology Stack

### Frontend
- **HTML5/CSS3/JavaScript**: Core web technologies
- **Vanilla JavaScript**: ES6+ features, modules, async/await

### Backend
- **Python**: Core backend language
- **Flask**: Lightweight web framework
- **Flask-RESTful**: REST API development
- **Flask-SocketIO**: WebSocket support for real-time features
- **Celery**: Background task processing
- **Gunicorn**: WSGI HTTP server

### Databases
- **Redis**:
    - Session management
    - Caching layer
    - Real-time data
    - Task queues
- **MongoDB**:
    - Document storage (resumes, job descriptions)
    - User profiles and preferences
    - Interview transcripts and feedback
    - Learning resources and recommendations

### Infrastructure
- **NGINX**: Reverse proxy and static file serving
- **SSL/TLS**: HTTPS encryption
- **Environment Variables**: Configuration management
