# 🏭 Brass ERP System

A **production-grade, modular ERP system** designed specifically for brass manufacturing industries.

Built with scalability, performance, and real-world manufacturing workflows in mind.

---

## 🚀 Overview

This ERP system is engineered to handle **end-to-end operations** of a brass manufacturing company — from raw material procurement to production, inventory, finance, and analytics.

It follows a **clean architecture**, **modular design**, and **API-first approach**, making it suitable for enterprise-scale deployments.

---

## 🧱 Tech Stack

### Backend

* Node.js + Express
* TypeScript
* TypeORM
* PostgreSQL

### Frontend

* React (Next.js)

### Mobile

* React Native

### DevOps

* Docker
* Environment-based configuration

### Optional Enhancements

* Redis (Caching)
* BullMQ (Queues / Background Jobs)

---

## 📁 Monorepo Structure

```
root/
├── apps/
│   ├── web/        # Next.js frontend
│   ├── mobile/     # React Native app
│   └── api/        # Node.js backend
│
├── packages/
│   ├── ui/         # Shared UI components
│   ├── types/      # Shared TypeScript types
│   └── utils/      # Common utilities
│
├── infra/
│   ├── docker/     # Docker configuration
│   └── scripts/    # Dev/CI scripts
```

---

## 🧩 Core Modules

* 🔐 Authentication & RBAC
* 📦 Inventory Management
* 🏭 Production Management
* 📑 Procurement
* 🛒 Sales & Orders
* 💰 Finance & Accounting
* 🧪 Quality Control
* 👨‍💼 HR & Payroll
* 📊 Reports & Analytics

---

## ⚙️ Backend Architecture

Strict modular structure:

```
modules/
  module-name/
    controller/
    service/
    repository/
    entity/
    routes/
    dto/
    validator/
```

### Flow:

```
Controller → Service → Repository → Database
```

No shortcuts. No direct DB access from controllers.

---

## 🐳 Docker Setup

### Start Services

```bash
docker-compose up --build
```

### Services

* API: http://localhost:5000
* PostgreSQL: localhost:5432

---

## 🔐 Environment Variables

Create `.env` file:

```
PORT=5000

JWT_SECRET=supersecret

DB_HOST=db
DB_PORT=5432
DB_USER=erp_user
DB_PASSWORD=erp_pass
DB_NAME=erp_db
```

---

## 🗄️ Database Rules

* ❌ No `synchronize: true`
* ✅ Always use migrations
* UUID primary keys
* Timestamp columns (`createdAt`, `updatedAt`)
* Soft deletes where necessary

---

## 🧠 Key Design Principles

* Modular & scalable architecture
* Separation of concerns
* API-first development
* Strict typing (TypeScript)
* Environment-based configuration
* Production-first mindset (not demo code)

---

## ⚠️ Important Engineering Rules

* Do NOT rewrite modules without reason
* Do NOT break architecture consistency
* Do NOT skip layers (controller/service/repo)
* Do NOT hardcode configs
* Always consider:

  * concurrency
  * rollback scenarios
  * data integrity
  * performance

---

## 🧪 Edge Cases Considered

* Partial production workflows
* Scrap & wastage tracking
* Failed DB transactions
* Multi-user conflicts
* Inventory mismatches
* Job work / subcontracting

---

## 🛠️ Development Workflow

1. Define module architecture
2. Create entities & migrations
3. Build repository layer
4. Implement services (business logic)
5. Add controllers & routes
6. Validate & test

---

## 📊 Future Scope

* AI-based demand forecasting
* Predictive maintenance
* IoT-based machine integration
* Advanced analytics dashboards

---

## 👨‍💻 Contribution Guidelines

* Follow defined architecture strictly
* Maintain clean, readable code
* Write scalable, reusable modules
* Keep commits meaningful
* Avoid breaking existing modules

---

## 📌 Status

🚧 In Development — Production-grade ERP system under active development.

---

## ⚡ Vision

To build a **robust, scalable ERP system** tailored for real-world manufacturing complexity — not just a demo product.

---

## 🧠 Maintained By

Veolve Tech
www.veolve.com


---
