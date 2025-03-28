// Tools
import { SanityDocument } from "next-sanity"

// Components
import Header from "@/components/header"
import Footer from "@/components/footer"
import Sections from "@/components/sections"


// Stop Caching
export const fetchCache = 'force-no-store';



export default function Page({ page }: { page: SanityDocument }) {
  const { pageNav, sections } = page

  return (
    <>
      <Header items={pageNav?.header} />
      <main className="flex min-h-screen flex-col items-center gap-y-24 py-12 lg:py-24 2xl:pt-48">
        <Sections body={sections} />
      </main>
      <Footer items={pageNav?.footer} />
    </>
  )
}