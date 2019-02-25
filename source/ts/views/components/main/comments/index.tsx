import React, { Component } from "react";
import { commentList }   from "./additional/comentList";
import { addNewComment } from "./additional/addNewComment";

interface IProps {
    typePage?: string;
}

export class Comments extends Component<IProps, {}> {

    public render(): JSX.Element {
		return (this.props.typePage === "comentList") ? <commentList /> : <addNewComment />
	}

	// public pageRender(): JSX.Element | null {
	// 	return (this.props.typePage === "comentList") ? <commentList /> : <addNewComment />
	// }
	
}