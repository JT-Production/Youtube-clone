

export async function getYoutubeVideos(searchQuery: string) {
  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  const channelName = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_NAME;
  const apiUrl = process.env.NEXT_PUBLIC_YOUTUBE_VIDEO_URL;
  const apiSearch = process.env.NEXT_PUBLIC_YOUTUBE_SEARCH_URL;

  if (!apiUrl || !apiKey || !channelName) {
    console.log(apiUrl)
    throw new Error("Missing environment variables for YouTube API");
  }

  try {
    // const data = await fetch(`${apiUrl}?key=${apiKey}&order=date&part=snippet,id&maxResults=50`);
    const data = await fetch(`${apiUrl}?part=snippet,contentDetails,statistics&maxResults=50&chart=mostPopular&key=${apiKey}`);
    const seearchData = await fetch(`${apiSearch}?part=snippet&maxResults=10&q=${searchQuery}&key=${apiKey}`);

    if (!data.ok) {
        throw new Error("Failed to fetch data from YouTube API");
      }
     console.log(data.url); 
     console.log(seearchData.url);
     console.log(typeof searchQuery);
    return searchQuery ? seearchData.json() : data.json();
  } catch (error) {
    const data = await fetch(`${apiUrl}?part=snippet&maxResults=25&q=surfing&key=${apiKey}`);
    console.log(data.url + " "+ error);
    throw new Error("An error occurred while fetching the videos" );
  }
}
