import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";

interface MiddleBlockProps {
  title: string;
  content: string;
  button: string;
  t: any;
}

const MiddleBlock = ({ title, content, button, t }: MiddleBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <MiddleBlockSection>
      <Slide direction="up">
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              <Row className="margin-bottom" justify="space-between" align="middle">
                <Col lg={9} md={9} sm={24} xs={24}>
                  <div className="card-hero-left">
                    <div> <p>Current Bid</p></div>
                    <div> <h5>2 Sol</h5></div>
                  </div>
                </Col>
                <Col lg={13} md={13} sm={24} xs={24}>
                  <div className="card-hero-right">
                    <div><p>Minting starts</p></div>
                    <div><p>00 57 10 </p></div>
                  </div>
                </Col>
              </Row>
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
