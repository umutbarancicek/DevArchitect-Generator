

# 🏗️ DevArchitect-Generator

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![License](https://img.shields.io/github/license/umutbarancicek/DevArchitect-Generator?style=for-the-badge&color=blue)
![Last Commit](https://img.shields.io/github/last-commit/umutbarancicek/DevArchitect-Generator?style=for-the-badge&color=green)
![Build Status](https://img.shields.io/badge/build-passing-brightgreen?style=for-the-badge)

**Pro-Level Scaffold Engine for TypeScript: Automating Clean Architecture and Domain-Driven Design (DDD) patterns for scalable Node.js services.**

---

## 📖 About

Setting up a robust, enterprise-grade Node.js service often requires hours of manual boilerplate—defining folder structures, mapping layers, and setting up dependency injection. **DevArchitect-Generator** eliminates this friction.

Built by engineers for engineers, this CLI tool automates the creation of high-quality TypeScript codebases following **Clean Architecture** and **Domain-Driven Design (DDD)** principles. It ensures your team spends less time on configuration and more time on business logic, maintaining a consistent standard across all your microservices.

## 🚀 Features

- **Layered Architecture**: Automatically generates `Domain`, `Application`, `Infrastructure`, and `Presentation` layers.
- **DDD Building Blocks**: Scaffolds Entities, Value Objects, Aggregates, and Repositories with standard boilerplate.
- **Use-Case Driven**: Generates command/query handlers following the CQRS mindset.
- **Dependency Injection**: Pre-configured DI containers to keep your code decoupled and testable.
- **Type-Safe by Default**: Leveraging TypeScript's advanced features to ensure compile-time safety across all layers.
- **Best Practices**: Enforces SOLID principles and separation of concerns out of the box.

## 🛠 Tech Stack

- **Core**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Runtime**: [Node.js](https://nodejs.org/)
- **Scaffolding Engine**: Custom Template Engine
- **Patterns**: Clean Architecture, DDD, CQRS, Repository Pattern

## 📦 Installation

To use the generator globally, install it via npm:

```bash
npm install -g @umutbarancicek/devarchitect-generator
```

Alternatively, run it directly using npx:

```bash
npx @umutbarancicek/devarchitect-generator init
```

## 💻 Usage

### Initialize a New Project

Start a new project with the standard Clean Architecture directory structure:

```bash
devarch init my-awesome-service
```

### Generate Domain Elements

Create an entity with a single command:

```bash
devarch generate entity User --props name:string,email:string
```

### Create Use Cases

Automate the creation of application services:

```bash
devarch generate usecase CreateUser
```

### Folder Structure Overview

The generator produces a structure following industry-standard patterns:

```text
src/
├── domain/           # Entities, Value Objects, Domain Events, Repositories Interfaces
├── application/      # Use Cases, DTOs, Mappers
├── infrastructure/   # Persistence, External APIs, DI Implementation
└── presentation/     # Controllers, Middlewares, Routes
```

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

**Developed with ❤️ by [umutbarancicek](https://github.com/umutbarancicek)**
*Empowering developers to build better software, faster.*
