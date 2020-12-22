import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Anasayfa.css";
import { Image } from "semantic-ui-react";
//////////////////////////Carousel Fotoğrafları/////////////////////
import image1 from "../img/bg1.jpg";
import image2 from "../img/bg3.jpg";
import image3 from "../img/bg4.jpg";

//////////////////////////////////////////////////////////////////////

function Anasayfa() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="Anasayfa rel">
      <div className="carouser">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              height={400}
              className="d-block w-100"
              src={image2}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              height={400}
              className="d-block w-100"
              src={image3}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* EĞTİMEN BAŞLANGIÇ/////////////////////////////////////////////////////////////////////////////////// */}

      <div className="card1 ">
        <CardDeck>
          <Card
            style={{
              background: "linear-gradient(rgba(255, 25, 25, 0.5),transparent)", }}
          >
            <Image
              src="https://react.semantic-ui.com/images/avatar/large/jenny.jpg"
              size="small"
              circular
            />
            <Card.Body>
              <Card.Title>Eğitmen</Card.Title>
              <Card.Text>Adı Soyadı : Himawari Uzumaki</Card.Text>
              <Card.Text>Email : hokage@konoha.gov</Card.Text>
              <Card.Text>Mesleği: Koku Uzmanı</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button id="satinal" variant="warning">
                <h5>Biyografiye Git</h5>
              </Button>
            </Card.Footer>
          </Card>

          <Card
            style={{
              background:
                "linear-gradient(rgba(50, 150, 150, 0.5),transparent)",
            }}
          >
            <Image
              src="https://react.semantic-ui.com/images/avatar/large/molly.png"
              size="small"
              circular
            />
            <Card.Body>
              <Card.Title>Eğitmen</Card.Title>
              <Card.Text>Adı Soyadı : Himawari Uzumaki</Card.Text>
              <Card.Text>Email : hokage@konoha.gov</Card.Text>
              <Card.Text>Mesleği: Koku Uzmanı</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button id="satinal" variant="warning">
                <h5>Biyografiye Git</h5>
              </Button>
            </Card.Footer>
          </Card>
          <Card
            style={{
              background: "linear-gradient(rgba(50, 50, 150, 0.5),transparent)",
            }}
          >
            <Image
              src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
              size="small"
              circular
            />
            <Card.Body style={{}}>
              <Card.Title>Eğitmen</Card.Title>
              <Card.Text>Adı Soyadı : Himawari Uzumaki</Card.Text>
              <Card.Text>Email : hokage@konoha.gov</Card.Text>
              <Card.Text>Mesleği: Koku Uzmanı</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button id="satinal" variant="warning">
                <h5>Biyografiye Git</h5>
              </Button>
            </Card.Footer>
          </Card>
        </CardDeck>
      </div>
      {/* EĞİTMEN BİTİŞ/////////////////////////////////////////////////////////////////////////////////// */}

      {/*KURS BAŞLANGIÇ/////////////////////////////////////////////////////////////////////////////////// */}
      <div className="card0 ">
        <CardDeck>
          <Card
            style={{
              background: "linear-gradient(rgba(250, 50, 50, 0.5),transparent)",
            }}
          >
            <Card.Img
              variant="top"
              src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
            />

            <Card.Body>
              <Card.Title>Eğitim-1</Card.Title>
              <Card.Text>Eğitim-1 Almak için buraya tıklayınız.</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button id="satinal" variant="success">
                Satın Al
              </Button>
            </Card.Footer>
          </Card>
   {/* card ////////////////////////////////////////////////////////////////////////////////////////////////*/}
          <Card
            style={{
              background: "linear-gradient(rgba(250, 50, 50, 0.5),transparent)",
            }}
          >
            <Card.Img
              variant="top"
              src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
            />
            <Card.Body>
              <Card.Title>Eğitim-1</Card.Title>
              <Card.Text>Eğitim-1 Almak için buraya tıklayınız.</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button id="satinal" variant="success">
                Satın Al
              </Button>
            </Card.Footer>
          </Card>
   {/* card ////////////////////////////////////////////////////////////////////////////////////////////////*/}
          <Card
            style={{
              background: "linear-gradient(rgba(250, 50, 50, 0.5),transparent)",
            }}
          >
            <Card.Img
              variant="top"
              src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
            />
            <Card.Body>
              <Card.Title>Eğitim-1</Card.Title>
              <Card.Text>Eğitim-1 Almak için buraya tıklayınız.</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button id="satinal" variant="success">
                Satın Al
              </Button>
            </Card.Footer>
          </Card>
        </CardDeck>
     {/* card ////////////////////////////////////////////////////////////////////////////////////////////////*/}

        {/* card//////////////////////////////////////////////////////////////*/}
        <CardDeck>
          <Card
            style={{
              background: "linear-gradient(rgba(250, 50, 50, 0.5),transparent)",
            }}
          >
            <Card.Img
              variant="top"
              src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
              roundedCircle
            />
            <Card.Body>
              <Card.Title>Eğitim-1</Card.Title>
              <Card.Text>Eğitim-1 Almak için buraya tıklayınız.</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button id="satinal" variant="success">
                Satın Al
              </Button>
            </Card.Footer>
          </Card>
    {/* card ////////////////////////////////////////////////////////////////////////////////*/}
          <Card
            style={{
              background: "linear-gradient(rgba(250, 50, 50, 0.5),transparent)",
            }}
          >
            <Card.Img
              variant="top"
              src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
            />
            <Card.Body>
              <Card.Title>Eğitim-1</Card.Title>
              <Card.Text>Eğitim-1 Almak için buraya tıklayınız.</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button id="satinal" variant="success">
                Satın Al
              </Button>
            </Card.Footer>
          </Card>
     {/* card ////////////////////////////////////////////////////////////////////////////////////////////////*/}
          <Card
            style={{
              background: "linear-gradient(rgba(250, 50, 50, 0.5),transparent)",
            }}
          >
            <Card.Img
              variant="top"
              src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
            />
            <Card.Body>
              <Card.Title>Eğitim-1</Card.Title>
              <Card.Text>Eğitim-1 Almak için buraya tıklayınız.</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button id="satinal" variant="success">
                Satın Al
              </Button>
            </Card.Footer>
          </Card>
        </CardDeck>
      </div>
      {/* card1 //////////////////////////////////////////////////////////////*/}
    {/*KURS BİTİŞ/////////////////////////////////////////////////////////////////////////////////// */}
    </div>
  );
}

export default Anasayfa;
