

import Websites from "./Websites";
import Introduction from "./Introduction";

export default function Home() {

  return (
    <div>
      <main className=" bg-white px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">

          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <Websites/>
            <Introduction/>
            <Websites/>
          </div>
        </section>
      </main>
    </div>
  );
}
