import { FC } from "react";
import { Metadata } from "next";
import Head from "next/head";

interface MetaDataProps extends Metadata {
  title: Metadata['title'];
  description: Metadata['description'];
  metadataBase: Metadata['metadataBase'];
  authors: Metadata['authors'];
  keywords: Metadata['keywords'];
}

export const MetaData: FC<Partial<MetaDataProps>> = (props) => {
  const { title, description, metadataBase, authors, keywords } = props;
  const [Title, Description, url] = ['This is my project', 'Description', 'https://gdsc-farmingdale-website.vercel.app']
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* Verification tokens */}
      <meta name="format-detection" content="telephone=yes" />
      {title && <title>{`${title}`}</title>}
      {description && (
        <>
          <meta name="description" content={description} />
          <meta
            property="og:title"
            content={title ? (title as string) : Title}
          />
          <meta property="og:description" content={description} />
          <meta name="twitter:site" content={url} />
          <meta
            name="twitter:description"
            content={description ? (description as string) : Description}
          />
        </>
      )}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="GDSC | Farmingdale" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@OdnisMike" />
    </Head>
  );
};