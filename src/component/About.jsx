import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import woman from "../assets/image/woman.png";
import "../style/about.css";
import { FiCheck } from "react-icons/fi";
import { about } from "../data/index";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <Container>
          <Row>
            <Col lg="6" className="left">
              <div className="gambar">
                <img src={woman} alt="" />
              </div>
            </Col>
            <Col lg="6" className="right">
              <h1>Best Car Rental for any kind of trip in (Lokasimu)!</h1>
              <p>
                Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
                lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                wedding, meeting, dll.
              </p>
              {about.map((obj) => (
                <div>
                  <span>
                    <FiCheck width={16} color="#0D28A6" />
                  </span>
                  <p>{obj.desc}</p>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
