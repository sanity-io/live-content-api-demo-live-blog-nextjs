import { sanityFetch } from "@/sanity/lib/fetch"
import { LastLiveEventIdProps } from "./LiveBlog"
import { start } from "repl"
import { LiveSubscriptionProps } from "next-sanity/live-subscription/client-component"
import { LiveQueryProviderProps } from "next-sanity/preview"
import { groq } from "next-sanity"
import { ScheduleQueryResult, Schedule as ScheduleType } from "@/sanity.types"

const scheduleQuery = groq`*[_type == "schedule"]|order(startTime desc)`
export async function Schedule({ lastLiveEventId }: LastLiveEventIdProps) {
  const [schedules, LiveSubscription]: [ScheduleQueryResult, any] =
    await sanityFetch({
      query: scheduleQuery,
      lastLiveEventId,
    })
  return (
    <div>
      <h3 className="text-lg font-medium mb-2">Event Schedule</h3>
      <ul className="space-y-2 text-sm">
        {schedules.map((schedule) => {
          const startTime = new Date(schedule.start ?? "").toLocaleTimeString(
            "en-US",
            {
              hour12: true,
              hour: "numeric",
              minute: "numeric",
            }
          )

          let endTime = new Date(schedule.end ?? "").toLocaleTimeString(
            "en-US",
            {
              hour12: true,
              hour: "numeric",
              minute: "numeric",
            }
          )
          return (
            <li key={schedule._id}>
              <div className="font-medium">
                {startTime} - {endTime}
              </div>
              <div className="text-gray-500 dark:text-gray-400">
                {schedule.title}
              </div>
            </li>
          )
        })}
      </ul>
      <LiveSubscription />
    </div>
  )
}
