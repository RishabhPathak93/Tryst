import ServiceTemplate from './ServiceTemplate';
import backgroundImage from '../../assets/images/spa.jpeg'

const SpaPage = () => {
  const spaServices = [
    {
      name: "Swedish Massage",
      description: "The ultimate in relaxation — gentle, flowing strokes designed to melt away stress and tension.",
      price: "Starts at ₹999"
    },
    {
      name: "Deep Tissue Massage",
      description: "Targeted pressure that reaches deep into the muscles to release knots and restore balance.",
      price: "Starts at ₹799"
    },
    {
      name: "Hot Stone Massage",
      description: "A deeply soothing massage using warm stones to calm the body and ease muscle tightness.",
      price: "Starts at ₹1299"
    },
    {
      name: "Aromatherapy Massage",
      description: "Immerse your senses in calming essential oils while our experts rejuvenate your body and mind.",
      price: "Starts at ₹1349"
    },
    {
      name: "Body Scrub",
      description: "Gentle full-body exfoliation to reveal softer, smoother, glowing skin.",
      price: "Starts at ₹899"
    },
    {
      name: "Body Wrap",
      description: "Detoxifying wrap therapies designed to firm, hydrate, and refresh your skin from head to toe.",
      price: "Starts at ₹999"
    }
  ];

  return (
    <ServiceTemplate
      title="Spa Services"
      subtitle="Reset. Refresh. Reconnect — indulge in our curated spa rituals designed to heal and renew."
      heroImage={backgroundImage}
      services={spaServices}
    />
  );
};

export default SpaPage;
