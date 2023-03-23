import "bootstrap";

export function MainPage() {
  return (
    <>
        <h1
          style={{
            backgroundImage: `url("https://i.pinimg.com/originals/67/18/22/671822c2f63dd5f65d8fd15c9710420b.jpg")`,
            color: "black",
            textShadow:
              "2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff, 1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff",
            fontSize: "700%",
            textAlign: 'center',
            paddingBlock: '20px',
          }}
        >
          Alexandria
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