"use client"


import Ping from "@/components/Ping";
import { client } from "@/sanity/lib/client";
import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/queries";
import { writeClient } from "@/sanity/lib/write-client";
import { useEffect, useState } from "react";
// import { unstable_after as after } from "next/server";

const View = ({ id }: { id: string }) => {
    const [totalViews, setTotalViews] = useState<number>(0);
  
    // Fetch views initially
    useEffect(() => {
      const fetchViews = async () => {
        const data = await client
          .withConfig({ useCdn: false })
          .fetch(STARTUP_VIEWS_QUERY, { id });
  
        setTotalViews(data.views); // Assuming the API returns an object with `views` field
      };
      fetchViews();
    }, [id]);
  
    // Update views count
    useEffect(() => {
      if (totalViews === 0) return; // Prevents updating when no views fetched yet
  
      const updateViews = async () => {
        await writeClient.patch(id).set({ views: totalViews + 1 });
      };
  
      updateViews();
    }, [id, totalViews]); // This triggers whenever `totalViews` changes
  
    return (
      <div className="view-container">
        <div className="absolute -top-2 -right-2">
          <Ping />
        </div>
  
        <p className="view-text">
          <span className="font-black">Views: {totalViews}</span>
        </p>
      </div>
    );
  };
  
  export default View;