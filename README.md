# Shiboshreeroylang Animation Library

A powerful React animation library built with Framer Motion, providing beautiful and performant animations for modern web applications.

## 🚀 Features

- 🎨 Beautiful, customizable animations
- 📱 Responsive and mobile-friendly
- ♿ Accessible by default
- 🎮 Interactive components
- 🔧 Highly customizable
- 📦 Tree-shakeable
- 💪 TypeScript support

## 📦 Installation

```bash
npm install @framer/motion react-spring @use-gesture/react lucide-react
```

## 🎯 Quick Start

```tsx
import { AnimatedContainer, TextWriter, SpringText } from 'shiboshreeroylang';

function App() {
  return (
    <div>
      <TextWriter text="Welcome to our website!" />
      <SpringText>Hover over me!</SpringText>
      <AnimatedContainer animation="fade">
        <p>This content fades in and out</p>
      </AnimatedContainer>
    </div>
  );
}
```

## 📚 Components

### Text Animations

#### `<TextWriter />`
Animated typing effect.

```tsx
<TextWriter 
  text="Hello, World!" 
  speed={50} 
  cursor={true}
/>
```

#### `<SpringText />`
Text with spring animation on hover.

```tsx
<SpringText 
  className="text-2xl"
  stiffness={100}
  damping={10}
>
  Hover over me!
</SpringText>
```

### Containers

#### `<AnimatedContainer />`
Container with various animation options.

```tsx
<AnimatedContainer
  animation="fade" // 'fade' | 'slide' | 'scale' | 'rotate'
  isVisible={true}
  duration={0.3}
>
  <div>Content</div>
</AnimatedContainer>
```

### Loaders

#### `<CircleLoader />`
Spinning circle loader.

```tsx
<CircleLoader
  size={40}
  color="#3B82F6"
  thickness={4}
  speed={1.2}
/>
```

#### `<PulseLoader />`
Pulsing dots loader.

```tsx
<PulseLoader
  size={12}
  color="#3B82F6"
  count={3}
/>
```

### GUI Elements

#### `<ProgressBar />`
Animated progress bar.

```tsx
<ProgressBar
  progress={75}
  height={6}
  color="#3B82F6"
  backgroundColor="#E5E7EB"
/>
```

#### `<Slider />`
Interactive slider component.

```tsx
<Slider
  min={0}
  max={100}
  value={50}
  onChange={(value) => console.log(value)}
/>
```

### Forms

#### `<AnimatedForm />`
Form with animated inputs and validation.

```tsx
const fields = [
  { name: 'email', label: 'Email', type: 'email', required: true },
  { name: 'password', label: 'Password', type: 'password', required: true }
];

<AnimatedForm
  fields={fields}
  onSubmit={(data) => console.log(data)}
/>
```

### Interactive Elements

#### `<Cube3D />`
3D cube with mouse interaction.

```tsx
<Cube3D
  size={200}
  colors={['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899']}
/>
```

#### `<Carousel />`
Animated carousel/slider.

```tsx
const items = [
  <img src="image1.jpg" alt="Slide 1" />,
  <img src="image2.jpg" alt="Slide 2" />,
];

<Carousel
  items={items}
  autoPlay={true}
  interval={3000}
/>
```

## 🎨 Customization

Most components accept the following common props:
- `className`: Custom CSS classes
- `style`: Inline styles
- Color customization
- Size adjustments
- Animation timing
- Custom behaviors

## 🔧 Advanced Usage

### Using the Timeline Hook

```tsx
function AnimationSequence() {
  const timeline = useTimeline();

  const playSequence = () => {
    timeline.addStep({
      duration: 1000,
      animation: () => console.log('First animation')
    });
    timeline.addStep({
      duration: 500,
      animation: () => console.log('Second animation')
    });
    timeline.play();
  };

  return <button onClick={playSequence}>Play Animation</button>;
}
```

## 📝 License

MIT © [ShiboshreeRoy]