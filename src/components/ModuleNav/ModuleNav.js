import React from "react"
import classes from "./ModuleNav.css"
import ModuleNavItem from "./ModuleNavItem/ModuleNavItem"
import backgroundimage from "../../assets/images/homepage/P3153499.png"


const moduleNav = () => {
	const content = [
		{"title": "Introduction", 
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.", 
			"background": "url(https://source.unsplash.com/collection/1155333/1600x900)", 
			"animation": " animated slideInDown"
		}, 

		{"title": "Volcano", 
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.", 
			"background": "url(https://source.unsplash.com/collection/894/1600x900)", 
			"animation": " animated slideInDown slow"
		}, 

		{"title": "Iguana",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
			"background": "url(https://source.unsplash.com/collection/327760/1600x900)", 
			"animation": " animated slideInDown slower"
		}, 

		{"title": "Currents",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
			"background": "url(https://source.unsplash.com/collection/319663/1600x900)", 
			"animation": " animated slideInUp"
		}, 

		{"title": "Eruption",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
			"background": "url(https://source.unsplash.com/collection/1014/1600x900)", 
			"animation": " animated slideInUp slow"
		}, 

		{"title": "Island Life Cycle",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
			"background": "url(https://source.unsplash.com/collection/357786/1600x900)", 
			"animation": " animated slideInUp slower"
		}
	]

	const items = content.map((item, index) => <ModuleNavItem key={index} title={item.title} description={item.description} background={item.background} animation={item.animation}/>)

	return (
		<div className={classes.backgroundDiv}>
		<img src={backgroundimage} className={classes.backgroundImage} />
		<div className={classes.wrapper}>
			<div className={classes.cols}>
				{items}
			</div>
		</div>
		</div> 
	)
}

export default moduleNav