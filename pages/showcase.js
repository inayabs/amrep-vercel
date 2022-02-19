import GuestLayout from "../layouts/GuestLayout";
import ImageComparison from "../components/ImageComparison";

export default function Showcase() {
  return (
    <GuestLayout>
      <div className="bg-gray-50">
        <ImageComparison />
      </div>
    </GuestLayout>
  );
}
