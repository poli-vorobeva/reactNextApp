import Document, {DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript} from 'next/document'
//import React from "react";

class MyDocument extends Document {
	static async getInitialProps(ctx:DocumentContext):Promise<DocumentInitialProps>{
		const initialProps= await Document.getInitialProps(ctx)
		return{...initialProps}
	}
	render() {
		return (
			<Html>
				<Head lang="en"></Head>
				<body>
				<Main/>
				<NextScript/>
				</body>
			</Html>
		)
	}
}
export default MyDocument