import React from "react";
import PropTypes from "prop-types";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ title, description, image, article }) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
  } = site.siteMetadata;

  const SEO = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: image || `${siteUrl}${defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <>
      <html lang="en" />
      <title>{titleTemplate.replace("%s", SEO.title)}</title>
      <meta name="description" content={SEO.description} />
      <meta name="image" content={SEO.image} />

      {SEO.url && <meta property="og:url" content={SEO.url} />}

      {(article ? true : null) && <meta property="og:type" content="article" />}

      {SEO.title && <meta property="og:title" content={SEO.title} />}

      {SEO.description && (
        <meta property="og:description" content={SEO.description} />
      )}

      {SEO.image && <meta property="og:image" content={SEO.image} />}

      <meta name="twitter:card" content="summary_large_image" />

      {SEO.title && <meta name="twitter:title" content={SEO.title} />}

      {SEO.description && (
        <meta name="twitter:description" content={SEO.description} />
      )}

      {SEO.image && <meta name="twitter:image" content={SEO.image} />}
    </>
  );
};

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
};

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
};

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl
        defaultImage: image
      }
    }
  }
`;
