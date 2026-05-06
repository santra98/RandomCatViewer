# CatPeek

CatPeek is a small React app that fetches one random cat breed at a time and turns it into a cozy little profile card. The idea is simple: open the app, meet a cat, learn a few things about it, and tap for another one whenever you feel like it.

## App flow

This app is built around a very straightforward user flow:

1. The app loads and immediately asks the API for a random cat.
2. While that request is in progress, the user sees a loading state instead of an empty screen.
3. Once the data arrives, the full cat card is rendered.
4. The left side focuses on the cat image and actions.
5. The right side gives the breed name, alternate names, quick stats, temperament, description, and personality traits.
6. If the user clicks `Show Me Another Cat`, the current card is cleared and the same flow starts again with a new API request.
7. If the request fails, the app switches to a simple error state with a retry button.

## Main UI sections

### Header

The header introduces the app and sets the tone before the main card appears.

### Loading state

Before data is ready, a loading skeleton keeps the interface feeling alive.

### Cat card

This is the main part of the app.

- The left panel shows the cat image, breed id, and action buttons.
- The right panel shows the breed information in a scrollable detail section.

### Error state

If the API request fails, the app shows a friendly fallback message and a `Try again` button so the user can recover quickly.

### Footer

The footer gives credit to FreeAPI and closes the page with the same playful tone as the rest of the app.

## Tech stack

- React
- Vite
- Tailwind CSS

## Api Source

Cat data is fetched from:

`https://api.freeapi.app/api/v1/public/cats/cat/random`
