import ServiceTemplate from './ServiceTemplate';
import backgroundImage from '../../assets/images/77.jpg';

const SkinPage = () => {
  const skinServices = [
    {
      name: "Clean Up",
      description: "Our silicone- and paraben-free clean-up deeply purifies the skin and promotes the renewal of the outermost layers, leaving your complexion visibly brighter and healthier. Regular sessions help enhance your skin’s tone and texture for a naturally radiant glow.",
      duration: "25-30 mins",
      bestFor: "All skin types"
    },
    {
      name: "Detan",
      description: "More than just detan - What sets us apart? Our Detan service goes beyond skincare. We include calming warm towel rituals to help you unwind and de-stress, turning your session into a truly relaxing experience. It’s not just a treatment—it’s self-care, redefined.",
      duration: "20-25 mins",
      bestFor: "All skin types"
    },
    {
      name: "Face Treatments",
      description: "Looking to relax and de-stress? Our luxurious facials are designed to help you unwind. Got skin concerns? We tailor each treatment to your unique needs—be it acne, pigmentation, dryness, or sensitivity. Choose from a wide range of facials, including advanced machine-based treatments and HydraFacials for deeper product penetration and enhanced results. Whatever your skin goals, we’ve got the perfect facial for you!",
      duration: "60-90 mins",
      bestFor: "All skin types"
    },
    {
      name: "Add On Mask",
      description: "Elevate your skincare routine with our refreshing masks, each designed to offer an added layer of rejuvenation. Whether infused with essential oils, Vitamin C, or marine extracts, these masks are crafted from natural ingredients that mold effortlessly to your face and neck, like a second skin. The unique combination of marine elements soothes and revitalizes, enhancing hydration and fortifying the skin's protective barrier. With the added benefits of Vitamin C, these masks brighten and firm, leaving your complexion glowing and youthful.",
      duration: "10-15 mins",
      bestFor: "All skin types"
    },
    {
      name: "Face Massage Only",
      description: "Relax, unwind, and let your stress melt away with our exclusive Massage Only treatment. Perfect for soothing your muscles and refreshing your mind, it's the ultimate escape to pure relaxation.",
      duration: "25-30 mins",
      bestFor: "All skin types"
    },
    {
      name: "Skin Consultation",
      description: "Comprehensive analysis with personalized treatment plan",
      duration: "30 mins",
      bestFor: "All skin types"
    }
  ];

  return (
    <ServiceTemplate
      title="Skin Care Services"
      subtitle="Advanced skincare treatments for radiant, healthy skin"
      heroImage={backgroundImage}
      services={skinServices}
      additionalContent={
        <>
        </>
      }
    />
  );
};

export default SkinPage;