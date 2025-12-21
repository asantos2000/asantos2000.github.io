---
title: "Welcome to my Developer Blog"
description: "Setting up a modern blog with Astro, Tailwind, and GitHub Pages."
pubDate: "Dec 21 2025"
heroImage: "../../assets/blog-placeholder-3.jpg"
---

Welcome to my new blog! This site is built using **Astro**, **Tailwind CSS**, and is hosted on **GitHub Pages**.

## Syntax Highlighting Test

Here are some code snippets in the languages I will be writing about.

### Python
```python
def greet(name: str) -> str:
    return f"Hello, {name}!"

print(greet("Developer"))
```

### TypeScript
```typescript
interface User {
  id: number;
  name: string;
}

const getUser = (id: number): User => {
  return { id, name: "AD Santos" };
};
```

### GDScript (Godot)
```gdscript
extends Sprite2D

func _ready():
    print("Hello from Godot!")

func _process(delta):
    rotation += 1.0 * delta
```

### Dart (Flutter)
```dart
void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Center(child: Text("Hello Flutter")),
      ),
    );
  }
}
```

## Why Astro?

Astro is fantastic for content-heavy sites like blogs. It ships zero JavaScript by default, making it incredibly fast.

Stay tuned for more posts!
