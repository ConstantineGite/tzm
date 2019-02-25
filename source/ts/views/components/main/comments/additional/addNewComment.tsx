import React, { Component } from "react";

interface IProps {
	color: "purple" | "gold";
	text?: string;
	icon: string;
	date?: object;
}

export class addNewComment extends React.Component<{}, IProps> {

	public render(): JSX.Element {
		return <ul className="commentsList">добавить комментарий</ul>;

	}
	
}