
# Cooking Class Booking App — Architecture

## Project Overview

A full-stack web application where students can browse cooking classes, register for available seats, and manage their bookings. Administrators can manage classes and review registrations.

## Technology Stack

- Next.js 16 — Application framework
- TypeScript — Type-safe application code
- Tailwind CSS — Styling
- Supabase Auth — Authentication (planned)
- Supabase PostgreSQL — Database (planned)
- Vercel — Deployment (planned)

## Application Roles

### Student
- Create an account and sign in
- Browse available cooking classes
- Register for a class
- View and cancel their own bookings

### Administrator
- Create and edit cooking classes
- View class registrations
- Review basic booking statistics

## Booking Rules

- Users must be authenticated to reserve seats.
- A student cannot book the same class twice.
- A class cannot exceed its available capacity.
- Students can manage only their own bookings.
- Administrative actions require administrator authorization.
- Capacity enforcement must happen in the database transaction, not only in the interface.

## Initial Scope

The first version will not include payments, waitlists, or a multi-instructor marketplace.

## Development Status

Project initialized with Next.js. Authentication, database, booking logic, and dashboard are not yet implemented.
