# Portfolio

A modern, minimalist portfolio template built with Astro, React, and TailwindCSS.

![Deploy Status](https://img.shields.io/badge/Deploy-Vercel-black?style=flat&logo=vercel)

---

The component `<LetterGlitch \>` was taken from [ReactBits.dev](https://www.reactbits.dev/)

## **Stack**  
### **Frontend**  
![Astro](https://img.shields.io/badge/Astro-FF5D01?logo=astro&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)

### **Tools**  
![Figma](https://img.shields.io/badge/Figma-F24E1E?logo=figma&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?logo=prettier&logoColor=black)
![Canva](https://img.shields.io/badge/Canva-c900c3?logo=canva&logoColor=white)

### **Show your favorite Spotify album (or your own)** ![Spotify](https://img.shields.io/badge/Spotify-06cc1a?logo=spotify&logoColor=white)
1. Choose your Spotify album
2. Access the share options
3. Select 'copy embed code'
```
<iframe src="https://open.spotify.com/embed/album/ALBUM_ID" style="border-radius:12px border:0;" class="w-full h-40" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
```
4. Insert the embed code on footer.astro

That's it!

## **Project structure**
```
public/
└── svg/
src/
├── Components/
|    ├── contact.astro
|    ├── footer.astro
|    ├── home.astro
|    ├── logoWall.astro
|    ├── nav.astro
|    └── projects.astro
├── layouts/
|    └── Layout.astro
├── React/
|    ├── LetterGlitch.tsx
|    ├── LikeButton.tsx
|    └── SkillsList.tsx
└── pages/
     └── index.astro
```

## **Local configuration**
1. Install dependencies:
```
npm install
```
2. Create a `.env` file based on `.env.example` and add your Firebase credentials

3. Start the development server:
```
npm run dev
```

## **Customization**

To make this portfolio your own, update the following:

1. **Personal Information**:
   - `src/components/home.astro` - Update name, bio, and social links
   - `src/components/contact.astro` - Update location and Formspree form ID
   - `src/components/footer.astro` - Update social links, Spotify playlist, and copyright

2. **Projects**:
   - `src/components/projects.astro` - Replace placeholder projects with your own
   - Add your project screenshots to `public/` folder
   - Update the image references in projects.astro

3. **Firebase** (for the like button feature):
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Copy your Firebase credentials to `.env` file
   - Update Firestore security rules if needed

4. **Contact Form**:
   - Create a form at [Formspree](https://formspree.io/)
   - Update the form action URL in `src/components/contact.astro`

5. **Spotify Widget** (optional):
   - Follow the instructions in the "Show your favorite Spotify album" section
   - Update the iframe src in `src/components/footer.astro`


