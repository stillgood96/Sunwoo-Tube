import React, { Component } from "react";
import styles from "./search_header.module.css";

const SearchHeader = (props) => {
  return (
    <header className={styles.header}>
      {/* 두개의 태그의 높이가 맞지 않아서 맞추기 위해 묶어줌  */}
      <div className={styles.logo}>
        <img className={styles.img} src="images/imlsw96.png" alt="logo" />
        <h1 className={styles.title}>SunTube</h1>
      </div>
      <input
        className={styles.input}
        type="search"
        placeholder="Please enter a keyword"
      />
      <button type="submit" className={styles.button}>
        <img
          className={styles.buttonImg}
          src="images/search.png"
          alt="search"
        />
      </button>
    </header>
  );
};

export default SearchHeader;
