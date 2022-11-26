import React from "react"
import "style.css"
import "tailwindcss/lib/css/preflight.css"
import AnimationRevealPage from "helpers/AnimationRevealPage"
import Hero from "components/hero/BackgroundAsImageWithCenteredContent"
import MiniCenteredFooter from "components/footers/MiniCenteredFooter"
import SingleCol from "components/faqs/SingleCol"
import SimpleContactUs from "components/forms/SimpleContactUs"
import TabCardGrid from "components/cards/TabCardGrid"
import TwoColSingleFeatureWithStats from "components/features/TwoColSingleFeatureWithStats"

function App() {
  return (
    <AnimationRevealPage disabled>
      <Hero />
      <TabCardGrid />
      <TwoColSingleFeatureWithStats />
      <SingleCol />
      <SimpleContactUs />
      <MiniCenteredFooter />
    </AnimationRevealPage>
  )
}

export default App