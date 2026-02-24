# Frontend Mentor - Single Price Grid Component

![Design preview for the Single Price Grid Component coding challenge](assets/desktop-design.jpg)

## Overview

This is my solution to the [Single Price Grid Component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/single-price-grid-component-5ce41129d0ff). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

---

## The Challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See a hover state on the Sign Up call-to-action button

---

## My Solution

- **Live Site:** [Add your live site URL here]
- **Repository:** [Add your repository URL here]

---

## Screenshots

### Desktop

![Desktop Design](assets/desktop-design.jpg)

### Mobile

![Mobile Design](assets/mobile-design.jpg)

---

## Built With

- Semantic HTML5
- CSS Custom Properties (variables)
- CSS Grid
- Flexbox
- Mobile-first workflow
- [Karla](https://fonts.google.com/specimen/Karla) — Google Font

---

## What I Learned

This was my first hands-on challenge using **CSS Grid** after completing the Grid module of the Meta Front-End Developer course. Key concepts I practised:

### CSS Grid for layout

Using `grid-template-columns` and `grid-column` to create a two-column card layout where the header spans both columns:

```css
.main-container {
  display: grid;
  grid-template-columns: 1fr; /* mobile default */
}

@media screen and (min-width: 600px) {
  .main-container {
    grid-template-columns: repeat(2, 1fr);
  }
  header {
    grid-column: 1 / span 2;
  }
}
```

### Flexbox for internal spacing

Using `flex-direction: column` and `gap` instead of individual margins for cleaner, more maintainable spacing:

```css
.signup-section {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}
```

### CSS Custom Properties

Building a full design token system for colors, typography, spacing and border radius before writing any component styles — making the codebase consistent and easy to update.

### Overflow hidden for border radius

Applying `overflow: hidden` on the parent grid container to clip child backgrounds to the card's rounded corners — a useful trick when child elements have their own background colors.

### Mobile-first approach

Writing base styles for mobile (single column) and using `min-width` media queries to scale up to the desktop two-column layout.

---

## Design Decisions

- Added a slightly lighter teal (`--clr-teal-400`) for the "Why Us" section since the design shows a subtle shade difference not covered in the official style guide
- Added a darker green (`--clr-green-500`) for the button hover state for better interactivity feedback
- Used `focus-visible` on the button for improved keyboard accessibility
- Used `min-height: 100vh` instead of `height: 100vh` on the body to prevent content clipping on smaller screens

---

## Style Guide

| Token          | Value                |
| -------------- | -------------------- |
| Teal 500       | `hsl(179, 62%, 43%)` |
| Teal 400       | `hsl(179, 62%, 47%)` |
| Green 400      | `hsl(71, 73%, 54%)`  |
| Teal 100       | `hsl(204, 43%, 93%)` |
| Gray 500       | `hsl(218, 22%, 67%)` |
| Font           | Karla, 400 & 700     |
| Base font size | 16px                 |

---

## Author

- Frontend Mentor — [@your-username](https://www.frontendmentor.io/profile/your-username)
- GitHub — [@your-username](https://github.com/your-username)

---

## Acknowledgments

Built as part of the **Meta Front-End Developer Certificate** course on Coursera, using Frontend Mentor challenges to reinforce CSS Grid and Flexbox concepts learned in the course.
