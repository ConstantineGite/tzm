import * as React from "react";
import { toggle } from "../../../controller/toggle";

	interface IState {
		page: "playList" | "donation" | "comments";
	}

export class Header extends React.Component<{}, IState> {
	public state: IState = {
		page: "playList"
	};

    public click(v){
       //e.preventDefault()
       console.log(v)
       toggle("playList")
    }

	public render(): JSX.Element {
		return (
			<header>
				<div onClick={e => this.click("playList")} key="playList" className="playList">playList</div>
				<div onClick={e => this.click("donation")} key="donation" className="donation">donation</div>
				<div onClick={e => this.click("comments")} key="comments" className="comments">comments</div>
			</header>
		);
	}

	public componentDidMount(): void {
		//this.isMount = true;
	}

	public componentWillUnmount(): void {
		//this.isMount = false;
	}

	// private langs(): void {
	// 	// const lang = this.state.lang === "en" ? "ua" : "en";
	// 	// this.setState({ lang });
	// }
}