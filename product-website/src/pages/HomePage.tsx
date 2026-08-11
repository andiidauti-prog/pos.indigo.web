import { Hero } from '@/sections/Hero'
import { CoreCapabilities } from '@/sections/CoreCapabilities'
import { Industries } from '@/sections/Industries'
import { ProductShowcase } from '@/sections/ProductShowcase'

export function HomePage() {
  return (
    <>
      <Hero />
      <CoreCapabilities />
      <Industries />
      <ProductShowcase />
    </>
  )
}
