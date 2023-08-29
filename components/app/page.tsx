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

  return (
    <>
      <SiteHeader />
      {props.data.page.blocks?.map((block, i) => {
        switch (block?.__typename) {
          case "PageBlocksWelcomeHero": {
            return <WelcomeHero  />
          }
        }
      })}
      <Footer />
    </>
  )
}