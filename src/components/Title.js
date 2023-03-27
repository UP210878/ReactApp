import "bootstrap";

const Title = (pagina) => {
  return (
    <>
      <div
        class="bg-image shadow-2-strong mask"
        style={{
          backgroundImage: `url("https://i.pinimg.com/originals/67/18/22/671822c2f63dd5f65d8fd15c9710420b.jpg")`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            display: "inline-block",
            color: "black",
            textShadow:
              "2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff, 1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff",
            fontSize: "800%",
            textAlign: "center",
            paddingBlock: "10px",
          }}
        >
          {pagina}
        </h1>
      </div>
    </>
  );
};

export default Title;
