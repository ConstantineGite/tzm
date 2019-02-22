import * as React from "react";
import { emitter } from "../../../controller/toggle";

interface IState {
	page: "playList" | "donation" | "comments";
}

export class Header extends React.Component<{}, IState> {
	public state: IState = {
		page: "playList"
	};

	public click(e): void {
		const pageName = e.className;
		emitter.emit("changePage", pageName);
	}

	public render(): JSX.Element {
		return (
			<header>
				<div onClick={e => this.click(e.target)} key="playList" className="playList">playList</div>
				<div onClick={e => this.click(e.target)} key="donation" className="donation">donation</div>
				<div onClick={e => this.click(e.target)} key="comments" className="comments">comments</div>
			</header>
		);
	}

	public componentDidMount(): void {
	}
	// public componentWillUnmount(): void {
	// }

	// private langs(): void {
	// 	// const lang = this.state.lang === "en" ? "ua" : "en";
	// 	// this.setState({ lang });
	// }
}
