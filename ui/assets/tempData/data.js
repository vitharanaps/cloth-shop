export const testProducts = [
  {
    id: "1",
    name: "T-Shirt",
    description: "Comfortable cotton t-shirt",
    price: 10.0,
    has_variants: true,
    image_url:
      "https://images.unsplash.com/photo-1533399710066-c33de66fe6bb?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    variants: [
      { id: "1-1", size: "S", color: "Red", price: 12.0, stock: 10 },
      { id: "1-2", size: "M", color: "Red", price: 12.5, stock: 8 },
      { id: "1-3", size: "L", color: "Red", price: 13.0, stock: 5 },
      { id: "1-4", size: "S", color: "Blue", price: 12.0, stock: 6 },
      { id: "1-5", size: "M", color: "Blue", price: 12.5, stock: 4 },
    ],
  },
  {
    id: "2",
    name: "Hoodie",
    description: "Warm fleece hoodie",
    price: 20.0,
    has_variants: true,
    image_url:
      "https://images.unsplash.com/photo-1533399710066-c33de66fe6bb?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    variants: [
      { id: "2-1", size: "M", color: "Black", price: 22.0, stock: 12 },
      { id: "2-2", size: "L", color: "Black", price: 23.0, stock: 10 },
      { id: "2-3", size: "M", color: "Gray", price: 22.0, stock: 8 },
      { id: "2-4", size: "L", color: "Gray", price: 23.0, stock: 6 },
    ],
  },
  {
    id: "3",
    name: "Sneakers",
    description: "Stylish running shoes",
    price: 30.0,
    has_variants: true,
    image_url:
      "https://images.unsplash.com/photo-1533399710066-c33de66fe6bb?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    variants: [
      { id: "3-1", size: "8", color: "White", price: 32.0, stock: 15 },
      { id: "3-2", size: "9", color: "White", price: 33.0, stock: 10 },
      { id: "3-3", size: "8", color: "Black", price: 32.0, stock: 8 },
      { id: "3-4", size: "9", color: "Black", price: 33.0, stock: 6 },
    ],
  },
  {
    id: "4",
    name: "Cap",
    description: "Adjustable cap with logo",
    price: 8.0,
    has_variants: true,
    image_url:
      "https://images.unsplash.com/photo-1533399710066-c33de66fe6bb?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    variants: [
      { id: "4-1", size: "5", color: "Red", price: 8.5, stock: 20 },
      { id: "4-2", size: "6", color: "Blue", price: 8.5, stock: 15 },
      { id: "4-3", size: "7", color: "Green", price: 8.5, stock: 10 },
    ],
  },
  {
    id: "5",
    name: "Backpack",
    description: "Durable travel backpack",
    price: 25.0,
    has_variants: false,
    image_url:
      "https://images.unsplash.com/photo-1533399710066-c33de66fe6bb?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 30, // Added stock for non-variant product
  },
  {
    id: "6",
    name: "Jacket",
    description: "Waterproof outdoor jacket",
    price: 45.0,
    has_variants: true,
    image_url:
      "https://images.unsplash.com/photo-1533399710066-c33de66fe6bb?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    variants: [
      { id: "6-1", size: "S", color: "Green", price: 47.0, stock: 10 },
      { id: "6-2", size: "M", color: "Green", price: 47.5, stock: 8 },
      { id: "6-3", size: "S", color: "Black", price: 47.0, stock: 5 },
      { id: "6-4", size: "M", color: "Black", price: 47.5, stock: 4 },
    ],
  },
  {
    id: "7",
    name: "Jacket 3",
    description: "Waterproof outdoor jacket",
    price: 45.0,
    has_variants: false,
    image_url:
      "https://images.unsplash.com/photo-1533399710066-c33de66fe6bb?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 25,
  },
];
