import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
        <>
        <section>
          <div className="relative w-full h-screen overflow-hidden  ">
            <Header />
            <div className="absolute inset-0 bg-custom-gradient z-0"></div>
            {/* <video
          autoPlay
          muted
          loop
          className="absolute top-1/2 left-1/2 w-auto h-auto min-w-full min-h-full object-cover transform -translate-x-1/2 -translate-y-1/2"
          >
          <source src="/videos/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
            <div className="relative z-10 flex flex-col items-start justify-normal md:mt-10 gap-5 w-full h-full text-white p-8">
              <div className="md:max-w-[50%]">
                <p className="mt-4 text-2xl">
                  tenetur molestias, facilis cum eius quod placeat officiis
                  perferendis! Veniam qui cumque facere.
                </p>
              </div>
              <div className="md:max-w-[50%]">
                <h1 className="text-4xl font-bold">Welcome </h1>
                <p className="mt-4 text-2xl">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
                  numquam, veniam laboriosam nulla reiciendis, a similique officia
                  tenetur molestias, facilis cum eius quod placeat officiis
                  perferendis! Veniam qui cumque facere.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-[url('/example.png')] bg-cover bg-center h-screen">

    <h1>Hello world  <i className="pi pi-times text-white"style={{ color: 'slateblue' }}></i></h1>
        </section>
        </>

  );
}
