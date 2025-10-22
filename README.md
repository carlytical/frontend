# Carlytic Frontend

A modern Next.js frontend application for Carlytic, built with JavaScript and Tailwind CSS.

## Features

- ⚡ **Next.js 16** - Latest version with App Router
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📱 **Responsive Design** - Mobile-first approach
- 🔄 **API Integration** - Connected to Express backend
- 🎯 **Clean Architecture** - Well-organized component structure
- 🚀 **Optimized** - Built for performance

## Project Structure

```
frontend/
├── app/                    # Next.js App Router
│   ├── layout.js          # Root layout
│   ├── page.js            # Home page
│   └── globals.css        # Global styles with Tailwind
├── components/            # React components
│   ├── UserList.js       # User list component
│   └── UserForm.js       # User creation form
├── lib/                  # Library code
│   └── api.js           # API client utilities
├── utils/               # Utility functions
│   └── format.js       # Formatting helpers
├── public/             # Static assets
├── next.config.js     # Next.js configuration
├── tailwind.config.js # Tailwind CSS configuration
├── postcss.config.js  # PostCSS configuration
└── package.json       # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn
- Backend server running on port 5000

### Installation

1. **Install dependencies**:
```bash
npm install
```

2. **Configure environment variables**:
```bash
cp .env.example .env.local
```

Edit `.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

3. **Run the development server**:
```bash
npm run dev
```

4. **Open your browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

```bash
# Development mode (with hot reload)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Pages & Components

### Home Page (`app/page.js`)
- Displays list of users from the backend
- Create new users with form
- Delete existing users
- Real-time updates

### Components

#### `UserList.js`
- Displays users in a responsive table
- Shows user details (name, email, role, status)
- Delete functionality
- Empty state handling

#### `UserForm.js`
- Form for creating new users
- Field validation
- Error handling
- Loading states

## API Integration

The frontend connects to the backend API at `http://localhost:5000/api`.

### API Utility (`lib/api.js`)

```javascript
import API from '@/lib/api';

// Get all users
const users = await API.users.getAll();

// Get user by ID
const user = await API.users.getById(userId);

// Create user
const newUser = await API.users.create({
  name: 'John Doe',
  email: 'john@example.com'
});

// Update user
const updated = await API.users.update(userId, {
  name: 'Jane Doe'
});

// Delete user
await API.users.delete(userId);
```

## Styling

### Tailwind CSS

The project uses Tailwind CSS for styling. Custom colors are defined in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ... more shades
    900: '#0c4a6e',
  },
}
```

### Global Styles

Global styles and Tailwind directives are in `app/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| NEXT_PUBLIC_API_URL | Backend API URL | http://localhost:5000/api |
| NEXT_PUBLIC_APP_NAME | Application name | Carlytic |
| NEXT_PUBLIC_APP_URL | Frontend URL | http://localhost:3000 |

**Note**: All variables prefixed with `NEXT_PUBLIC_` are exposed to the browser.

## Building for Production

1. **Build the application**:
```bash
npm run build
```

2. **Start the production server**:
```bash
npm start
```

The production build will be optimized and minified.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Configure environment variables
4. Deploy

### Other Platforms

- **Netlify**: Supports Next.js with configuration
- **AWS Amplify**: Configure build settings
- **Docker**: Create Dockerfile with Node.js

## Development Tips

### Adding New Pages

Create a new file in the `app` directory:

```javascript
// app/about/page.js
export default function About() {
  return <div>About Page</div>
}
```

### Creating Components

Create reusable components in the `components` directory:

```javascript
// components/Button.js
export default function Button({ children, onClick }) {
  return (
    <button 
      onClick={onClick}
      className="bg-primary-600 text-white px-4 py-2 rounded"
    >
      {children}
    </button>
  );
}
```

### Using API Client

```javascript
"use client";

import { useEffect, useState } from 'react';
import API from '@/lib/api';

export default function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await API.users.getAll();
      setData(response.data);
    };
    fetchData();
  }, []);

  return <div>{/* Render data */}</div>;
}
```

## Troubleshooting

### Port already in use

Change the port:
```bash
PORT=3001 npm run dev
```

### API connection issues

1. Verify backend is running on port 5000
2. Check `NEXT_PUBLIC_API_URL` in `.env.local`
3. Ensure CORS is enabled in backend

### Build errors

1. Clear Next.js cache: `rm -rf .next`
2. Delete `node_modules` and reinstall: `npm install`
3. Check for ESLint errors: `npm run lint`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- ✅ Server-side rendering (SSR)
- ✅ Static site generation (SSG) where applicable
- ✅ Image optimization
- ✅ Code splitting
- ✅ Font optimization

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

## License

ISC
