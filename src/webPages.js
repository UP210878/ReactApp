import "bootstrap";
import Title from "./components/Title";

export function MainPage() {
  return <>{Title("Home")}</>;
}

export function ContactPage() {
  return <>{Title("Contact")}</>;
}

export function AboutPage() {
  return <>{Title("About")}</>;
}

export function PricingPage() {
  return <>{Title("Pricing Page")}
  <h2>Hola</h2></>;
}
