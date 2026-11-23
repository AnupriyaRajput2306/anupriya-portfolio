# Anupriya Rajput — Portfolio

A responsive React + Vite portfolio for **Anupriya Rajput**, aspiring Full-Stack Web Developer and MCA student.

## Run locally

1. Install Node.js (LTS) from https://nodejs.org/
2. Extract this ZIP and open the project folder in VS Code.
3. Open a terminal in the project folder and run:

```bash
npm install
npm run dev
```

4. Open the local URL printed by Vite (usually http://localhost:5173).

## Build for deployment

```bash
npm run build
npm run preview
```

The production website is generated in the `dist` folder.

## Before publishing — personalize these details

Open `src/main.jsx` and update the `profile` object near the top:
- `email`
- `github`
- `linkedin`
- `resume`

Add your resume PDF to the `public` folder using the exact name `Anupriya-Rajput-Resume.pdf`.

### Project links
In the `projects` array in `src/main.jsx`, replace the empty `github` and `demo` values with your real project URLs when available. The site intentionally does not invent links.

### Experience and certificates
Update the Winter Internship and Summer Internship cards with the correct company, role, dates, and work details. Add a certification section or certificate links when you have the verified details.

### Profile photo
The hero currently uses a designed avatar placeholder. To use your own photo, replace the `avatar-placeholder` markup in `src/main.jsx` with an image and style it in `src/styles.css`.

## Contact form
The contact form opens the visitor's default email app with the message prefilled. Replace the example email address first. This avoids pretending a message was sent to a backend that is not configured.

## Deploy on Vercel
1. Push the project to a GitHub repository.
2. Import the repository at https://vercel.com/
3. Framework preset: Vite
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy.

## Deploy on Netlify
1. Push the project to GitHub and import it at https://app.netlify.com/
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy.
