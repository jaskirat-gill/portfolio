import Canvas from "@/components/Canvas";
import ContactCard from "@/components/ContactCard";

function Contact() {

  return (
    <div className="relative flex h-screen w-full z-[999]" id="contact">
      <Canvas />
      <ContactCard />
    </div>
  );
}

export default Contact;