import * as React from "react";
import { emitter } from "../../../controller/toggle";

interface IState {
	page: string;
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
				{this.changePage()}
				{this.commentsList()}
			</main>
		);
	}

	public componentWillMount(): void {
		fetch("https://itunes.apple.com/us/rss/topalbums/limit=100/json")
		.then((data) => data.json()).then((data) => { this.setState({data: data.feed.entry}) })
		.catch((err: Error) => err);
		this.init();
	}

	public trackList(): JSX.Element {
		const { data } = this.state;
		let list;
		if (data)
			list = data.map(( tracName: any, i: number ) => (<li key={i}> {tracName.title.label} </li>));
		else list =	"is empty (:";
		return  <ul className="trackList"> {list} </ul>;
	}

	public commentsList(): JSX.Element {
		return <ul className="commentsList">Список коментариев</ul>;
	}

	public addComent(): JSX.Element {
		return <ul className="commentsList">Добавить коментарий</ul>;
	}

	public init(){
		emitter.on("changePage",
		(arg: string) => {
			this.setState({ page : arg });
		});
	}

	public changePage(){
		return (this.state.page === "comments") ? this.addComent() : this.trackList();
	}

}