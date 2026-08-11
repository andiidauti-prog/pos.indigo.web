import { Hero } from '@/sections/Hero'
import { CoreCapabilities } from '@/sections/CoreCapabilities'
import { Industries } from '@/sections/Industries'
import { ProductShowcase } from '@/sections/ProductShowcase'
import { BusinessManagement } from '@/sections/BusinessManagement'

export function HomePage() {
  return (
    <>
      <Hero />
      <CoreCapabilities />
      <Industries />
      <ProductShowcase />
      <BusinessManagement />
    </>
  )
}
