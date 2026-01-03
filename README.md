# Pizza Paradise — FastAPI + HTML

<p align="center">
  <a href="http://localhost:8000">
    <img src="https://img.shields.io/badge/Web%20UI-Open-orange?style=for-the-badge">
  </a>
  <a href="http://localhost:8000/docs">
    <img src="https://img.shields.io/badge/Swagger-API-green?style=for-the-badge&logo=swagger">
  </a>
  <a href="http://localhost:8000/redoc">
    <img src="https://img.shields.io/badge/ReDoc-Docs-blue?style=for-the-badge">
  </a>
  <a href="https://github.com/Pran-bot/Pizza-Paradise-FastAPI-HTML-">
    <img src="https://img.shields.io/badge/GitHub-Repo-black?style=for-the-badge&logo=github">
  </a>
  <a href="https://fastapi.tiangolo.com/">
    <img src="https://img.shields.io/badge/Built%20With-FastAPI-teal?style=for-the-badge&logo=fastapi">
  </a>
  <a href="http://localhost:8000/">
    <img src="https://img.shields.io/badge/HTML-Web%20UI-orange?style=for-the-badge&logo=html5">
  </a>
</p>

Pizza Paradise is a simple example application demonstrating a small pizza-ordering web app built with FastAPI and server-rendered HTML templates. It combines a REST-like JSON API for programmatic access with human-friendly HTML pages for a quick web UI. This repository is ideal for learning FastAPI, template rendering, and serving static assets.

Features
- FastAPI backend with JSON API endpoints
- Server-rendered HTML pages (Jinja2 templates)
- Simple in-memory “menu” and “orders” implementation (easy to replace with a DB)
- Static assets (CSS / JS / images) served from a static directory
- Example Dockerfile for containerized runs
- Ready-to-run with Uvicorn for development

Tech stack
- Python 3.10+
- FastAPI
- Uvicorn (ASGI server)
- Jinja2 (templates)
- Optional: Docker
- PostgreSQL for Database

Repository layout (typical)
- app/
  - main.py — FastAPI application factory and routing
  - api/ — API routers for JSON endpoints
  - web/ — web (HTML) routes and templates
  - models.py — Pydantic models for request/response
  - storage.py — simple in-memory storage / adapters for persistence
- templates/ — Jinja2 HTML templates
- static/ — CSS, JavaScript, images
- requirements.txt — Python dependencies
- Dockerfile — optional containerization
- README.md — this file

Prerequisites
- Python 3.10 or newer
- pip
- (optional) Docker

Getting started — local development

1. Clone the repository
   git clone https://github.com/Pran-bot/Pizza-Paradise-FastAPI-HTML-.git
   cd Pizza-Paradise-FastAPI-HTML-

2. Create and activate a virtual environment (recommended)
   python -m venv .venv
   source .venv/bin/activate   # Linux / macOS
   .venv\Scripts\activate      # Windows PowerShell

3. Install dependencies
   pip install -r requirements.txt

4. Run the application with Uvicorn
   uvicorn app.main:app --reload --host 0.0.0.0 --port 8000

5. Open in your browser
   - Web UI: http://localhost:8000/
   - OpenAPI docs (JSON): http://localhost:8000/openapi.json
   - Swagger UI (interactive API docs): http://localhost:8000/docs
   - ReDoc: http://localhost:8000/redoc

Docker (optional)
- Build the image:
  docker build -t pizza-paradise .
- Run the container:
  docker run -p 8000:8000 pizza-paradise
- Visit http://localhost:8000

Configuration
- Environment variables (if present) may include:
  - PORT — port to run on (default 8000)
  - HOST — host IP/address (default 0.0.0.0)
  - DATABASE_URL — connection string if you wire a real DB (not present by default)
- If there is a .env or .env.example, copy and update it as needed.

API (example endpoints)
Note: Your app may expose slightly different paths; confirm with /docs.

- GET / — Home page (HTML)
- GET /menu — Returns the pizza menu (HTML or JSON depending on route)
- GET /api/menu — JSON menu (list of pizzas)
  Example:
    curl http://localhost:8000/api/menu
- POST /api/orders — Place a new order
  Request (application/json):
  {
    "customer_name": "Jane Doe",
    "items": [
      {"pizza_id": 1, "quantity": 2},
      {"pizza_id": 3, "quantity": 1}
    ]
  }
  Response:
  {
    "order_id": "order_0001",
    "status": "accepted"
  }
- GET /api/orders/{order_id} — Retrieve order status

HTML usage
- The repository serves Jinja2 templates from the templates/ directory. Visit the root path to view the menu and place orders through a simple form in the browser.

Data persistence
- By default, the project uses an in-memory store for simplicity (good for demos and tests). For real apps, swap storage/storage.py (or similar) with a database-backed adapter (SQLite, PostgreSQL, etc.).

Testing
- If tests are included, run:
  pytest

Best practices & next steps
- Replace the in-memory store with a database and migrations
- Add input validation and stricter error handling
- Add authentication for order management / admin panel
- Add persistence for static assets (CDN) and enable gzip compression
- Add CI (GitHub Actions) for tests and linting

Contributing
Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch (git checkout -b feature/name)
3. Make changes and add tests where appropriate
4. Open a pull request describing your changes

License
This project is provided under the MIT License — see LICENSE for details.

Maintainer
- Pran-bot

If you'd like, I can:
- Generate example env and requirements files,
- Add a simple Dockerfile or GitHub Actions workflow,
- Create templates for a persistent storage adapter (SQLite + SQLModel/SQLAlchemy).

Tell me which of the above you'd like next and I’ll add it to the repo.
