import "bootstrap";

const Title = (pagina) => {
  return (
    <>
        <h1
          style={{
            backgroundImage: `url("https://scitechdaily.com/images/Black-Hole-Event-Horizon-Artistic-Illustration.jpg")`,
            color: "black",
            textShadow:
              "2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff, 1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff",
            fontSize: "900%",
            textAlign: 'center',
            paddingBlock: '30px',
          }}
        >
          {pagina}
        </h1>
    </>
  );
}

export default Title;