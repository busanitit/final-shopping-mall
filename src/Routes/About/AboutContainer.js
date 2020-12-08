import React from "react";
import { Row } from "react-bootstrap";

const images = {
  logo:
    "https://modo-phinf.pstatic.net/20180616_273/1529120222729t2uF5_PNG/mosanbvdWU.png?type=w1100",
  img1:
    "https://modo-phinf.pstatic.net/20200227_238/1582779513752NGK80_PNG/mosa7RFS7k.png?type=w1100",
  img2:
    "https://modo-phinf.pstatic.net/20180616_261/1529116687659esFQE_JPEG/mosa3U1Tv2.jpeg?type=w1100",
  img3_1:
    "https://modo-phinf.pstatic.net/20171110_19/1510302660574FfgYH_JPEG/mosa79cg18.jpeg?type=f540_540",
  img3_2:
    "https://modo-phinf.pstatic.net/20171110_263/15103026610982bBoX_JPEG/mosadHrqOD.jpeg?type=f540_540",
  img4_1:
    "https://modo-phinf.pstatic.net/20180616_238/1529120359576DxhvM_JPEG/mosaWgMiPx.jpeg?type=f353_353",
  img4_2:
    "https://modo-phinf.pstatic.net/20180616_151/1529120360272Xfw9V_JPEG/mosaWCFvQB.jpeg?type=f353_353",
  img4_3:
    "https://modo-phinf.pstatic.net/20180616_281/1529120360711tQiC2_JPEG/mosaNc5J8G.jpeg?type=f353_353",
};

export default class extends React.Component {
  render() {
    return (
      <>
        <div>About</div>
        <img src={images.logo} />
        <img src={images.img1}  className="mb-5"/>
        <img src={images.img2} className="mb-5"/>
        <Row className="mb-5">
          <img src={images.img3_1} className="mr-4"/>
          <img src={images.img3_2} />
        </Row>
        <Row>
          <img src={images.img4_1} className="mr-4"/>
          <img src={images.img4_2} className="mr-4"/>
          <img src={images.img4_3} />
        </Row>
      </>
    );
  }
}
