import * as React from "react";
import { toggle } from "../../../controller/toggle";

interface IState {
	page: "playList" | "donation" | "comments";
	data?: object[] | null;
}

export class Main extends React.Component<{}, IState> {
	public state: IState = {
		page: "playList",
		data: null
	}

	public render(): JSX.Element {
		return (
			<main>
				{
					this.contentFliper()
				}
			</main>
		);
	}

	public componentWillMount(): void {
		fetch("https://itunes.apple.com/us/rss/topalbums/limit=100/json")
		.then((data) => data.json()).then((data) => { this.setState({data: data.feed.entry}) })
		.catch((err: Error) => err)
	}

		// public componentWillUnmount(): void {
		// }

	public contentFliper(): JSX.Element {
		 const {data} = this.state;
		 let list;
		 if(data)
		 	list = data.map((num) => {
				 console.log(num)
				//return(<div key="awda"> adawd </div>)
			});
		return (
		  <ul>
		{list}
		  </ul>
		);
	}

	// private langs(): void {
	// 	// const lang = this.state.lang === "en" ? "ua" : "en";
	// 	// this.setState({ lang });
	// }
}