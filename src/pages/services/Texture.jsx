import ServiceTemplate from './ServiceTemplate';
import backgroundImage from '../../assets/images/5.jpg'

const TexturePage = () => {
  const TextureServices = [
    {
      name: "Hair Botox (Anti-Frizz Treatment)",
      description: "Fight frizz and control unruly hair with our Hair Botox treatment. This powerful formula smooths and restores your hair, leaving it sleek, manageable, and frizz-free for longer-lasting results",
      duration: "180-300 mins",
      bestFor: "All Types Of Hair"
    },
    {
      name: "Hair Smoothing | Straightening",
      description: "Achieve sleek, frizz-free hair with our expert smoothing and straightening treatments. Whether you’re looking for long-lasting shine or perfectly straight strands, we deliver smooth, manageable hair with a natural, polished finish",
      duration: "180-300 mins",
      bestFor: "All Types Of Hair"
    }
 
  ];

  return (
    <ServiceTemplate
      title="Hair Texture Services"
      subtitle="From Frizz to Fabulous — Reinvent Your Texture"
      heroImage={backgroundImage}
      services={TextureServices}
    />
  );
};

export default TexturePage;
