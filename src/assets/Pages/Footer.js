import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter} from "mdbreact";
import "../css/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Koku Okulu</h5>
            <p>
              Koku Uzmanlığı Okulu Kurs Eğtim Sayfası.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Yararlı Linkler</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> Kokuokulu.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
    </div>
  );
}

export default Footer;