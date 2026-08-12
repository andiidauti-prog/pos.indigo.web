import { Hero } from '@/sections/Hero'
import { CoreCapabilities } from '@/sections/CoreCapabilities'
import { Industries } from '@/sections/Industries'
import { ProductShowcase } from '@/sections/ProductShowcase'
import { BusinessManagement } from '@/sections/BusinessManagement'
import { Fiscalization } from '@/sections/Fiscalization'
import { Payments } from '@/sections/Payments'
import { FinalCTA } from '@/sections/FinalCTA'

export function HomePage() {
  return (
    <>
      <Hero />
      <CoreCapabilities />
      <Industries />
      <ProductShowcase />
      <BusinessManagement />
      <Fiscalization />
      <Payments />
      <FinalCTA />
    </>
  )
}
