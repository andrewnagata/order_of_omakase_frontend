export const Team = () => {
    return (
        <div className="teamContainer" id="team">
            <div className="anchor"></div>
            <h4>Team</h4>
            <div className="teamGrid">
                <div className="col-1">
                    <img className="teamImage" src="./img/jalapeno_pfp.jpg" />
                    <div className="teamRole">Art/Design</div>
                    <div className="teamTitle">Jalapeno Peppers</div>
                    <div className="teamSocial">@jalepenoPeppers</div>
                </div>
                <div className="col-2">
                    <img className="teamImage" src="./img/splat_pfp.jpg" />
                    <div className="teamRole">Dev/Design</div>
                    <div className="teamTitle">SplatMap</div>
                    <div className="teamSocial">@splatmap</div>
                </div>
                <div className="col-3">
                    <img className="teamImage" src="./img/shrimp_pfp.jpg" />
                    <div className="teamRole">Super Producer</div>
                    <div className="teamTitle">Shrimp</div>
                    <div className="teamSocial">@shrimp</div>
                </div>
            </div>
            <h4><span className="advisoryTitle">Advisory Board</span></h4>
            <div className="advisorGrid">
                <div className="col-1">
                    <img className="teamImage" src="./img/advisor_pfp.jpg" />
                    <div className="advisorName">Advisor Person</div>
                </div>
                <div className="col-2">
                    <img className="teamImage" src="./img/advisor_pfp.jpg" />
                    <div className="advisorName">Advisor Person</div>
                </div>
                <div className="col-3">
                    <img className="teamImage" src="./img/advisor_pfp.jpg" />
                    <div className="advisorName">Advisor Person</div>
                </div>
                <div className="col-4">
                    <img className="teamImage" src="./img/advisor_pfp.jpg" />
                    <div className="advisorName">Advisor Person</div>
                </div>
            </div>
            <div className="anchor"></div>
            <div className="anchor"></div>
        </div>
    );
  };
  