import ContactForm from "../components/ContactForm";
import PhotoHead from "../components/PhotoHead"

export default function ContactPage() {
    return (
        <div className="w-full">
            <PhotoHead pageName={"Contact"} imageUrl={"/contact.jpg"} pageHead={"Contact Us"} />
            <ContactForm />
        </div>
    )
}

