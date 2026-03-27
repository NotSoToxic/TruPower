import React from 'react';

export const SEOHelmet: React.FC<{
  title: string;
  description: string;
  ogImage?: string;
  keywords?: string;
}> = ({ title, description, ogImage, keywords }) => {
  return (
    <>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
    </>
  );
};
