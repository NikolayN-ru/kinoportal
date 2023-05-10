import FiltersForm from "@components/FiltersForm";
import MainContainer from "@components/MainContainer";
import PageDescription from "@components/PageDescription";
import Title from "@components/Title";

import s from "./page.module.scss";

export default function Home() {
  return (
    <MainContainer>
      <section className={s.description}>
        <Title
          className={s.descriptionTitle}
          tag="h1"
          size="lg"
          text="Фильмы смотреть онлайн"
        />
        <PageDescription />
      </section>

      <section>
        <FiltersForm />
      </section>
    </MainContainer>
  );
}
