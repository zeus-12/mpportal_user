import "./about.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "animate.css";
export default function About() {
  return (
    <div id="about" className="start2">
      <h1 className="h1">ABOUT</h1>
      <h6></h6>
      <Row>
        <Col md={{ span: 4, offset: 1 }}>
          <img src="/assets/images/dean_img.png" />
        </Col>
        <Col className="p" md={{ span: 5, offset: 1 }}>
          <div>
            <p data-aos="fade-up" data-aos-duration="1000" className="abou">
            Dean Kuriakose is the 12th Lok Sabha MP representing Idukki Constituency of Kerala state at the PARLIAMENT OF INDIA, Member of Standing Committee on Labour, Member of Consultative Committee at Ministry of Rural Development and Ministry of Panchayati Raj, State President of Indian Youth Congress, Kerala State. 
            </p>
          </div>
        </Col>
      </Row>
      <Row className="center">
        <Col
          data-aos="fade-up"
          data-aos-duration="1000"
          className="sec"
          xs={{ span: 11 }}
          md={{ span: 4, offset: 0 }}
        >
          <div className="icon">
            {" "}
            <i class="fas fa-globe-asia"></i>
          </div>
          <div className="heading">LIFE</div>
          <h6></h6>
          <div>
            Dean was born on 27 June 1981, to Adv. A. M Kuriakose and Rosamma
            from Kulappuram, Paingottoor. .Dean, supported by his wife, Dr.
            Neetha Paul and their baby boy, currently resides in Thodupuzha and
            New Delhi, India.
          </div>
        </Col>
        <Col
          data-aos="fade-up"
          data-aos-duration="1500"
          className="sec"
          xs={{ span: 11 }}
          md={{ span: 4, offset: 0 }}
        >
          <div className="icon">
            <i class="fas fa-user-graduate"></i>
          </div>
          <div className="heading">STUDIES</div>
          <h6></h6>
          <div>
            {" "}
            Dean underwent schoolings at his hometown and within Idukki
            district. Dean began his pre-graduate studies at New Man college
            Thodupuzha, followed bygraduation in Bsc.Physics in St.Joseph's
            college Molamattom before pursuing his LLB from Kerala Law Academy
            Law College, Trivandrum. Dean graduated LLB and enrolled as an
            advocate on 2005{" "}
          </div>
        </Col>
        <Col
          data-aos="fade-up"
          data-aos-duration="2000"
          className="sec"
          xs={{ span: 11 }}
          md={{ span: 4, offset: 0 }}
        >
          <div className="icon">
            <i className="fas fa-trophy"></i>
          </div>
          <div className="heading">AWARDS</div>
          <h6></h6>
          <div>
            An academic, advocate and a politician, Dean Kuriakose holds variety
            of experiences and positions. Dean was awarded with 1st rank by
            Mahatma Gandhi university for M.A in Human Rights & Politics in 2014
            and is currently pursuing Ph.D in International Relations and
            Politics from Central University of Kerala.
          </div>
        </Col>
      </Row>
    </div>
  );
}
