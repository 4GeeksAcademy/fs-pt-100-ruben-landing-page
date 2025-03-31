import React from "react";


import { Navbar } from './navbar'
import { Jumbotron } from "./jumbotron";
import { Card } from "./card";
import { Footer } from "./footer";


//create your first component
const Home = () => {
	return (

		<div className="text-center">
			<Navbar/>
			<Jumbotron/>
			<div className="container-fluid">
				<div className="row">
					<Card/>
					{/* <Card/>
					<Card/>
					<Card/> */}
				</div>
			</div>
			<Footer/>
		</div>

	);
};

export default Home;