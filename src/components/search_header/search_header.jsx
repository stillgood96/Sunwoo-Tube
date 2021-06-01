import React, { memo, useRef } from "react";
import styles from "./search_header.module.css";

const SearchHeader = memo(({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    console.log(value);
    onSearch(value);
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  console.log("Header!!!!");

  return (
    <header className={styles.header}>
      {/* 두개의 태그의 높이가 맞지 않아서 맞추기 위해 묶어줌  */}
      <div className={styles.logo}>
        <img className={styles.img} src="images/imlsw96.png" alt="logo" />
        <h1 className={styles.title}>SunTube</h1>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        type="search"
        placeholder="Please enter a keyword"
        onKeyPress={onKeyPress}
      />
      <button type="submit" className={styles.button} onClick={onClick}>
        <img
          className={styles.buttonImg}
          src="images/search.png"
          alt="search"
        />
      </button>
    </header>
  );
});

export default SearchHeader;
