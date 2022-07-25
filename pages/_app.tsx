import {AppProps} from "next/dist/shared/lib/router/router";
import React from "react";
import '../styles/globals.css';
import Head from "next/head";
function MyApp({Component,pageProps}:AppProps):JSX.Element{
	return (
		<>
			<Head>
				<title>React-Next</title>
				<link rel="preconnect" href="https://fonts.googleapis.com"/>
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
						<link
							href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@300&family=Poppins:ital,wght@0,100;0,400;1,200;1,400&display=swap"
							rel="stylesheet"/>
			</Head>
		<Component{...pageProps}/>
		</>
		)
}
export default MyApp