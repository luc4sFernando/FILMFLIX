import React from "react";

import Card from "../card/index";

import "./style.scss"
function Row() {
  return (
    <div className="row">
      <Card
        title="NetFlix Originals"
        fetchUrl={`/discover/tv?with_networks=213&append_to_response=videos`}
        isLargeRow={true}
      />
      <Card title="Trending Now" fetchUrl="/trending/all/week?language=pt-BR" />
      <Card title="Top Rated" fetchUrl="/discover/movie?with_genres=28" />
      <Card title="Action Movies" fetchUrl="/discover/movie?with_genres=28" />
      <Card title="Trending Now" fetchUrl="/trending/all/week?language=pt-BR" />
      <Card title="Comedy Movies" fetchUrl="/discover/movie?with_genres=35" />
      <Card title="Horror Movies" fetchUrl="/discover/movie?with_genres=27" />
      <Card title="Documentaries" fetchUrl="/discover/movie?with_genres=99" />
    </div>
  );
}

export default Row;
