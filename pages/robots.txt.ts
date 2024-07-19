import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const content = `
    User-agent: Googlebot
    Allow: /
    Disallow: /private/

    User-agent: Applebot
    Allow: /
    Disallow: /private/

    User-agent: Bingbot
    Allow: /
    Disallow: /private/

    Sitemap: ${baseUrl}/sitemap.xml
  `;

  res.setHeader("Content-Type", "text/plain");
  res.write(content);
  res.end();

  return {
    props: {},
  };
};

const Robots = () => {
  // This page is a placeholder to allow getServerSideProps to run
  return null;
};

export default Robots;
