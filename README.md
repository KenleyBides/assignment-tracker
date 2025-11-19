This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


Project Overview
- Assignment Tracker is a project that helps track assignments by listing them (with assignment name, assignment due date, and class).
- The project consists of 4 Pages:
    1. Home
    2. Assignments
    3. History
    4. Settings

1. The Home page is where the user would land upon visiting the website. The Home page contains information such as the user's name and the user's progam which can be changed in the Settings page.

2. The Assignments page is where the assignments are located. In the Assignments page, the user can add assignments with the help of the form, "complete" assignments (sends them off to the History page), or delete an assignment (just deletes it, no traces left). Howevery many assignments are listed in the Assignments page is also listed in the Home page ("you have # of asignments left")

3. The History page a list of completed assignments to help the user keep track of what they've completed.

4. The Settings page contains another form like the Assignments page but it connects to the Home page. The form asks for the user's name and program and when inputed, it will replace the texts in the Home page ("Welcome, name. Program: program).

Live server: https://assignment-tracker-murex.vercel.app/