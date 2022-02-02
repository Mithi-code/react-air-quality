import axios from 'axios';
import { Component } from 'react';


const url = 'https://restcountries.com/v3.1/all';
class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
   }
  componentDidMount() {
    axios.get(url).then((res) => {
      console.log(res)
      this.setState({
        data: res.data,
      });
    });
  }
  render() {
    const { data } = this.state;
    return (
      data.map((e , key) => (
      <div className="info" key={key}>
      <img src={e.flags.png} />
      <p>{e.name.common}</p>
      <p>{e.capital}</p>
      <p>{e.population}</p>
      </div>
      ))
    )}
}
export default Detail;