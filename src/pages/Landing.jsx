import React from "react";

const Landing = (props) => {
  return (
    <div>
      <div>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/008/175/512/original/modern-interior-design-living-room-with-large-white-classic-panels-and-wall-mock-up-3d-render-illustration-4k-animation-scene-video.jpg" style={{ width: "100%" }} alt="" />
      </div>
      <div style={{ marginLeft: 200, marginRight: 200 }}>
        <div className="d-flex flex-row justify-content-between mt-5">
          <img
            src="https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/598/0959850_PE806248_S4.jpg" alt=""
            className="shadow"
          />
          <div className="d-flex flex-column justify-content-center mx-5">
            <div className="fw-bold fs-1">PILLOW</div>
            <div className="fs-3">Mr DIY | Living Room</div>
            <div>Ritsleting yang tersembunyi membuat sarung mudah dilepas.</div>
          </div>
        </div>
        <div className="d-flex flex-row-reverse justify-content-between mt-5">
          <img
            src="https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/511/0651178_PE706790_S4.jpg" alt=""
            className="shadow"
          />
          <div className="d-flex flex-column justify-content-center mx-5">
            <div className="fw-bold fs-1">RAST</div>
            <div className="fs-3">MR DIY | Living Room</div>
            <div>
              Lemari laci minimalis yang cocok untuk ruang mana pun. Laci dapat
              terbuka dengan mulus dengan beragam pilihan finishing.
            </div>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-between my-5">
          <img
            src="https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/273/0727344_PE735616_S4.jpg" alt=""
            className="shadow"
          />
          <div className="d-flex flex-column justify-content-center mx-5">
            <div className="fw-bold fs-1">TEODORES</div>
            <div className="fs-3">MR DIY | Living Room</div>
            <div>Kursi tanpa pelapis</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
