"use client";

import { FC } from "react";
import Link from "next/link";

import { collections } from "./collections";
import { useFilteredFilmsQuery } from "@redux/filmsApi";
import Title from "@components/Title";
import CollectionSlider from "@components/Slider/CollectionSlider";
import { ITEMS_IN_COLLECTION_SLIDER } from "@components/Slider/CollectionSlider/parameters";

interface CollectionSetProps {
  startNumber?: number;
  endNumber?: number;
}

const CollectionsSet: FC<CollectionSetProps> = ({ startNumber, endNumber }) => (
  <>
    {collections
      .slice(
        startNumber ?? 0,
        (endNumber && endNumber + 1) || collections.length
      )
      .map(({ id, name, link, query }) => {
        const limitQueryString = `limitStart=0&limitEnd=${
          ITEMS_IN_COLLECTION_SLIDER + 1
        }`;
        const { data, isLoading } = useFilteredFilmsQuery(
          [query, limitQueryString].join("&")
        );

        return (
          !isLoading &&
          !!data &&
          ((
            <section key={id} className="pageSection">
              <Link href={`/${link}`} className={`titleLink sectionTitle`}>
                <Title tag="h2" size="md" text={name} />
              </Link>

              <CollectionSlider items={data} link={`/${link}`} />
            </section>
          ) ||
            (isLoading && <div>Загружаем коллекцию...</div>))
        );
      })}
  </>
);

export default CollectionsSet;
