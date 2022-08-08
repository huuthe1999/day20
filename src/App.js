import axios from 'axios';
import { useEffect, useState } from 'react';
import CardList from './components/cat-cards';
import CardFilter from './components/filter-cards';
import Header from './components/header/Header';
import './styles.css';
import { dataFilter } from './Utils/dataFilter';

export default function App() {
	const [data, setData] = useState([]);
	const [arrayLife, setArrayLife] = useState([]);
	const [arrayWeight, setArrayWeight] = useState([]);
	const [filterData, setFilterData] = useState([]);
	const [cardSelect, setCardSelect] = useState('All');

	const handleCardSelect = e => {
		setCardSelect(e.target.getAttribute('value'));
	};
	useEffect(() => {
		const fetch = async () => {
			try {
				const result = await axios.get(
					'https://api.thecatapi.com/v1/breeds',
				);
				setData(result.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetch();
	}, []);

	useEffect(() => {
		if (data.length > 0) {
			const result = data.reduce((acc, cur) => {
				const text = cur.life_span;
				const textSplit = text.split(' - ');
				acc.push(textSplit);
				return acc;
			}, []);

			setArrayLife(result);
		}
	}, [data]);

	useEffect(() => {
		if (data.length > 0) {
			const result = data.reduce((acc, cur) => {
				const text = cur.weight.metric;
				const textSplit = text.split(' - ');
				acc.push(textSplit);
				return acc;
			}, []);

			setArrayWeight(result);
		}
	}, [data]);

	useEffect(() => {
		setFilterData(dataFilter(data));
	}, [data]);

	return (
		<div className='App'>
			<Header arrayLife={arrayLife} arrayWeight={arrayWeight} />
			<CardFilter
				data={filterData}
				handleCardSelect={handleCardSelect}
				cardSelect={cardSelect}
			/>
			<CardList name={cardSelect} data={data} />
		</div>
	);
}
