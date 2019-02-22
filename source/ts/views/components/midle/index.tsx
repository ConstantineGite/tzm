import * as React from "react";
import { toggle, Greeter } from "../../../controller/toggle";

interface IState {
	page: "playList" | "donation" | "comments";
	data?: object[] | null;
}

export class Midle extends React.Component<{}, IState>,  React.Props<any> {
	 constructor(){
        super();
    }
	public state: IState = {
		page: "playList",
		data: null
	}

	public render(): JSX.Element {
		return (
			<main>
				{this.trackList()}
				{this.commentsList()}
			</main>
		);
	}

	public componentWillMount(): void {
		fetch("https://itunes.apple.com/us/rss/topalbums/limit=100/json")
		.then((data) => data.json()).then((data) => { this.setState({data: data.feed.entry}) })
		.catch((err: Error) => err)
	}

	public trackList(): JSX.Element {
		const {data} = this.state;
		let list;
		 if(data)
		 	list = data.map((tracName, i) => (<li key={i}> {tracName["title"]["label"]} </li>))
		 else list = "is empty (:" 
		return  <ul className="trackList"> {list} </ul>
	}

	public commentsList(): JSX.Element {
		return <ul className="commentsList">Список коментариев</ul>
	}

}