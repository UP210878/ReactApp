import "bootstrap";
import "./App.css";
import Title from "./components/Title";

export function MainPage() {
  return (
    <>
      {Title("Home")}
      <header>
        <section>
          <div class="container d-flex ml-5 align-items-start justify-content-center">
            <div class="text-black col-lg-8 pr-2 text-justify">
              <h1 class="mb-5 mt-4">Lorem ipsum</h1>
              <h5 class="mb-5">Montes nascetur</h5>
            <p>
              Sed cras ornare arcu dui. Aliquam nulla facilisi cras fermentum
              odio eu feugiat. Nibh mauris cursus mattis molestie a. Sit amet
              justo donec enim diam vulputate ut. Eget gravida cum sociis
              natoque. Diam quis enim lobortis scelerisque. Lobortis scelerisque
              fermentum dui faucibus in ornare quam. Aliquet eget sit amet
              tellus cras adipiscing enim. Etiam tempor orci eu lobortis.
              </p><p>
              Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Nisl
              suscipit adipiscing bibendum est. Convallis aenean et tortor at
              risus viverra adipiscing at in. Id faucibus nisl tincidunt eget.
              Lobortis mattis aliquam faucibus purus in. 
              </p><p>Scelerisque eu ultrices
              vitae auctor. Mattis pellentesque id nibh tortor id. Volutpat
              blandit aliquam etiam erat velit. Nibh tortor id aliquet lectus.
              Nunc id cursus metus aliquam eleifend. Elementum nisi quis
              eleifend quam. Donec ac odio tempor orci dapibus. 
              </p><p class="mb-5">Mattis aliquam
              faucibus purus in massa tempor nec. Massa tincidunt dui ut ornare
              lectus sit. Pellentesque massa placerat duis ultricies. Tortor id
              aliquet lectus proin nibh nisl condimentum id venenatis.
              Pellentesque pulvinar pellentesque habitant morbi tristique. Neque
              convallis a cras semper. Nunc mi ipsum faucibus vitae aliquet nec.
              Egestas dui id ornare arcu.
            </p>
            </div>
          </div>
        </section>
        <section>
          <div id="intro" class="bg-image shadow-2-strong">
            <div class="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
              <div class="container d-flex align-items-start justify-content-center mr-5">
                <div class="text-white col-lg-8 p-2 text-justify">
                  <h1 class="mb-5 mt-4">Lorem ipsum</h1>
                  <h5 class="mb-5">Montes nascetur</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Velit ut tortor pretium viverra suspendisse potenti
                    nullam ac. Elementum eu facilisis sed odio morbi.
                  </p>
                  <p>
                    Pellentesque sit amet porttitor eget dolor morbi non arcu.
                    Suspendisse in est ante in nibh mauris. Quam pellentesque
                    nec nam aliquam. Suscipit adipiscing bibendum est ultricies
                    integer. Eros donec ac odio tempor orci.
                  </p>
                  <p>
                    Nisl nisi scelerisque eu ultrices vitae. Nisl suscipit
                    adipiscing bibendum est ultricies integer quis. Venenatis a
                    condimentum vitae sapien pellentesque habitant morbi
                    tristique senectus. Adipiscing tristique risus nec feugiat.
                    Amet risus nullam eget felis. Non diam phasellus vestibulum
                    lorem sed risus. Tempus iaculis urna id volutpat lacus
                    laoreet non curabitur.
                  </p>
                  <p class="mb-5">
                    Vestibulum sed arcu non odio euismod. Montes nascetur
                    ridiculus mus mauris. Vulputate ut pharetra sit amet
                    aliquam. Id donec ultrices tincidunt arcu non sodales.
                    Sagittis eu volutpat odio facilisis mauris. Pellentesque
                    massa placerat duis ultricies lacus. Lacinia at quis risus
                    sed vulputate odio. Mollis aliquam ut porttitor leo a.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
    </>
  );
}

export function ContactPage() {
  return <>{Title("Contact")}</>;
}

export function AboutPage() {
  return <>{Title("About")}</>;
}

export function Featured() {
  return (
    <>
      {Title("Featured")}
      <h2>Hola</h2>
    </>
  );
}
