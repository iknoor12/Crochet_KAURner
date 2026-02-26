# Crochet Kaurner - Next.js 14 Project

A beautiful, responsive e-commerce website for handmade crochet creations built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. The design features a warm, inviting color palette inspired by crochet and handmade aesthetics.

## 🎨 Design Features

### Color Palette
The project includes a custom crochet-inspired color palette with:
- **Warm Beiges** - Soft, neutral tones
- **Cream Tones** - Light, welcoming backgrounds
- **Terracotta & Rust** - Warm accent colors
- **Soft Pastels** - Peach, lavender, mint for subtle accents
- **Dusty Tones** - Rose, mauve, sage for muted elegance

### Components
- **Sticky Navbar** - Responsive navigation with mobile menu
- **Comprehensive Footer** - Contact info, links, newsletter signup
- **Hero Section** - Eye-catching landing section
- **Features Section** - Highlight key selling points
- **CTA Section** - Call-to-action for conversions

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
crochet_kaurner/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with Navbar & Footer
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles & Tailwind imports
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky navigation component
│   │   └── Footer.tsx          # Comprehensive footer component
├── public/                     # Static assets
├── package.json
├── tsconfig.json              # TypeScript configuration
├── tailwind.config.ts         # Tailwind CSS configuration
├── next.config.ts             # Next.js configuration
└── postcss.config.js          # PostCSS configuration

```

## 🛠️ Technologies Used

- **Next.js 14** - React framework with built-in routing
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **PostCSS** - CSS transformation tool

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Mobile (sm: 640px)
- Tablet (md: 768px, lg: 1024px)
- Desktop (xl: 1280px, 2xl: 1536px)

## 🧵 Add Your Own Products (Name + INR + Image)

Use this workflow whenever you create a new item:

1. Add product image file to [public/products](public/products)
2. Open [src/data/products.ts](src/data/products.ts)
3. Add a new object in `productCatalog` with:
  - `id` (unique string)
  - `title`
  - `price` (in INR)
  - `category` (`Wearables`, `Home Decor`, `Toys & Gifts`, `Accessories`)
  - `image` (example: `/products/my-new-item.jpg`)
4. Optionally set `featured: true` to show it on home page best-sellers

Notes:
- Currency is now formatted as INR automatically across product cards and cart.
- If the image path is wrong or missing, a placeholder image block is shown.

## 🎯 Key Features

### Navbar
- Sticky positioning for always-visible navigation
- Mobile-friendly hamburger menu
- Smooth animations and transitions
- Brand logo and CTA button

### Footer
- Multiple column layout for different sections
- Contact information with icons
- Social media links
- Newsletter subscription form
- Quick links and policy pages
- Copyright information

### Color Customization

Edit the color palette in `tailwind.config.ts` under the `extend.colors` section:

```typescript
colors: {
  cream: { ... },
  beige: { ... },
  terracotta: { ... },
  // ... more colors
}
```

## 📝 Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 🌐 Environment Variables

Create a `.env.local` file for environment-specific variables:

```env
NEXT_PUBLIC_API_URL=your_api_url_here
```

## 📦 Dependencies

### Production
- next (^14.0.0)
- react (^19.2.0)
- react-dom (^19.2.0)
- lucide-react (^0.263.1)

### Development
- typescript (^5.3.3)
- tailwindcss (^3.4.1)
- postcss (^8.4.32)
- autoprefixer (^10.4.17)
- eslint (^9.39.1)
- eslint-config-next (^14.0.0)

## 🚀 Deployment

### Vercel (Recommended)
The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
npm i -g vercel
vercel
```

### Other Platforms
Build for production:
```bash
npm run build
npm start
```

## 📄 License

This project is private and intended for educational purposes.

## 👏 Contributing

This is a personal project, but feel free to fork and modify for your own use!

---

Built with ❤️ for handmade crochet enthusiasts
