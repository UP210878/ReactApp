import "bootstrap";
import "./App.css"
import Title from "./components/Title";

export function MainPage() {
  return <>
  {Title("Home")}
  <header>
  <div id="intro" class="bg-image shadow-2-strong">
      <div class="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8  )' }}>
        <div class="container d-flex align-items-center justify-content-center text-center h-100">
          <div class="text-white">
            <h1 class="mb-3">Learn Bootstrap 5 with MDB</h1>
            <h5 class="mb-4">Best & free guide of responsive web design</h5>
          </div>
        </div>
      </div>
    </div>
  </header>
  </>;
}

export function ContactPage() {
  return <>{Title("Contact")}</>;
}

export function AboutPage() {
  return <>{Title("About")}</>;
}

export function Featured() {
  return <>{Title("Featured")}
  <h2>Hola</h2></>;
}
