# RRMS Admin Dashboard

A modern, responsive admin dashboard for the RRMS (Rehabilitation & Resettlement Management System) built with **Tailwind CSS**.

## Features

✅ **Modern Design** - Clean, professional dashboard interface
✅ **Mobile Responsive** - Optimized for all screen sizes (mobile, tablet, desktop)
✅ **Real-time Stats** - Display total zones, divisions, and locations
✅ **Interactive Cards** - Hover effects and smooth animations
✅ **Performance Metrics** - Progress bars and performance indicators
✅ **Recent Activity** - Activity log with timestamps
✅ **Quick Actions** - Buttons for common tasks
✅ **System Health** - Status indicators for server, database, and API
✅ **Local Tailwind** - No CDN required, Tailwind CSS installed locally

## Project Structure

```
rrms-admin-dashboard/
├── index.html              # Main dashboard HTML
├── package.json            # Project dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── dist/
│   └── styles.css         # Compiled Tailwind CSS output
└── src/
    ├── styles.css         # Base styles and Tailwind directives
    └── script.js          # JavaScript for interactivity
```

## Installation & Setup

### Prerequisites

- Node.js 14+ installed on your system

### Steps

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Development Mode** (Watch for changes)

   ```bash
   npm run dev
   ```

3. **Build for Production**

   ```bash
   npm run build
   ```

4. **View Dashboard**
   - Open `index.html` in your browser
   - Or use a local server (e.g., Live Server extension in VS Code)

## Responsive Design

The dashboard is fully responsive with breakpoints for:

- **Mobile** (< 640px) - Single column layout
- **Tablet** (640px - 1024px) - Two column layout
- **Desktop** (> 1024px) - Three column layout

All components adapt perfectly to any screen size.

## Dashboard Sections

### Header Navigation

- RRMS Admin Panel branding
- Notification and menu icons
- Responsive on mobile with hamburger menu

### Main Statistics

- **Total Zones**: Displays count with trend indicator
- **Total Divisions**: Displays count with trend indicator
- **Total Locations**: Displays count with trend indicator

### Additional Sections

- **Recent Activity**: Shows recent system events
- **Performance Metrics**: Progress bars for key metrics
- **System Health**: Status checks for server, database, API
- **Quick Actions**: Buttons for common administrative tasks

### Footer

- About, Support, and Legal sections
- Social media links
- Copyright information

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: '#0f766e',
  secondary: '#14b8a6',
}
```

### Content

Update `index.html` to modify:

- Dashboard title and description
- Statistics numbers and labels
- Activity items and status messages
- Buttons and action items

### Styling

Modify `src/styles.css` for custom base styles and Tailwind overrides.

## Tailwind CSS Documentation

For more information about Tailwind CSS utilities and features, visit:

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Tailwind UI Components](https://tailwindui.com/)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome for Android)

## Performance

- Optimized CSS (only includes used styles)
- Lightweight and fast loading
- No external CDN dependencies
- Smooth animations and transitions

## Future Enhancements

- [ ] Add data charts and graphs
- [ ] Implement user authentication
- [ ] Add admin user management
- [ ] Create detailed reports page
- [ ] Add dark mode toggle
- [ ] Integrate with backend API

## License

ISC

## Support

For issues or questions, please create an issue in the project repository or contact the development team.

---

**Built with ❤️ using Tailwind CSS**
