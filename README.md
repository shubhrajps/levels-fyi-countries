# Countries Project

The Countries Project is a Next.js application that allows users to explore information about various countries around the world. It features a user-friendly interface for browsing country details, including flags, capitals, populations, and more.

## Features

- Display a grid of countries with their flags and basic information
- Allow users to click on a country to view detailed information
- Support for searching countries by name
- Responsive design that adapts to different screen sizes
- API route for fetching country data from a REST API
- Lazy loading of images for improved performance
- Skeleton loading screens while data is being fetched
- Unit tests for components using Jest and React Testing Library
- CI/CD pipeline for automated testing and deployment

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/countries-project.git


2. Navigate to the project directory:

```bash
cd countries-project
```

3. Install the dependencies
```bash
npm install
```

4. Run the development server
```bash
npm run dev
```

5. Run the tests
```bash
npm test
```

### Assumptions
1. **Availability of Country Data:** 
The project assumes that the country data will be available and accessible from the API endpoint without any downtime. It is expected that the data source for countries will remain stable and that there will be no significant changes to the API structure.

2. **Performance Expectations:**
The project assumes that users will have a reliable internet connection when accessing the application. The performance of the country loading and transitions is optimized for average network conditions, but users on slower connections may experience delays.

### Built With
- **Next.js** - React framework for building server-rendered applications
- **React** - JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Jest** - JavaScript testing framework
- **React Testing Library** - Library for testing React components