export const About = () => {
    return (
      <div className="about" id="about">
        <div className="anchor"></div>
        <div className="aboutGridContainer">
          <div className="aboutDescriptionContainer">
            <div className="aboutDescription">
              <div className="population">
                <div className="aboutBigNumber">6282</div>
                <div className="aboutStrong"> strong</div>
              </div>
              <div>
                <p>We are the Order of Omakase. A society of celebrated topping chefs once revered for our delectable creations. Through a series of kitchen mishaps, our order fell from grace, relegating our folk to a transient life, bound by the duty to deliver. Our mission is eternal: whether on land, sea, air, or outer space, we deliver hot pies to hungry masses the universe over.</p>
                <br/>        
              </div>
              <h3>A <a href="htttp://rarepizzas.com">PizzaDAO</a> Partnership</h3>
              <div>
                <p>40% of sales donated back to PizzaDAO</p>
                <p>5% sales given back to all topping artists</p>
              </div>
            </div>
          </div>
          <div className="aboutCommunity">
            <h4>Community Origins</h4>
            <img src="./img/lazlo_pfp.jpg" className="aboutpfp"/>
            <img src="./img/lady_pfp.jpg" className="aboutpfp"/>
            <p>Each Omakase is a unique creation build exclusively with toppings from the RarePizza database. Topping art from 340 artists was originally contributed to create Rare Pizzas. This immense body of work served as inspiration and the source of all traits and attributes.</p>
          </div>
          <div className="aboutTribes">
            <h4>Collectable Tribes</h4>
            <div>
              <p>The Order of Omakase is populated with 4 tribes, Air Land, Sean, and Space. Tribes have unique traits, and some tribes might be more rare than others.</p>
            </div>
            <div className="tribeGrid">
              <div className="land">
                <img className="aboutTribeImage" src="./img/land_tribe.jpg" />
                <div className="aboutTribeTitle">Land</div>
                <div className="aboutTribeDescription">From deep in the desert, to the highest mountain peaks, Land creatures gallop, prod, and prance. The most numerous of all creatures, they come in droves.</div>
              </div>
              <div className="air">
                <img className="aboutTribeImage" src="./img/air_tribe.jpg" />
                <div className="aboutTribeTitle">Air</div>
                <div className="aboutTribeDescription">A shriek across the sky, a delivery dropped from heaven. Air creatures are hard to find, and heavily sought after for their wise disposition, and meaty thighs.</div>
              </div>
              <div className="sea">
                <img className="aboutTribeImage" src="./img/sea_tribe.jpg" />
                <div className="aboutTribeTitle">Sea</div>
                <div className="aboutTribeDescription">The saltiest of creatures, Sea swims and squirms in vast oceans. Raging in the depths, languishing in the shallows. They are numerous, playful, and often grumpy.</div>
              </div>
              <div className="space">
                <img className="aboutTribeImage" src="./img/space_tribe.jpg" />
                <div className="aboutTribeTitle">Space</div>
                <div className="aboutTribeDescription">The rarest of all creatures, Space knows no boundaries. Those skilled enough to go beyond planet earth are most coveted for their foresight, and clever hands.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  