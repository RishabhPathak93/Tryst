import ServiceTemplate from './ServiceTemplate';
import backgroundImage from '../../assets/images/18.jpg'

const GroomingPage = () => {
  const groomingServices = [
    {
      name: "Men's Haircut",
      description: "Professional haircut and styling tailored to your vibe.",
      price: "Starts at @3,300"
    },
    {
      name: "Beard Trim & Styling",
      description: "Expert beard grooming and shaping for a sharp finish.",
      price: "Starts at @2,100"
    },
    {
      name: "Hot Towel Shave",
      description: "Classic hot towel straight razor shave for a clean, smooth feel.",
      price: "Starts at @2,900"
    },
    {
      name: "Hair Color",
      description: "Precision hair coloring services for bold or natural looks.",
      price: "Starts at @5,000"
    },
    {
      name: "Facial",
      description: "Targeted skincare treatments designed for men’s skin.",
      price: "Starts at @4,100"
    },
    {
      name: "Complete Grooming Package",
      description: "The full works — haircut, beard trim, and rejuvenating facial.",
      price: "Starts at @8,300"
    }
  ];

  return (
    <ServiceTemplate
      title="Men's Grooming"
      subtitle="Professional grooming services tailored for the modern gentleman"
      heroImage={backgroundImage}
      services={groomingServices}
    />
  );
};

export default GroomingPage;
