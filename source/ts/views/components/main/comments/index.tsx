import React, { Component } from "react";
import { CommentList }   from "./additional/comentList";
import { AddNewComment } from "./additional/addNewComment";

interface IProps {
    typePage?: string;
}

export class Comments extends Component<IProps, {}> {

    public render(): JSX.Element {
		return (this.props.typePage === "comentList") ? <CommentList /> : <AddNewComment />
	}

//	 public pageRender(): JSX.Element | null {
//	 	return (this.props.typePage === "comentList") ? <commentList /> : <addNewComment />
//	}
	
}