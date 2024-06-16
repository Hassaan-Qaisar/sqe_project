# SQE Project

## Table of Contents

- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Features](#features)
- [Installation](#installation)
- [Testing](#testing)
- [Automated Testing](#automated-testing)

## Introduction

This repository contains the code for a MERN-based e-commerce store developed as an end semester project for Software Quality Engineering. The primary focus of this project is on testing the application comprehensively. We have implemented tests for the React frontend using Jest, and for the backend, we have written test cases for CRUD operations, schema validations, JWT tokens, authentication, and utilities using Jest and Supertest. Additionally, we have set up automated testing using GitHub Actions and workflows, and performed API testing with Postman and load/stress testing with Locust.

## Project Structure

The repository is organized into the following folders:

- `front-end`: Contains the React frontend of the application.
- `server`: Contains the Node.js backend, including all test cases.

## Features

- MERN stack e-commerce application
- Comprehensive frontend and backend testing
- Automated testing with GitHub Actions
- API testing with Postman
- Load and stress testing with Locust

## Installation

To set up and run the project locally, follow these steps:

### Backend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/Hassaan-Qaisar/sqe_project
    cd sqe_project
    ```

2. Setup the server:
    ```bash
    cd server
    npm install
    ```

3. Configure the environment variables:
    - Create a `.env` file in the `server` directory and add your MongoDB connection string and other necessary environment variables.

4. Start the backend server:
    ```bash
    npm start
    ```

### Frontend Setup

1. Install dependencies and start the React frontend:
    ```bash
    cd ../front-end
    npm install
    npm start
    ```

## Testing

### Frontend Testing

- We use Jest for testing React components. To run the tests, navigate to the `front-end` directory and execute:
    ```bash
    npm test
    ```

### Backend Testing

- We use Jest and Supertest for testing backend functionality, including CRUD operations, schema validations, JWT tokens, authentication, and utilities. To run the tests, navigate to the `server` directory and execute:
    ```bash
    npm test
    ```

### API Testing

- API testing is performed using Postman. Import the collection from the `postman` directory and run the tests.

### Load/Stress Testing

- We use Locust for load and stress testing. Navigate to the `locust` directory and run:
    ```bash
    locust -f load_stress_testing.py
    ```

## Automated Testing

- We have implemented automated testing using GitHub Actions. The configuration files for the workflows are located in the `.github/workflows` directory. These workflows run the tests automatically on every push and pull request.

