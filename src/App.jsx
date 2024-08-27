import "./App.css";
import Header from "./layout/Header";
import Description from "./components/Description.jsx";
import Collection from "./components/Menu/gridIndex.jsx";
import About from "./components/About/index.jsx";
import FirstPage from "./components/FirstPage";

function App() {
  return (
    <>
      <Header />
      <FirstPage />
      <Description />
      <Collection />
      <About />

      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
      />
      <a
        href="https://api.whatsapp.com/send?phone=6282173448988&text=Saya dari websitenya merasa tertarik dan ingin bertanya"
        class="float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp my-float"></i>
      </a>


    </>
  );
}

export default App;
