# Portfolio — PRD

## Cel

Osobiste portfolio prezentowane jako biała tablica korkowa, na której przypięte są karteczki w stylu zdjęć Instax. Efekt analogowy, ciepły, artystyczny.

---

## Widok główny — tablica

- Białe lub kremowe tło imitujące tablicę / ścianę.
- Karteczki rozmieszczone **losowo** (lekkie obroty, różne pozycje) — naśladują fizyczne przypięcie.
- Każda karteczka ma styl zdjęcia Instax: biała ramka, lekki cień, opcjonalny efekt zużycia / faktury.

### Karteczka projektu

Zawiera:
- Nazwa projektu (odręczna lub stylizowana czcionka).
- Pastylki / tagi z bazowymi informacjami (technologie, rok, kategoria).
- Opcjonalnie: logo firmy / klienta.

Kliknięcie → otwiera **modal projektu**.

### Karteczka kontakt

- Stała pozycja: **prawy dolny róg** tablicy.
- Wygląd wyróżniający się (np. inny kolor ramki lub pinezka w innym kolorze).
- Zawiera (wersja startowa):
  - Imię i nazwisko: **Kinga [Nazwisko]** *(do uzupełnienia)*
  - Telefon: *(placeholder)*
  - E-mail: *(placeholder)*
- Kliknięcie → otwiera modal z pełnymi danymi kontaktowymi.

---

## Modal projektu

- Overlay z rozmytym tłem.
- Treść:
  - Tytuł projektu.
  - Opis (długi tekst).
  - Screenshoty, zdjęcia, mock-upy (galeria / karuzela).
  - Tagi / pastylki z informacjami.
- Zamknięcie: przycisk X lub kliknięcie poza modalem.
- Po zamknięciu → powrót do tablicy, można kliknąć inną karteczkę.

---

## Stan początkowy (MVP)

Trzy puste karteczki w losowych miejscach na tablicy + karteczka kontakt w prawym dolnym rogu.

---

## Stack technologiczny

- **Next.js** (App Router)
- **Tailwind CSS** (stylowanie)
- TypeScript

---

## Dane kontaktowe (wersja startowa)

| Pole    | Wartość               |
|---------|-----------------------|
| Imię    | Kinga Kowalska *(placeholder)* |
| Telefon | +48 000 000 000 *(placeholder)* |
| E-mail  | kinga@example.com *(placeholder)* |

---

## Do ustalenia w kolejnych iteracjach

- Treść i dane każdego z trzech projektów.
- Rzeczywiste dane kontaktowe.
- Screenshoty i mock-upy do galerii.
- Animacje (przybliżenie karteczki po hover, wejście modala).
- Responsywność mobilna.
