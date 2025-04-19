import Image from "next/image";
import SearchForm from "../../components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home( { searchParams }: {
  searchParams: Promise<{ query?: string }>
}) {
  const query = (await searchParams).query;

  const posts = [
   {
    _createdAt : new Date(),
    views : 55,
    author : { _id : 1 , name : "divyansh" },
    _id : 1,
    description: "this is the description",
    image : "https://www.cio.com/wp-content/uploads/2025/02/3829539-0-75501800-1740132217-shutterstock_2482705481.jpg?quality=50&strip=all",
    category : "Robots",
    title : "we robots"
   },
  ];

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
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType ) => (
               <StartupCard key={post?._id} post={post} /> 
              ))
          ) : (
            <p className="no-results">No Startups Found</p>
          )}

        </ul>


    </section>
    
    </>
  );
}
