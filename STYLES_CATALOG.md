# Katalog styli

Projekt korzysta z Sass. Plik `main.scss` importuje moduly i buduje finalny `main.css`.

## Wejscie i wynik

- Wejscie: `main.scss`
- Wynik: `main.css` (+ `main.css.map`)

## Struktura Sass

```text
sass/
  abstracts/
    _variables.scss   # stale kolorow i pomocniczych wartosci
    _mixins.scss      # mixiny: przycisk, focus, animacja tabeli, naglowek
    _functions.scss   # miejsce na funkcje Sass (aktualnie bez logiki)
  base/
    _global.scss      # style globalne body i kontenerow postow
  components/
    _buttons.scss     # styl i stany :hover/:focus przycisku #pokaz
    _blog.scss        # tlo bloga i podstawy widoku listy wpisow
    _paragraph.scss   # style paragrafow, selektory relacji i panelu
    _article.scss     # wyglad kafelkow article i ich hover
    _links.scss       # plik przewidziany na style linkow (obecnie niewykorzystany)
  layout/
    _images.scss      # rozmiary obrazow (np. .zdjecie)
  pages/              # miejsce na style stron (rezerwa)
  themes/             # miejsce na warianty motywow (rezerwa)
  vendors/            # miejsce na style zewnetrzne (rezerwa)
```

## Najwazniejsze decyzje stylow

- Kolory i stale sa centralnie trzymane w `abstracts/_variables.scss`.
- Powtarzalne reguly sa wyciagniete do mixinow w `abstracts/_mixins.scss`.
- Komponent `article` ma efekt uniesienia (`transform: translateY(-10px)`) na hover.
- Widok bloga ma tlo pelnoekranowe (`background-size: cover`, `background-attachment: fixed`).

## Uwagi techniczne

- W `main.scss` jest import `sass/abstracts/functions`, ale plik obecnie nie wnosi widocznej logiki.
- W `#publiczne-posty, #planowane-posty` ustawiono `flex-direction: wrap`; poprawna wlasciwosc dla zawijania to `flex-wrap`.
