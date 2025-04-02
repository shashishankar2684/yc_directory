import Image from "next/image";
import SearchForm from "../../components/SearchForm";
import StartupCard, { StartupTypeCard }from "@/components/StartupCard";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

export default async function Home( { searchParams }: {
  searchParams: Promise<{ query?: string }>
}) {
  const query = (await searchParams).query;

  // const posts = await client.fetch(STARTUPS_QUERY);

  const { data : posts } = await sanityFetch({ query : STARTUPS_QUERY });


  // const posts = [{
  //   _createdAt: new Date(),
  //   views: 55,
  //   author: {_id: 1, name: 'shashi'},
  //   _id : 1,
  //   description: 'This is description',
  //   image:"https://media.wired.com/photos/633b3fa691ba135542e3d5bd/master/w_2560%2Cc_limit/Tesla-Optimus-Bot-Event-Business.jpg",
  //   category: 'robots',
  //   title : 'we robots',
  // }]


  return (
    <>
    <section className="pink_container">

    <h1 className="heading">Pitch Your Startup, <br /> Connect With Enterpeneurs</h1>

    <p className="sub-heading !max-w-3xl">
      Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
    </p>

    <SearchForm query={query} />

    </section>

    <section className="section_container">
      <p className="text-30-semibold">
        {query ? `Search results for "${query}`: 'All Startups'}
      </p>

      <ul className="mt-7 card_grid">
        {posts?.length > 0 ?(
          posts.map((post: StartupTypeCard, index: number) => (
            <StartupCard key={post?._id} post={post}/>
          ))
        ) : (
          <p className="no-results">No startups found</p>
        )}

      </ul>
    </section>

    <SanityLive />
    
    </>
  );
}
