import { Helmet } from "react-helmet-async";

type SEOProps = {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  structuredDataJSON?: Record<string, any>;
};

const SEO = ({ title, description, canonical, image = "/opengraph-hero.png", structuredDataJSON }: SEOProps) => {
  const url = canonical || (typeof window !== "undefined" ? window.location.href : undefined);
  const safeTitle = title.length > 60 ? `${title.slice(0, 57)}…` : title;
  const safeDescription = description.length > 160 ? `${description.slice(0, 157)}…` : description;

  return (
    <Helmet>
      <title>{safeTitle}</title>
      <meta name="description" content={safeDescription} />
      {url && <link rel="canonical" href={url} />}
      <meta property="og:title" content={safeTitle} />
      <meta property="og:description" content={safeDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={image} />
      {structuredDataJSON && (
        <script type="application/ld+json">
          {JSON.stringify(structuredDataJSON)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
