//components
import GuestLayout from "../layouts/GuestLayout";
import { Header } from "../components/sections/HeaderSectionComponent";
import { FaqComponent } from "../components/sections/FaqComponent";
import { StatsComponent } from "../components/sections/StatsComponent";
const title = "About Us";
const description = "Lorem ipsum dolor sit amet";
export default function About() {
  return (
    <GuestLayout>
      <Header title={title} description={description}/>
      <FaqComponent />
      <StatsComponent />
    </GuestLayout>
  );
}
