"use client";
import React from "react";
import {
  useRouter,
  useParams,
  usePathname,
  useSearchParams,
} from "next/navigation";

const PropertiesPage = () => {
  const router = useRouter();
  const SearchParams = useSearchParams();
  const { id } = useParams();
  const pathname = usePathname();
  // const name = SearchParams?.get("name");

  return (
    <>
      <h1>property page with id </h1>
      <button onClick={() => router?.push("/")} className="bg-blue-500">
        click{pathname}
      </button>
      ;
    </>
  );
};

export default PropertiesPage;
