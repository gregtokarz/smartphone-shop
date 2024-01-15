# Nazwa kursu
Testowanie i jakość oprogramowania
# Autor
Grzegorz Tokarz, nr indeksu: 34696 
# Temat projektu
Sklep ze smartfonami
# Opis projektu
Sklep internetowy, w którym będzie można przeszukwiać produkty. Każdy użytkownik ma dostęp do sklepu ze smartfonami i może przeglądać sobie te produkty, które go interesują. Ma do tego przeglądarkę, w której może wpisywać interesujące go nazwy. Tylko administrator ma mozliwość zalogowania się i dodawaniu produktów z danymi login: `admin`  hasło: `admin`
* Strona główna
  ![Strona glówna](https://cdn.discordapp.com/attachments/778993722037764140/1195781112098734150/Zrzut_ekranu_2024-01-13_140654.png?ex=65b53cf1&is=65a2c7f1&hm=857b1c36136075d6642aa1892ca8359293ece2c2aea3f5f1515a835c728f878f&)
* Panel administratora
  ![Panel administratora](https://cdn.discordapp.com/attachments/778993722037764140/1195781713008279593/Zrzut_ekranu_2024-01-13_140902.png?ex=65b53d80&is=65a2c880&hm=337633d8d51b253a1f0ab1559ff8e5fd7561322f1100dc5ebbabb24a365fbe1b&)
# Uruchomienie projektu
1. Sklonuj aplikacje: `git clone https://github.com/gregtokarz/smartphone-shop.git`
2. Uruchom aplikację backendową (server): `npm start`   
3. Uruchom aplikację frontendową (shop): `ng serve`
4. Aplikacje będą domyslnie dostępne pod adresem:
    * backend:`http://localhost:3000/api/posts`
    * frontend:`http://localhost:4200/`
    
# Uruchomienie testów jednostkowych i integracyjnych
#### Testy integracyjne:
server -> npm test

#### Testy jednostkowe:
shop -> ng test

Ścieżka do plików z testami:
##### \shop\src\app\pipes\filter-text.pipe.spec.ts
##### \shop\src\app\pipes\summary.pipe.spec.ts
##### \shop\src\app\directives\text-format.directive.spec.ts
##### \shop\src\app\components\shop-item-price\shop-item-price.component.spec.ts

##### W przedstawionych testach tworzymy instancję klasy i testujemy jej funkcje
 
# Dokumentacja API
Dokumentacja api dostępna jest pod adresem http://localhost:3001/api-docs/ po uruchomieniu aplikacji.
# Scenariusze testowe dla testera manualnego
| Test | Opis | Kroki testowe | Oczekiwany wynik
|-----------|-----------|-----------|-----------|
| TC_01   | Zalogowanie się do serwisu z niepoprawnymi danymi logowania  | #1. Naciśnij Login #2. Wpisz dane logowania, które są niepoprawne| Nie można zalogować się niepoprawnymi danymi logowania |
| TC_02   | Usuń produkt jako niezalogowany użytkownik  | 1. Naciśnij wybrany produkt 2. Spróbuj usunąć produkt | Tylko administrator może usuwać produkty |
| TC_03   | Wyszukiwanie produktów w sklepie po nazwie  | 1. Wpisz słowo "infinix" we "Wpisz nazwę ..."| Aplikacja powinna pokazac tylko produkty o nazwie wpisanej |
| TC_04   | Usuń produkt ze sklepu | 1. Zaloguj się 2. Wejdź w produkt i usuń go | Produkt zostanie usunięty z bazy produktów |
| TC_05   | Dodaj produkt do sklepu  | 1. Zaloguj sie 2. Wejdź w "Add Item" i uzupełnij odpowiednimi danymi | Produkt zostanie dodany do bazy danych |
| TC_06   | Przejź do sklepu jako niezalogowany użytkownik | 1. Jako niezalogowany użytkownik przejdź do sklepu | Tylko zalogowani użytkownicy moga zobaczyć co znajduję się w sklepie|
| TC_07   | Wyszukiwanie produktów w sklepie ze złą nazwą  | 1. Zaloguj się 2. Wpisz słowo "123" we "Wpisz nazwę ..."| Aplikacja nie powinna nic pokazać|
| TC_08   | Zalogowanie się do serwisu z poprawnymi danymi logowania  | #1. Naciśnij Login #2. Wpisz dane logowania, które są poprawne| Powinieneś mieć dostęp do panelu administracyjnego|
| TC_09   | Przejź do zakładki "Add Item" | 1. Jako niezalogowany użytkownik przejdź do zakładki "Add Item" | Tylko zalogowani użytkownicy mogą dodać produkt|
| TC_10   | Zalogowanie się do serwisu z poprawnymi danymi logowania, możliwość wylogowania  | #1. Naciśnij Login #2. Wpisz dane logowania, które są poprawne| Po zalogowaniu masz możliwość wylogowania się |

# Technologie użyte w projekcie
##### frontend
- Angular
##### backend
- Node.js
- MongoDB
- Jest
- Jasmine
