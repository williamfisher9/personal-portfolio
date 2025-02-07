# Personal Portfolio
This is a personal project to showcase my portfolio and personal technical blog.

### Create React project using Vite

```
npm create vite@latest frontend
```

- Vite is a frontend build tool that aims to provide a faster and leaner development experience for modern web projects.
- It provides a Hot Module Replacement (HMR) that stays fast regardless of the app size.

### Tailswind CSS

Tailwind will look for an optional tailwind.config.js file at the root of your project where you can define any customizations.

```
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
```

The content section is where you configure the paths to all of your HTML templates, JS components, and any other files that contain Tailwind class names.

Add the below to contents of the tailwind.config.js:
```
"./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
```

The theme section is where you define your color palette, fonts, type scale, border sizes, breakpoints — anything related to the visual design of your site.
- The screens key allows you to customize the responsive breakpoints in your project (`sm`, `md`, `lg` and `xl` sizes).
- colors: these colors are inherited by all color-related core plugins, like `backgroundColor`, `borderColor`, `textColor`, and others.
- spacing: these values are inherited by the `padding`, `margin`, `width`, `height`, `maxHeight`, `flex-basis`, `gap`, `inset`, `space`, `translate`, `scrollMargin`, `scrollPadding`, and `textIndent` core plugins.

The rest of the theme section is used to configure which values are available for each individual core plugin. For example, the borderRadius key lets you customize which border radius utilities will be generated:
```
module.exports = {
  theme: {
    borderRadius: {
      'none': '0',
      'sm': '.125rem',
      DEFAULT: '.25rem',
      'lg': '.5rem',
      'full': '9999px',
    },
  }
}

.rounded-none { border-radius: 0 }
.rounded-sm   { border-radius: .125rem }
.rounded      { border-radius: .25rem }
.rounded-lg   { border-radius: .5rem }
.rounded-full { border-radius: 9999px }
```

If you would like to customize the default theme, you have a few different options depending on your goals:
- Extending the default theme: values under this key are merged with existing theme values and automatically become available as new classes that you can use.



Replace contents of ./src/index.css:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### PropTypes
```
npm install prop-types
```

### Scrollbar Plugin
```
npm install tailwind-scrollbar
```

Add it to the plugins array of tailwind.config.js:
```
import tailwindScrollbar from 'tailwind-scrollbar';

  ...
  plugins: [tailwindScrollbar],
  ...

```