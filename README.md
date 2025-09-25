# My Personal Portfolio

This is a personal developer portfolio featuring a clean UI, smooth animations, and a functional contact form. It's built with React, TypeScript, and Vite.

## Features

* **Clean UI & Smooth Animations**: A modern and visually appealing design with smooth transitions and animations.
* **Functional Contact Form**: Includes a working contact form for easy communication.
* **Responsive Design**: The portfolio is fully responsive, ensuring a great experience on all devices.

## Tech Stack

This project is built with a modern tech stack that includes:

* **React**: A JavaScript library for building user interfaces.
* **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
* **Vite**: A fast build tool that provides a quicker and leaner development experience for modern web projects.
* **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
* **EmailJS**: A service to send emails directly from JavaScript, without any server-side code.
* **GitHub Pages**: The project is deployed and hosted on GitHub Pages.

## Project Structure

The project is organized into the following main directories:

* **`public`**: Contains static assets like images and the main `index.html` file.
* **`src`**: Contains the main source code of the application.
    * **`components`**: Reusable UI components used throughout the application.
    * **`data`**: Contains the portfolio data, such as project details, skills, and experience.
    * **`hooks`**: Custom React hooks for managing state and side effects.
    * **`pages`**: Different pages of the application, like the project details page.
    * **`styles`**: CSS files and styling-related code.
    * **`types`**: TypeScript type definitions.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have Node.js and npm installed on your machine.

### Installation

1.  Clone the repo
    ```sh
    git clone [https://github.com/your_username/your_project.git](https://github.com/your_username/your_project.git)
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```
3.  Create a `.env` file in the root of your project and add the following environment variables:
    ```
    VITE_SERVICE_ID=your_emailjs_service_id
    VITE_TEMPLATE_ID=your_emailjs_template_id
    VITE_PUBLIC_KEY=your_emailjs_public_key
    ```
4.  Start the development server
    ```sh
    npm run dev
    ```

## Usage

The portfolio showcases the following sections:

* **Home**: A brief introduction with a hero image.
* **About**: A more detailed description of your skills and experience.
* **Skills**: A list of your technical skills.
* **Education**: Your educational background.
* **Experience**: Your work experience.
* **Projects**: A gallery of your projects with links to live demos and source code.
* **Contact**: A form to get in touch with you.

## Deployment

The project is deployed to GitHub Pages using a GitHub Actions workflow defined in `.github/workflows/deploy.yml`. The workflow is triggered on every push to the `main` branch and automatically builds and deploys the application.