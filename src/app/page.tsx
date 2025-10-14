import { AboutUs } from "@/components/AboutUs";
import { Carousel } from "@/components/Carousel";
import { ContactUs } from "@/components/ContactUs";
import { Gallery } from "@/components/Gallery";
import { HomeLayout } from "@/components/Home/HomeLayout";
import { NailHero } from "@/components/NailHero";
import { Service } from "@/components/Service";
import { Skilled } from "@/components/Skilled";

export default function HomePage() {
  return (
    <HomeLayout>
      <Carousel />
      <Skilled />
      <Service />
      <Gallery />
      <ContactUs />
      <NailHero />
      <AboutUs />
    </HomeLayout>
  );
}
