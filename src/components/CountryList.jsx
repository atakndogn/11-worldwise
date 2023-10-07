import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import Message from "./Message";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Addd your first country by clicking on a city on the map" />
    );

  const countryList = cities.map((city) => ({
    country: city.country,
    emoji: city.emoji,
  }));

  const uniqueCountries = new Set(
    countryList.map((country) => country.country)
  );

  const countries = Array.from(uniqueCountries, (unc) =>
    countryList.find((country) => country.country === unc)
  );

  // METHOD 2
  const countries2 = cities.reduce((array, cur) => {
    if (!array.map((item) => item.country).includes(cur.country))
      return [...array, { country: cur.country, emoji: cur.emoji }];
    else return array;
  }, []);

  // console.log(countries, countries2);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;
