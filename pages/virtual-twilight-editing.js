
//components
import GuestLayout from "../layouts/GuestLayout";
import { PricingPlanComponent } from "../components/sections/PricingPlanComponent";
import { LogoCloudComponentOnBrand } from "../components/sections/LogoCloudComponent";
import { FaqComponent } from "../components/sections/FaqComponent";

const title = "Virtual Twilight Editing"
export default function VideoEditing() {
  return (
    <>
      <GuestLayout>
        <div className="bg-white">
          {/* Pricing with four tiers and toggle */}
          <PricingPlanComponent title={title}/>
          {/* Logo cloud on brand */}
          <LogoCloudComponentOnBrand />
          {/* FAQ offset */}
          <FaqComponent />
        </div>
      </GuestLayout>
    </>
  );
}
