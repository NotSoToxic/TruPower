import { useEffect } from 'react';

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonicalUrl?: string;
  structuredData?: Record<string, any>;
}

/**
 * Hook to manage SEO meta tags for each page
 * Updates document head with title, meta tags, and structured data
 */
export const useSEO = (config: SEOConfig) => {
  useEffect(() => {
    // Set page title
    document.title = config.title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`) ||
                   document.querySelector(`meta[property="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        const isProperty = name.startsWith('og:') || name.startsWith('twitter:');
        if (isProperty) {
          element.setAttribute('property', name);
        } else {
          element.setAttribute('name', name);
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Meta Description
    updateMetaTag('description', config.description);

    // Keywords (optional)
    if (config.keywords) {
      updateMetaTag('keywords', config.keywords);
    }

    // Open Graph Tags
    updateMetaTag('og:title', config.ogTitle || config.title);
    updateMetaTag('og:description', config.ogDescription || config.description);
    updateMetaTag('og:type', 'website');
    if (config.ogImage) {
      updateMetaTag('og:image', config.ogImage);
    }
    if (config.ogUrl) {
      updateMetaTag('og:url', config.ogUrl);
    }

    // Twitter Card Tags
    updateMetaTag('twitter:card', config.twitterCard || 'summary_large_image');
    updateMetaTag('twitter:title', config.twitterTitle || config.title);
    updateMetaTag('twitter:description', config.twitterDescription || config.description);
    if (config.twitterImage) {
      updateMetaTag('twitter:image', config.twitterImage);
    }

    // Canonical URL
    let canonicalElement = document.querySelector("link[rel='canonical']");
    if (!canonicalElement) {
      canonicalElement = document.createElement('link');
      canonicalElement.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalElement);
    }
    canonicalElement.setAttribute('href', config.canonicalUrl || window.location.href);

    // Structured Data (Schema.org JSON-LD)
    if (config.structuredData) {
      let scriptElement = document.querySelector("script[type='application/ld+json']");
      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.setAttribute('type', 'application/ld+json');
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(config.structuredData);
    }

    return () => {
      // Cleanup if needed
    };
  }, [config]);
};

export default useSEO;
