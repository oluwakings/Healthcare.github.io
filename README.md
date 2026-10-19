# HBJD LTD Care & Support

The HBJD LTD website project, ready to open and edit in Visual Studio Code.

## Open and run

1. Extract the ZIP file.
2. Open the extracted `hbjd-ltd-vscode` folder in VS Code.
3. Install [Node.js](https://nodejs.org/) if it is not already installed.
4. Open VS Code's terminal in the project folder and run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local address shown in the terminal (usually `http://localhost:5173`).

To create a production build, run `npm run build`. To preview that build locally,
run `npm run preview`.

## Publish with GitHub Pages

1. Create a GitHub repository and upload the contents of this project folder.
2. Make sure the repository's default branch is named `main`.
3. In GitHub, open **Settings → Pages** and set the build and deployment source
   to **GitHub Actions**.
4. Push your project files to the `main` branch. The included workflow will build
   and publish the site. Check the **Actions** tab for progress; when it finishes,
   the live link appears under **Settings → Pages**.

Only a repository named exactly after the GitHub account (for example,
`oluwakings.github.io`) publishes at the domain root. Other repository names are
project sites. For `oluwakings/healthcare.github.io`, the workflow automatically
uses `/healthcare.github.io/` in asset paths. If your default branch has a
different name, update the branch in `.github/workflows/deploy.yml`.

## Where to make edits

- Page wording and content: `src/App.tsx`
- Layout, colours and responsive styles: `src/index.css`
- Hero photograph: `src/assets/care-hero.jpg`
- Browser icon: `public/favicon.svg`

## Before publishing

The contact phone and email details are still marked as placeholders. The
enquiry form prepares a message in the visitor's email app; it does not send or
store enquiries. Replace the placeholder recipient in `src/App.tsx` and the
placeholder contact details on the page before publishing.
