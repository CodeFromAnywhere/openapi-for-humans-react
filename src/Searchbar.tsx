"use client";

import { mergeObjectsArray } from "from-anywhere";
import { useEffect, useState } from "react";

export const Searchbar = () => {
  const [query, setQuery] = useState("");
  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    const query = mergeObjectsArray(
      document.location.search
        .slice(1)
        .split("&")
        .map((chunk) => chunk.split("=") as [string, string])
        .map(([key, value]) => {
          return { [key]: value };
        }),
    ).query;

    setQuery(query);
  }, []);

  return (
    <div className="flex flex-row">
      <input
        //value={query}
        placeholder="Search"
        // onChange={(e) => {
        //   setQuery(e.target.value);
        //   window.history.replaceState(
        //     null,
        //     document.title,
        //     "?query=" + e.target.value,
        //   );
        // }}
        className="border border-black p-2"
      />
      <button className="bg-green-500 w-full">Search</button>
    </div>
  );
};
