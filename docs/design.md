# The Flavor Studio — Design Specification

**Project:** Cooking Class Booking App  
**Design status:** Approved visual direction; implementation pending  
**Working brand name:** The Flavor Studio  
**Version:** 1.0

---

## 1. Project Overview

The Flavor Studio is a full-stack cooking class booking application where visitors can discover cooking experiences, register for classes, and manage their reservations.

The visual experience combines a modern culinary studio, an energetic cooking club, and the welcoming atmosphere of a community kitchen.

The website should make visitors excited to learn how to prepare delicious food, from savory dishes to sweet desserts.

### Primary Goals

- Create an attractive, memorable cooking class website.
- Encourage visitors to explore and register for classes.
- Provide a simple, intuitive booking experience.
- Showcase modern frontend development and interactive design.
- Maintain accessibility, responsiveness, and performance.

## 2. Brand Identity

### Working Name

**The Flavor Studio**

This is the project's working design identity, not a finalized registered business name.

### Brand Personality

- Creative and energetic
- Welcoming and approachable
- Modern and expressive
- Food-focused and visually rich
- Professional without feeling corporate

### Design Philosophy

Food is the star of the experience.

The design should use appetizing imagery, confident typography, intentional movement, and engaging layouts without sacrificing usability.

Avoid generic corporate templates, unnecessary gradients, excessive decoration, and animations that interfere with booking.

## 3. Color Palette

| Color | Hex Code | Purpose |
|---|---|---|
| Tomato Red | `#D94332` | Primary actions, accents, highlights |
| Butter Yellow | `#F5CC57` | Feature sections, playful details |
| Cream | `#FFF6E9` | Main page background |
| Espresso | `#29211D` | Headlines, body text, dark sections |
| White | `#FFFFFF` | Cards and contrasting surfaces |

### Color Guidelines

- Use cream as the dominant background.
- Use tomato red for prominent booking buttons and calls to action.
- Use butter yellow selectively to introduce energy and contrast.
- Use espresso for readable text and dark visual sections.
- Avoid using too many competing colors.
- Verify text and button contrast against WCAG accessibility requirements.

## 4. Typography

### Heading Style

Use bold, expressive typography with a distinct editorial personality.

Headlines should be large, confident, and memorable.

### Body Style

Use clean, readable sans-serif typography for descriptions, navigation, forms, and booking information.

### Typography Guidelines

- Establish a consistent heading hierarchy.
- Avoid excessive font variations.
- Use responsive font sizes.
- Maintain comfortable line spacing.
- Keep essential information easy to scan.

Final font families will be selected during implementation.

## 5. Homepage Layout

### Section 1 — Navigation

Include:

- The Flavor Studio wordmark
- Home
- Explore Classes
- My Bookings
- Sign In / Account

The navigation should be responsive and keyboard accessible.

### Section 2 — Video-First Hero

**Layout:** Split-screen hero.

**Left side:**
- Large, expressive headline
- Short introductory description
- Primary "Explore Classes" button
- Secondary action if appropriate

**Right side:**
- Cinematic, appetizing cooking video
- Close-up food preparation
- Rich colors and appealing food textures

Suggested working headline:

**Good food. Great company.**

Suggested supporting copy:

*From savory favorites to sweet creations, discover cooking classes made for learning, creating, and enjoying every bite.*

#### Video Requirements

- Muted autoplay when supported
- Seamless looping
- Plays inline on mobile where supported
- No automatic audio playback
- Optimized for fast loading
- Poster image displayed while video loads or when playback is unavailable
- Respect reduced-motion preferences
- Avoid important text embedded inside the video
- Provide a pause control when needed for accessibility

Use original or appropriately licensed video assets.

Do not introduce large video files without considering performance.

### Section 3 — Moving Feature Strip

A playful horizontal strip highlighting cooking experiences.

Example labels:

- Pasta Nights
- Baking Workshops
- Sweet Treats
- Kitchen Favorites

Motion should be subtle and should not interfere with reading.

### Section 4 — Explore Cooking Classes

Display upcoming cooking classes using visually rich cards.

Each card may contain:

- Food photograph
- Class title
- Short description
- Date and time
- Duration
- Difficulty level, when available
- Available seats
- View Details button

Class information must eventually come from the database rather than remain hardcoded.

### Section 5 — Savory and Sweet Categories

Feature two major categories.

**Savory**
- Pasta
- Pizza
- Comfort food
- Other savory cooking experiences

**Sweet**
- Cakes
- Cookies
- Pastries
- Other dessert experiences

These are example categories and dishes, not confirmed scheduled classes.

Use large food imagery with clear navigation to relevant class listings.

### Section 6 — Immersive Food Feature

Include a visually striking full-width food section.

Potential effects:

- Subtle parallax scrolling
- Layered text and imagery
- Gentle scroll-triggered reveals

The effect should create depth without making the page difficult to navigate.

### Section 7 — How It Works

Explain the booking experience in three simple steps:

1. Explore available classes.
2. Choose a class and reserve a seat.
3. View and manage your booking.

### Section 8 — Final Call to Action

Encourage visitors to browse upcoming classes.

Example:

**Your next favorite dish starts here.**

Button: **Find Your Class**

### Section 9 — Footer

Include:

- Brand name
- Main navigation
- Relevant policy links when implemented
- Copyright information

Do not invent contact details, testimonials, instructor credentials, or business claims.

## 6. Motion and Interaction Design

Motion is a defining feature of The Flavor Studio.

### Video-First Experience

The homepage hero should feature real cooking footage or appropriately licensed footage.

Examples:

- Pasta being tossed in sauce
- Chocolate being poured over dessert
- Dough being kneaded
- Fresh ingredients being prepared

### Parallax Scrolling

Use subtle parallax effects on selected image sections.

Guidelines:

- Avoid excessive movement.
- Do not apply parallax to every section.
- Prioritize smooth scrolling and readability.
- Reduce or disable motion for users requesting reduced motion.
- Use a simpler presentation on devices where parallax harms performance.

### Class Card Interactions

- Gentle image zoom on hover
- Clear hover and focus states
- Smooth, restrained transitions
- Visible booking actions

### Scroll Animations

Sections may gently reveal as they enter the viewport.

Use lightweight CSS and browser APIs where appropriate.

Add an animation library only if the design genuinely requires one.

### Motion Performance

- Avoid unnecessary JavaScript animations.
- Prefer transform and opacity animations.
- Optimize images and videos.
- Test mobile performance.
- Avoid layout shifts.
- Respect `prefers-reduced-motion`.

## 7. Student Experience

### Homepage

Introduce the brand and highlight upcoming classes.

### Explore Classes

Allow visitors to browse available cooking classes.

Future filtering options may include:

- Savory
- Sweet
- Date
- Availability

Filters should only be added when the supporting data and functionality exist.

### Class Details

Display:

- Class name
- Description
- Food imagery
- Scheduled date and time
- Available seats
- Booking action

### Authentication

Students should be able to:

- Create an account
- Sign in
- Sign out

Authentication will be implemented using Supabase Auth.

### My Bookings

Authenticated students should be able to:

- View their reservations
- Review upcoming classes
- Cancel eligible reservations

Booking information must be private to the relevant student.

## 8. Admin Experience

The admin dashboard should share the application's visual identity while prioritizing clarity and efficiency over decorative animations.

### Dashboard

Display basic metrics such as:

- Total classes
- Total registrations
- Upcoming classes
- Available seats

Metrics must use real application data once implemented.

### Class Management

Administrators should be able to:

- Create classes
- Edit class details
- View registrations
- Manage availability

### Security

Admin functionality must be protected through server-side authorization and database access policies.

Hiding admin navigation is not sufficient security.

## 9. Booking Experience

Booking should be simple and trustworthy.

### Booking Rules

- Users must sign in to reserve seats.
- Duplicate active bookings must be prevented.
- Classes must not exceed their capacity.
- Students may access only their own booking information.
- Capacity enforcement must occur safely on the server/database side.

### Booking Feedback

Provide clear states for:

- Loading
- Successful booking
- Already booked
- Class fully booked
- Booking cancellation
- Unexpected errors

Do not display a successful booking message until the operation succeeds.

## 10. Responsive Design

The application must work across desktop, tablet, and mobile devices.

### Desktop

- Split-screen hero
- Spacious editorial layouts
- Multiple class cards per row
- Carefully selected parallax effects

### Tablet

- Adjusted spacing and card layouts
- Responsive navigation
- Simplified animation where appropriate

### Mobile

- Stacked hero content
- Optimized video or poster image
- Easy-to-tap booking buttons
- Single-column class cards where appropriate
- Minimal motion when necessary for performance

## 11. Accessibility

- Semantic HTML
- Logical heading structure
- Keyboard-accessible navigation and controls
- Visible focus indicators
- Descriptive form labels
- Accessible validation messages
- Sufficient color contrast
- Reduced-motion support
- Video playback controls where required
- Appropriate alternative text for meaningful images

## 12. Media Guidelines

Use high-quality, realistic food photography and video.

### Preferred Imagery

- Close-up food textures
- Natural or cinematic lighting
- Vibrant ingredients
- Hands preparing food
- Beautifully plated savory dishes
- Appealing desserts

### Avoid

- Generic corporate stock imagery
- Unrelated food photos
- Low-resolution assets
- Excessive visual effects
- Unlicensed media
- Fake instructor or student photographs presented as real people associated with the app

Sample imagery and classes used during development should be identified as demonstrations.

## 13. Technology Considerations

### Frontend

- Next.js 16
- React
- TypeScript
- Tailwind CSS

### Backend — Planned

- Supabase Auth
- Supabase PostgreSQL
- Server-side booking validation

### Deployment — Planned

- Vercel

### Media

- Next.js image optimization where appropriate
- Optimized video assets
- Poster images and fallbacks
- Lazy loading for below-the-fold content

## 14. Initial Development Priorities

1. Establish design tokens, typography, and layout.
2. Build the responsive homepage.
3. Implement the video-first hero with a reliable fallback.
4. Add savory and sweet class previews.
5. Build the class listing and detail pages.
6. Connect Supabase authentication and database.
7. Implement secure booking functionality.
8. Build the protected admin dashboard.
9. Add and refine animations.
10. Test accessibility, performance, and booking behavior.
11. Deploy and test with invited users.

## 15. Out of Scope for the Initial Version

- Online payments
- Waitlists
- Multi-instructor marketplace
- Complex messaging systems
- Advanced analytics dashboards
- Unnecessary animation frameworks

These features may be considered after the core booking experience is functional.

## 16. Development Status

**Approved:**
- Visual direction
- Color palette
- Split-screen homepage
- Video-first hero
- Savory and sweet categories
- Parallax and selective animations
- Responsive and accessible design principles

**Not yet implemented:**
- Custom homepage
- Video assets
- Class listings
- Authentication
- Database
- Booking functionality
- Admin dashboard

This document defines the intended design. It does not claim these features are already functional.
