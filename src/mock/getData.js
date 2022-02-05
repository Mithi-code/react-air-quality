import countries from './country';

const fetchedData = () => countries().then((data) => data);

export default fetchedData;
