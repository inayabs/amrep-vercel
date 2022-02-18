
//components
import GuestLayout from "../layouts/GuestLayout";
import { PricingPlanComponent } from "../components/sections/PricingPlanComponent";
import { LogoCloudComponentOnBrand } from "../components/sections/LogoCloudComponent";

const title = 'Packages'
export default function Packages() {
  return (
    <>
      <GuestLayout>
        <div className="bg-white">
          {/* Pricing with four tiers and toggle */}
          <PricingPlanComponent title={title}/>
          {/* Logo cloud on brand */}
          <LogoCloudComponentOnBrand />
        </div>
      </GuestLayout>
    </>
  );
}
