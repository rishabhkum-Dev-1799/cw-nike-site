import { CustomerReviews, Hero, PopularProducts, Services, SpecialOffer, Subscribe, SuperQuality,Footer } from "./sections"

const App=()=>{
  // Layouting of the single Page application
  return (
    <main>
      <section className='xl:padding-l wide:padding-r padding-bg '>
        <Hero/>
      </section>
      <section className='padding'>
        <PopularProducts/>
      </section>
      <section className='padding'>
        <SuperQuality/>
      </section>
      <section className='padding-x py-10'>
        <Services/>
      </section>
      <section className='padding'>
        <SpecialOffer/>
      </section>
      <section className='bg-pale-blue padding'>
        <CustomerReviews/>
      </section>
      <section className='padding-x py-16 sm:py-32 w-full'>
        <Subscribe/>
      </section>
      <section className='bg-black padding-x padding-t pb-8'>
        <Footer/>
      </section>
    </main>
  )
}

export default App
