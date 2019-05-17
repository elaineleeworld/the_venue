import React, { Component } from "react";
import MyButton from "../utils/MyButton";
import Zoom from "react-reveal/Zoom";

class Pricing extends Component {
  state = {
    prices: [100, 150, 250],
    positions: ["Balcony", "Medium", "Star"],
    desc: [
      "Luke? Luke? Luke? Have you seen Luke this morning? He said he had some things to do before he started today, so he left early. Uh? Did he take those two new droids with him? I think so.",
      "Well, he’d better have those units in the south range repaired be midday or there’ll be hell to pay! Wait, there’s something dead ahead on the scanner. It looks like our droid…hit the accelerator.",
      "There. You see Lord Vader, she can be reasonable. Continue with the operation. You may fire when ready. Dantooine is too remote to make an effective demonstration."
    ],
    linkTo: ["http://sales/balcony", "http://sales/medium", "http://sales/star"],
    delay: [500, 0, 500]
  };

  showBoxes = () =>
    this.state.prices.map((box, i) => (
      <Zoom delay={this.state.delay[i]} key={[i]}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${this.state.prices[i]}</span>
            </div>
            <div className="pricing_description">
              <span>{this.state.positions[i]}</span>
            </div>
            <div className="pricing_button">
              <span>{this.state.desc[i]}</span>
            </div>
            <MyButton text="Purchase" bck="#ffa800" color="#ffffff" link={this.state.linkTo[i]} />
          </div>
        </div>
      </Zoom>
    ));
  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
