import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Russian Party In Goa — Events, Parties & Nightlife</title>
        <meta
          name="description"
          content="Russian Party In Goa — events, parties and nightlife experiences in Goa."
        />
        <link rel="canonical" href="https://russianpartyingoa.com/" />
        <meta property="og:title" content="Russian Party In Goa" />
        <meta property="og:url" content="https://russianpartyingoa.com/" />
      </Helmet>

      <main className="flex min-h-screen items-center justify-center bg-background px-6">
        <div className="max-w-xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Russian Party In Goa
          </h1>
          <p className="mt-4 text-base text-muted-foreground">
            Static SPA scaffold is ready. Share your design and the page list and
            we'll start rebuilding from the WordPress site.
          </p>
        </div>
      </main>
    </>
  );
}
