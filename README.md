# E-Commerce Platform

Live Demo: https://mechanical-keyboard-shop-mu.vercel.app/

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Usage](#usage)
- [Contribution Guidelines](#contribution-guidelines)
- [License](#license)
- [Contact Information](#contact-information)

## Overview

The **E-Commerce Platform** is a full-featured web application built using the MERN (MongoDB, Express, React, Node.js) stack. This platform allows users to browse, search, filter, and purchase products efficiently. It features a modern and responsive design with various animations and gradients to enhance user experience.

## Features

- **Search Functionality**: Users can search for products by name.
- **Filter and Sorting**: Users can filter products by price range and sort them by price (low to high, high to low).
- **Shopping Cart**: Users can add products to their cart, update quantities, and remove items.
- **Order Management**: Users can view order history and order details.
- **Page Refresh Warning**: Alerts users about potential data loss when refreshing the page with items in the cart.
- **Informative Pages**: Attractive About Us and Contact Us pages with basic animations.
- **Responsive Design**: Optimized for various screen sizes and devices.

## Technologies Used

### Frontend:

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript.
- **Redux**: State management library.
- **Chakra UI**: A modular and accessible component library.
- **React Hook Form**: For managing form state.

### Backend:

- **Node.js**: JavaScript runtime.
- **Express**: Web framework for Node.js.

### Database:

- **MongoDB**: NoSQL database.

### Tools:

- **Axios**: Promise-based HTTP client.
- **ESLint and Prettier**: Code quality tools.

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (locally installed or cloud instance)

### Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/Mahmudmhb/Mechanical-Mechanical-Keyboard-Shop.git
   ```
   cd your-repo-name
   Install backend dependencies:

```sh Copy code
cd backend
npm install
```

Install frontend dependencies:

```sh Copy code
cd ../frontend

npm install
```

Running the Application

Start MongoDB:
Make sure MongoDB is running. If using a local instance, start MongoDB using:

```sh Copy code
mongodb
Start the backend server:
```

```sh Copy code
cd backend
npm start
```

Start the frontend development server:

```sh Copy code
cd ../frontend
npm start
```

Access the application:
Open your browser and navigate to http://localhost:3000.
