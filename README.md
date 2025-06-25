# Lolo Bere - Premium Massage Services Landing Page

A beautifully crafted, premium landing page for massage therapy services featuring modern design, smooth animations, and responsive layout.

## 🌟 Features

- **Premium Design**: Stone/black color scheme with glass-morphism effects
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Responsive Layout**: Optimized for all device sizes
- **Modern Typography**: Playfair Display serif fonts for premium feel
- **Service Sections**: Sports Massage, Stress Relief, and Therapeutic Wellness
- **Pricing Tiers**: Transparent pricing with detailed feature lists
- **Client Testimonials**: Social proof with elegant card designs
- **Contact & Booking**: Comprehensive contact form and booking functionality

## 🛠 Tech Stack

- **Frontend**: React 18
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Package Manager**: Yarn
- **Build Tool**: Create React App

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 16 or higher)
- **Yarn** package manager

## 🚀 Installation & Setup

1. **Clone the repository** (if applicable):
   ```bash
   git clone <repository-url>
   cd app
   ```

2. **Navigate to the frontend directory**:
   ```bash
   cd frontend
   ```

3. **Install dependencies**:
   ```bash
   yarn install
   ```

4. **Start the development server**:
   ```bash
   yarn start
   ```

5. **Open your browser** and visit:
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
/app/
├── frontend/                 # React frontend application
│   ├── public/              # Static files
│   ├── src/                 # Source code
│   │   ├── App.js          # Main application component
│   │   ├── App.css         # Custom styles
│   │   ├── index.js        # Entry point
│   │   └── index.css       # Global styles
│   ├── package.json        # Dependencies and scripts
│   ├── tailwind.config.js  # Tailwind CSS configuration
│   ├── postcss.config.js   # PostCSS configuration
│   └── .env                # Environment variables
├── tests/                   # Test files
├── scripts/                 # Build and deployment scripts
└── README.md               # This file
```

## 📜 Available Scripts

In the frontend directory, you can run:

### `yarn start`
Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `yarn test`
Launches the test runner in the interactive watch mode.

### `yarn eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**

## 🎨 Design Features

### Visual Language
- **Color Scheme**: Premium stone and black palette
- **Glass-morphism**: Subtle blur effects (12-24px)
- **Shadows**: Multi-level depth with subtle shadows
- **Rounded Corners**: 12-24px for containers, 8px for smaller elements
- **Hover Animations**: Smooth micro-interactions

### Typography
- **Primary Font**: Playfair Display (serif for headlines)
- **Font Sizes**: 72-96px headlines, 16-18px body text
- **Font Weights**: 300, 400, 600, 800
- **Line Heights**: 1.1 for headlines, 1.6 for body text

### Responsive Design
- Mobile-first approach
- Optimized for tablets and desktops
- Flexible grid system using TailwindCSS

## 🔧 Configuration

### Environment Variables
The application uses environment variables stored in `/app/frontend/.env`:
- `REACT_APP_BACKEND_URL`: Backend API URL (if backend integration is added)

### Tailwind Configuration
Custom configuration in `tailwind.config.js` includes:
- Custom color palettes
- Typography settings
- Spacing scales
- Custom utilities for glass-morphism and effects

## 📱 Sections Overview

1. **Hero Section**: Full-screen with bold headline and CTA
2. **Services Section**: Three main service offerings with imagery
3. **Pricing Section**: Three-tier pricing structure with features
4. **Benefits Section**: Key benefits of massage therapy
5. **Testimonials**: Client reviews with social proof
6. **Contact & Booking**: Contact form and business information

## 🚀 Deployment

For production deployment:

1. **Build the application**:
   ```bash
   cd frontend
   yarn build
   ```

2. **Deploy the build folder** to your hosting service (Netlify, Vercel, AWS S3, etc.)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Troubleshooting

### Common Issues

**Dependencies not installing:**
```bash
# Clear cache and reinstall
yarn cache clean
rm -rf node_modules
yarn install
```

**Port already in use:**
```bash
# Kill process on port 3000
npx kill-port 3000
yarn start
```

**Build issues:**
```bash
# Clear build cache
rm -rf build
yarn build
```

## 📞 Support

If you encounter any issues or have questions, please create an issue in the repository or contact the development team.

---

**Built with ❤️ for premium massage therapy services**
