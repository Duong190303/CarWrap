import { AboutUs } from "@/components/AboutUs";
import { HomeLayout } from "@/components/Home/HomeLayout";
import { Service } from "@/components/Service";
import { NewToday } from "@/components/NewToday";
import { Suppliers } from "@/components/Suppliers";
import { Lasted } from "@/components/Lasted";
import { Partners } from "@/components/Partners";
import { ContactUs } from "@/components/ContactUs/index";
import { Branch } from "@/components/Branch";

export default function HomePage() {
  return (
    <HomeLayout>
      {/* <Carousel /> */}
      <NewToday />
      <Service />
      <AboutUs />
      <Suppliers />
      <Lasted />
      <Branch />
      <Partners />
      <ContactUs
        backgroundUrl="/images/city-bg.jpg"
        titleLines={["LET'S", "REVAMP", "YOUR", "RIDES"]}
        description="For the best experience at Resendiz Rwraps, you can book in advance via the form or contact our hotline."
        hotline="+18304024222"
      />{" "}
    </HomeLayout>
  );
}
