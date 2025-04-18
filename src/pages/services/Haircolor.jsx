import ServiceTemplate from './ServiceTemplate';
import backgroundImage from '../../assets/images/44.jpg';

const HaircolorPage = () => {
  const HaircolorServices = [
    {
      name: "Root touch up | Global color ",
      description: "Whether it’s a subtle root touch-up or a complete color transformation, we’ve got you covered. Our expert colorists offer both ammonia and ammonia-free color options, ensuring vibrant, long-lasting results that maintain your hair's health and strength. Bold, beautiful color that’s tailored to you—because your hair deserves the best.",
      duration: "90-180 mins",
      bestFor: "All Hair types",
      details: [
        "With ammonia",
        "Ammonia free",
      ]
    },
    {
      name: "Highlights & Dimension",
      description: "We don’t do ordinary. Our highlights are designed to add bold contrast and Resilient hair, radiant character—fueled by inner strength, hair and scalp-safe color that keep your strands as strong as they look stunning!",
     
      duration: "180-240 mins",
      bestFor: "All Hair types",
      details: [
        "Full head",
        "Crown",
      ]
    },
    {
      name: "Creative color",
      description: "Ready to make a statement? From striking panels of vivid color to bold accents in your balayage or ombré, we push the boundaries of creativity. Our expert colorists mix imagination with precision, giving you a unique, high-impact look that’s all your own.",
      duration: "180-240 mins",
      bestFor: "All Hair types",
      details: [
        "Balayage",
        "Ombre",
        "Money piece"
      ]
    },
    
  ];

  return (
    <ServiceTemplate
      title="Hair colouring Service"
      subtitle="Go Bold with Color - Your Hair, Your Rules!"
      heroImage={backgroundImage}
      services={HaircolorServices}
      additionalContent={
        <>
          
        </>
      }
    />
  );
};

export default HaircolorPage;