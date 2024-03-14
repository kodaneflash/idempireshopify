import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import Footer from 'components/layout/footer';
import { Suspense } from 'react';

export const runtime = 'edge';

export const metadata = {
  description: 'Our flawless designs, DMV grade printing materials, & advanced security features make our IDs stand out from the rest.',
  openGraph: {
    type: 'website',
    url: 'https://idempire.us',
    title: 'IDEmpire',
    description: 'Your Trusted Vendor for Authentic Fake ID\'s',
    images: [
      {
        url: 'https://idempire.us/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'IDEmpire',
      },
    ],
  },
};

export default async function HomePage() {
  return (
    <>
      <ThreeItemGrid />
      <Suspense>
        <Carousel />
        <Suspense>
          <Footer />
        </Suspense>
      </Suspense>
    </>
  );
}
