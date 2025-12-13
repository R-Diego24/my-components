# @r-diego24/my-components

A React component library built with Tailwind CSS and TypeScript.

## Installation

```bash
npm install @r-diego24/my-components
```

Then import the styles in your app entry point:

```tsx
import '@r-diego24/my-components/styles.css';
```

## Components

### UI Components
- **Button** – Primary, secondary, outline, ghost variants with icon support
- **Card** – With neon glow effects (green, blue, purple) and link support
- **Badge** – Status indicators
- **Title** – Headings h1-h6 with semantic levels
- **Text** – Paragraph component with size/weight variants
- **Link** – Styled anchor with icon support
- **Icon** – FontAwesome wrapper
- **Img** – Accessible image with lazy loading

### Layout Components
- **Section** – Page sections with background and max-width options
- **FlexWrapper** – Flexbox container with gap, alignment, direction
- **GridWrapper** – 12-column grid system

## Usage

```tsx
import { Button, Card, Title, Text } from '@r-diego24/my-components';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <Card variant="neon">
      <Title headingLevel={2}>My Project</Title>
      <Text>A cool project description.</Text>
      <Button leftIcon={faRocket}>Launch</Button>
    </Card>
  );
}
```

## Button variants

```tsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>

// With icons
<Button leftIcon={faRocket}>Launch</Button>
<Button rightIcon={faArrowRight}>Next</Button>
```

## Card variants

```tsx
<Card variant="default">White card</Card>
<Card variant="neon">Green neon glow on hover</Card>
<Card variant="neonBlue">Blue neon glow</Card>
<Card variant="neonPurple">Purple neon glow</Card>

// Clickable card
<Card variant="neon" href="/project">Click me</Card>
```

## Layout example

```tsx
<Section background="dark" maxWidth="xl" padding="lg">
  <GridWrapper gap="lg">
    <Card className="col-span-4">Project 1</Card>
    <Card className="col-span-4">Project 2</Card>
    <Card className="col-span-4">Project 3</Card>
  </GridWrapper>
</Section>
```

## Development

```bash
# Install dependencies
pnpm install

# Run Storybook
pnpm storybook

# Build library
pnpm build:lib

# Run tests
pnpm test
```

## Tech Stack

- React 18+
- TypeScript
- Tailwind CSS
- class-variance-authority
- FontAwesome
- Storybook

## License

MIT
