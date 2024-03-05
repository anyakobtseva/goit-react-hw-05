import { useRef, useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import SearchBar from "./SearchBar";
import ErrorMessage from "./ErrorMessage";
import Loader from "./Loader";
import ImageGallery from "./ImageGallery";
import toast, { Toaster } from "react-hot-toast";
import LoadMoreBtn from "./LoadMoreBtn";
import ImageModal from "./ImageModal";

const API_KEY = import.meta.env.VITE_UNSPLASH_CLIENT_ID;

axios.defaults.baseURL = "https://api.unsplash.com";

const getImages = async (page, query) => {
  return axios.get("/search/photos", {
    headers: {
      Authorization: `Client-ID ${API_KEY}`,
    },
    params: { page: page, query: query, per_page: 20 },
  });
};

const App = () => {
  const [isLodaing, setIsLodaing] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isMore, setIsMore] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [didLoad, setLoad] = useState(false);
  const [altDescription, setAltDescription] = useState("");
  const [clickedImageUrl, setClickedImageUrl] = useState("");

  const notify = (message) => toast(message);

  const previousSearch = useRef(searchValue);
  const loadMoreRef = useRef();

  const onImageClick = (url, description) => {
    setIsLodaing(true);
    setClickedImageUrl(url);
    setAltDescription(description)
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setLoad(false);
  };

  const onImageLoad = () => {
    setLoad(true);
    setIsLodaing(false);
  };

  const handleSumbit = (value) => {
    if (value.length === 0) {
      notify("Enter non-empty search value");
      return;
    }
    if (previousSearch.current != value) {
      toast.dismiss();
      setIsError(false);
      setCurrentPage(1);
      setIsMore(false);
      setImages([]);
      previousSearch.current = value;
      setSearchValue(value);
    }
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const scrollTo = () => {
    if (!loadMoreRef.current) return;
    if (currentPage > 1) {
      const dims = loadMoreRef.current.getBoundingClientRect();
      window.scrollTo({
        top: dims.top + window.innerHeight * currentPage,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (searchValue === "") return;
    (async () => {
      try {
        setIsLodaing(true);
        const result = await getImages(currentPage, searchValue);
        setIsMore(result.data?.total_pages > currentPage);
        setImages((prevImages) => [...prevImages, ...result.data.results]);
        if (!result.data || result.data.results.length === 0)
          throw Error("No images found! Try another search query.");
      } catch (e) {
        setIsError(true);
        notify(e.message);
      } finally {
        setIsLodaing(false);
      }
    })();
  }, [searchValue, currentPage]);

  useEffect(() => {
    scrollTo();
  });

  return (
    <>
      <SearchBar onSubmit={handleSumbit} />
      {isLodaing && <Loader />}
      {isError ? (
        <ErrorMessage />
      ) : (
        <ImageGallery images={images} onClick={onImageClick} />
      )}

      <ImageModal
        url={clickedImageUrl}
        modalOpen={modalOpen}
        onRequestClose={closeModal}
        didLoad={didLoad}
        onLoad={onImageLoad}
        altDescription={altDescription}
      />
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 5000,
          style: {
            background: "grey",
            color: "#fff",
          },
        }}
      />
      {isMore && <LoadMoreBtn onclick={nextPage} ref={loadMoreRef} />}
    </>
  );
};

export default App;
