import { sendEmailButton, linkedinButton } from "../components/Buttons";

function mainPage() {
  return (
    <><p style={{fontSize:'500%'}}>{language === "en"?"Hi":"Que ondas"}</p>
      <div class="pt-5">
        <section class="p-5 mt-5">
{/* Texto va aqui */}
        </section>
        <div class="px-5 mx-5 space-x-3">
          {sendEmailButton()} {linkedinButton()}
        </div>
      </div>
    </>
  );
}

export default mainPage;
