# 🌐 API Design

> **Document Version:** 1.0
>
> **Project:** upStack
>
> **Document Type:** API Design & Governance
>
> **Status:** Draft
>
> **Last Updated:** July 2026

---

# Table of Contents

1. API Overview
2. API Design Principles
3. Authentication
4. API Versioning
5. Common Headers
6. Response Standards
7. Error Handling
8. Service APIs
9. Rate Limiting
10. Pagination
11. Idempotency
12. API Security
13. Future APIs

---

# 1. API Overview

upStack exposes RESTful APIs for all platform capabilities.

Each microservice owns its own API surface while the API Gateway provides a unified entry point for clients.

Primary API Consumers:

- React Dashboard
- Mobile Applications (Future)
- AI Gateway
- MCP Server
- Internal Services

---

# 2. API Design Principles

The APIs follow these principles:

- RESTful resource naming
- Stateless requests
- JSON request/response
- Consistent status codes
- Versioned APIs
- Predictable error format
- Pagination support
- Secure by default

---

# 3. Authentication

Authentication uses JWT Bearer Tokens.

Example:

```http
Authorization: Bearer <access_token>
```

Protected APIs require a valid access token.

---

# 4. API Versioning

Base URL

```text
/api/v1/
```

Example:

```text
/api/v1/portfolios
/api/v1/transactions
/api/v1/analytics
/api/v1/ai/chat
```

Future versions:

```text
/api/v2/
```

---

# 5. Common Headers

Request

```http
Content-Type: application/json

Accept: application/json

Authorization: Bearer <token>

X-Request-ID: uuid
```

Response

```http
Content-Type: application/json
```

---

# 6. Response Standards

## Success

```json
{
  "success": true,
  "message": "Portfolio created successfully.",
  "data": {}
}
```

---

## Error

```json
{
  "success": false,
  "error": {
    "code": "PORTFOLIO_NOT_FOUND",
    "message": "Portfolio does not exist."
  }
}
```

---

# 7. HTTP Status Codes

| Code | Meaning |
|------:|---------|
| 200 | OK |
| 201 | Created |
| 204 | No Content |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 409 | Conflict |
| 422 | Validation Error |
| 429 | Too Many Requests |
| 500 | Internal Server Error |

---

# 8. Service APIs

## Authentication Service

### Register

```http
POST /api/v1/auth/register
```

### Login

```http
POST /api/v1/auth/login
```

### Refresh Token

```http
POST /api/v1/auth/refresh
```

### Logout

```http
POST /api/v1/auth/logout
```

---

## User Service

```http
GET    /api/v1/users/me

PUT    /api/v1/users/me

DELETE /api/v1/users/me
```

---

## Portfolio Service

```http
GET    /api/v1/portfolios

POST   /api/v1/portfolios

GET    /api/v1/portfolios/{id}

PUT    /api/v1/portfolios/{id}

DELETE /api/v1/portfolios/{id}
```

---

## Holding Service

```http
GET    /api/v1/holdings

POST   /api/v1/holdings

PUT    /api/v1/holdings/{id}

DELETE /api/v1/holdings/{id}
```

---

## Transaction Service

```http
GET    /api/v1/transactions

POST   /api/v1/transactions

GET    /api/v1/transactions/{id}
```

---

## Market Service

```http
GET /api/v1/market/stocks

GET /api/v1/market/stocks/{symbol}

GET /api/v1/market/news

GET /api/v1/market/sectors
```

---

## Analytics Service

```http
GET /api/v1/analytics/portfolio

GET /api/v1/analytics/risk

GET /api/v1/analytics/diversification

GET /api/v1/analytics/performance
```

---

## Recommendation Service

```http
GET /api/v1/recommendations

GET /api/v1/recommendations/latest
```

---

## Notification Service

```http
GET  /api/v1/notifications

POST /api/v1/notifications/settings
```

---

## Reporting Service

```http
GET /api/v1/reports/portfolio

GET /api/v1/reports/monthly

GET /api/v1/reports/tax
```

---

## AI Gateway

### Chat

```http
POST /api/v1/ai/chat
```

Example Request

```json
{
  "message": "Should I buy more TCS?"
}
```

Example Response

```json
{
  "answer": "Based on your current allocation...",
  "confidence": 0.91,
  "sources": [
    "Portfolio Analysis",
    "Market Trend",
    "Risk Analysis"
  ]
}
```

---

# 9. Pagination

Collection APIs support pagination.

Example

```text
GET /transactions?page=1&size=20
```

Response

```json
{
  "page": 1,
  "size": 20,
  "totalPages": 8,
  "totalElements": 153,
  "data": []
}
```

---

# 10. Filtering

Example

```text
GET /transactions?type=BUY

GET /market/stocks?sector=IT

GET /notifications?status=UNREAD
```

---

# 11. Sorting

Example

```text
GET /transactions?sort=date,desc

GET /holdings?sort=value,desc
```

---

# 12. Idempotency

Critical operations support idempotency.

Example Header

```http
Idempotency-Key: 5b0d5b56-acde-4d62-a14b-9bc91d0fd4cf
```

Used for:

- Buy Orders
- Sell Orders
- Payments (Future)
- Portfolio Imports

---

# 13. Rate Limiting

API Gateway applies limits.

Examples:

| Endpoint | Limit |
|-----------|------:|
| Login | 5/min |
| AI Chat | 60/min |
| Market Data | 120/min |
| Portfolio APIs | 300/min |

---

# 14. API Security

Security mechanisms include:

- JWT Authentication
- RBAC
- HTTPS
- Input Validation
- SQL Injection Protection
- XSS Protection
- CSRF Protection (where applicable)
- API Rate Limiting
- Request Logging
- Audit Trails

---

# 15. API Governance

The platform follows:

- Semantic Versioning
- OpenAPI 3.0 Specification
- Backward Compatibility
- Consistent Naming
- Standard Response Format
- Centralized Error Codes

---

# 16. Future APIs

Planned integrations:

- Broker APIs
- Portfolio Import APIs
- Mutual Fund APIs
- ETF APIs
- Tax APIs
- Financial Planning APIs
- Mobile SDK APIs
- Webhook APIs

---

# API Summary

The upStack API layer follows RESTful design principles with consistent versioning, standardized responses, secure authentication, and clear ownership across microservices. The API Gateway provides a unified interface while allowing each service to evolve independently, making the platform scalable, maintainable, and ready for future integrations.

---
