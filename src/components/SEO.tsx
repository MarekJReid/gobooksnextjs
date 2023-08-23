// components/SEO.tsx
import Head from "next/head";

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string[];
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords }) => {
  return (
    <Head>
      <title>GoBooks - {title}</title>
      {description ? (
        <meta name="description" content={description} />
      ) : (
        <meta
          name="description"
          content="Discover community-driven classroom courses at GoBooks. Master Word, Excel, and Xero with hands-on training from experienced educators with proven industry experience."
        />
      )}
      {keywords && <meta name="keywords" content={keywords.join(", ")} />}
      {/* Add more meta tags as needed */}
    </Head>
  );
};

export default SEO;
