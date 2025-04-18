import ServiceTemplate from './ServiceTemplate';
import backgroundImage from '../../assets/images/49.jpg';


const NailPage = () => {
  const nailServices = [
    {
      name: "Express Manicure | Pedicure",
      description: "Treat yourself to a quick dose of pampering! Choose from our wide variety of manicures and pedicures, perfectly designed to refresh your hands and feet in no time.",
      duration: "25-30 mins",
      bestFor: "All skin types"   
    },
    {
      name: "Tryst Signature Manicure | Pedicure",
      description: "Elevate your self-care ritual with our luxurious signature manicure and pedicure. This premium treatment combines expert grooming with indulgent care, leaving your hands and feet soft, polished, and utterly pampered. ",
      duration: "45- 60 mins",
      bestFor: "All skin types"
    },
    {
      name: "Luxe Manicure | Pedicure",
      description: "Indulge in the ultimate hand and foot makeover. Our Luxe Mani-Pedi offers a lavish experience with rich exfoliation, intense hydration, and flawless finishing touches—because your hands and feet deserve nothing but the best.  ",
      duration: "60 - 75 mins ",
      bestFor: "All Skin types",
    },
    {
      name: "Nail Extensions ",
      description: "Instantly elevate your look with our expertly crafted nail extensions. Whether you love a natural finish or bold, glamorous designs, our extensions add length, strength, and style for statement-worthy nails that last.  ",
      duration: "75- 90 mins",
      bestFor: "All Skin types",
      details: [
        "Gel Extensions",
        "Gum Gel",
        "Fake Nail Extensions"
      ]
    },
    {
      name: "Gel Nails ",
      description: "Say hello to long-lasting shine and chip-free perfection! Our gel nail services offer a sleek, glossy finish that stays flawless for weeks. Choose from a wide range of colors and let your nails shine bright, day after day.  ",
      duration: "30-40mins",
      bestFor: "All Skin types",
      details: [
        "Solid Color",
        "Shimmer",
        "Cat Eye",
        "Temperature Change Polish ",
        "French"
      ]
    },
    {
      name: "Gel Polish Removal | Nail Extension Removal ",
      description: "Gently remove your gel nails or extensions with our expert removal service. We ensure a safe, smooth process that protects your natural nails while leaving them ready for your next stunning look.  ",
      duration: "20 - 45mins",
      bestFor: "All Skin types",
      details: [
        "Any Extension"
      ]
     
    }
  ];

  return (
    <ServiceTemplate
      title="Nail Care Services"
      subtitle="Pamper your nails with our lux nail services-Where style meets flawless care!"
      heroImage={backgroundImage}
      services={nailServices}
      additionalContent={
        <>
        </>
      }
    />
  );
};

export default NailPage;