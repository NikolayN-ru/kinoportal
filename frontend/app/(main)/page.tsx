"use client";

import Link from "next/link";

import CompilationSlider from "@components/Slider/CompilationSlider";
import CollectionSlider from "@components/Slider/CollectionSlider";
import MainContainer from "@components/MainContainer";
import Promo from "@components/Promo";
import PageDescription, { PageNames } from "@components/PageDescription";
import Title from "@components/Title";
import SubscriptionButton from "@components/ui-kit/Button/SubscriptionButton";
import { collections, compilation } from "mock/filmsData";
import Icon from "@components/ui-kit/IconComponent/Icon";
import { top10Items } from "@mock/top10";
import Slider from "@components/Slider";
import { breakpoints } from "@components/Slider/breakpoints";
import { SwiperOptions } from "swiper";
import { SwiperSlide } from "swiper/react";

import s from "./page.module.scss";
import Top10Card from "@components/Top10Card";

const top10SliderParams: SwiperOptions = {
  breakpoints: {
    [breakpoints.md]: {
      spaceBetween: 12,
      slidesPerView: 3,
      slidesPerGroup: 2,
    },
    [breakpoints.lg]: {
      spaceBetween: 24,
      slidesPerView: 4,
      slidesPerGroup: 3,
      allowTouchMove: false,
    },
    [breakpoints.xl]: {
      spaceBetween: 24,
      slidesPerView: 5,
      slidesPerGroup: 4,
      allowTouchMove: false,
    },
  },
  spaceBetween: 12,
  slidesPerView: 1,
  slidesPerGroup: 1,
  allowTouchMove: true,
};

export default function Home() {
  return (
    <MainContainer>
      <h1 className="sr-only">
        Онлайн-кинотеатр Иви - фильмы сериалы и мультфильмы смотреть онлайн
        бесплатно в хорошем качестве.
      </h1>

      <section className={s.promoSection}>{<Promo />}</section>

      <section className={"pageSection " + s.subscribeSection}>
        <SubscriptionButton />
      </section>

      <section className={"pageSection aboutSection"}>
        <Title
          className={s.descriptionTitle}
          tag="h2"
          size="base"
          text="Онлайн-кинотеатр Иви: фильмы в хорошем качестве всегда приносят настоящее удовольствие"
        />
        <PageDescription page={PageNames.MAIN} />
      </section>

      <section className="pageSection">
        <Title
          className="sectionTitle"
          tag="h2"
          size="md"
          text={compilation.name}
        />
        <CompilationSlider items={compilation.items} />
      </section>

      <section className="pageSection">
        <Title className={`sectionTitle ${s.titleTop10}`} tag="h2" size="md">
          <Icon name="top10" />
          <span className={s.textTop10}>за неделю</span>
        </Title>
        <div className={s.top10Container}>
          <Slider
            className={s.top10SliderWrapper}
            params={top10SliderParams}
            nextClassName={s.top10SliderNext}
          >
            {top10Items.map((item, index) => (
              <SwiperSlide key={index}>
                <Top10Card item={item} number={index + 1} />
              </SwiperSlide>
            ))}
          </Slider>
        </div>
      </section>

      {collections.map(({ id, name, link, items }) => (
        <section key={id} className="pageSection">
          <Link
            href={`/collections/${link}`}
            className="titleLink sectionTitle"
          >
            <Title tag="h2" size="md" text={name} />
          </Link>
          <CollectionSlider items={items} link={`collections/${link}`} />
        </section>
      ))}
    </MainContainer>
  );
}
