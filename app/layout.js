import "./globals.css";

export const metadata = {
  title: "JOBBY AI - India's Ultimate AI Opportunity Finder",
  description:
    "Discover scholarships, government schemes, grants, skill programs, and startup opportunities across India. Our AI agent matches you with the perfect opportunities based on your profile.",
  keywords: [
    "Indian scholarships",
    "government schemes India",
    "grants India",
    "startup programs",
    "skill development",
    "SC ST OBC scholarships",
    "state subsidies",
    "education opportunities India",
    "JOBBY AI",
    "AI opportunity finder",
  ],
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
