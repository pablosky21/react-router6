import React from "react";
import { Route, Routes } from "react-router";
import DcScreen from "../components/dc/DcScreen";
import HeroScreen from "../components/heroes/HeroScreen";
import MarvelScreen from "../components/marvel/MarvelScreen";
import SearchScreen from "../components/search/SearchScreen";
import { Navbar } from "../components/ui/Navbar";

const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <Routes>
          <Route path="marvel" element={<MarvelScreen />} />
          <Route path="dc" element={<DcScreen />} />

          <Route path="search" element={<SearchScreen />} />
          <Route path="hero/:heroeId" element={<HeroScreen />} />

          <Route path="/" element={<MarvelScreen />} />
        </Routes>
      </div>
    </>
  );
};

export default DashboardRoutes;
