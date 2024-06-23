import React from "react";
import PropTypes from "prop-types";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

const Seo = ({ title, description, image, article }) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
  } = site.siteMetadata;

  const Seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: image || `${siteUrl}${defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <>
      <html lang="en" />
      <title>{titleTemplate.replace("%s", Seo.title)}</title>
      <meta name="description" content={Seo.description} />
      <meta name="image" content={Seo.image} />

      {Seo.url && <meta property="og:url" content={Seo.url} />}

      {(article ? true : null) && <meta property="og:type" content="article" />}

      {Seo.title && <meta property="og:title" content={Seo.title} />}

      {Seo.description && (
        <meta property="og:description" content={Seo.description} />
      )}

      {Seo.image && <meta property="og:image" content={Seo.image} />}

      <meta name="twitter:card" content="summary_large_image" />

      {Seo.title && <meta name="twitter:title" content={Seo.title} />}

      {Seo.description && (
        <meta name="twitter:description" content={Seo.description} />
      )}

      {Seo.image && <meta name="twitter:image" content={Seo.image} />}
    </>
  );
};

export default Seo;

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
};

Seo.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
};

const query = graphql`
  query Seo {
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
