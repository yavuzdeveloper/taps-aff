import { useState } from "react";
import "./App.css";

const data = [
  { temperature: 15, location: "Glasgow" },
  { temperature: 16, location: "Edinburgh" },
  { temperature: 10, location: "Aberdeen" },
];

function App() {
  const [wear, setWear] = useState(false as boolean);

  const weatherView = () => {
    return data?.map(city => {
      var icon;
      if (city.temperature > 15) {
        icon = (
          <div>
            {!wear && (
              <img
                src="https://d29fhpw069ctt2.cloudfront.net/icon/image/49043/preview.svg"
                alt="sun"
                style={{
                  height: "40px",
                  width: "40px",
                  display: "flex",
                }}
              />
            )}
            {wear && (
              <img
                src="https://www.taps-aff.co.uk/static/img/clothing/tapsaff.svg"
                alt="clothes"
                style={{
                  height: "40px",
                  width: "40px",
                }}
              />
            )}
          </div>
        );
      } else if (city.temperature === 15) {
        icon = (
          <div>
            {!wear && (
              <img
                src="https://cdn.icon-icons.com/icons2/2505/PNG/512/sunny_weather_icon_150663.png"
                alt="cloudSunny"
                style={{
                  height: "40px",
                  width: "40px",
                  display: "flex",
                }}
              />
            )}
            {wear && (
              <img
                src="https://www.clipartmax.com/png/middle/212-2122762_possible-reward-shirt-clothing-icon.png"
                alt="shirt"
                style={{
                  height: "40px",
                  width: "40px",
                }}
              />
            )}
          </div>
        );
      } else {
        icon = (
          <div>
            {!wear && (
              <img
                src="https://img.favpng.com/1/1/20/computer-icons-thunderstorm-rain-cloud-png-favpng-0MQbsBTxL4wXe8T34Xpn01LG0.jpg"
                alt="rain"
                style={{
                  height: "40px",
                  width: "40px",
                  display: "flex",
                }}
              />
            )}{" "}
            {wear && (
              <img
                src="https://static.thenounproject.com/png/235579-200.png"
                alt="clothes"
                style={{
                  height: "40px",
                  width: "40px",
                  display: "flex",
                }}
              />
            )}
          </div>
        );
      }

      if (city.location === "Glasgow") {
        return (
          <h5 key={city.location} style={{ margin: "700px 0 0 490px" }}>
            {city.location} {city.temperature} ℃ {icon}
          </h5>
        );
      } else if (city?.location === "Edinburgh") {
        return (
          <h5 key={city.location} style={{ margin: "690px 0 0 80px" }}>
            {city.location} {city.temperature} ℃ {icon}
          </h5>
        );
      } else if (city?.location === "Aberdeen") {
        return (
          <h5 key={city.location} style={{ margin: "450px 100px 0 0px" }}>
            {city.location} {city.temperature} ℃ {icon}
          </h5>
        );
      }
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>taps aff-oan</h1>
      </header>
      <h1>Scotland</h1>
      <div
        className="wheatherImage"
        onClick={() => setWear(!wear)}
        style={{
          cursor: "pointer",
          backgroundImage: `url("https://media.istockphoto.com/vectors/scotland-outline-map-on-beige-grid-retro-background-vector-id546200576")`,
          height: "1000px",
          width: "900px",
          display: "flex",
          margin: "auto",
        }}
      >
        {weatherView()}
      </div>
    </div>
  );
}

export default App;
