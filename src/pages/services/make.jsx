import ServiceTemplate from './ServiceTemplate';
import backgroundImage from '../../assets/images/68.jpg';


const Makup = () => {
  const makeServices = [
    {
      name: "BRIDAL MAKEUP",
      description: "Bridal Beauty, Tailored Just for You At Tryst, we are dedicated to enhancing your natural beauty while creating a flawless, picture-perfect look — complete with gorgeous hair and radiant skin. Whether you have a vision in mind or need expert guidance, we thoughtfully consider your outfit, your personal style, and what suits you best to craft a bridal look that’s uniquely you.",
      duration: "130-150 mins",
      bestFor: "All Brides"   
    },
    {
      name: "Engagement Makeup",
      description: "At Tryst, we bring you exclusive services designed to make you look and feel your most elegant on your special day. From getting you ready with our prebridal packages to breathtaking engagement makeup, we understand the significance of looking flawless for this once-in-a-lifetime moment. Whether you have a specific makeup technique in mind or wish to explore options through a complimentary consultation with our skilled makeup artists, we’re here to craft a look that truly reflects the essence and vibe of your celebration.",
      duration: "130-150 mins",
      bestFor: "Perfect for special moment"
    },
    {
      name: "GROOM MAKEUP ",
      description: "Achieve the perfect 'no-makeup makeup' look that gives you a radiant, fresh glow on your special day. We provide personalized services, including sophisticated groom hairstyles & makeup. Schedule your free makeup consultation today! ",
      duration: "45-60 mins ",
      bestFor: "For the man who knows his moment! ",
    },
    {
      name: "Friends & Family ",
      description: "our friends and family bring warmth, joy, and meaning to your special day — and we’re here to make sure they look as stunning as they feel. At Tryst, we offer tailored makeup and hairstyling services for bridesmaids, family, and close friends. Each look is thoughtfully curated to complement the bride’s aesthetic using subtle yet striking techniques.",
      duration: "45-60 mins",
      bestFor: "Styling the Ones Who Matter Most",
      
    },
    {
      name: "Trial Makeup",
      description: "Discover your dream wedding style with our exclusive bridal makeup trials. From testing out your ideal look to receiving personalized skin and hair care recommendations, our experts are here to guide you every step of the way. Try different styles, get professional insights, and walk into your big day with total confidence.",
      duration: "30-40mins",
      bestFor: "Try your look before you walk the aisle.",
      
    },
    {
      name: "Evening | Party Makeup",
      description: "Step into the spotlight with our evening and party makeup, perfect for glamorous nights out, celebrations, and special events. From bold and dramatic to soft and elegant, we create the perfect look to match your vibe.",
      duration: "60-75 mins",
      bestFor: "Glam Ready for Every Occasion.",
      
    }
  ];

  return (
    <ServiceTemplate
      title="Make Up "
      subtitle="From Canvas to Confidence"
      heroImage={backgroundImage}
      services={makeServices}
      additionalContent={
        <>
        </>
      }
    />
  );
};

export default Makup;
