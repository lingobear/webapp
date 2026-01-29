# PROFILY - Portfolio Landing Page

A modern, responsive portfolio landing page with a beautiful yellow, orange, and brown gradient color scheme. This is a static page designed for showcasing profiles and redirecting users to social media platforms.

## 🎨 Features

- **Modern Design**: Clean and professional layout with smooth animations
- **Gradient Theme**: Beautiful yellow, orange, and brown color combinations
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **RTL Support**: Right-to-left layout for Persian/Farsi content
- **Interactive Elements**: Smooth scrolling, hover effects, and animations
- **Social Media Integration**: Easy linking to various social platforms
- **No Backend Required**: Pure frontend HTML/CSS/JavaScript

## 🌈 Color Palette

- Primary Yellow: `#FFB700`
- Secondary Orange: `#FF8C00`
- Accent Orange: `#FF6B35`
- Dark Brown: `#5D4037`
- Medium Brown: `#8D6E63`
- Light Brown: `#A1887F`

## 📁 Project Structure

```
mahya/
├── index.html      # Main HTML file
├── styles.css      # Stylesheet with gradient themes
├── script.js       # JavaScript for interactivity
└── README.md       # This file
```

## 🚀 Getting Started

1. **Clone or download** this repository
2. **Open** `index.html` in your web browser
3. **Customize** the content:
   - Replace placeholder text with your own content
   - Update social media links in the footer
   - Add your own images (see Image Setup below)

## 🖼️ Image Setup

The page references several images that you should replace with your own:

### Required Images:
- `logo.png` - Your logo (40x40px recommended)
- `profile.jpg` - Main profile photo (400x500px recommended)
- `badge1.png` to `badge4.png` - Trust badges (40x40px each)
- `portfolio1.jpg` to `portfolio4.jpg` - Portfolio showcase images
- `user1.jpg`, `user2.jpg` - Testimonial user photos (60x60px)

### Creating Placeholder Images:

You can use any of these methods:
1. **Use placeholder services**: Replace image sources with services like:
   - `https://via.placeholder.com/400x500`
   - `https://picsum.photos/400/500`

2. **Use solid color placeholders**: Create simple colored squares
3. **Use your own images**: Replace with actual photos

## 🎯 Customization Guide

### Changing Colors:
Edit the CSS variables in `styles.css`:
```css
:root {
    --color-primary: #FFB700;
    --color-secondary: #FF8C00;
    --color-accent: #FF6B35;
    /* ... etc */
}
```

### Updating Social Media Links:
Find the social links section in `index.html` and update the `href` attributes:
```html
<a href="https://instagram.com/yourusername" target="_blank" class="social-link">
    <i class="fab fa-instagram"></i>
</a>
```

### Modifying Content:
All text content is in `index.html`. Simply search for the Persian text and replace it with your own.

## 📱 Social Media Platforms Supported

- Instagram
- Twitter
- LinkedIn
- Telegram
- YouTube
- (Easily add more by duplicating the social link structure)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 💡 Tips

1. **Images**: For best results, use high-quality images with proper dimensions
2. **Performance**: Optimize images before uploading to improve load times
3. **Content**: Keep your content concise and engaging
4. **Testing**: Test on multiple devices to ensure responsiveness
5. **SEO**: Update meta tags in the `<head>` section for better search visibility

## 📄 License

This is a free template. Feel free to use it for personal or commercial projects.

## 🔧 Technologies Used

- HTML5
- CSS3 (with CSS Grid & Flexbox)
- JavaScript (ES6+)
- Font Awesome Icons
- Vazirmatn Font (Persian/Farsi)

## 📞 Support

For questions or issues, feel free to open an issue or contact the developer.

---

**Made with ❤️ for showcasing your professional profile**
