import { LiveBlog } from "@/components/LiveBlog"

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}
export default function Home({ searchParams: { lastLiveEventId } }: Props) {
  return (
    <main>
      <LiveBlog lastLiveEventId={lastLiveEventId} />
    </main>
  )
}
