# Nazwa kursu
Testowanie i jakość oprogramowania
# Autor
Grzegorz Tokarz
# Temat projektu
Sklep ze smartfonami
# Opis projektu
Sklep internetowy, w którym będzie można składać zamówienia, rejestrować się, logować i przeszukwiać produkty
# Uruchomienie projektu
##### frontend
- ng serve
##### backend
- node index.js
# Uruchomienie testów jednostkowych i integracyjnych
#### Testy integracyjne:
server -> npm test

#### Testy jednostkowe:
shop -> ng test

Ścieżka do plików z testami:
##### \shop\src\app\pipes\filter-text.pipe.spec.ts
##### \shop\src\app\pipes\summary.pipe.spec.ts
##### \shop\src\app\directives\text-format.directive.spec.ts
##### \shop\src/app/components/shop-item-price/shop-item-price.component.spec.ts

##### W przedstawionych testach tworzymy instancję klasy i testujemy jej funkcje
 
# Dokumentacja API
# Scenariusze testowe dla testera manualnego
| Test | Opis | Kroki testowe | Oczekiwany wynik
|-----------|-----------|-----------|-----------|
| TC_01   | Zalogowanie się do serwisu z niepoprawnymi danymi logowania  | #1. Naciśnij Login #2. Wpisz dane logowania, które są niepoprawne| Nie można zalogować się niepoprawnymi danymi logowania
| TC_02   | Rejestracja w serwisie  | 1. Naciśnij Sign Up 2. Wpisz poprawne dane do rejestracji. | Tylko zarejestrowany użytkownik może zalogowac sie na stronę |
| TC_03   | Wyszukiwanie produktów w sklepie po nazwie  | 1. Zaloguj się 2. Wpisz słowo "infinix" we "Wpisz nazwę ..."| Aplikacja powinna pokazac tylko produkty o nazwie wpisanej |
| TC_04   | Usuń produkt ze sklepu | 1. Zaloguj się 2. Wejdź w produkt i usuń go | Produkt zostanie usunięty z bazy produktów
| TC_05   | Dodaj produkt do sklepu  | 1. Zaloguj sie 2. Wejdź w "Add Item" i uzupełnij odpowiednimi danymi | Produkt zostanie dodany do bazy danych
| TC_06   | Przejź do sklepu jako niezalogowany użytkownik | 1. Jako niezalogowany użytkownik przejdź do sklepu | Tylko zalogowani użytkownicy moga zobaczyć co znajduję się w sklepie|
| TC_07   | Wyszukiwanie produktów w sklepie ze zła nazwą  | 1. Zaloguj się 2. Wpisz słowo "123" we "Wpisz nazwę ..."| Aplikacja nie powinna nic pokazać|
| TC_08   | Zalogowanie się do serwisu z poprawnymi danymi logowania  | #1. Naciśnij Login #2. Wpisz dane logowania, które są poprawne| Powinieneś mieć dostęp do sklepu|
| TC_09   | Przejź do zakładki "Add Item" | 1. Jako niezalogowany użytkownik przejdź do zakładki "Add Item" | Tylko zalogowani użytkownicy mogą dodać produkt|
| TC_10   | Zalogowanie się do serwisu z poprawnymi danymi logowania, możliwość wylogowania  | #1. Naciśnij Login #2. Wpisz dane logowania, które są poprawne| Po zalogowaniu masz możliwość wylogowania się|

# Technologie użyte w projekcie
##### frontend
- Angular
##### backend
- Node.js
- MongoDB
