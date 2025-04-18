import ServiceTemplate from './ServiceTemplate';
import backgroundImage from '../../assets/images/8.jpg';

const HairPage = () => {
  const hairServices = [
    {
      name: "Haircut & Style",
      description: "Snip, Style, Slay—From sleek bobs to flowing layers, our expert stylists are masters of every strand, every cut, and every style. Whether you're after a flawless blowout, beachy waves, curly haircut & styling, a deep conditioning treat, or a full-on glam transformation — we’ve got you covered.",
      duration: "45-60 mins",
      bestFor: "All hair types",
      details: [
        "All hair cut and styling",
        "Curly hair cut and styling",
      ]
    },
    
    {
      name: "Hair Spa & Treatments",
      description: "Revive | Replenish | Radiate. Our treatments go beyond beauty—they're a ritual of renewal. From dryness to damage, we restore your hair’s strength, shine, and vitality with care that goes deep.",
      duration: "60-90 mins",
      bestFor: "Damaged hair",
      details: [
        "Olaplex and hair spa treatments",
        "Scalp rejuvenation and deep conditioning",
        "Davines Hair treatment",
        "Nashi Hair spa & Treatment"
      ]
    },
    {
      name: "Blowout & Styling",
      description: "Polish | Power | Perfectly You. From sleek and smooth to effortless waves, our blowouts are designed to elevate your everyday. Whether it’s for a night out or just because, we’ll style your hair to suit your vibe—flawless, fresh, and uniquely you.",
      // price: "₹899 onwards",
      duration: "45 mins",
      bestFor: "Special events",
      details: [
        "Tryst signature blow dry",
        "Davines blow dry",
        "Nashi blow dry",
      ]
    }
  ];

  return (
    <ServiceTemplate
      title="Women's Hair Services"
      subtitle="Own your day with confidence — and hair that’s ready to steal the spotlight! "
      heroImage={backgroundImage}
      services={hairServices}
      additionalContent={
        <>
        </>
      }
    />
  );
};

export default HairPage;