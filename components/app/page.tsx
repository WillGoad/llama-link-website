"use client"

import { PageQuery } from "@/tina/__generated__/types"
import { useTina } from "tinacms/dist/react"

import { Footer } from "@/components/footer"
import { SiteHeader } from "@/components/site-header"
import { WelcomeHero } from "@/components/welcome-hero"

export function PageComponent(props: {
  data: PageQuery
  variables: {
    relativePath: string
  }
  query: string
}) {
  const { data } = useTina(props)

  return (
    <>
      <SiteHeader />
     {data.page  && console.log(data.page.blocks)}
      {data.page.blocks?.map((block, i) => {
        switch (block?.__typename) {
          case undefined: {
            return <WelcomeHero key={i} {...block} />
          }
          default: {
            return <WelcomeHero key={i} {...block} />
          }
        }
      })}
      <Footer />
    </>
  )
}