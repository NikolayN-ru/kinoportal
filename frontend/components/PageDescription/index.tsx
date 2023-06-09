import { FC, ReactNode } from "react";

import ShowMore from "@components/ShowMore";

const content = {
  main: (
    <>
      <p>
        Случалось ли вам отказаться от просмотра интересного фильма из-за того,
        что его показывали в неудобное время? Приходилось ли искать в сети
        интернет, где смотреть фильмы онлайн? А спорить с домашними из-за выбора
        кино для просмотра по ТВ?
      </p>
      <p>
        Все эти проблемы остались в прошлом! Откройте для себя фильмы онлайн в
        HD-качестве с кинотеатром Иви. Мы не просто освобождаем вас от
        необходимости идти в кинотеатр или изучать программу телепередач – у
        посетителей нашего ресурса гораздо больше возможностей.
      </p>
      <p>
        Онлайн-кинотеатр Иви – это самая большая коллекция отечественных и
        зарубежных фильмов в рунете. Наша видеотека насчитывает более 30 тысяч
        фильмов и видеороликов, доступных для просмотра онлайн, и постоянно
        пополняется.
      </p>
      <p>Онлайн-кинотеатр ivi.tv – это:</p>
      <ul>
        <li>
          первый видеосервис в России, который позволяет смотреть фильмы онлайн
          в хорошем качестве;
        </li>
        <li>
          возможность отложить просмотр фильма на время или начать смотреть кино
          онлайн с любого момента;
        </li>
        <li>
          удобный поиск фильмов: по названию, году выпуска, стране производства
          или жанру;
        </li>
        <li>
          фильмы в онлайне, для просмотра которых не требуется устанавливать
          видеоплееры или искать кодеки;
        </li>
      </ul>
      <p>
        Регулярно мы добавляем на сайт самые свежие комедии, лучшие
        фильмы-приключения, боевики, фильмы ужасов, триллеры и исторические
        драмы. Откройте для себя возможность смотреть фильмы онлайн в отличном
        качестве с кинотеатром Иви!
      </p>
      <p>Убедитесь в том, что смотреть онлайн – просто и удобно!</p>
    </>
  ),
  movies: (
    <>
      <p>
        Вы любите смотреть фильмы онлайн и проводите много времени, прочесывая
        сайты в поисках чего-нибудь интересного? Стоит задержаться на ivi.ru –
        фильмов, которые собраны у нас, вам хватит надолго. Коллекция постоянно
        пополняется как новыми фильмами, так и признанными шедеврами прошлых
        лет! Независимо от того, кто вы – любитель энергичных боевиков или
        поклонница молодежных сериалов, изобилие нашего каталога заставит вас
        забыть обо всех других способах проведения досуга, и вы будете
        пересматривать любимые фильмы онлайн снова и снова!
      </p>
      <p>
        Выбор фильмов очень широк и многообразен, так что каждый найдет для себя
        что-то интересное, каким бы ни были его вкусы. Предпочитаете картины
        исключительно зарубежного производства? У нас их предостаточно: это и
        золотая классика Голливуда, и душевные французские комедии, и
        темпераментные итальянские драмы, и шумные индийские музыкальные фильмы.
        А может, вы патриот и любите российские фильмы? Что ж, и таких фильмов у
        нас немало. Что вам больше по вкусу – добрая старая классика или новинки
        кинопроката? Неважно, каким будет ваш ответ – у нас есть все, как
        картины эпохи зарождения кинематографа, так 2018 года и фильмы 2017.
      </p>
      <p>
        В нашем каталоге вы найдете любые жанры. Это и фильмы про любовь, и
        детективы, и боевики, и вестерны, и фантастика, и арт-хаус, и
        уморительные комедии, и фильмы про войну, и ужасы, и триллеры, и
        документалистика... Кроме «полного метра» на сайте представлены также
        короткометражные фильмы, а также иностранные и русские сериалы.
      </p>
      <p>
        Если вас интересуют самые знаковые фильмы онлайн в том или ином жанре,
        система рубрикации поможет вам без труда сориентироваться и найти,
        например, лучшие драмы или лучший анимационный фильм онлайн.
      </p>
      <p>
        Не упустите замечательную возможность смотреть фильмы онлайн без
        регистрации, выбирая только то, что вам действительно интересно, и
        тогда, когда вам это удобно. Ведь это так просто и приятно!
      </p>
    </>
  ),
};

export enum PageNames {
  MAIN = "main",
  MOVIES = "movies",
}

interface PageDescriptionProps {
  page?: PageNames;
  children?: ReactNode;
}

const PageDescription: FC<PageDescriptionProps> = ({ page, children }) => {
  const descriptionContent = page && content[page];

  if (!!children) {
    return <>{children}</>;
  }

  return !!descriptionContent ? (
    <ShowMore>{descriptionContent}</ShowMore>
  ) : null;
};

export default PageDescription;
