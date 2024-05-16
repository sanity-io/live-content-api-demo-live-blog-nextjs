import { sanityFetch } from "@/sanity/lib/fetch"
import { urlForImage } from "@/sanity/lib/image"
import { LastLiveEventIdProps } from "./LiveBlog"
import Image from "next/image"
import { groq } from "next-sanity"
import { SpeakerQueryResult } from "@/sanity.types"

const speakerQuery = groq`*[_type == "speaker"]`
export async function Speakers({ lastLiveEventId }: LastLiveEventIdProps) {
  const [speakers, LiveSubscription]: [SpeakerQueryResult, any] =
    await sanityFetch({
      query: speakerQuery,
      lastLiveEventId,
    })
  return (
    <div>
      <h3 className="text-lg font-medium mb-2">Speakers</h3>
      <div className="grid grid-cols-2 gap-4">
        {speakers.map((speaker: any) => {
          return (
            <div
              key={speaker._id}
              className="flex flex-col items-center saturate-0"
            >
              <Image
                alt="Speaker"
                className="rounded-full"
                height={64}
                src={urlForImage(speaker.photo)}
                style={{
                  aspectRatio: "64/64",
                  objectFit: "cover",
                }}
                width={64}
              />
              <div className="text-sm font-medium mt-2 text-center">
                {speaker.name}
              </div>
              <div className="text-gray-500 dark:text-gray-400 text-sm">
                {speaker.title}
              </div>
            </div>
          )
        })}
      </div>
      <LiveSubscription />
    </div>
  )
}
