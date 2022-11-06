import {
  Container,
  Grid,
  GridItem,
  Text,
  Image,
} from "@chakra-ui/react";
import photo1 from "../../assets/1.jpeg";
import photo2 from "../../assets/2.jpeg";
import photo3 from "../../assets/3.jpeg";
import photo4 from "../../assets/4.jpeg";
import photo5 from "../../assets/5.jpeg";
import photo6 from "../../assets/6.jpeg";
import photo7 from "../../assets/7.jpeg";
import photo8 from "../../assets/8.jpeg";
import photo9 from "../../assets/9.jpeg";
import photo10 from "../../assets/10.jpeg";
import photo11 from "../../assets/11.jpeg";
import photo12 from "../../assets/12.jpeg";
import photo13 from "../../assets/13.jpeg";
import photo14 from "../../assets/14.jpeg";
import photo15 from "../../assets/15.jpeg";
import photo16 from "../../assets/16.jpeg";
import photo17 from "../../assets/17.jpeg";
import photo18 from "../../assets/18.jpeg";
import photo19 from "../../assets/19.jpeg";
import photo20 from "../../assets/20.jpeg";
import photo21 from "../../assets/21.jpeg";
import photo22 from "../../assets/22.jpeg";
import photo23 from "../../assets/23.jpeg";
import photo24 from "../../assets/24.jpeg";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../App.css";
import ReactPaginate from "react-paginate";

const Collection = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };


  // Example items, to simulate fetching from another resources.
  const items = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
    photo9,
    photo10,
    photo11,
    photo12,
    photo13,
    photo14,
    photo15,
    photo16,
    photo17,
    photo18,
    photo19,
    photo20,
    photo21,
    photo22,
    photo23,
    photo24,
  ];

  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((item) => (
            <GridItem>
            <Image
              src={item}
              maxWidth={{ lg: "300px", base: "150px" }}
              width="175px"
              height="300px"
              maxHeight={{ lg: "300px", base: "200px" }}
            />
          </GridItem>
          ))}
      </>
    );
  }

  function PaginatedItems({ itemsPerPage }) {
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
  
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };
  return (
    <>
      <Items currentItems={currentItems} /> <br />
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< prev"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
  return (
    <div id="collection">
      <Container
        maxW={{ lg: "container.lg", base: "container.sm" }}
        py={{ lg: "32", base: "14" }}
      >
        <Text
          mb={{ lg: "10", base: "4" }}
          fontSize="3xl"
          fontWeight="extrabold"
          textTransform="uppercase"
        >
          Penyewaan Terlaris
        </Text>
        <div className="carousel">
          <Slider {...settings}>
            <div>
              <img
                src={require("../../assets/carousel-1.jpg")}
                alt="Tari Padang Minang"
              />
            </div>
            <div>
              <img
                src={require("../../assets/carousel-2.jpg")}
                alt="Tari Maumare"
              />
            </div>
            <div>
              <img
                src={require("../../assets/carousel-3.jpg")}
                alt="Pawai / Karnival anak"
              />
            </div>
            <div>
              <img
                src={require("../../assets/carousel-4.jpg")}
                alt="Tari Saman dari aceh"
              />
            </div>
            <div>
              <img
                src={require("../../assets/carousel-5.jpg")}
                alt="Tari Zapin Melayu Kreasi"
              />
            </div>
            <div>
              <img
                src={require("../../assets/carousel-6.jpg")}
                alt="Info lainnya whatsapp saja"
              />
            </div>
          </Slider>
        </div>


        <Text
          paddingTop={"50px"}
          mb={{ lg: "10", base: "4" }}
          fontSize="3xl"
          fontWeight="extrabold"
          textTransform="uppercase"
        >
          Contoh koleksi kami
        </Text>
        <Grid
          gridTemplateColumns={{ lg: "repeat(3, 1fr)", base: "repeat(3, 1fr)" }}
          rowGap="4"
          columnGap="5"
          width="100%"
          maxWidth="100%"
          justifyItems={"center"}
        >
        <PaginatedItems itemsPerPage={6}/>
        </Grid>

      </Container>
    </div>
  );
};

export default Collection;
