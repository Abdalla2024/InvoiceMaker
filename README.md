# Invoice Maker Website

A modern, responsive website for the Invoice Maker iOS app. Built with React, Vite, and Tailwind CSS.

## Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern UI**: Clean, professional design with smooth animations
- **Component-Based**: Modular React components for easy maintenance
- **SEO Optimized**: Proper meta tags and structured content
- **Fast Loading**: Built with Vite for optimal performance

## Project Structure

```
invoicemaker-website/
├── src/
│   ├── components/          # React components
│   │   ├── Header.jsx       # Navigation header
│   │   ├── Hero.jsx         # Hero section with main CTA
│   │   ├── Features.jsx     # App features showcase
│   │   ├── Screenshots.jsx  # App screenshots gallery
│   │   ├── Download.jsx     # Download section with App Store link
│   │   ├── Footer.jsx       # Site footer
│   │   ├── PrivacyPage.jsx  # Privacy policy page
│   │   └── TermsPage.jsx    # Terms of service page
│   ├── App.jsx              # Main app component with routing
│   ├── main.jsx             # App entry point
│   ├── styles.css           # Global styles
│   ├── invoiceicon.svg      # App icon
│   └── *.svg                # Screenshot placeholders
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── postcss.config.js       # PostCSS configuration
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone or navigate to the project directory:

   ```bash
   cd invoicemaker-website
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Customization

### Updating App Store Link

Update the App Store link in `src/components/Download.jsx`:

```jsx
<a
  href="YOUR_APP_STORE_URL"
  target="_blank"
  rel="noopener noreferrer"
  className="app-store-btn"
>
```

### Adding Real Screenshots

Replace the SVG placeholders in the `src/` directory with actual app screenshots:

- `invoice-form.svg` → `invoice-form.png`
- `invoice-list.svg` → `invoice-list.png`
- `pdf-preview.svg` → `pdf-preview.png`
- `invoice-success.svg` → `invoice-success.png`

Update the import statements in the components accordingly.

### Styling

The project uses a combination of:

- **Tailwind CSS**: For utility classes (if needed for customization)
- **Custom CSS**: In `src/styles.css` for component-specific styles

### Colors

The current color scheme uses:

- Primary: `#667EEA` (Purple-blue gradient)
- Secondary: `#764BA2` (Purple)
- Success: `#10B981` (Green)
- Background: `#F8FAFC` (Light gray)

## Deployment

### Build for Production

```bash
npm run build
```

The `dist` folder will contain the production build ready for deployment.

### Deploy to GitHub Pages

1. Install the gh-pages package:

   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to package.json scripts:

   ```json
   "deploy": "gh-pages -d dist"
   ```

3. Build and deploy:
   ```bash
   npm run build
   npm run deploy
   ```

### Deploy to Netlify

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

## Content Updates

### Legal Pages

Update the content in:

- `src/components/PrivacyPage.jsx`
- `src/components/TermsPage.jsx`

### App Features

Modify the features array in `src/components/Features.jsx` to match your app's actual features.

### Contact Information

Update contact details in:

- Footer component
- Privacy policy
- Terms of service

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
