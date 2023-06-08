import "./CSS/Slider.css";
const Slider = () => {
  return (
    <div className="container-fluid">
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              className="d-block w-100"
              src={require("../assets/pi11.jpg")}
              alt="Pag Not Found"
            />
          </div>
          <div class="carousel-item">
            <img
              className="d-block w-100"
              src={require("../assets/pi4.jpg")}
              alt="Page Not Found"
            />
          </div>
          <div class="carousel-item">
            <img
              className="d-block w-100"
              src={require("../assets/pi6.jpg")}
              alt="Page Not Found"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
