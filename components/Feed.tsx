import { sanityFetch } from "@/sanity/lib/fetch"
import { LastLiveEventIdProps } from "./LiveBlog"
import { groq, PortableText } from "next-sanity"
import { FeedQueryResult } from "@/sanity.types"

const feedQuery = groq`*[_type == "post"]|order(_createdAt desc)`
export async function Feed({ lastLiveEventId }: LastLiveEventIdProps) {
  const [posts, LiveSubscription]: [FeedQueryResult, any] = await sanityFetch({
    query: feedQuery,
    lastLiveEventId,
  })

  return (
    <div
      className="bg-gray-100 dark:bg-gray-800 rounded-lg
    p-6 space-y-6 overflow-auto"
    >
      {posts.length === 0 && <div>Waiting for the event to start…</div>}
      {posts.map((post) => {
        const time = new Date(post._createdAt).toLocaleTimeString("en-US", {
          hour12: true,
          hour: "numeric",
          minute: "numeric",
        })
        return (
          <div
            className="grid md:grid-cols-6 md:grid-row-1 sm:grid-row-2 sm:grid-cols-1 transition-all duration-500"
            key={post._id}
          >
            <div className="time text-gray-500 dark:text-gray-400 text-sm md:col-span-1 flex items-center">
              <div>{time}</div>
            </div>
            <div className="col-span-5">
              <h3 className="font-medium">{post.title}</h3>
              <div className="text-gray-500 dark:text-gray-400 text-sm prose proes">
                {post.body && <PortableText value={post.body} />}
              </div>
            </div>
          </div>
        )
      })}
      <LiveSubscription />
    </div>
  )
}
