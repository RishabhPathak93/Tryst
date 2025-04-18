import ServiceTemplate from './ServiceTemplate';
import backgroundImage from '../../assets/images/182.jpg';


const Bedit = () => {
  const BeditServices = [
    {
      name: "Threading",
      description: "From threading and waxing  and more — discover your go-to beauty essentials for that polished, refreshed look, all year round.",
      duration: "20-45 mins",
      bestFor: "All smooth, hair free skin"   
    },
    {
      name: "Waxing",
      description: "Radiate Confidence, the Luxe Way ✨, Treat yourself to the ultimate refresh with our expert beauty essentials. Whether it’s silky-smooth skin with Depileve peel-off wax for Bikini & Brazilian waxing, our soothing cartridge wax, or Rica Premium wax — we’ve got you covered.",
      duration: "30-60 mins",
      bestFor: "All smooth, hair free skin"
    },
    {
      name: "Healing Touch  (*For Women Only) ",
      description: "Reconnect with your inner calm through our Healing Touch Body Massage. Designed to melt away stress, ease muscle tension, and restore balance, this therapeutic experience leaves you feeling renewed from head to toe. ",
      duration: "45-60 mins",
      bestFor: "Total relaxation and stress relieaf",
    },
    {
      name: "Foot Massage",
      description: "Give your feet the care they deserve with our relaxing foot massage. Designed to relieve tension, improve circulation, and restore energy, it’s the perfect way to unwind and recharge from the ground up.",
      duration: "30-45  mins",
      bestFor: "Total relaxation and stress relieaf",
      
    },
    {
      name: "Mind Blowing Champi | Headrush",
      description: "Drift into deep relaxation with our soothing head massage. Perfect for relieving stress, easing tension, and promoting better circulation, it’s the ultimate quick escape for your mind and body.",
      duration: "30-45 mins",
      bestFor: "Total relaxation and stress relieaf",
      
    },
    {
        name: "ULTIMATE INDULGENCE (*Women Only)",
        description: "Reveal radiant, silky-smooth skin with our exfoliating body polishing treatment. This luxurious service removes dead skin cells, boosts circulation, and leaves your body glowing, refreshed, and touchably soft.",
        duration: "60-75 mins",
        bestFor: "Radient, smooth & glowing skin",
        
    }

  ];

  return (
    <ServiceTemplate
      title="The Beauty Edit "
      subtitle="Your Must-Have Rituals for Smooth, Glowing Skin"
      heroImage={backgroundImage}
      services={BeditServices}
      additionalContent={
        <>
        </>
      }
    />
  );
};

export default Bedit;
