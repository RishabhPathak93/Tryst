import ServiceTemplate from './ServiceTemplate';
import backgroundImage from '../../assets/images/18.jpg';

const MenshairPage = () => {
  const MenshairServices = [
    {
      name: "Men's Haircut And Style",
      description: "Whether it's a sharp fade, a perfectly styled mane, or a beard that means business — our expert barbers and stylists are here to keep you looking effortlessly sharp. Precision, style, and attention to detail — all tailored just for you.",
      duration: "45-50 mins",
      bestFor: "For Fresh Tailored Look"
    },
    {
      name: "Beard Trim | Shave",
      description: "From a clean shave to a perfectly sculpted beard, we tailor every service to your style and preference. With precision, care, and attention to detail, we deliver a groomed look that’s sharp, fresh, and uniquely you.",
      duration: "25-35 mins",
      bestFor: "Well groomed, Defined look"
    },
    {
      name: "Men's Color",
      description: "From hair to beard, mustache to fade, we’ve got you covered. Our men’s color services are designed with precision and care to give you a sharp, tailored look that enhances your style, whether you’re going for a subtle change or something bolder.",
      duration: "45-90 mins",
      bestFor: "Edgy Look"
    },
   
  ];

  return (
    <ServiceTemplate
      title="Men's Hair"
      subtitle="Master strokes, clean cuts, effortless style—crafted just for you."
      heroImage={backgroundImage}
      services={MenshairServices}
      additionalContent={
        <>
        </>
      }
    />
  );
};

export default MenshairPage;