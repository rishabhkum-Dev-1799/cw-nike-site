import Loader from "./components/common/Loader";
import { lazy, Suspense } from "react";

const Hero=lazy(()=>import('./sections/Hero'))
const CustomerReviews=lazy(()=>import('./sections/CustomerReviews'))
const Footer=lazy(()=>import('./sections/Footer'))
const PopularProducts=lazy(()=>import('./sections/PopularProducts'))
const Services=lazy(()=>import('./sections/Services'))
const SpecialOffer=lazy(()=>import('./sections/SpecialOffer'))
const Subscribe=lazy(()=>import('./sections/Subscribe'))
const SuperQuality=lazy(()=>import('./sections/SuperQuality'))

const App = () => {
  // Layouting of the single Page application
  return (
    <main>
      <section className="xl:padding-l wide:padding-r padding-bg ">
        <Suspense fallback={<Loader />}>
          <Hero />
        </Suspense>
      </section>
      <section className="padding">
        <Suspense fallback={<Loader />}>
          <PopularProducts />
        </Suspense>
      </section>
      <section className="padding">
        <Suspense fallback={<Loader />}>
          <SuperQuality />
        </Suspense>
      </section>
      <section className="padding-x py-10">
        <Suspense fallback={<Loader />}>
          <Services />
        </Suspense>
      </section>
      <section className="padding">
        <Suspense fallback={<Loader />}>
          <SpecialOffer />
        </Suspense>
      </section>
      <section className="bg-pale-blue padding">
        <Suspense fallback={<Loader />}>
          <CustomerReviews />
        </Suspense>
      </section>
      <section className="padding-x py-16 sm:py-32 w-full">
        <Suspense fallback={<Loader />}>
          <Subscribe />
        </Suspense>
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Suspense fallback={<Loader />}>
          <Footer />
        </Suspense>
      </section>
    </main>
  );
};

export default App;
