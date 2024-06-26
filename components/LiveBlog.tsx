import { Feed } from "./Feed"
import { Schedule } from "./Schedule"
import { Speakers } from "./Speakers"

/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/IIamEmnbAaw
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app

**/
export type LastLiveEventIdProps = {
  [key: string]: string | string[] | undefined
}

export function LiveBlog({ lastLiveEventId }: LastLiveEventIdProps) {
  return (
    <>
      <div className="flex-1 grid grid-cols-[300px_1fr] gap-6 p-6">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 space-y-6">
          <div>
            <Schedule lastLiveEventId={lastLiveEventId} />
          </div>
          <div>
            <Speakers lastLiveEventId={lastLiveEventId} />
          </div>
        </div>
        <div>
          <Feed lastLiveEventId={lastLiveEventId} />
        </div>
      </div>
    </>
  )
}
