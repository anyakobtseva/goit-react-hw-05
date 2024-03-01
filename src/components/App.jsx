import { useEffect, useState } from "react";
import axios from "axios";
import { useMemo } from "react";

import "./App.css";
import SearchBar from "./SearchBar";
import ErrorMessage from "./ErrorMessage";
import Loader from "./Loader";
import ImageGallery from "./ImageGallery";
import toast, { Toaster } from "react-hot-toast";

const API_KEY = import.meta.env.VITE_UNSPLASH_CLIENT_ID;

axios.defaults.baseURL = "https://api.unsplash.com";

const App = () => {
  const [isLodaing, setIsLodaing] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchValue, setSerachValue] = useState("");
  const [images, setImages] = useState([]);
  const notify = () => toast("Enter non-empty search value");

  const handleSumbit = (value) => {
    (value.length === 0) ? notify() : toast.dismiss();
    setSerachValue(value);
  };

  useMemo(() => {
    (async () => {
      try {
        if (searchValue.length > 0) {
          setIsError(false);
          setImages([]);
          setIsLodaing(true);
          const result = await axios.get("/search/photos", {
            headers: {
              Authorization: `Client-ID ${API_KEY}`,
            },
            params: { page: 1, query: searchValue, per_page: 50 },
          });
          setImages(result.data?.results);
        }
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLodaing(false);
      }
    })();
  }, [searchValue]);

  return (
    <>
      {isLodaing && <Loader />}
      {isError && <ErrorMessage />}
      <SearchBar onSubmit={handleSumbit} />
      {searchValue.length === 0 ? (
        <Toaster
          toastOptions={{
            duration: 5000,
            style: {
              background: "#363636",
              color: "#fff",
            },
          }}
        />
      ) : (
        <ImageGallery images={images} />
      )}
    </>
  );
};

export default App;
