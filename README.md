# Ecommerce Website

A modern and responsive E-commerce website built with React, TypeScript, Tailwind CSS, and Supabase.

## Overview

This project is a full-stack E-commerce website designed to provide a smooth and user-friendly shopping experience. It includes a product catalog, product details, shopping cart, and Supabase integration for database management and image storage.

## Technologies Used

- **React 19** – UI development
- **TypeScript** – Type safety
- **Tailwind CSS** – Styling and responsive design
- **Supabase** – Database and Storage
- **React Router** – Navigation
- **Lucide React** – Icons
- **Vite** – Development and build tool

## Features

- Responsive design for desktop, tablet, and mobile.
- Product catalog with product information.
- Product details pages.
- Shopping cart functionality.
- Add and remove products from the cart.
- Update product quantities.
- Automatic cart total calculation.
- Supabase database integration.
- Supabase Storage for product images.
- About and Contact pages.

## Project Structure

```text
src/
├── assets/
├── components/
├── context/
├── pages/
├── App.tsx
├── main.tsx
├── index.css
└── supabase.ts

scripts/
└── migrate-images.mjs
```

## Getting Started

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
```

### 2. Navigate to the project folder

```bash
cd ecommerce-website
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_KEY=your_supabase_publishable_or_anon_key
```

Replace the placeholder values with your Supabase project credentials.

### 5. Run the development server

```bash
npm run dev
```

## Security

- Environment variables are excluded from Git.
- Supabase Service Role Key is kept private and must never be exposed in frontend code.
- Database access should be protected using Row Level Security (RLS).

## Author

Developed as a personal E-commerce project using modern frontend technologies and Supabase.
