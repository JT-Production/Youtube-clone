"use client";
import {  useEffect, useState } from "react";
import { getYoutubeVideos } from "../home/index";

import useStore from "./store";
import Image from "next/image";


type YoutubeResponse = {
  items: Video[];

};

type YoutubeResponse2 = {
  items: Video2[];
  kind: string;

};

interface Video  {
  id : string;
  snippet: {
    publishedAt: string;
    liveBroadcastContent: string;
    channelTitle: string;
    title: string;
    description: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
  };
  statistics:{
    viewCount: string;
    
  }
};

interface Video2  {
  id :{
    kind: string;
    channelId: string;
  }
  snippet: {
    publishedAt: string;
    liveBroadcastContent: string;
    channelTitle: string;
    title: string;
    description: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
  };
  statistics:{
    viewCount: string;
    
  }
};

export default function Thumbnails( ) {
  // const videos: YoutubeResponse = await getYoutubeVideos();
  // console.log(videos);
  const [videos, setVideos] = useState<Video[]>([]);
  const [videos2, setVideos2] = useState<Video2[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hovered, setHovered] = useState("");
  const { searchQuery } = useStore();
 
  function getRelativeTime(dateString: string) {
    const now = new Date();
    const date = new Date(dateString);
    const diff = (now.getTime() - date.getTime()) / 1000; // difference in seconds

    if (diff < 60) {
      return `${Math.floor(diff)} second${diff < 2 ? "" : "s"} ago`;
    } else if (diff < 3600) {
      const minutes = Math.floor(diff / 60);
      return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
    } else if (diff < 86400) {
      const hours = Math.floor(diff / 3600);
      return `${hours} hour${hours === 1 ? "" : "s"} ago`;
    } else if (diff < 2592000) {
      const days = Math.floor(diff / 86400);
      return `${days} day${days === 1 ? "" : "s"} ago`;
    } else if (diff < 31536000) {
      const months = Math.floor(diff / 2592000);
      return `${months} month${months === 1 ? "" : "s"} ago`;
    } else {
      const years = Math.floor(diff / 31536000);
      return `${years} year${years === 1 ? "" : "s"} ago`;
    }
  }
  function formatNumber(num : string | number) {
    num = Number(num); // Ensure it's a number
  
    if (num >= 1_000_000) {
      return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
    } else if (num >= 1_000) {
      return (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
    } else {
      return num.toString();
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response: YoutubeResponse = await getYoutubeVideos(searchQuery);
        const response2: YoutubeResponse2 = await getYoutubeVideos(searchQuery);
        console.log( searchQuery);
        console.log(response.items);
        setVideos(response.items);
        setVideos2(response2.items);
        
        setIsLoading(false);
      } catch (error) {
        setError((error as Error).message);
        console.error("Error fetching videos:", error);
      }
    }
    fetchData();
  }, [searchQuery]);

    // console.log(getRelativeTime("2025-05-04T06:08:32Z"));
    // console.log(videos[0]?.snippet.publishedAt);

  if (isLoading) return <div className="text-black">Loading videos...</div>;
  if (error) return <div className="text-black">Error: {error}</div>;

  return (
      searchQuery ? (
        
        <div className="grid grid-cols-4 space-y-3 gap-4 my-7" >
        {videos2.map((video) => (
          <div  key={video.id.channelId}  className="p-3  border-gray-300 bg-white rounded-2xl ">
            <div
             
            
              onMouseEnter={() => setHovered(video.id.channelId)}
              onMouseLeave={() => setHovered("")}
            >
              {hovered === video.id.channelId ? (
                <iframe
                  src={`https://www.youtube.com/embed/${video.id.channelId}?autoplay=1`}
                  className="h-50 w-66 object-cover rounded-2xl mr-auto"
                  allowFullScreen
                  // allow="autoplay; encrypted-media"
                ></iframe>
              ) : (
                <Image
                width ={1000}
                height={1000}
                  src={video.snippet.thumbnails.high.url}
                  alt="thumbnail"
                  className="h-50 w-100 object-cover rounded-2xl mr-auto"
                />
              )}
            </div>
  
            <div className="flex flex-col px-2">
              <Image
              width ={1000}
              height={1000}
                src={video.snippet.thumbnails.high.url}
                alt="avatar"
                className="h-10 w-10 rounded-full -translate-y-3"
              />
              <p className="text-black font-bold text-sm">
                {video.snippet.title.split(" ").length > 5
                  ? video.snippet.title.split(" ").slice(0, 10).join(" ") + "..."
                  : video.snippet.title}
              </p>
              <p className="text-sm text-black/50 font-medium">
                {video.snippet.channelTitle}
              </p>
            <div className="flex gap-1">
             
           <p className="text-black/30">{formatNumber(video.statistics.viewCount)} views</p>
              <p className="text-black/30">•</p>
            <p className="text-black/30">
                {getRelativeTime(video.snippet.publishedAt)}
              
              </p>
            </div>
              {video.snippet.liveBroadcastContent === "live" ? (
                <p className="text-red-700 bg-red-100 border-red-600 border p-1 rounded-lg w-20 text-sm">
                  LIVE NOW
                </p>
              ) : null}
            </div>
          </div>
        ))}
      </div>
      ) : ( 
        <div className="grid grid-cols-4 space-y-3 gap-4 my-7" >
        {videos.map((video) => (
          <div  key={video.id}  className="p-3  border-gray-300 bg-white rounded-2xl ">
            <div
             
            
              onMouseEnter={() => setHovered(video.id)}
              onMouseLeave={() => setHovered("")}
            >
              {hovered === video.id ? (
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                  className="h-50 w-66 object-cover rounded-2xl mr-auto"
                  allowFullScreen
                  // allow="autoplay; encrypted-media"
                ></iframe>
              ) : (
                <Image
                width ={1000}
                height={1000}
                  src={video.snippet.thumbnails.high.url}
                  alt="thumbnail"
                  className="h-50 w-100 object-cover rounded-2xl mr-auto"
                />
              )}
            </div>
  
            <div className="flex flex-col px-2">
              <Image
              width ={1000}
              height={1000}
                src={video.snippet.thumbnails.high.url}
                alt="avatar"
                className="h-10 w-10 rounded-full -translate-y-3"
              />
              <p className="text-black font-bold text-sm">
                {video.snippet.title.split(" ").length > 5
                  ? video.snippet.title.split(" ").slice(0, 10).join(" ") + "..."
                  : video.snippet.title}
              </p>
              <p className="text-sm text-black/50 font-medium">
                {video.snippet.channelTitle}
              </p>
            <div className="flex gap-1">
              <p className="text-black/30">{formatNumber(video.statistics.viewCount)} views</p>
              <p className="text-black/30">•</p>
            <p className="text-black/30">
                {getRelativeTime(video.snippet.publishedAt)}
              
              </p>
            </div>
              {video.snippet.liveBroadcastContent === "live" ? (
                <p className="text-red-700 bg-red-100 border-red-600 border p-1 rounded-lg w-20 text-sm">
                  LIVE NOW
                </p>
              ) : null}
            </div>
          </div>
        ))}
      </div>
      )
  );
}

// export default Thumbnails
