import * as React from "react";
import { toggle, Greeter } from "../../../controller/toggle";
import { Midle } from "../midle";

	interface IState {
		page: "playList" | "donation" | "comments";
	}

export class Main extends React.Component<{}, IState> {
	public state: IState = {
		page: "playList"
	};

    public click(newPage){
 		this.setState({page: newPage})
    }

	public render(): JSX.Element {
		return (
			<div>
				<header>
					<div onClick={e => this.click("playList")} key="playList" className="playList">playList</div>
					<div onClick={e => this.click("donation")} key="donation" className="donation">donation</div>
					<div onClick={e => this.click("comments")} key="comments" className="comments">comments</div>
				</header>
				<Midle page={this.state.page}/>
			</div>
		);
	}

	public componentDidMount(): void {
		//this.isMount = true;
	}

	public componentWillUnmount(): void {
		//this.isMount = false;
	}
}