# Programming Paradigms: Procedural vs OOP vs Functional

A side-by-side comparison using the same problem in JS.

This repository demonstrates how the same problem can be solved in three different programming paradigms:

- Procedural Programming
- Object-Oriented Programming (OOP)
- Functional Programming (FP)

Each paradigm uses the same data and the same set of tasks so you can clearly see what changes (and what doesn’t) when switching programming styles.

## Problem Statement

We work with an array of products, each containing:

```js
{
  name: string,
  price: number,
  category: string,
  stock: number,
  rating: number
}
```

We implement three operations:

- Get affordable product names
- Get average rating for a category
- Get inventory value by category

## Repository Structure

```md
/
├── procedural/
│ └── index.js
│
├── oop/
│ └── index.js
│
├── functional/
│ └── index.js
│
└── README.md
```

## Paradigm Overview

### Procedural

A step-by-step sequence of actions using loops, variables, and mutable state.

- Uses for loops
- Builds arrays by pushing elements
- Modifies variables directly
- Easy to read and reason about step-by-step

### Object-Oriented

Encapsulates data and behavior inside classes.

- Uses Product and Inventory classes
- Methods operate on internal state
- Encourages modularity and reusability
- Mirrors how many large systems are structured

### Functional

Uses pure functions, immutability, and higher-order array methods.

- Uses map, filter, reduce
- Avoids mutation and side effects
- Encourages declarative, pipeline-style logic
- Shows the true power of JavaScript’s built-in functional utilities

## Learning objectives

By exploring this repository, you will:

- Understand how programming paradigms influence code structure
- See how the same problem leads to different implementations
- Learn to use higher-order functions in a practical scenario
- Compare the strengths and trade-offs of each style
- Gain intuition for choosing a paradigm based on requirements
