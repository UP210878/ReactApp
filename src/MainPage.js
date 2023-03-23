import "bootstrap";

export function MainPage() {
  return (
    <>
        <h1
          style={{
            backgroundImage: `url("https://scitechdaily.com/images/Black-Hole-Event-Horizon-Artistic-Illustration.jpg")`,
            color: "black",
            textShadow:
              "2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff, 1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff",
            fontSize: "700%",
            textAlign: 'center',
          }}
        >
          Home
        </h1>
        <div></div>
    </>
  );
}

export function ContactPage(){
    return (
        <>
        <h1>
            Contacts
        </h1>
        </>
    )
}

export function AboutPage(){
    return (
        <>
        <h1>
            About
        </h1>
        </>
    )
}

export function PricingPage(){
    return (
        <>
        <h1>
            Prices
        </h1>
        </>
    )
}