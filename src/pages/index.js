import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { Container, Row, Col } from "reactstrap"

import Particles from "react-particles-js"
import particlesOptions from "../Particles-js"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <section id={`ds-hero`}>
      <Particles className="d-sm-none d-md-block" params={particlesOptions} />
      <Container>
        <Row>
          <Col xs={12} sm={6} className={"order-1 order-sm-0"}>
            <p>Left Column</p>
          </Col>
          <Col xs={12} sm={6} className={"order-0 order-sm-1"}>
            <p>Right Column</p>
          </Col>
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col xs={12}>
            <h2 className="text-center my-5">WHY STAKE WITH DAEDALUS?</h2>
          </Col>
          <Col xs={12} sm={4} className="my-3">
            <h6>Full Decentralization</h6>
            <p>
              Lorem ipsum about full decentralization about cardano and the
              network and shelley PoS
            </p>
          </Col>

          <Col xs={12} sm={4} className="my-3">
            <h6>Cloud Infrastructure</h6>
            <p>
              Lorem ipsum about full decentralization about cardano and the
              network and shelley PoS
            </p>
          </Col>

          <Col xs={12} sm={4} className="my-3">
            <h6>Privacy Focused</h6>
            <p>
              Lorem ipsum about full decentralization about cardano and the
              network and shelley PoS
            </p>
          </Col>

          <Col xs={12} sm={4} className="my-3">
            <h6>Low Pool Fees</h6>
            <p>
              Lorem ipsum about full decentralization about cardano and the
              network and shelley PoS
            </p>
          </Col>

          <Col xs={12} sm={4} className="my-3">
            <h6>Full PoS Analytics</h6>
            <p>
              Lorem ipsum about full decentralization about cardano and the
              network and shelley PoS
            </p>
          </Col>

          <Col xs={12} sm={4} className="my-3">
            <h6>Stake Delegation</h6>
            <p>
              Lorem ipsum about full decentralization about cardano and the
              network and shelley PoS
            </p>
          </Col>
        </Row>
      </Container>
    </section>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
