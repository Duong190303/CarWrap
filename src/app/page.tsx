import { AboutUs } from "@/components/AboutUs";
import { Carousel } from "@/components/Carousel";
// import { ContactUs } from "@/components/ContactUs";
// import { Gallery } from "@/components/Gallery";
import { HomeLayout } from "@/components/Home/HomeLayout";
// import { NailHero } from "@/components/NailHero";
import { Service } from "@/components/Service";
import { NewToday } from "@/components/NewToday";
import { Suppliers } from "@/components/Suppliers";
import { Lasted } from "@/components/Lasted";
import { WrapstyleHero } from "@/components/WrapStyleHero";
import { WRAPSTYLE_IMAGES } from "@/components/WrapStyleHero/data";
import { Partners } from "@/components/Partners";
import { ContactUs } from "@/components/ContactUs/index";
import { Branch } from "@/components/Branch";

export default function HomePage() {
  return (
    <HomeLayout>
      <Carousel />
      <NewToday />
      <Service />
      <AboutUs />
      <Suppliers />
      <Lasted />
      <WrapstyleHero images={WRAPSTYLE_IMAGES} />
      <Branch />
      <Partners />
      <ContactUs
        backgroundUrl="/images/city-bg.jpg"
        titleLines={["LET'S", "REVAMP", "YOUR", "RIDES"]}
        description="For the best experience at WrapStyle Vietnam, you can book in advance via the form or contact our hotline."
        hotline="+84 933 622 225"
      />{" "}
    </HomeLayout>
  );
}
