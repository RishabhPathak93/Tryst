import ServiceTemplate from './ServiceTemplate';
import backgroundImage from '../../assets/images/service4.jpg'

const SPMUPage = () => {
  const spmuServices = [
    {
      name: "Microblading",
      description: "Natural-looking, semi-permanent eyebrow enhancement",
      price: "Starts at ₹33,200"
    },
    {
      name: "Powder Brows",
      description: "Soft, powdered eyebrow look that lasts",
      price: "Starts at ₹37,400"
    },
    {
      name: "Lip Blush",
      description: "Semi-permanent lip color enhancement",
      price: "Starts at ₹41,500"
    },
    {
      name: "Eyeliner",
      description: "Long-lasting definition for your eyes",
      price: "Starts at ₹29,100"
    },
    {
      name: "Color Boost",
      description: "Touch-up service for existing SPMU treatments",
      price: "Starts at ₹16,600"
    },
    {
      name: "Consultation",
      description: "Professional consultation and patch test",
      price: "Starts at ₹4,150"
    }
  ];

  return (
    <ServiceTemplate
      title="Semi-Permanent Makeup"
      subtitle="Enhance your natural beauty with our professional SPMU services"
      heroImage={backgroundImage}
      services={spmuServices}
    />
  );
};

export default SPMUPage;
