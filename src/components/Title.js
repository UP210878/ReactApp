import "bootstrap";

const Title = (pagina) => {
  return (
    <><div style={{
      backgroundImage: `url("https://scitechdaily.com/images/Black-Hole-Event-Horizon-Artistic-Illustration.jpg")`}}>
        <h1 class="bg-image shadow-2-strong mask"
          style={{
            color: "black",
            textShadow:
              "2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff, 1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff",
            fontSize: "900%",
            textAlign: 'center',
            paddingBlock: '10px',
          }}
        >
          {pagina}
        </h1></div>
    </>
  );
}

export default Title;